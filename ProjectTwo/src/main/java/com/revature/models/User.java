package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Table(name="Users")
public class User {
	
	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name="username", unique=true, nullable=false)
	@NotNull(message="You need a username")
	private String username;
	
	@Column(name="password", nullable=false)
	@JsonIgnore
	@NotNull(message="You need a password!")
	private String password;
	
	@Column(name="first_name")
	@NotNull(message="What is your name")
	private String firstName;
	
	@Column(name="last_name")
	@NotNull(message="What is your last name")
	private String lastName;
	
	@Column(name="email", nullable=false)
	@NotNull(message="I need your email!")
	private String email;

	public User(String username, String password, String firstName, String lastName, String email) {
		super();
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
	
	

}
