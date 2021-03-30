package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.RecipeDao;
import com.revature.models.Recipe;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class RecipeService {
	
	private RecipeDao rdao;
	
	// front end creation
	public Recipe createRecipe(Recipe r) {
		Recipe rn = rdao.save(r);
		return rn;
	}
	
	public List<Recipe> getRecipesByAuthor(int id) {
		List<Recipe> rlist = rdao.getRecipesByauthor(id);
		return rlist;
	}
	
	public List<Recipe> getAllRecipes() {
		List<Recipe> rlist = rdao.findAll();
		return rlist;
	}
	
	public Recipe getRecipeByName(String name) {
		return rdao.getRecipeByName(name);
	}
	
	

}
