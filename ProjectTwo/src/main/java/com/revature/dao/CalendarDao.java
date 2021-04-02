package com.revature.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.Calendar;

public interface CalendarDao extends JpaRepository<Calendar, Integer> {
	
	//public Calendar createCalendar(Calendar c);
	
	public List<Calendar> getCalendarByuId(int id);
}
