package com.revature.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.revature.ProjectTwoApplication;
import com.revature.dao.RecipeDao;
import com.revature.models.Ingredient;
import com.revature.models.Recipe;
@RunWith(SpringRunner.class)
@SpringBootTest (classes={ ProjectTwoApplication.class })

class RecipeServiceTest {
	
	@MockBean
	public RecipeDao rdao;
	
	@Autowired
	public RecipeService rServ;

	@BeforeEach
	void setUpBeforeClass() throws Exception {
		Ingredient i = new Ingredient("Yellow Onion", 22, 1);
		Ingredient i2 = new Ingredient("Coconut Milk", 120, 1);
		List<Ingredient> iList = new ArrayList<>();
		iList.add(i);
		iList.add(i2);
		Recipe rn = new Recipe("Coconut Curry", 1, 55, "Yum yum", iList);
		rn.setAuthor(0);
		//Recipe r = new Recipe(uMap.get("name"), Integer.parseInt(uMap.get("author")), Integer.parseInt(uMap.get("time")), uMap.get("description"), uMap.get("ingredients"));
		when(rdao.save(ArgumentMatchers.any(Recipe.class))).then(invocation -> {
			Recipe r = invocation.getArgument(0);
			
			if (r.getName().equals("Coconut Curry")) {
				return rn;
			} else {
				return null;
			}
		});
		when(rdao.getRecipeByName(anyString())).then(invocation -> {
			String r = invocation.getArgument(0);
			
			if (r.equals("Coconut Curry")) {
				return rn;
			} else {
				return null;
			}
		});
		when(rdao.getRecipesByauthor(ArgumentMatchers.anyInt())).then(invocation -> {
			int id = invocation.getArgument(0);
			
			if (id == 0) {
				List<Recipe> rList = new ArrayList<>();
				rList.add(rn);
				return rList;
			} else {
				return null;
			}
		});
		when(rdao.findAll()).then(invocation -> {	
				List<Recipe> rList = new ArrayList<>();
				rList.add(rn);
				return rList;
		});
	}

	@After
	static void tearDownAfterClass() throws Exception {
	}

	@Test
	void testCreateRecipe() {
		Ingredient i = new Ingredient("Yellow Onion", 22, 1);
		Ingredient i2 = new Ingredient("Coconut Milk", 120, 1);
		List<Ingredient> iList = new ArrayList<>();
		iList.add(i);
		iList.add(i2);
		Recipe rn = new Recipe("Coconut Curry", 1, 55, "Yum yum", iList);
		Recipe r = rServ.createRecipe(rn);
		assertEquals("Coconut Curry", r.getName());
	}

	@Test
	void testGetRecipesByAuthor() {
		List<Recipe> rList = rServ.getRecipesByAuthor(0);
		assertEquals(1, rList.size());
	}

	@Test
	void testGetAllRecipes() {
		List<Recipe> rList = rServ.getAllRecipes();
		assertEquals(1, rList.size());
	}

	@Test
	void testGetRecipeByName() {
		Recipe r = rServ.getRecipeByName("Coconut Curry");
		assertEquals("Coconut Curry", r.getName());
	}
}
