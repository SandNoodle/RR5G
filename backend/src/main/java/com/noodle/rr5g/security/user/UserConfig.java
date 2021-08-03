package com.noodle.rr5g.security.user;

import com.noodle.rr5g.security.role.Role;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;

@Configuration
public class UserConfig {
	
	/*
		TODO(SandNoodles):
		 Currently hardcoded.
		 Move to config file.
		 Also create utility class that will load and decrypt default root credentials.
	 */
	@Bean
	CommandLineRunner userConfigRunner(UserService userService) {
		return args -> {
			
			// Add roles
			userService.saveRole(new Role(null, "ROLE_ADMIN"));
			userService.saveRole(new Role(null, "ROLE_USER"));
			
			// Add default user
			userService.saveUser(new User(null, "Administrator", "admin", "admin", new ArrayList<>()));
			
			// Add roles to users
			userService.addRoleToUser("admin", "ROLE_ADMIN");
			userService.addRoleToUser("admin", "ROLE_USER");
		};
	}
	
}
