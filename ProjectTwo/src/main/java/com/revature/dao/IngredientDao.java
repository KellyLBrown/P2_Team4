package com.revature.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.Ingredient;

public interface IngredientDao extends JpaRepository<Ingredient, Integer> {

}
