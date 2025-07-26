package com.blogs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import com.blogs.Entity.Booking;
import com.blogs.Entity.Hostel;
import com.blogs.repository.BookingRepository;
import com.blogs.repository.HostelRepository;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;
    
    @Autowired
    private HostelRepository hostelRepository;

    @PostMapping
    public Booking createBooking(@RequestBody Map<String, Object> bookingData) {
        
      
        Long hostelId = Long.valueOf(bookingData.get("hostelId").toString());
        Long userId = Long.valueOf(bookingData.get("userId").toString());
        Integer amount = Integer.valueOf(bookingData.get("amount").toString());
        
        
        Hostel hostel = hostelRepository
                .findById(hostelId)
                .orElseThrow(() -> new RuntimeException("Hostel not found"));
        
        
        long currentBookings = bookingRepository.countByHostel_Id(hostelId);
        if (currentBookings >= hostel.getCapacity()) {
            throw new RuntimeException("Hostel is fully booked");
        }
        
        
        Booking booking = new Booking();
        booking.setUserId(userId);
        booking.setAmountPaid(amount);
        booking.setHostel(hostel);
        
        return bookingRepository.save(booking);
    }

    @GetMapping("/hostel/{id}/count")
    public long getBookingCount(@PathVariable Long id) {
        return bookingRepository.countByHostel_Id(id);
    }
}
