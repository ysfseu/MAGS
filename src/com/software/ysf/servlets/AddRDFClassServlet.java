package com.software.ysf.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.software.ysf.owl.MyModelFactory;
import com.software.ysf.owl.OWLClass;

import edu.stanford.smi.protegex.owl.jena.JenaOWLModel;

/**
 * Servlet implementation class AddRDFClassServlet
 */
@WebServlet("/AddRDFClassServlet")
public class AddRDFClassServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddRDFClassServlet() {
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
		String className=(String) request.getParameter("className");
		String superClassName=request.getParameter("superClassName");
		String[] superClasses=null;
		System.out.println(className);
		if(superClassName!=null&&superClassName!=""){
			superClasses=superClassName.split("#");
		}
		//response.setContentType("text/html;charset=GB2312");
		
		
		JenaOWLModel jenaOwlModel=MyModelFactory.getJenaModel();
		OWLClass owlClass=new OWLClass(jenaOwlModel);
		int status=owlClass.AddClass(className, superClasses);
		System.out.println(status);
		PrintWriter out=response.getWriter();
		out.println(status);	
	}

}
