package com.revature.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.sql.Timestamp;
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
import com.revature.dao.CalendarDao;
import com.revature.models.Calendar;
import com.revature.models.Ingredient;
import com.revature.models.Recipe;
@RunWith(SpringRunner.class)
@SpringBootTest (classes={ ProjectTwoApplication.class })
class CalendarServiceTest {
	@MockBean
	public CalendarDao cDao;
	@Autowired
	public CalendarService cServ;
	

	@BeforeEach
	void setUpBeforeClass() throws Exception {
		Ingredient i = new Ingredient("Yellow Onion", 22, 1);
		Ingredient i2 = new Ingredient("Coconut Milk", 120, 1);
		List<Ingredient> iList = new ArrayList<>();
		iList.add(i);
		iList.add(i2);
		Recipe rn = new Recipe("Coconut Curry", 1, 55, "Yum yum", iList);
		List<Recipe> rList = new ArrayList<>();
		rList.add(rn);
		Calendar c = new Calendar(0,0,new Timestamp(System.currentTimeMillis()),rList);
		
		when(cDao.save(ArgumentMatchers.any(Calendar.class))).then(invocation -> {
			Calendar r = invocation.getArgument(0);
			
			if (r.getCId() == 0) {
				return c;
			} else {
				return null;
			}
		});
		
		when(cDao.getCalendarByuId(ArgumentMatchers.anyInt())).then(invocation -> {
			int uId = invocation.getArgument(0);
			
			if (uId == 0) {
				return c;
			} else {
				return null;
			}
		});
	}

	@After
	static void tearDownAfterClass() throws Exception {
	}

	@Test
	void testCreateCalendar() {
		Ingredient i = new Ingredient("Yellow Onion", 22, 1);
		Ingredient i2 = new Ingredient("Coconut Milk", 120, 1);
		List<Ingredient> iList = new ArrayList<>();
		iList.add(i);
		iList.add(i2);
		Recipe rn = new Recipe("Coconut Curry", 1, 55, "Yum yum", iList);
		List<Recipe> rList = new ArrayList<>();
		rList.add(rn);
		Calendar c = new Calendar(0,0,new Timestamp(System.currentTimeMillis()),rList);
		
		Calendar cr = cServ.createCalendar(c);
		assertEquals(0, cr.getCId());
	}

	@Test
	void testGetCalendarByUser() {
		Calendar cr = cServ.getCalendarByUser(0);
		assertEquals(0, cr.getCId());
	}

}
