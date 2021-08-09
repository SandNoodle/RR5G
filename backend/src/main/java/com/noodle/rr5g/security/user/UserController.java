package com.noodle.rr5g.security.user;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.noodle.rr5g.exception.UserServiceException;
import com.noodle.rr5g.security.role.Role;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static com.noodle.rr5g.util.Globals.EXPIRE_TIME_MINUTES;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/v1/user")
public class UserController {
	
	@Value("${auth.encryptionSecret}")
	private String encryptionSecret;
	
	@Value("${auth.authorizationTokenExpirationTime}")
	private long authTokenExpirationTime;
	
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
	
	@GetMapping("token/refresh")
	public void refreshToken(HttpServletRequest clientRequest,
							 HttpServletResponse serverResponse) throws IOException {
		String authorizationHeader = clientRequest.getHeader(AUTHORIZATION);
		
		if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
			try {
				String refreshToken = authorizationHeader.substring("Bearer ".length());
				Algorithm algorithm = Algorithm.HMAC256(encryptionSecret.getBytes());
				JWTVerifier jwtVerifier = JWT.require(algorithm).build();
				DecodedJWT decodedJWT = jwtVerifier.verify(refreshToken);
				
				String decodedUsername = decodedJWT.getSubject();
				User user = userService.getUser(decodedUsername);
				
				String accessToken = JWT.create()
						.withSubject(user.getUsername())
						.withExpiresAt(new Date(System.currentTimeMillis() + authTokenExpirationTime * EXPIRE_TIME_MINUTES))
						.withIssuer(clientRequest.getRequestURL().toString())
						.withClaim("roles", user.getRoles()
								.stream()
								.map(Role::getName)
								.collect(Collectors.toList()))
						.sign(algorithm);
				
				Map<String, String> tokens = new HashMap<>();
				tokens.put("access_token", accessToken);
				tokens.put("refresh_token", refreshToken);
				serverResponse.setContentType(MediaType.APPLICATION_JSON_VALUE);
				new ObjectMapper().writeValue(serverResponse.getOutputStream(), tokens);
			} catch (Exception e) {
				serverResponse.setHeader("error", e.getMessage());
				serverResponse.setStatus(FORBIDDEN.value());
				
				Map<String, String> errorMap = new HashMap<>();
				errorMap.put("error-message", e.getMessage());
				serverResponse.setContentType(APPLICATION_JSON_VALUE);
				new ObjectMapper().writeValue(serverResponse.getOutputStream(), errorMap);
			}
		} else {
			throw new UserServiceException("Authorization token error! Refresh token is missing");
		}
	}
}

@Data
class RoleToUserForm {
	private String username;
	private String roleName;
}
