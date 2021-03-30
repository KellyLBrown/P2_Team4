package com.revature.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.User;

public interface UserDao extends JpaRepository<User, Integer> {
	
	public User getUserByUsernameAndPassword(String username, String password);
	
	public User getUserById(int id);

}
