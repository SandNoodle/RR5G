package com.noodle.rr5g.api.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "api/v1/game")
public class GameController {
	private final GameService gameService;
	
	@Autowired
	public GameController(GameService gameService) {
		this.gameService = gameService;
	}
	
	@GetMapping(path = "all/")
	public List<Game> getGames() {
		return gameService.getGames();
	}
	
	@PostMapping(path = "new/")
	public void registerNewGame(@RequestBody Game game) {
		gameService.addNewGame(game);
	}
	
	@DeleteMapping(path = "delete/{gameID}")
	public void deleteGameByID(@PathVariable("gameID") Long gameID) {
		gameService.deleteGameByID(gameID);
	}
	
	@PutMapping(path = "update/{gameID}")
	public void updateGame(@PathVariable("gameID") Long gameID,
						   @RequestParam(required = false) String title,
						   @RequestParam(required = false) Integer minutesToComplete,
						   @RequestParam(required = false) String imageUrl) {
		gameService.updateGame(gameID, title, minutesToComplete, imageUrl);
	}
	
	@GetMapping(path = "/random/{gameCount}")
	public List<Game> getRandomGames(@PathVariable("gameCount") int gameCount) {
		return gameService.getRandomGames(gameCount);
	}
}
