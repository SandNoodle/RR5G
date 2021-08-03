package com.noodle.rr5g.security.user;

import com.noodle.rr5g.exception.UserServiceException;
import com.noodle.rr5g.security.role.Role;
import com.noodle.rr5g.security.role.RoleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImplementation implements UserService, UserDetailsService {
	
	private final UserRepository userRepository;
	private final RoleRepository roleRepository;
	
	private final PasswordEncoder passwordEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username);
		
		boolean isUserValid = user != null;
		if (!isUserValid) {
			log.error("User {} tried to log in but doesn't exist in the database!", username);
			throw new UserServiceException("User " + username + " tried to log in but doesn't exist in the database!");
		}
		
		log.info("User {} found in the database!", username);
		
		Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
		user.getRoles().forEach(role -> {
			authorities.add(new SimpleGrantedAuthority(role.getName()));
		});
		
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
	}
	
	@Override
	public User saveUser(User user) {
		log.info("Saving new user {} into the database: ", user.getName());
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepository.save(user);
	}
	
	@Override
	public User getUser(String username) {
		log.info("Fetching user {}", username);
		return userRepository.findByUsername(username);
	}
	
	@Override
	public List<User> getUsers() {
		/*
		TODO(SandNoodles):
		    It's probably a better idea in the future to implement returning only X entries instead of all of them
		    to further reduce backend strain.
		*/
		
		log.info("Fetching all the users!");
		return userRepository.findAll();
	}
	
	@Override
	public Role saveRole(Role role) {
		boolean isRoleValid = role != null;
		if (!isRoleValid) {
			log.error("Tried to save NULL role!");
			throw new UserServiceException("Tried to save NULL role!");
		}
		
		log.info("Saving new role {} to the database!", role.getName());
		return roleRepository.save(role);
	}
	
	@Override
	public void addRoleToUser(String username, String roleName) {
		User user = userRepository.findByUsername(username);
		Role role = roleRepository.findRoleByName(roleName);
		
		boolean doesUserExist = user != null;
		if (!doesUserExist) {
			log.error("User {} doesn't exist in the database", username);
			throw new UserServiceException("User " + username + " doesn't exist in the database!");
		}
		
		boolean doesRoleExist = role != null;
		if (!doesRoleExist) {
			log.error("Role {} doesn't exist in the database", username);
			throw new UserServiceException("Role " + roleName + " doesn't exist in the database!");
		}
		
		log.info("Added {} role to user {}!", roleName, username);
		user.getRoles().add(role);
	}
	
}
