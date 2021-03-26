package com.revature.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.UserDao;
import com.revature.models.User;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class UserService {
	
	private UserDao udao;
	
	// frontend guarantees valid info
	public User login(String username, String password) {
			User u = udao.getUserByUsernameAndPassword(username, password);
			if(u == null) {
				return null;
			}
			return u;
		
	}
	
	// protected on the front end
	public void register(User u) {
		udao.save(u);
	}
	
	// updates and returns new updated user
	// protected by frontend forms
	public User update(User u) {
		User un = udao.save(u);
		return un;
	}

}
