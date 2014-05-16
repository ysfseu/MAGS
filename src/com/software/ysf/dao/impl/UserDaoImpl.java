package com.software.ysf.dao.impl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Iterator;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.software.ysf.dao.UserDao;
import com.software.ysf.entity.User;

public class UserDaoImpl implements UserDao{
	private Session session;
	public UserDaoImpl(Session session){
		this.session=session;
	}
	/**
	 * ����û��˺��Ƿ�Ϊ��
	 * */
	public User login(String username, String password){
		
		String hql = "from User user where user.username = :username and user.password =:password";
		List list = session.createQuery(hql).setString("username", username).setString("password", password).list();
				
		if (list != null && list.size() > 0) {		
			return (User) list.get(0);
		}else {										
			return null;
		}
	}
	
	/**
	 * �����û�id����û�
	 */
	public User getUserById(int id) {
		Transaction tx = session.beginTransaction();
		String hql="select user from User user where user.id=:id";
		List list = session.createQuery(hql)  
                .setInteger("id", id).list();
		User user=null;
		Iterator iterator = list.iterator();
		if(iterator.hasNext())
		{
			user=(User) iterator.next();
		}
		return user;
	}
	/**
	 * �޸�����
	 */
	public void updatePassword(User user){
		Transaction tx=null;
		try{
			tx= session.beginTransaction();
			String hql="update User user set user.password=:password where user.username=:username";
			Query query=session.createQuery(hql)  
	                .setString("username", user.getUsername()).
	                setString("password",user.getPassword());
			query.executeUpdate();
			tx.commit();
		}catch(Exception e){
			if(tx!=null)
				tx.rollback();
			throw e;
		}
		
		
	}
	
	/**
	 * ����û�
	 */
	public void insertUser(User user){
		Transaction tx=null;
		try{
			tx = session.beginTransaction();
			session.save(user);
			tx.commit();
		}catch(Exception e){
			if(tx!=null)
				tx.rollback();
			throw e;
		}
		
	}
	
	/**
	 * �����û�������û�
	 */
	public User getUserByUsername(String username) {
		//Transaction tx = session.beginTransaction();
		String hql="select user from User user where user.username=:username";
		List list = session.createQuery(hql)  
                .setString("username", username).list();
		//tx.commit();
		User user=null;
		Iterator iterator = list.iterator();
		if(iterator.hasNext())
		{
			user=(User) iterator.next();
		}
		return user;		
	}
	
	/**
	 * ��ҳ��ѯ
	 * 
	 * @param Sql
	 *            ��ѯ������
	 * @param offset
	 *            ��ʼ��¼
	 * @param length
	 *            һ�β�ѯ������¼
	 * @return
	 */
	public List queryForPage( final int offset,final int length) {
		String hql="from User user";
		Query query = session.createQuery(hql);
		query.setFirstResult(offset);
		query.setMaxResults(length);				
		List list = query.list();
		return list;
	}
	
	/**
	 * sql�ܼ�¼��
	 * */
	public int getAllRowCount() {
		Transaction tx=null;
		try{
			tx = session.beginTransaction();
			String hql="select count(user.id) from User user";
			Integer count= (Integer) session.createQuery(hql).uniqueResult();
			tx.commit();
			return count.intValue();
		}catch(Exception e){
			if(tx!=null)
				tx.rollback();
			throw e;
		}
		
	}
	
	/**
	 * ɾ���û�
	 */
	public void deleteUser(String username){
		Transaction tx=null;
		try{
			tx = session.beginTransaction();
			String hql = "delete from User user Where user.username=:username" ;
			session.createQuery(hql).setString("username", username).executeUpdate();
			tx.commit();
		}catch(Exception e){
			if(tx!=null)
				tx.rollback();
			throw e;
		}
	}

}
