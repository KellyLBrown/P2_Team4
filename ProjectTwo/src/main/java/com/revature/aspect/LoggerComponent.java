package com.revature.aspect;


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
	
	
	// Controller Layer

	@Before("execution(* com.revature.controller.*.*(..))")
	public void beforeAnyController(JoinPoint jp) {
		log.info(jp.getTarget().getClass() + jp.getSignature().getName() + " was called");
		
	}
	
	@AfterReturning("execution(* com.revature.controller.*.*(..))")
	public void afterSuccessController(JoinPoint jp) {
		log.info(jp.getTarget().getClass() + jp.getSignature().getName() + " Succeeded!");
		
	}
	
	@AfterThrowing("execution(* com.revature.controller.*.*(..))")
	public void afterFailController(JoinPoint jp) {
		log.warn(jp.getTarget().getClass() + jp.getSignature().getName() + " Failed!");
		
	}

	
	// Service Layer
	@Before("execution(* com.revature.service.*.*(..))")
	public void beforeAnyService(JoinPoint jp) {
		log.info(jp.getTarget().getClass() + jp.getSignature().getName() + " was called");
		
	}
	
	@AfterReturning("execution(* com.revature.service.*.*(..))")
	public void afterSuccessService(JoinPoint jp) {
		log.info(jp.getTarget().getClass() + jp.getSignature().getName() + " Succeeded!");
		
	}
	
	@AfterThrowing("execution(* com.revature.service.*.*(..))")
	public void afterFailService(JoinPoint jp) {
		log.warn(jp.getTarget().getClass() + jp.getSignature().getName() + " Failed!");
		
	}
	
	
	
	
	// Dao Layer
	@Before("execution(* com.revature.dao.*.*(..))")
	public void beforeAnyDao(JoinPoint jp) {
		log.info(jp.getTarget().getClass() + jp.getSignature().getName() + " was called");
		
	}
	
	@AfterReturning("execution(* com.revature.dao.*.*(..))")
	public void afterSuccessDao(JoinPoint jp) {
		log.info(jp.getTarget().getClass() + jp.getSignature().getName() + " Succeeded!");
		
	}
	
	@AfterThrowing("execution(* com.revature.dao.*.*(..))")
	public void afterFailDao(JoinPoint jp) {
		log.warn(jp.getTarget().getClass() + jp.getSignature().getName() + " Failed!");
		
	}
	
	
	
}
