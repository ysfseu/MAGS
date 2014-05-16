package com.software.ysf.service;


import java.util.List;

import com.software.ysf.entity.User;

public interface UserService {
	public User login(String username, String password);
	public void register(User user);
	public String registerComform(String username);
	public User changePassword(User user, String newpassword);
	public void addUser(User user);
	public User getUserByUsername(String username); 
	//public PageBean listUser(int pageSize, int currentPage);	
	public User getUserById(int userid);
	public void deleteUser(User user);
}
