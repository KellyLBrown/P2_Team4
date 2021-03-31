package com.revature.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InvalidCredentialsException extends Exception {
	
	public InvalidCredentialsException() {
		super("Your credentials are invalid!");
	}

}
