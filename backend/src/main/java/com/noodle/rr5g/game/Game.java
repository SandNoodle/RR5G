package com.noodle.rr5g.game;

import javax.persistence.*;

@Entity
@Table
public class Game {
	@Id
	@SequenceGenerator(
			name = "game_sequence",
			sequenceName = "game_sequence",
			allocationSize = 1
	)
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "game_sequence"
	)
	private Long id;
	private String title;
	private Integer minutesToComplete;
	private String imageUrl;
	
	public Game() { }
	
	public Game(Long id,
				String title,
				Integer minutesToComplete,
				String imageUrl) {
		this.id = id;
		this.title = title;
		this.minutesToComplete = minutesToComplete;
		this.imageUrl = imageUrl;
	}
	
	public Game(String title,
				Integer minutesToComplete,
				String imageUrl) {
		this.title = title;
		this.minutesToComplete = minutesToComplete;
		this.imageUrl = imageUrl;
	}
	
	public Long getID() {
		return id;
	}
	
	public void setID(Long id) {
		this.id = id;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getImageUrl() {
		return imageUrl;
	}
	
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	public Integer getMinutesToComplete() {
		return minutesToComplete;
	}
	
	public void setMinutesToComplete(Integer minutesToComplete) {
		this.minutesToComplete = minutesToComplete;
	}
	
	@Override
	public String toString() {
		return "Game{" +
				"id=" + id +
				", title='" + title + '\'' +
				", minutesToComplete=" + minutesToComplete +
				", imageUrl='" + imageUrl + '\'' +
				'}';
	}
	
	
}
