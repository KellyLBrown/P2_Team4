package com.revature.controller;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.LinkedHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.Calendar;
import com.revature.models.Ingredient;
import com.revature.models.Recipe;
import com.revature.service.CalendarService;
import com.revature.service.RecipeService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping(value="/calendar")
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class CalendarController {

	private RecipeService rServ;
	private CalendarService cServ;
	
	
	@PostMapping(value="/setCalendar")
	public ResponseEntity<Calendar> createCalendar(@RequestBody Calendar c) {
		//Calendar ctest = new Calendar(1, new Timestamp(System.currentTimeMillis()), rServ.getAllRecipes());
		for(Recipe r : c.getScheduledRecipes()) {
			rServ.createRecipe(r);
		}
		cServ.createCalendar(c);
		return new ResponseEntity<>(c, HttpStatus.CREATED);
	}
	
	@PostMapping(value="/getCalendar")
	public ResponseEntity<Calendar> getIngredient(@RequestBody LinkedHashMap<String,String> uMap) {
		Calendar c = cServ.getCalendarByUser(Integer.parseInt(uMap.get("uId")));
		return new ResponseEntity<>(c, HttpStatus.FOUND);
	}
}
