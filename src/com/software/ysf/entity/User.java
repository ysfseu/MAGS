package com.software.ysf.entity;

import java.util.HashSet;
import java.util.Set;

public class User  {

	// Fields

	private int uid;
	private String username;
	private String password;
	private int authority;
	private Set<Project> projects=new HashSet(0);

	// Constructors

	/** default constructor */
	public User() {
	}


	

	/** full constructor */
	public User(int uid, String username, String password,
			int authority) {
		this.uid = uid;
		this.username = username;
		this.password = password;
		this.authority = authority;

	}

	// Property accessors


	public String getUsername() {
		return this.username;
	}

	public int getUid() {
		return uid;
	}




	public void setUid(int uid) {
		this.uid = uid;
	}







	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getAuthority() {
		return this.authority;
	}

	public void setAuthority(int authority) {
		this.authority = authority;
	}




	public Set<Project> getProjects() {
		return projects;
	}




	public void setProjects(Set<Project> projects) {
		this.projects = projects;
	}



}