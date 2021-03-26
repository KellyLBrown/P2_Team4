package com.revature.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.IngredientDao;
import com.revature.models.Ingredient;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class IngredientService {
	
	private IngredientDao idao;
	
	public Ingredient createIngredient(Ingredient i) {
		idao.save(i);
		return i;
	}
	
	public List<Ingredient> getAllIngredients() {
		List<Ingredient> iList = idao.findAll();
		return iList;
	}

}
