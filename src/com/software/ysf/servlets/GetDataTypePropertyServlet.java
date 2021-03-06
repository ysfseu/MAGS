package com.software.ysf.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hp.hpl.jena.ontology.DatatypeProperty;
import com.hp.hpl.jena.ontology.OntModel;
import com.hp.hpl.jena.util.iterator.ExtendedIterator;
import com.software.ysf.owl.MyModelFactory;

/**
 * Servlet implementation class GetDataTypePropertyServlet
 */
@WebServlet("/GetDataTypePropertyServlet")
public class GetDataTypePropertyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetDataTypePropertyServlet() {
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
		ArrayList<String> DataTypePropertyNames=new ArrayList<String>();
		//Define the jenaOwlModel and Load model from a owl file 
		//JenaOWLModel jenaOwlModel;
		try {
			//ModelSingleton Model=ModelSingleton.getSingleton();
			//URL url=getServletContext().getResource("/WEB-INF/DataSpecification.owl");
			//jenaOwlModel = ProtegeOWL.createJenaOWLModelFromURI(url.toString());
			
			
			/*File file=new File(url.toString());
		    FileInputStream input=new FileInputStream(file);
			InputStream input = getServletContext().getResourceAsStream("/WEB-INF/DataSpecification.owl");*/
			//Reader in = new BufferedReader(new InputStreamReader(input, "UTF-8"));
	        //Reader in = new InputStreamReader(input,"UTF-8");
			
			//add this model instance to ServletContext.
			//this.getServletConfig().getServletContext().setAttribute("OwlModel", jenaOwlModel);
			OntModel ontmodel=MyModelFactory.getJenaModel().getOntModel();
			ExtendedIterator DataTypeProperties = ontmodel.listDatatypeProperties();
			while(DataTypeProperties.hasNext()){
				DatatypeProperty DataTypeProperty = (DatatypeProperty) DataTypeProperties.next();
		 	    if(DataTypeProperty.getLocalName()!=null)
		 	    {
		 	    	DataTypePropertyNames.add(DataTypeProperty.getLocalName());
		 	    }
		 	}   
			} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
			
		         
			 response.setCharacterEncoding("utf-8");  
		     PrintWriter out = response.getWriter(); 
			
			String AllDataTypeProperties="";
	        for(int i=0;i<DataTypePropertyNames.size();i++)
	        {

	        	AllDataTypeProperties=AllDataTypeProperties+DataTypePropertyNames.get(i)+"#";
	        }
	        System.out.println(AllDataTypeProperties);
	        out.print(AllDataTypeProperties);  
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
