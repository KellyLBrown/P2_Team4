package com.revature.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.UserDao;
import com.revature.exceptions.InvalidCredentialsException;
import com.revature.exceptions.UserAlreadyExistsException;
import com.revature.models.User;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class UserService {
	
	private UserDao udao;
	
	// frontend guarantees valid info
	public User login(String username, String password) throws InvalidCredentialsException {
			User u = udao.getUserByUsernameAndPassword(username, password);
			if(u == null) {
				throw new InvalidCredentialsException();
			}
			return u;
		
	}
	
	// protected on the front end
	public User register(User u) throws UserAlreadyExistsException {
		if(udao.existsByUsername(u.getUsername())) {
			throw new UserAlreadyExistsException();
		}
		udao.save(u);
		return u;
		//udao.exists(u);
	}
	
	// updates and returns new updated user
	// protected by frontend forms
	public User update(User u) {
		User un = udao.save(u);
		return un;
	}
	
	public User getUserById(int id) {
		return udao.getUserById(id);
		
	}

}
