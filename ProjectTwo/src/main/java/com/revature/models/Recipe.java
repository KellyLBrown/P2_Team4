package com.revature.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
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
@Table(name="Recipe")
public class Recipe {
	
	@Id
	//@Column(name="recipe_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int rId;
	
	@Column(name="name", nullable=false)
	@NotNull(message="It needs a name!")
	private String name;
	
	@Column(name="author")
	private int author;
	
	// in minutes
	@Column(name="time")
	//@NotNull(message="How long does this take to make?")
	private int time;
	
	@Column(name="description")
	//@NotNull(message="How do I make this?")
	private String description;
	
	@ManyToMany
	 @JoinTable(
	            name = "recipe_ingredient",
	            joinColumns = @JoinColumn(name = "recipe_id"),
	            inverseJoinColumns = @JoinColumn(name = "ingredient_id")
	    )
	private List<Ingredient> iList;
	
	@ManyToMany(mappedBy="scheduledRecipes")
	@JsonIgnore
	private List<Calendar> scheduledDates;

	public Recipe(String name,int a_id, int time, String description, List<Ingredient> iList) {
		super();
		this.name = name;
		this.author = a_id;
		this.time = time;
		this.description = description;
		this.iList = iList;
	}
	
	

}
