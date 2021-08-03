package com.noodle.rr5g.security.user;

import com.noodle.rr5g.security.role.Role;

import java.util.List;

public interface UserService {
	User saveUser(User user);
	User getUser(String username);
	List<User> getUsers();
	
	Role saveRole(Role role);
	void addRoleToUser(String username, String roleName);
}
