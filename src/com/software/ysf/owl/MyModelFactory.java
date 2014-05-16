package com.software.ysf.owl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.URL;

import javax.servlet.ServletContext;

import edu.stanford.smi.protege.exception.OntologyLoadException;
import edu.stanford.smi.protegex.owl.ProtegeOWL;
import edu.stanford.smi.protegex.owl.jena.JenaOWLModel;

public class MyModelFactory {
	
	//private volatile static ModelFactory singleton;
	private static volatile JenaOWLModel jenaOwlModel;
	//private File file=new File("./DataSpecification.owl");
	static {
		 try {
			String inputFile=Class.forName("com.software.ysf.owl.MyModelFactory").getClassLoader().getResource("/").getPath()+"com/software/ysf/owl/DataSpecification.owl";
			System.out.println(inputFile);
			 FileInputStream input=new FileInputStream(inputFile);
			 InputStreamReader in = new InputStreamReader(input,"UTF-8");
			 jenaOwlModel=ProtegeOWL.createJenaOWLModelFromReader(in);
		} catch (Exception e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		};
	}
	
	
    private MyModelFactory () throws FileNotFoundException, UnsupportedEncodingException{
    	//inputFile=this.getClass().getClassLoader().getResource("/").getPath()+"owl/DataSpecification.owl";
    	//System.out.println(inputFile);
    	//input=new FileInputStream(inputFile);
    	//in= new InputStreamReader(input,"UTF-8");
    }   
    /*
    public static ModelSingleton getSingleton() throws OntologyLoadException, FileNotFoundException, UnsupportedEncodingException{  
	      if (singleton == null) {  
	          synchronized (ModelSingleton.class){  
	        	  if (singleton == null) 
	        	  {  
	        		  singleton = new ModelSingleton();  
	        		 // jenaOwlModel=ProtegeOWL.createJenaOWLModelFromReader(singleton.in);
	        		  
	        	  }	  
	         }  
	     }  
	     return singleton;  
     } */
     public static JenaOWLModel getJenaModel(){
    	 synchronized(jenaOwlModel)
    	 {
    		 return jenaOwlModel;
    	 }
     }

}
