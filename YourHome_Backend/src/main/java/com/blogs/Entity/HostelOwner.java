package com.blogs.Entity;
import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Setter
@Getter
@NoArgsConstructor
public class HostelOwner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String contactInfo;
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

	public String getContactInfo() {
		return contactInfo;
	}

	public void setContactInfo(String contactInfo) {
		this.contactInfo = contactInfo;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	private String username;
    private String password;
	public HostelOwner(Long id, String name, String contactInfo, String username, String password) {
		super();
		this.id = id;
		this.name = name;
		this.contactInfo = contactInfo;
		this.username = username;
		this.password = password;
	}

	public HostelOwner() {
		super();
		// TODO Auto-generated constructor stub
	}

//    @OneToMany(cascade = CascadeType.ALL)
//    @JoinColumn(name = "owner_id")
//    private List<Hostel> hostels;

        
 
}