package com.software.ysf.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;
import java.util.Iterator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.software.ysf.owl.MyModelFactory;
import com.software.ysf.owl.OWLDatatypePro;
import com.software.ysf.owl.OWLObjectPro;

import edu.stanford.smi.protegex.owl.jena.JenaOWLModel;

/**
 * Servlet implementation class GetDtRangeServlet
 */
@WebServlet("/GetDtRangeServlet")
public class GetDtRangeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetDtRangeServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//String superClassName=request.getParameter("superClassName");
		//String[] superClasses=null;
		Collection<String> RangeNames=null;
		//System.out.println(superClassName);
		/*if(superClassName!=null&&superClassName!=""){
			superClasses=superClassName.split("#");
		}*/
		JenaOWLModel jenaOwlModel=MyModelFactory.getJenaModel();
		OWLDatatypePro owlDtPro=new OWLDatatypePro(jenaOwlModel);
		RangeNames=owlDtPro.chooseDtProperRange();
		//Define the jenaOwlModel and Load model from a owl file 
		String Ranges="";
		Iterator<String> iter=RangeNames.iterator();
		while(iter.hasNext()){
			
			Ranges=Ranges+iter.next()+"#";
		}
		PrintWriter out=response.getWriter();
		out.println(Ranges);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
