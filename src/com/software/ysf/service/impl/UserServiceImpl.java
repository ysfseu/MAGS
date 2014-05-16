package com.software.ysf.service.impl;

import java.util.List;

import com.software.ysf.dao.UserDao;
import com.software.ysf.entity.User;
import com.software.ysf.service.UserService;



public class UserServiceImpl implements UserService {
	private UserDao userDao;
	
	public UserDao getUserDao() {
		return userDao;
	}
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
	
	/**
	 * 用户登陆
	 * */
	public User login(String username, String password) {
		User user=userDao.getUserByUsername(username);
		if(user.getPassword()==password)
		{
				return user;
		}
		else{
			return null;
		}
	}
	
	/**
	 * 用户注册
	 */
	public void register(User user) {
		User u = new User();
		u.setUsername(user.getUsername().trim());
		u.setPassword(user.getPassword().trim());		
		u.setAuthority(1);				
		userDao.insertUser(u);
	}
	
	/**
	 * 注册结果确认
	 */
	public String registerComform(String username) {
		User u = userDao.getUserByUsername(username);
		if( u != null ){
			return "success";
		}else {
			return null;
		}
	}
	
	/**
	 * 修改密码
	 */
	public User changePassword(User user, String newpassword){
		User u = userDao.getUserById(user.getUid());
		if(!u.getPassword().equals(user.getPassword())){
			return null;
		}
		else{
			u.setPassword(newpassword.trim());		
			userDao.updatePassword(u);		
			return userDao.getUserById(u.getUid());
		}
	}
	
	/**
	 * 添加用户
	 */
	public void addUser(User user){
		User u = new User();		
		u.setUsername(user.getUsername().trim());
		u.setPassword(user.getPassword().trim());		
		u.setAuthority(user.getAuthority());				
		userDao.insertUser(u);
	}
	
	/**
	 * 根据用户名查询用户
	 */
	public User getUserByUsername(String username) {
		return userDao.getUserByUsername(username);
	}
	
	/**
	 * 查询所有用户
	 */
	/*
	public PageBean listUser(int pageSize, int page) {
		final String hql = "from User u order by authority";		
		return queryForPage(hql, pageSize, page);
	}*/
	
	
	
	/**
	 * sql分页查询
	 * 
	 * @param pageSize
	 *            每页大小
	 * @param currentPage
	 *            当前第几页
	 * @return 封闭了分页信息(包括记录集list)的Bean
	 */
	/*
	public PageBean queryForPage(final String hql, int pageSize, int page) {
		int allRow = userDao.getAllRowCount(hql); // 总记录数
		int totalPage = PageBean.countTotalPage(pageSize, allRow); // 总页数
		final int currentPage = PageBean.countCurrentPage(page); //计算当前页,若为0或者请求的URL中没有"?page=",则用1代替
		final int offset = PageBean.countOffset(pageSize, currentPage); // 当前页开始记录
		final int length = pageSize; // 每页记录数

		List<Object[]> list = userDao.queryForPage(hql, offset, length); //"一页"的记录

		// 把分页信息保存到Bean中
		PageBean pageBean = new PageBean();
		pageBean.setPageSize(pageSize);
		pageBean.setCurrentPage(currentPage);
		pageBean.setAllRow(allRow);
		pageBean.setTotalPage(totalPage);
		pageBean.setList(list);
		pageBean.init();
		return pageBean;
	}
	*/
	/**
	 * 根据用户id获得用户
	 */
	public User getUserById(int userid) {
		return userDao.getUserById(userid);
	}
	
	/**
	 * 删除用户
	 */
	public void deleteUser(User user) {
		userDao.deleteUser(user.getUsername());;
	}

}
