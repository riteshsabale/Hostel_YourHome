package com.blogs.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Hostel {

    public Hostel(Long id, String name, String location,String imageurl, int capacity, double rent, double deposit, HostelOwner owner) {
        super();
        this.id = id;
        this.name = name;
        this.location = location;
        this.capacity = capacity;
        this.rent = rent;
        this.deposit = deposit;
        this.owner = owner;
    }

    public Hostel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public double getRent() {
		return rent;
	}

	public void setRent(double rent) {
		this.rent = rent;
	}

	public double getDeposit() {
		return deposit;
	}

	public void setDeposit(double deposit) {
		this.deposit = deposit;
	}

	public HostelOwner getOwner() {
		return owner;
	}

	public void setOwner(HostelOwner owner) {
		this.owner = owner;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String location;
    private String imageurl;
    private int capacity;
    private double rent;
    private double deposit;

    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private HostelOwner owner;
}