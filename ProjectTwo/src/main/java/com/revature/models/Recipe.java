package com.revature.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

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
@Table(name="Recipe")
public class Recipe {
	
	@Id
	//@Column(name="recipe_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int rId;
	
	@Column(name="name", nullable=false)
	private String name;
	
	@Column(name="author")
	private int author;
	
	// in minutes
	@Column(name="time")
	private int time;
	
	@Column(name="description")
	private String description;
	
	@ManyToMany
	 @JoinTable(
	            name = "recipe_ingredient",
	            joinColumns = @JoinColumn(name = "recipe_id"),
	            inverseJoinColumns = @JoinColumn(name = "ingredient_id")
	    )
	private List<Ingredient> iList;
	
	@ManyToMany(mappedBy="scheduledRecipes")
	//@JoinTable
	private List<Calen> scheduledDates;

	public Recipe(String name,int a_id, int time, String description, List<Ingredient> iList) {
		super();
		this.name = name;
		this.author = a_id;
		this.time = time;
		this.description = description;
		this.iList = iList;
	}
	
	

}
