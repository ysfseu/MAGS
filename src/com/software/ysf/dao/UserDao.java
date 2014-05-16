package com.software.ysf.dao;

import java.util.List;

import com.software.ysf.entity.User;

public interface UserDao {
	public void insertUser(User user);
	//public User login(String username, String password);
	public void updatePassword(User user);
	public User getUserById(int id);
	public User getUserByUsername(String username);
	//public List queryForPage(final String hql,final int offset,final int length);
	public int getAllRowCount();
	public void deleteUser(String username);
}
