package com.software.ysf.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.software.ysf.owl.MyModelFactory;
import com.software.ysf.owl.OWLDatatypePro;

import edu.stanford.smi.protegex.owl.jena.JenaOWLModel;

/**
 * Servlet implementation class AddDatatypeProServlet
 */
@WebServlet("/AddDatatypeProServlet")
public class AddDatatypeProServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddDatatypeProServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String propername=(String) request.getParameter("datatypePro");
		String superClassName=request.getParameter("superClassName");
		String[] superClasses=null;
		System.out.println(propername);
		if(superClassName!=null&&superClassName!=""){
			superClasses=superClassName.split("#");
		}
		JenaOWLModel jenaOwlModel=MyModelFactory.getJenaModel();
		//HttpSession session = request.getSession(true); 
		//session.setAttribute("jenamodel", jenaOwlModel);
		//OWLDatatypePro datatypePro=new OWLDatatypePro(jenaOwlModel);
		//datatypePro.AddDatatypeProper(propername, superpropername, domainlist, range);
		OWLDatatypePro datatypePro=new OWLDatatypePro(jenaOwlModel);
		int status=datatypePro.AddDatatypeProper(propername, superClasses, null, null);
		System.out.println(status);
		PrintWriter out=response.getWriter();
		out.println(status);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
