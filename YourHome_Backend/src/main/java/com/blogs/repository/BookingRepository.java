package com.blogs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.blogs.Entity.Booking;


@Repository
	public interface BookingRepository
	        extends JpaRepository<Booking,Long> {
	    long countByHostel_Id(Long hostelId);
	}

	
