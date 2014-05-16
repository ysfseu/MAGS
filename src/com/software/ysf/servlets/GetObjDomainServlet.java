package com.software.ysf.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hp.hpl.jena.ontology.OntClass;
import com.hp.hpl.jena.ontology.OntModel;
import com.hp.hpl.jena.util.iterator.ExtendedIterator;
import com.software.ysf.owl.MyModelFactory;
import com.software.ysf.owl.OWLObjectPro;

import edu.stanford.smi.protegex.owl.jena.JenaOWLModel;

/**
 * Servlet implementation class GetObjDomainServlet
 */
@WebServlet("/GetObjDomainServlet")
public class GetObjDomainServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetObjDomainServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String superClassName=request.getParameter("superClassName");
		String[] superClasses=null;
		Collection<String> DomainNames=null;
		System.out.println(superClassName);
		if(superClassName!=null&&superClassName!=""){
			superClasses=superClassName.split("#");
		}
		JenaOWLModel jenaOwlModel=MyModelFactory.getJenaModel();
		OWLObjectPro owlObjPro=new OWLObjectPro(jenaOwlModel);
		DomainNames=owlObjPro.chooseObProperDomain(superClasses);
		//Define the jenaOwlModel and Load model from a owl file 
		String Domains="";
		Iterator<String> iter=DomainNames.iterator();
		while(iter.hasNext()){
			
			Domains=Domains+iter.next()+"#";
		}
		PrintWriter out=response.getWriter();
		out.println(Domains);
		//JenaOWLModel jenaOwlModel;
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
