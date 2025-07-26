package com.blogs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blogs.Entity.Hostel;


public interface HostelRepository extends JpaRepository<Hostel, Long> {
    // Custom query methods if needed
}
