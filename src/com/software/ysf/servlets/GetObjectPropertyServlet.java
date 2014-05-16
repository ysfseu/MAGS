package com.software.ysf.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URL;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hp.hpl.jena.ontology.ObjectProperty;
import com.hp.hpl.jena.ontology.OntClass;
import com.hp.hpl.jena.ontology.OntModel;
import com.hp.hpl.jena.util.iterator.ExtendedIterator;
import com.software.ysf.owl.MyModelFactory;

import edu.stanford.smi.protegex.owl.ProtegeOWL;
import edu.stanford.smi.protegex.owl.jena.JenaOWLModel;

/**
 * Servlet implementation class GetObjectPropertyServlet
 */
@WebServlet("/GetObjectPropertyServlet")
public class GetObjectPropertyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetObjectPropertyServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("utf-8");
		//
		ArrayList<String> ObjectPropertyNames=new ArrayList<String>();
		//Define the jenaOwlModel and Load model from a owl file 
		JenaOWLModel jenaOwlModel;
		try {
			//ModelSingleton Model=ModelSingleton.getSingleton();
			//URL url=getServletContext().getResource("/WEB-INF/DataSpecification.owl");
			/*File file=new File(url.toString());
		    FileInputStream input=new FileInputStream(file);
			InputStream input = getServletContext().getResourceAsStream("/WEB-INF/DataSpecification.owl");*/
			//Reader in = new BufferedReader(new InputStreamReader(input, "UTF-8"));
	        //Reader in = new InputStreamReader(input,"UTF-8");
			OntModel ontmodel=MyModelFactory.getJenaModel().getOntModel();
			//add this model instance to ServletContext.
			//this.getServletConfig().getServletContext().setAttribute("OwlModel", jenaOwlModel);
			//OntModel ontmodel=jenaOwlModel.getOntModel();
			ExtendedIterator ObjectProperties = ontmodel.listObjectProperties();
			while(ObjectProperties.hasNext()){
				ObjectProperty property = (ObjectProperty) ObjectProperties.next();
		 	    if(property.getLocalName()!=null)
		 	    {
		 	    	ObjectPropertyNames.add(property.getLocalName());
		 	    }
		 	}   
			} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
			
		         
			 response.setCharacterEncoding("utf-8");  
		     PrintWriter out = response.getWriter(); 
			
		      //将数据拼接成JSON格式  
			String AllObjectProperties="";
	        for(int i=0;i<ObjectPropertyNames.size();i++)
	        {

	        	AllObjectProperties=AllObjectProperties+ObjectPropertyNames.get(i)+"#";
	        }
	        System.out.println(AllObjectProperties);
	        out.print(AllObjectProperties);  
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
