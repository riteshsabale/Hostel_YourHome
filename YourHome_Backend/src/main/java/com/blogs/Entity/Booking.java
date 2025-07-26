package com.blogs.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Booking {
	@Id @GeneratedValue 
	private Long id;
	private Long userId;         
	private Integer amountPaid;   
	@ManyToOne(fetch = FetchType.LAZY)
	private Hostel hostel;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public Integer getAmountPaid() {
		return amountPaid;
	}
	public void setAmountPaid(Integer amountPaid) {
		this.amountPaid = amountPaid;
	}
	public Hostel getHostel() {
		return hostel;
	}
	public void setHostel(Hostel hostel) {
		this.hostel = hostel;
	}
	public Booking(Long id, Long userId, Integer amountPaid, Hostel hostel) {
		super();
		this.id = id;
		this.userId = userId;
		this.amountPaid = amountPaid;
		this.hostel = hostel;
	}
	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	}


