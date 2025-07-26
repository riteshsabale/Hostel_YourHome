package com.blogs.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blogs.Entity.Hostel;
import com.blogs.repository.HostelRepository;

import java.util.List;
import java.util.Optional;

@Service
public class HostelService {

    @Autowired
    private HostelRepository hostelRepository;

    public List<Hostel> getAllHostels() {
        return hostelRepository.findAll();
    }

    public Optional<Hostel> getHostelById(Long id) {
        return hostelRepository.findById(id);
    }

    public Hostel saveHostel(Hostel hostel) {
        return hostelRepository.save(hostel);
    }

    public void deleteHostel(Long id) {
        hostelRepository.deleteById(id);
    }
}