package com.blogs.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.blogs.Entity.Hostel;
import com.blogs.Service.HostelService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/hostel")
@CrossOrigin(origins = "http://localhost:3000")
public class HostelController {

    @Autowired
    private HostelService hostelService;

    @GetMapping
    public List<Hostel> getAllHostels() {
        return hostelService.getAllHostels();
    }

    @GetMapping("/{id}")
    public Optional<Hostel> getHostelById(@PathVariable Long id) {
        return hostelService.getHostelById(id);
    }

    @PostMapping
    public Hostel createHostel(@RequestBody Hostel hostel) {
        return hostelService.saveHostel(hostel);
    }

    @PutMapping("/{id}")
    public Hostel updateHostel(@PathVariable Long id, @RequestBody Hostel hostel) {
        hostel.setId(id);
        return hostelService.saveHostel(hostel);
    }

    @DeleteMapping("/{id}")
    public void deleteHostel(@PathVariable Long id) {
        hostelService.deleteHostel(id);
    }
}