package com.revature.controller;

import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Ingredient;
import com.revature.models.Recipe;
import com.revature.service.IngredientService;
import com.revature.service.RecipeService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping(value="/recipe")
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
@CrossOrigin(origins="*")
public class RecipeController {
	
private RecipeService rServ;
private IngredientService iServ;
	
	@PostMapping(value="/log")
	public ResponseEntity<Recipe> logRecipe(@RequestBody Recipe r) {
		System.out.println(r.toString());
//		Ingredient i = new Ingredient("Yellow Onion", 22, 1);
//		Ingredient i2 = new Ingredient("Coconut Milk", 120, 1);
//		List<Ingredient> iList = new ArrayList<>();
//		iList.add(i);
//		iList.add(i2);
//		Recipe rn = new Recipe("Coconut Curry", 1, 55, "Yum yum", iList);
		//Recipe r = new Recipe(uMap.get("name"), Integer.parseInt(uMap.get("author")), Integer.parseInt(uMap.get("time")), uMap.get("description"), uMap.get("ingredients"));
		
		// CHECK IF THE INGREDIENT EXISTS AND IF IT DOES DO NOT CREATE A NEW INGREDIENT
		// JUST MAP THE PRE-EXISTING INGREDIENT TO THE RECIPE,
		// OR JUST CHANGE ID
		
		/*
		 * if ingredient name exists in database already
		 * 		change ingredient id to the one in the database
		 * else
		 * 		create a new ingredient and it auto generates an id
		 */
		for(Ingredient i : r.getIList()) {
			iServ.createIngredient(i);
		}
		rServ.createRecipe(r);
		return new ResponseEntity<>(r, HttpStatus.CREATED);
	}
	
	@PostMapping(value="/get")
	public ResponseEntity<Recipe> getRecipe(@RequestBody LinkedHashMap<String,String> uMap) {
		Recipe r = rServ.getRecipeByName(uMap.get("name"));
		return new ResponseEntity<>(r, HttpStatus.OK);
	}
	
	@PostMapping(value="/getrecipes")
	public ResponseEntity<List<Recipe>> getRecipes(@RequestBody LinkedHashMap<String,String> uMap) {
		List<Recipe> r = rServ.getRecipesByAuthor(Integer.parseInt(uMap.get("aId")));
		return new ResponseEntity<>(r, HttpStatus.OK);
	}

}
