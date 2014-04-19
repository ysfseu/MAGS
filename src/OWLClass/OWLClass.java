package OWLClass;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import edu.stanford.smi.protegex.owl.jena.JenaOWLModel;
import edu.stanford.smi.protegex.owl.model.OWLNamedClass;
import edu.stanford.smi.protegex.owl.model.RDFResource;
import edu.stanford.smi.protegex.owl.model.RDFSClass;

public class OWLClass {
	private JenaOWLModel jenaOwlModel;
	public OWLClass(JenaOWLModel jenaOwlModel){
		this.jenaOwlModel=jenaOwlModel;

		
	}
	public String getOWLClass(){
		ArrayList<String> classnames=new ArrayList<String>();
		try{
			@SuppressWarnings("unchecked")
			Collection<OWLNamedClass> classes = jenaOwlModel.getUserDefinedOWLNamedClasses();
			Iterator<OWLNamedClass> i=classes.iterator();
			while(i.hasNext()){
		 	    OWLNamedClass oneclass =i.next();
		 	    if(oneclass.getLocalName()!=null)
		 	    {
		 	    	classnames.add(oneclass.getLocalName());
		 	    }
		 	} 
		}catch(Exception e){
			e.getStackTrace();
			return null;
			
		}
		
		String AllClasses="";
        for(int i=0;i<classnames.size();i++)
        {

        	AllClasses=AllClasses+classnames.get(i)+"#";
        }
        return AllClasses;
		
	}
	public int AddClass(String className,String[] superClassName){
		try{
			OWLNamedClass Userdefineclass = jenaOwlModel.createOWLNamedClass(className);
			if(superClassName!=null)
			{
				for(int i=0;i<superClassName.length;i++){
					RDFResource oneClass=jenaOwlModel.getRDFResource(superClassName[i]);
					Userdefineclass.addSuperclass((RDFSClass) oneClass);
				}
			}
		}catch(Exception e){
			return 1;
		}					
		return 0;
	}
	public int deleteClass(String className){
		try{
			RDFResource oneClass=jenaOwlModel.getRDFResource(className);
			oneClass.delete();
		}catch(Exception e){
			e.getStackTrace();
			return 1;
		}
		return 0;
			
	}

}
