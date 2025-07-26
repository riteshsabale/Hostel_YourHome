package com.blogs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.blogs.Entity.HostelOwner;
import com.blogs.Service.HostelOwnerService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/hostelOwner")
@CrossOrigin(origins = "http://localhost:3000")
public class HostelOwnerController {

    @Autowired
    private HostelOwnerService hostelOwnerService;

    @GetMapping
    public List<HostelOwner> getAllHostelOwners() {
        return hostelOwnerService.getAllHostelOwners();
    }

    @GetMapping("/{id}")
    public Optional<HostelOwner> getHostelOwnerById(@PathVariable Long id) {
        return hostelOwnerService.getHostelOwnerById(id);
    }

    @PostMapping
    public HostelOwner createHostelOwner(@RequestBody HostelOwner hostelOwner) {
        return hostelOwnerService.saveHostelOwner(hostelOwner);
    }

    @PutMapping("/{id}")
    public HostelOwner updateHostelOwner(@PathVariable Long id, @RequestBody HostelOwner hostelOwner) {
        hostelOwner.setId(id);
        return hostelOwnerService.saveHostelOwner(hostelOwner);
    }

    @DeleteMapping("/{id}")
    public void deleteHostelOwner(@PathVariable Long id) {
        hostelOwnerService.deleteHostelOwner(id);
    }

    @PostMapping("/login")
    public Optional<HostelOwner> login(@RequestParam String username, @RequestParam String password) {
        Optional<HostelOwner> hostelOwner = hostelOwnerService.findByUsername(username);
        if (hostelOwner.isPresent() && hostelOwner.get().getPassword().equals(password)) {
            return hostelOwner;
        }
        return Optional.empty();
    }

    @PostMapping("/register")
    public HostelOwner register(@RequestBody HostelOwner hostelOwner) {
        return hostelOwnerService.saveHostelOwner(hostelOwner);
    }
}