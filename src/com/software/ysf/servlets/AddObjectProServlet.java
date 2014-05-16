package com.software.ysf.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.hp.hpl.jena.ontology.OntClass;
import com.hp.hpl.jena.ontology.OntModel;
import com.hp.hpl.jena.util.iterator.ExtendedIterator;
import com.software.ysf.owl.MyModelFactory;

import edu.stanford.smi.protegex.owl.jena.JenaOWLModel;

/**
 * Servlet implementation class AddObjectProServlet
 */
@WebServlet("/AddObjectProServlet")
public class AddObjectProServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddObjectProServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		 HttpSession session = request.getSession(true);
		 JenaOWLModel model=(JenaOWLModel)session.getAttribute("jenamodel");
		 OntModel ontmodel=model.getOntModel();
			ExtendedIterator classes = ontmodel.listClasses();
			while(classes.hasNext()){
		 	    OntClass oneclass = (OntClass) classes.next();
		 	    if(oneclass.getLocalName()!=null)
		 	    {
		 	    	System.out.println((oneclass.getLocalName()));
		 	    }
		 	}   
		 
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
