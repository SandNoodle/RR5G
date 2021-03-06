package com.noodle.rr5g.security.role;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
	
	Role findRoleByName(String name);
}
