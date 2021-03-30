package com.revature.controller;

import java.util.LinkedHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.User;
import com.revature.service.UserService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping(value="/user")
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
@CrossOrigin(origins="*")
public class UserController {
	
	private UserService uServ;
	
	@PostMapping(value="/register")
	public ResponseEntity<String> register(@RequestBody LinkedHashMap<String,String> uMap) {
		User u = new User(uMap.get("username"), uMap.get("password"), uMap.get("firstname"), uMap.get("lastname"), uMap.get("email"));
		uServ.register(u);
		return new ResponseEntity<>("User was registered", HttpStatus.CREATED);
	}
	
	@PostMapping(value="/login")
	public ResponseEntity<User> login(@RequestBody LinkedHashMap<String,String> uMap) {
		User u = uServ.login(uMap.get("username"), uMap.get("password"));
		return new ResponseEntity<>(u, HttpStatus.ACCEPTED);
	}
	
	// only update password, email
	@PostMapping(value="/update")
	public ResponseEntity<User> update(@RequestBody LinkedHashMap<String,String> uMap) {
		User u = uServ.getUserById(Integer.parseInt(uMap.get("id")));
		u.setEmail(uMap.get("email"));
		u.setPassword(uMap.get("password"));
		User un = uServ.update(u);
		return new ResponseEntity<>(un, HttpStatus.OK);
	}
	

}
