package com.noodle.rr5g.game;

import com.noodle.rr5g.exception.GameInDatabaseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class GameService {
	
	private final GameRepository gameRepository;
	
	private final int MAX_RANDOM_GAMES = 25;
	
	@Autowired
	public GameService(GameRepository gameRepository) {
		this.gameRepository = gameRepository;
	}
	
	public List<Game> getGames() {
		return gameRepository.findAll();
	}
	
	public void addNewGame(Game game) {
		Optional<Game> gameByTitleOptional = gameRepository.findGameByTitle(game.getTitle());
		if (gameByTitleOptional.isPresent()) {
			throw new GameInDatabaseException(game.getTitle() + " already exists in database!");
		}
		
		gameRepository.save(game);
	}
	
	public void deleteGameByID(Long gameID) {
		boolean gameExists = gameRepository.existsById(gameID);
		if (!gameExists) {
			throw new GameInDatabaseException("Cannot DELETE game with ID=" + gameID + ". Game doesn't exist!");
		}
		gameRepository.deleteById(gameID);
	}
	
	@Transactional
	public void updateGame(Long gameID, String title, Integer minutesToComplete, String imageUrl) {
		Game game = gameRepository.findById(gameID).orElseThrow(
				() -> new GameInDatabaseException("Cannot UPDATE game with ID=" + gameID + ". Game doesn't exist!")
		);
		
		boolean isTitleNull = title == null;
		boolean isTitleLengthGreaterThanZero = title.length() > 0;
		boolean isNewTitleSame = Objects.equals(game.getTitle(), title);
		boolean isTitleTaken = gameRepository.findGameByTitle(title).isPresent();
		if (!isTitleNull
				&& isTitleLengthGreaterThanZero
				&& !isNewTitleSame) {
			if (isTitleTaken) {
				throw new GameInDatabaseException(title + " exists and is already taken!");
			}
			game.setTitle(title);
		}
		
		boolean isMinutesToCompleteNull = minutesToComplete == null;
		boolean isMinutesToCompleteGreaterThanZero = minutesToComplete > 0;
		boolean isNewMinutesToCompleteSame = Objects.equals(game.getMinutesToComplete(), minutesToComplete);
		if (!isMinutesToCompleteNull
				&& isMinutesToCompleteGreaterThanZero
				&& !isNewMinutesToCompleteSame) {
			game.setMinutesToComplete(minutesToComplete);
		}
		
		boolean isImageUrlNull = imageUrl == null;
		boolean isImageUrlLengthGreaterThanZero = imageUrl.length() > 0;
		boolean isNewImageUrlSame = Objects.equals(game.getImageUrl(), imageUrl);
		if (!isImageUrlNull
				&& isImageUrlLengthGreaterThanZero
				&& !isNewImageUrlSame) {
			game.setImageUrl(imageUrl);
		}
		
	}
	
	public List<Game> getRandomGames(int gameCount) {
		if (gameCount > MAX_RANDOM_GAMES) {
			throw new GameInDatabaseException("gameCount over limit of " + MAX_RANDOM_GAMES
					+ ". Tried to generate " + gameCount + " random games!");
		}
		
		// FAILSAFE: If repository has fewer games than gameCount - return all
		if(gameRepository.count() <= gameCount) {
			return gameRepository.findAll();
		}
		
		List<Game> foundGamesList = new ArrayList<>(gameCount);
		Game tempGame;
		
		while(foundGamesList.size() < gameCount) {
			long randomId = ThreadLocalRandom.current().nextLong(gameRepository.count()) + 1;
			boolean doesGameExist = gameRepository.findGameById(randomId).isPresent();
			if (doesGameExist) {
				tempGame = gameRepository.findGameById(randomId).get();

				boolean isGameInList = foundGamesList.contains(tempGame);
				if(!isGameInList) {
					foundGamesList.add(tempGame);
				}
			}
		}
		System.out.println(foundGamesList);
		return foundGamesList;
	}
}
