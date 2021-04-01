package com.revature.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.CalendarDao;
import com.revature.models.Calendar;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class CalendarService{
	
	private CalendarDao cdao;
	
	public Calendar createCalendar(Calendar c) {
		cdao.save(c);
		return c;
	}
	
	public Calendar getCalendarByUser(int id) {
		return cdao.getCalendarByuId(id);
	}
}
