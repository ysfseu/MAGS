package owl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.UnsupportedEncodingException;

import com.hp.hpl.jena.ontology.DatatypeProperty;
import com.hp.hpl.jena.ontology.ObjectProperty;
import com.hp.hpl.jena.ontology.OntClass;
import com.hp.hpl.jena.ontology.OntModel;
import com.hp.hpl.jena.util.iterator.ExtendedIterator;


import edu.stanford.smi.protegex.owl.ProtegeOWL;
import edu.stanford.smi.protegex.owl.jena.JenaOWLModel;

public class ParseFiles{
	 private String filePath;
     private FileInputStream inFile;
     private Reader in;
     private JenaOWLModel jenaOwlModel;
     private OntModel ontmodel;
     public ParseFiles(String file) {
    	 try{
    		 
  			filePath = file;
  			inFile= new FileInputStream(this.filePath);
 	    	 in = new InputStreamReader(inFile,"UTF-8");
 	       	 jenaOwlModel = ProtegeOWL.createJenaOWLModelFromReader(in);
 	       	 ontmodel=jenaOwlModel.getOntModel();jenaOwlModel.getOntModel();jenaOwlModel.getOntModel();
  			}catch(Exception e){
  			// nothing
  			}
 	}

     /*public static void main(String[] args) {
 		//OntModel model = ModelFactory.createOntologyModel(OntModelSpec.OWL_MEM, null);		
 		//FileInputStream fis = null;
 		ParseFiles tempmodel =new ParseFiles("F://a/Data Specification.owl");
 		System.out.println("dataproperty:");
 		tempmodel.GetDatatypeProperty();
 		System.out.println("objectproperty:");
 		tempmodel.GetObjectProperty();
 		System.out.println("allclass:");
 		tempmodel.GetAllClass();
 	}*/
   //Getting all datatypeproperties
 	public void GetDatatypeProperty(){
 		ExtendedIterator dataProperties = ontmodel.listDatatypeProperties();
 	    while(dataProperties.hasNext()){
 	    DatatypeProperty property = (DatatypeProperty) dataProperties.next();
 	    	System.out.println(property.getLocalName());
 	    }
 	}
 	//Getting all objectproperties
 	public void GetObjectProperty(){
 		ExtendedIterator objectProperties = ontmodel.listObjectProperties();
 	    while(objectProperties.hasNext()){
 	    ObjectProperty property = (ObjectProperty) objectProperties.next();
 	    System.out.println(property.getLocalName());
 	}

 	}
 	
 	public void GetAllClass(){
 		ExtendedIterator classes = ontmodel.listClasses();
 	    while(classes.hasNext()){
 	    OntClass theclass = (OntClass) classes.next();
 	    System.out.println(theclass.getLocalName());
 	    }
 	}
}