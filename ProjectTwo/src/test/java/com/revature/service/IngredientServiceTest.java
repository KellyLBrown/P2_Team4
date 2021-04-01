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
import com.revature.dao.IngredientDao;
import com.revature.models.Ingredient;


@RunWith(SpringRunner.class)
@SpringBootTest (classes={ ProjectTwoApplication.class })
class IngredientServiceTest {
	
	@MockBean
	public IngredientDao iDao;
	
	@Autowired
	public IngredientService iServ;

	@BeforeEach
	void setUpBeforeClass() throws Exception {
		
		Ingredient i = new Ingredient("Yellow Onion", 22, 1);
		
		when(iDao.save(ArgumentMatchers.any(Ingredient.class))).then(invocation -> {
			Ingredient in = invocation.getArgument(0);
			
			if (in.getName().equals("Yellow Onion")) {
				return i;
			} else {
				return null;
			}
		});
		
		when(iDao.getIngredientByName(anyString())).then(invocation -> {
			String name = invocation.getArgument(0);
			
			if (name.equals("Yellow Onion")) {
				return i;
			} else {
				return null;
			}
		});
		
		when(iDao.findAll()).then(invocation -> {
			List<Ingredient> iList = new ArrayList<>();
			iList.add(i);
			return iList;
			
		});
	}

	@After
	static void tearDownAfterClass() throws Exception {
	}

	@Test
	void testCreateIngredient() {
		Ingredient i = new Ingredient("Yellow Onion", 22, 1);
		Ingredient in = iServ.createIngredient(i);
		assertEquals("Yellow Onion", in.getName());
	}

	@Test
	void testGetAllIngredients() {
		List<Ingredient> iList = iServ.getAllIngredients();
		assertEquals(1,iList.size());
	}

	@Test
	void testGetIngredientByName() {
		String name = "Yellow Onion";
		Ingredient i = iServ.getIngredientByName(name);
		assertEquals(name, i.getName());
	}

}
