package com.blogs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blogs.Entity.HostelOwner;

import java.util.Optional;

public interface HostelOwnerRepository extends JpaRepository<HostelOwner, Long> {
    Optional<HostelOwner> findByUsername(String username);
}