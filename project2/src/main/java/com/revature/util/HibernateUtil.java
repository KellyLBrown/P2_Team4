package com.revature.util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {
	
	private static Session sesh;
	
	private static SessionFactory sf = new Configuration().configure("hibernate.cfg.xml").buildSessionFactory();

	public static Session getSession() {
		if(sesh == null) {
			sesh = sf.openSession();
		}
		
		return sesh;
	}
	
	public static void closeSession() {
		sesh.close();
		sf.close();
	}
	
}