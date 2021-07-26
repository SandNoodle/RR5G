package com.noodle.rr5g.exception;

public class GameInDatabaseException extends RuntimeException{
	
	public GameInDatabaseException(String errorMessage) {
		super(errorMessage);
	}
	
	public GameInDatabaseException(String errorMessage, Throwable error) {
		super(errorMessage, error);
	}
	
}
