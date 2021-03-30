package com.revature.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="recipe")
public class Recipe {
	@Id
	@Column(name="rId")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int rId;
	

	@Column(name="r_name")
	private String name;
	
	// one to many
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="img_id")
	private String imgId;
	
	// many to many
	@ManyToMany(cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	private List<Ingredient> iList;
	
	public Recipe() {
		super();
	}
	
	public Recipe(String name, String imgId, List<Ingredient> iList) {
		super();
		this.name = name;
		this.imgId = imgId;
		this.iList = iList;
	}

	public int getrId() {
		return rId;
	}

	public void setrId(int rId) {
		this.rId = rId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImgId() {
		return imgId;
	}

	public void setImgId(String imgId) {
		this.imgId = imgId;
	}

	public List<Ingredient> getiList() {
		return iList;
	}

	public void setiList(List<Ingredient> iList) {
		this.iList = iList;
	}

	@Override
	public String toString() {
		return "Recipe [rId=" + rId + ", name=" + name + ", imgId=" + imgId + ", iList=" + iList + "]";
	}
	
	
	
	
	
	
	

}
