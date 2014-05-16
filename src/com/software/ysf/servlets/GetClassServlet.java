package com.software.ysf.servlets;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.Reader;
import java.lang.reflect.Array;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hp.hpl.jena.ontology.OntClass;
import com.hp.hpl.jena.ontology.OntModel;
import com.hp.hpl.jena.sparql.util.Base64.InputStream;
import com.hp.hpl.jena.util.iterator.ExtendedIterator;









import com.software.ysf.owl.MyModelFactory;

import edu.stanford.smi.protege.exception.OntologyLoadException;
import edu.stanford.smi.protegex.owl.ProtegeOWL;
import edu.stanford.smi.protegex.owl.jena.JenaOWLModel;

/**
 * Servlet implementation class GetClassServlet
 */
@WebServlet("/GetClassServlet")
public class GetClassServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetClassServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		// TODO Auto-generated method stub
		request.setCharacterEncoding("utf-8");
		//
		ArrayList<String> classnames=new ArrayList<String>();
		//Define the jenaOwlModel and Load model from a owl file 
		//JenaOWLModel jenaOwlModel;
		try {
			//ModelFactory Model=ModelSingleton.getSingleton();
			//URL url=getServletContext().getResource("/WEB-INF/DataSpecification.owl");
			//jenaOwlModel = ProtegeOWL.createJenaOWLModelFromURI(url.toString());
			
			
			/*File file=new File(url.toString());
		    FileInputStream input=new FileInputStream(file);
			InputStream input = getServletContext().getResourceAsStream("/WEB-INF/DataSpecification.owl");*/
			//Reader in = new BufferedReader(new InputStreamReader(input, "UTF-8"));
	        //Reader in = new InputStreamReader(input,"UTF-8");
			//OntModel ontmodel=jenaOwlModel.getOntModel()
			//add this model instance to ServletContext.
			//this.getServletConfig().getServletContext().setAttribute("OwlModel", jenaOwlModel);
			OntModel ontmodel=MyModelFactory.getJenaModel().getOntModel();
			ExtendedIterator classes = ontmodel.listClasses();
			while(classes.hasNext()){
		 	    OntClass oneclass = (OntClass) classes.next();
		 	    if(oneclass.getLocalName()!=null)
		 	    {
		 	    	classnames.add(oneclass.getLocalName());
		 	    }
		 	}   
			} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
			
		         
			 response.setCharacterEncoding("utf-8");  
		     PrintWriter out = response.getWriter(); 
			
		      //将数据拼接成JSON格式  
			String AllClasses="";
	        for(int i=0;i<classnames.size();i++)
	        {

	        	AllClasses=AllClasses+classnames.get(i)+"#";
	        }
	        System.out.println(AllClasses);
	        out.print(AllClasses);  
	        out.flush();  
	        out.close();
		
		
 	    
        
        
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
