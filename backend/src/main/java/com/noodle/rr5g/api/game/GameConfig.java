package com.noodle.rr5g.api.game;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class GameConfig {
	
	@Bean
	CommandLineRunner gameConfigRunner(GameRepository gameRepository) {
		return args -> {
			Game hollowKnight = new Game(
					"Hollow Knight",
					1560,
					"https://static-cdn.jtvnw.net/ttv-boxart/Hollow%20Knight-285x380.jpg");
			Game maxPayneOne = new Game(
					"Max Payne",
					480,
					"https://static-cdn.jtvnw.net/ttv-boxart/Max%20Payne-285x380.jpg");
			
			Game darkSoulsOne = new Game(
					"Dark Souls I",
					2580,
					"https://static-cdn.jtvnw.net/ttv-boxart/Dark%20Souls-285x380.jpg");
			
			Game portalTwo = new Game(
					"Portal II",
					510,
					"https://static-cdn.jtvnw.net/ttv-boxart/Portal%202-285x380.jpg"
			);
			
			Game katanaZero = new Game(
						"Katana Zero",
					270,
						"https://static-cdn.jtvnw.net/ttv-boxart/Katana%20ZERO-285x380.jpg"
			);
			
			Game sallyFace = new Game(
					"Sally Face",
					510,
					"https://static-cdn.jtvnw.net/ttv-boxart/Sally%20Face-285x380.jpg"
			);
			
			gameRepository.saveAll(
					List.of(hollowKnight, maxPayneOne, darkSoulsOne, portalTwo, katanaZero, sallyFace)
			);
		};
	}
	
}
