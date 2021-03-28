package com.revature.models;


import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

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
@Table(name="Ingredient")
public class Ingredient {
	
	@Id
	//@Column(name="ingredient_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int iId;
	
	@Column(name="name", nullable=false)
	private String name;
	
	@Column(name="calories")
	private int calories;
	
	// tbd
	@Column(name="amount")
	private int amount;
	
	@ManyToMany(mappedBy="iList")
	//@JoinTable
	@JsonIgnore
	private List<Recipe> rList;

	public Ingredient(String name, int calories, int amount) {
		super();
		this.name = name;
		this.calories = calories;
		this.amount = amount;
	}
	
	

}
