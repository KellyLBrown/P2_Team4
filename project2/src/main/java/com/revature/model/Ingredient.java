package com.revature.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ingredient")
public class Ingredient {
	
//	@Id
//	@Column(name="i_id")
//	@GeneratedValue(strategy=GenerationType.AUTO)
//	private int i_id;
	
	// have to deal with the API and what we are actually going to store on the database
	
	@Column(name="i_name")
	private String name;
	
	@Column(name="i_amount")
	private int amount;
	
	@Column(name="i_kcal")
	private int kcal;

	public Ingredient() {
		super();
	}
	
	public Ingredient(String name, int amount, int kcal) {
		super();
		this.name = name;
		this.amount = amount;
		this.kcal = kcal;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public int getKcal() {
		return kcal;
	}

	public void setKcal(int kcal) {
		this.kcal = kcal;
	}

	@Override
	public String toString() {
		return "Ingredient [name=" + name + ", amount=" + amount + ", kcal=" + kcal + "]";
	}
	
	
	

}
