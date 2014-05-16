package com.software.ysf.dao.impl;

import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.hibernate.Session;
import org.hibernate.Transaction;





import com.software.ysf.dao.ProjectDao;
import com.software.ysf.entity.Project;
import com.software.ysf.entity.User;

public class ProjectDaoImpl implements ProjectDao {
	Session session;
	public ProjectDaoImpl(Session session){
		this.session=session;
	}
	@Override
	public Project getProjectById(int pid) {
		// TODO Auto-generated method stub
		Transaction tx = session.beginTransaction();
		String hql="select project from Project p where p.pid=:pid";
		List list = session.createQuery(hql)  
                .setInteger("pid", pid).list();
		Project project=null;
		Iterator iterator = list.iterator();
		if(iterator.hasNext())
		{
			project=(Project) iterator.next();
		}
		return project;
		
	}
	@Override
	public Set<Project> getProjectByUser(User user) {
		// TODO Auto-generated method stub
		Transaction tx = session.beginTransaction();
		User u=(User)session.get(User.class, user.getUid());
		Set<Project> projects=u.getProjects();
		
		return projects;
	}

	@Override
	public Project getProjectByName(String projectname) {				
		// TODO Auto-generated method stub
		Transaction tx = session.beginTransaction();
		String hql="select project from Project p where p.projectname=:projectname";
		List list = session.createQuery(hql)  
                .setString("projectname", projectname).list();
		Project project=null;
		Iterator iterator = list.iterator();
		if(iterator.hasNext())
		{
			project=(Project) iterator.next();
		}
		return project;
	}

	@Override
	public void insertProject(Project project) {
		// TODO Auto-generated method stub
		Transaction tx=null;
		try{
			//System.out.println(session==null);
			tx = session.beginTransaction();
			session.save(project);
			tx.commit();
		}catch(Exception e){
			if(tx!=null)
				tx.rollback();
			throw e;
		}
		

	}

	@Override
	public void deleteProjectById(int pid) {
		// TODO Auto-generated method stub
		Transaction tx=null;
		try{
			tx = session.beginTransaction();
			String hql = "delete from Project p Where p.pid=:pid" ;
			session.createQuery(hql).setInteger("pid", pid).executeUpdate();
			tx.commit();
		}catch(Exception e){
			if(tx!=null)
				tx.rollback();
			throw e;
		}

	}

	@Override
	public void deleteProjectByName(String projectname) {
		// TODO Auto-generated method stub
		Transaction tx=null;
		try{
			tx = session.beginTransaction();
			String hql = "delete from Project p Where p.projectname=:projectname" ;
			session.createQuery(hql).setString("projectname", projectname).executeUpdate();
			tx.commit();
		}catch(Exception e){
			if(tx!=null)
				tx.rollback();
			throw e;
		}

	}

	@Override
	public void deleteProjectByUser(User user) {
		// TODO Auto-generated method stub
		Transaction tx=null;
		try{
			tx = session.beginTransaction();
			String hql = "delete from Project p Where p.uid=:uid" ;
			session.createQuery(hql).setInteger("uid", user.getUid()).executeUpdate();
			tx.commit();
		}catch(Exception e){
			if(tx!=null)
				tx.rollback();
			throw e;
		}

		

	}
	

}
