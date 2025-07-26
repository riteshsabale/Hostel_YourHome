package com.blogs.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.blogs.Entity.Admin;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Optional<Admin> findByUsername(String username);
}