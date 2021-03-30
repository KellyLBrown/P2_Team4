package com.revature.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.Recipe;

public interface RecipeDao extends JpaRepository<Recipe, Integer> {
	
	public List<Recipe> getRecipesByauthor(int id);
	
	public Recipe getRecipeByName(String name);

}
