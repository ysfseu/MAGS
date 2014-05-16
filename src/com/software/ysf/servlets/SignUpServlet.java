package com.software.ysf.servlets;

import java.io.IOException;
import java.util.Set;
import java.util.Iterator;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.software.ysf.dao.impl.ProjectDaoImpl;
import com.software.ysf.dao.impl.UserDaoImpl;
import com.software.ysf.entity.Project;
import com.software.ysf.entity.User;
import com.software.ysf.hibernate.HibernateUtil;



/**
 * Servlet implementation class SignUpServlet
 */
@WebServlet("/SignUpServlet")
public class SignUpServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SignUpServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		Session session = HibernateUtil.currentSession();
		//System.out.println(session==null);
		
		UserDaoImpl userdao=new UserDaoImpl(session);
		User user=new User(0,"ysfseu","12345",1);
		
		User user2=userdao.getUserByUsername(user.getUsername());
		if(user2==null)
		{
			userdao.insertUser(user);
			user2=userdao.getUserByUsername(user.getUsername());
		}
		HibernateUtil.closeSession();
		Session session2=HibernateUtil.currentSession();
		//System.out.println(user2.getUid());
		ProjectDaoImpl pro=new ProjectDaoImpl(session2);
		User user3=(User) session2.merge(user2);
		Project project1=new Project();
		project1.setDescription("first Project");
		project1.setProjectname("first");
		project1.setFilepath("/com");
		project1.setUser(user3);
		pro.insertProject(project1);
		HibernateUtil.closeSession();
		Session session3=HibernateUtil.currentSession();
		//System.out.println(user2.getUid());
		ProjectDaoImpl pro2=new ProjectDaoImpl(session3);
		User user4=(User) session3.merge(user3);
		Project project2=new Project();
		project2.setDescription("second Project");
		project2.setProjectname("second");
		project2.setFilepath("/com");
		project2.setUser(user4);
		
		pro2.insertProject(project2);
		Set<Project> pros=pro2.getProjectByUser(user4);
		Iterator iter= pros.iterator();
		while(iter.hasNext()){
			System.out.println(((Project)iter.next()).getProjectname());
		}
		HibernateUtil.closeSession();
	}

}
