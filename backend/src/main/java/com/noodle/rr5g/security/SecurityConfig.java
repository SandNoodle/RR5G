package com.noodle.rr5g.security;

import com.noodle.rr5g.filter.CustomAuthenticationFilter;
import com.noodle.rr5g.filter.CustomAuthorizationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Value("${auth.encryptionSecret}")
	private String encryptionSecret;
	
	@Value("${auth.authorizationTokenExpirationTime}")
	private long authTokenExpireTime;
	
	@Value("${auth.refreshTokenExpirationTime}")
	private long refreshTokenExpireTime;
	
	private final UserDetailsService userDetailsService;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		CustomAuthenticationFilter authenticationFilter = new CustomAuthenticationFilter(authenticationManagerBean());
		CustomAuthorizationFilter authorizationFilter = new CustomAuthorizationFilter();
		
		// Set values from application.properties
		authenticationFilter.setEncryptionSecret(encryptionSecret);
		authenticationFilter.setAuthTokenExpireTime(authTokenExpireTime);
		authenticationFilter.setRefreshTokenExpireTime(refreshTokenExpireTime);
		
		authorizationFilter.setEncryptionSecret(encryptionSecret);
		
		// Enable CORS and disdable CSRF
		http.cors().and().csrf().disable();
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		http.authorizeRequests().antMatchers("/api/v1/user/token/refresh").permitAll();
		http.authorizeRequests().antMatchers("/api/v1/user/**").hasAnyAuthority("ROLE_ADMIN");
		
		http.authorizeRequests().antMatchers("/api/v1/game/all/").hasAnyAuthority("ROLE_ADMIN");
		http.authorizeRequests().antMatchers("/api/v1/game/**").permitAll();
		
		http.authorizeRequests().anyRequest().permitAll();
		
		http.addFilterBefore(authorizationFilter, UsernamePasswordAuthenticationFilter.class);
		http.addFilter(authenticationFilter);
	}
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
}
