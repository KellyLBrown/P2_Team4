package com.revature.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.Image;


public interface ImageDao extends JpaRepository<Image, Integer> {
	
	public Image getImageById(int id);
	
	public Image getImageByName(String name);
	
	

}
