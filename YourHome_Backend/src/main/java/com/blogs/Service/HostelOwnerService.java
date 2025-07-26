package com.blogs.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blogs.Entity.HostelOwner;
import com.blogs.repository.HostelOwnerRepository;

import java.util.List;
import java.util.Optional;

@Service
public class HostelOwnerService {

    @Autowired
    private HostelOwnerRepository hostelOwnerRepository;

    public List<HostelOwner> getAllHostelOwners() {
        return hostelOwnerRepository.findAll();
    }

    public Optional<HostelOwner> getHostelOwnerById(Long id) {
        return hostelOwnerRepository.findById(id);
    }

    public HostelOwner saveHostelOwner(HostelOwner hostelOwner) {
        return hostelOwnerRepository.save(hostelOwner);
    }

    public void deleteHostelOwner(Long id) {
        hostelOwnerRepository.deleteById(id);
    }

    public Optional<HostelOwner> findByUsername(String username) {
        return hostelOwnerRepository.findByUsername(username);
    }
}