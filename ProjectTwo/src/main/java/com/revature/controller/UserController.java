package com.revature.controller;

import java.util.LinkedHashMap;
import java.util.Properties;

import javax.mail.*;
import javax.mail.internet.*;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.rsocket.server.RSocketServer.Transport;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.exceptions.InvalidCredentialsException;
import com.revature.exceptions.UserAlreadyExistsException;
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
	public ResponseEntity<String> register(@RequestBody LinkedHashMap<String,String> uMap) throws UserAlreadyExistsException {
		User u = new User(uMap.get("username"), uMap.get("password"), uMap.get("firstname"), uMap.get("lastname"), uMap.get("email"));
		try {
		uServ.register(u);
		this.sendEmail(u);
		} catch(Exception e) {
			e.printStackTrace();
			throw new UserAlreadyExistsException();
		}
		return new ResponseEntity<>("User was registered", HttpStatus.CREATED);
	}
	
	private void sendEmail(User u) {
		// Recipient's email ID needs to be mentioned.
	      String to = u.getEmail();

	      // Sender's email ID needs to be mentioned
	      String from = "web@gmail.com";

	      // Assuming you are sending email from localhost
	      String host = "localhost";

	      // Get system properties
	      Properties properties = System.getProperties();

	      // Setup mail server
	      properties.setProperty("mail.smtp.host", host);

	      // Get the default Session object.
	      Session session = Session.getDefaultInstance(properties);

	      try {
	         // Create a default MimeMessage object.
	         MimeMessage message = new MimeMessage(session);

	         // Set From: header field of the header.
	         message.setFrom(new InternetAddress(from));

	         // Set To: header field of the header.
	         message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

	         // Set Subject: header field
	         message.setSubject("Hello New User!");

	         // Now set the actual message
	         message.setText("This is actual message");

	         // Send message
	         Transport.send(message);
	         System.out.println("Sent message successfully....");
	      } catch (MessagingException mex) {
	         mex.printStackTrace();
	      }
		
	}
	
	@PostMapping(value="/login")
	public ResponseEntity<User> login(@RequestBody LinkedHashMap<String,String> uMap) throws InvalidCredentialsException {
		Logger log = LogManager.getLogger(UserController.class.getName());
		log.info("Hello from login");
		try {
		User u = uServ.login(uMap.get("username"), uMap.get("password"));
		return new ResponseEntity<>(u, HttpStatus.ACCEPTED);
		} catch(Exception e) {
			e.printStackTrace();
			throw new InvalidCredentialsException();
		}
		
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
