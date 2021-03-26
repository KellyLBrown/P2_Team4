package com.revature.controller;

import java.util.LinkedHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Ingredient;
import com.revature.service.IngredientService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping(value="/ingredient")
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class IngredientController {
	
	private IngredientService iServ;
	
	@PostMapping(value="/log")
	public ResponseEntity<String> logIngredient(@RequestBody LinkedHashMap<String,String> uMap) {
		Ingredient i = new Ingredient(uMap.get("name"), Integer.parseInt(uMap.get("calories")), Integer.parseInt(uMap.get("amount")));
		iServ.createIngredient(i);
		return new ResponseEntity<>("Ingredient was Logged", HttpStatus.CREATED);
	}

}
