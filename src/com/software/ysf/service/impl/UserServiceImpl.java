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
	 * �û���½
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
	 * �û�ע��
	 */
	public void register(User user) {
		User u = new User();
		u.setUsername(user.getUsername().trim());
		u.setPassword(user.getPassword().trim());		
		u.setAuthority(1);				
		userDao.insertUser(u);
	}
	
	/**
	 * ע����ȷ��
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
	 * �޸�����
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
	 * ����û�
	 */
	public void addUser(User user){
		User u = new User();		
		u.setUsername(user.getUsername().trim());
		u.setPassword(user.getPassword().trim());		
		u.setAuthority(user.getAuthority());				
		userDao.insertUser(u);
	}
	
	/**
	 * �����û�����ѯ�û�
	 */
	public User getUserByUsername(String username) {
		return userDao.getUserByUsername(username);
	}
	
	/**
	 * ��ѯ�����û�
	 */
	/*
	public PageBean listUser(int pageSize, int page) {
		final String hql = "from User u order by authority";		
		return queryForPage(hql, pageSize, page);
	}*/
	
	
	
	/**
	 * sql��ҳ��ѯ
	 * 
	 * @param pageSize
	 *            ÿҳ��С
	 * @param currentPage
	 *            ��ǰ�ڼ�ҳ
	 * @return ����˷�ҳ��Ϣ(������¼��list)��Bean
	 */
	/*
	public PageBean queryForPage(final String hql, int pageSize, int page) {
		int allRow = userDao.getAllRowCount(hql); // �ܼ�¼��
		int totalPage = PageBean.countTotalPage(pageSize, allRow); // ��ҳ��
		final int currentPage = PageBean.countCurrentPage(page); //���㵱ǰҳ,��Ϊ0���������URL��û��"?page=",����1����
		final int offset = PageBean.countOffset(pageSize, currentPage); // ��ǰҳ��ʼ��¼
		final int length = pageSize; // ÿҳ��¼��

		List<Object[]> list = userDao.queryForPage(hql, offset, length); //"һҳ"�ļ�¼

		// �ѷ�ҳ��Ϣ���浽Bean��
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
	 * �����û�id����û�
	 */
	public User getUserById(int userid) {
		return userDao.getUserById(userid);
	}
	
	/**
	 * ɾ���û�
	 */
	public void deleteUser(User user) {
		userDao.deleteUser(user.getUsername());;
	}

}
