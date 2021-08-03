package com.noodle.rr5g.security.user;

import com.noodle.rr5g.security.role.Role;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/v1/user")
public class UserController {
	private final UserService userService;
	
	@GetMapping("all/")
	public ResponseEntity<List<User>> getUsers() {
		return ResponseEntity.ok(userService.getUsers());
	}
	
	@PostMapping("save/")
	public ResponseEntity<User> saveUser(@RequestBody User user) {
		URI createUserURI = URI.create(
				ServletUriComponentsBuilder
						.fromCurrentContextPath()
						.path("/api/v1/user/save")
						.toUriString());
		return ResponseEntity.created(createUserURI).body(userService.saveUser(user));
	}
	
	@PostMapping("role/save/")
	public ResponseEntity<Role> saveRole(@RequestBody Role role) {
		URI createRoleURI = URI.create(
				ServletUriComponentsBuilder
						.fromCurrentContextPath()
						.path("/api/v1/user/role/save")
						.toUriString());
		return ResponseEntity.created(createRoleURI).body(userService.saveRole(role));
	}
	
	@PostMapping("role/assign/")
	public ResponseEntity<Void> addRoleToUser(@RequestBody RoleToUserForm assignForm) {
		userService.addRoleToUser(assignForm.getUsername(), assignForm.getRoleName());
		return ResponseEntity.ok().build();
	}
}

@Data
class RoleToUserForm {
	private String username;
	private String roleName;
}
