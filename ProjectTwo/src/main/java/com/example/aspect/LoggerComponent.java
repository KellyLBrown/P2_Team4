package com.example.aspect;


import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

// This class is sad and AOP is BAD



@Component
@Aspect
public class LoggerComponent {
	
	// Log4j
	Logger log = LogManager.getLogger(LoggerComponent.class.getName());
	
	@Before("execution(* *(..))")
	public void beforeAnythingplz(JoinPoint jp) {
		System.out.println("whyyyyy");
		log.info(jp.getSignature().getName() + " was called");
		
	}
	
	@Before("execution(* com.revature.controller.UserController.login(..))")
	public void beforeAnything(JoinPoint jp) {
		System.out.println("whyyyyy");
		log.info(jp.getSignature().getName() + " was called");
		
	}
	
	
	// Controller Layer
	
	// Universal Controller???
	@Before("execution(* com.revature.controller.*(..))")
	public void beforeAny(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " was called");
		
	}
	
	@AfterReturning("execution(* com.revature.controller.*(..))")
	public void afterSuccess(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " Succeeded!");
		
	}
	
	@AfterThrowing("execution(* com.revature.controller.*(..))")
	public void afterFail(JoinPoint jp) {
		log.warn(jp.getSignature().getName() + " Failed!");
		
	}
	
	
	
	//
		// User Controller
			// Register
	@Before("execution(* com.controller.UserController.register(..))")
	public void beforeRegister(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " was called");
		
	}
	
	@AfterReturning("execution(* com.controller.UserController.register(..))")
	public void afterSuccessRegister(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " Succeeded!");
		
	}
	
	@AfterThrowing("execution(* com.controller.UserController.register(..))")
	public void afterFailRegister(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " Failed!");
		
	}
	
			// Login
	@Before("execution(* com.controller.UserController.login(..))")
	public void beforeLogin(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " was called");
		
	}
	
	@AfterReturning("execution(* com.controller.UserController.login(..))")
	public void afterSuccessLogin(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " Succeeded!");
		
	}
	
	@AfterThrowing("execution(* com.controller.UserController.login(..))")
	public void afterFailLogin(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " Failed!");
		
	}
	
			// Update
	@Before("execution(* com.controller.UserController.update(..))")
	public void beforeUpdate(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " was called");
		
	}
	
	@AfterReturning("execution(* com.controller.UserController.update(..))")
	public void afterSuccessUpdate(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " Succeeded!");
		
	}
	//////////////////////////// Not sure if needed
	@AfterThrowing("execution(* com.controller.UserController.update(..))")
	public void afterFailUpdate(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " Failed!");
		
	}
	
	
		// Recipe Controller
			// Log Recipe
	@Before("execution(* com.controller.RecipeController.logRecipe(..))")
	public void beforeRecipeLog(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " was called");
		
	}
	
	@AfterReturning("execution(* com.controller.RecipeController.logRecipe(..))")
	public void afterSuccessRecipeLog(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " Succeeded!");
		
	}
	////////////////////////// Needed?
	@AfterThrowing("execution(* com.controller.RecipeController.logRecipe(..))")
	public void afterFailRecipeLog(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " Failed!");
		
	}
		// Get Recipe
	@Before("execution(* com.controller.RecipeController.getRecipe(..))")
	public void beforeRecipeGet(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " was called");
		
	}
	
	@AfterReturning("execution(* com.controller.RecipeController.getRecipe(..))")
	public void afterSuccessRecipeGet(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " Succeeded!");
		
	}
	////////////////////////// Needed?
	@AfterThrowing("execution(* com.controller.RecipeController.getRecipe(..))")
	public void afterFailRecipeGet(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " Failed!");
		
	}
	
	
		// Ingredient Controller
			// Log Ingredient
	@Before("execution(* com.controller.IngredientController.logIngredient(..))")
	public void beforeIngredientLog(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " was called");
		
	}
	
	@AfterReturning("execution(* com.controller.IngredientController.logIngredient(..))")
	public void afterSuccessIngredientLog(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " Succeeded!");
		
	}
	////////////////////////// Needed?
	@AfterThrowing("execution(* com.controller.IngredientController.logIngredient(..))")
	public void afterFailIngredientLog(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " Failed!");
		
	}
	
			// Get Ingredient
	@Before("execution(* com.controller.IngredientController.getIngredient(..))")
	public void beforeIngredientGet(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " was called");
		
	}
	
	@AfterReturning("execution(* com.controller.IngredientController.getIngredient(..))")
	public void afterSuccessIngredientGet(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " Succeeded!");
		
	}
	////////////////////////// Needed?
	@AfterThrowing("execution(* com.controller.IngredientController.getIngredient(..))")
	public void afterFailIngredientGet(JoinPoint jp) {
		log.info(jp.getSignature().getName() + " Failed!");
		
	}
	
	
		// Calendar Controller
	
	
	
	
	
	// Service Layer
		// User Service
	
	
		// Recipe Service
	
	
		// Ingredient Service
	
	
		// Calendar Service
	
	
	
	
	// Dao Layer
		// User Dao
	
	
		// Recipe Dao
	
	
		// Ingredient Dao
	
	
		// Calendar Dao
	
	
	
}
