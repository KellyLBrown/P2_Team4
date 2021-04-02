package com.revature.service;

import static org.junit.Assert.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

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
import com.revature.dao.UserDao;
import com.revature.exceptions.InvalidCredentialsException;
import com.revature.exceptions.UserAlreadyExistsException;
import com.revature.models.User;
@RunWith(SpringRunner.class)
@SpringBootTest (classes={ ProjectTwoApplication.class })
class UserServiceTest {
	@MockBean
	public UserDao udao;
	
	@Autowired
	public UserService userSrv;
	
	

	@BeforeEach
	public void setUpBeforeClass() throws Exception {
		User user = new User();
		user.setUsername("Test");
		user.setPassword("Pass");
		user.setFirstName("First");
		user.setLastName("Last");
		user.setEmail("test@gmail.com");
		user.setId(1);
		when(udao.getUserByUsernameAndPassword(anyString(), anyString())).then(invocation -> {
			String uname = invocation.getArgument(0);
			String pw = invocation.getArgument(1);
			if (uname.equals("Test") && pw.equals("Pass")) {
				return user;
			} else {
				return null;
			}
		});
		
		when(udao.existsByUsername(anyString())).then(invocation -> {
			String uname = invocation.getArgument(0);
			if (uname.equals("Test")) {
				return true;
			} else {
				return false;
			}
		});
		
		when(udao.save(ArgumentMatchers.any(User.class))).then(invocation -> {
			User user2 = invocation.getArgument(0);
			if (user2.getUsername().equals("Test")) {
				return user2;
			} else {
				return null;
			}
		});
		
		when(udao.getUserById(ArgumentMatchers.anyInt())).then(invocation -> {
			int id = invocation.getArgument(0);
			if (id == 1) {
				return user;
			} else {
				return null;
			}
		});
	}

	@After
	static void tearDownAfterClass() throws Exception {
	}

	
	
	
	
	@Test
	void testLogin() throws InvalidCredentialsException {
		String username = "Test";
		String pass = "Pass";
		
		User test = userSrv.login(username, pass);
		assertNotNull(test);
		verify(udao, times(1)).getUserByUsernameAndPassword(username,pass);
	}
	
	@Test
	void testBadLogin() throws InvalidCredentialsException {
		Exception exception = assertThrows(InvalidCredentialsException.class, () -> {
			String username = "Tester";
			String pass = "Pass";
			User test = userSrv.login(username, pass);
	    });
		
		String expectedMessage = "Your credentials are invalid!";
	    String actualMessage = exception.getMessage();

	    assertTrue(actualMessage.contains(expectedMessage));
		
	}

	@Test
	void testBadRegister() {
		Exception exception = assertThrows(UserAlreadyExistsException.class, () -> {
			User user = new User();
			user.setUsername("Test");
			user.setPassword("Pass");
			user.setFirstName("First");
			user.setLastName("Last");
			user.setEmail("test@gmail.com");
			User test = userSrv.register(user);
	    });
		
		String expectedMessage = "Username is already taken";
	    String actualMessage = exception.getMessage();

	    assertTrue(actualMessage.contains(expectedMessage));
		
	}
	
	@Test
	void testRegister() throws UserAlreadyExistsException {
		User user = new User();
		user.setUsername("Tester");
		user.setPassword("Pass");
		user.setFirstName("First");
		user.setLastName("Last");
		user.setEmail("test@gmail.com");
		User test = userSrv.register(user);
		
		verify(udao, times(1)).existsByUsername(user.getUsername());
		assertEquals("Tester",test.getUsername());
	}

	@Test
	void testUpdate() {
		User user = new User();
		user.setUsername("Test");
		user.setPassword("Passs");
		user.setFirstName("First");
		user.setLastName("Last");
		user.setEmail("test@gmail.com");
		User user2 = udao.getUserByUsernameAndPassword(user.getUsername(),user.getPassword());
		user2 = userSrv.update(user);
		assertEquals("Passs", user2.getPassword());
	}

	@Test
	void testGetUserById() {
		User user = userSrv.getUserById(1);
		assertEquals("Test", user.getUsername());
	}

}
