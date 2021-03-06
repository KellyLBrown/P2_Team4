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

import com.revature.models.Calendar;
import com.revature.models.Recipe;
import com.revature.service.CalendarService;
import com.revature.service.RecipeService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping(value="/calendar")
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
@CrossOrigin(origins="*")
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
	public ResponseEntity<List<Calendar>> getCalendar(@RequestBody LinkedHashMap<String,String> uMap) {
		List<Calendar> c = cServ.getCalendarByUser(Integer.parseInt(uMap.get("uId")));
		return new ResponseEntity<>(c, HttpStatus.OK);
	}
}
