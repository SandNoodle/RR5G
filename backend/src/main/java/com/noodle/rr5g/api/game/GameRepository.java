package com.noodle.rr5g.api.game;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
	
	Optional<Game> findGameByTitle(String title);
	Optional<Game> findGameById(Long id);

}
