package owl;
import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import edu.stanford.smi.protege.exception.OntologyLoadException;
import edu.stanford.smi.protegex.owl.ProtegeOWL;
import edu.stanford.smi.protegex.owl.model.OWLDatatypeProperty;
import edu.stanford.smi.protegex.owl.model.OWLModel;
import edu.stanford.smi.protegex.owl.model.OWLNamedClass;
import edu.stanford.smi.protegex.owl.model.OWLObjectProperty;
import edu.stanford.smi.protegex.owl.model.RDFProperty;
import edu.stanford.smi.protegex.owl.model.RDFResource;
import edu.stanford.smi.protegex.owl.model.RDFSClass;
public class CreateClass {
	private OWLModel owlModel;

	public CreateClass(){
		try{
			owlModel = ProtegeOWL.createJenaOWLModel();
			}catch (OntologyLoadException e) {
	            // TODO Auto-generated catch block
	            e.printStackTrace();
	            System.exit(-1);
	        }
	}
	/*public static void main(String args[]){
		//ArrayList<String> range=new ArrayList<String>();
		
		CreateClass tempmodel = new CreateClass();
		tempmodel.AddClass("person","");
		tempmodel.AddClass("person","");
	}*/
	
	public int AddClass(String classname,String superclassname){
		try{
			OWLNamedClass Userdefineclass = owlModel.createOWLNamedClass(classname);
			if(superclassname!="")
			{
				RDFResource oneClass=owlModel.getRDFResource(superclassname);
				Userdefineclass.addSuperclass((RDFSClass) oneClass);
			}
		}catch(Exception e)
		{
			return 2;
		}
		
		
		
		
		return 0;
	}
	
	public int AddDatatypeProper(String propername,String superpropername,Collection<String> domainlist,String range){
		try{OWLDatatypeProperty datatypeProp = owlModel.createOWLDatatypeProperty(propername);
		if(superpropername!="")
		{
			datatypeProp.addSuperproperty((RDFProperty) owlModel.getRDFResource(superpropername));
		}
		if(!domainlist.isEmpty())
		{
			Collection<OWLNamedClass> domain=new HashSet<OWLNamedClass>();
			Iterator<String> dlist=domainlist.iterator();
			if(dlist.hasNext())
			{
				RDFResource oneDataProperty=owlModel.getRDFResource(dlist.next());
				domain.add((OWLNamedClass) oneDataProperty);
			}
			datatypeProp.setDomains(domain);
		}
		if(range.equals("int"))
		{
			datatypeProp.setRange(owlModel.getXSDint());
		}
		else if(range.equals("string"))
		{
			datatypeProp.setRange(owlModel.getXSDstring());
		}
		else if(range.equals("double"))
		{
			datatypeProp.setRange(owlModel.getXSDdouble());
		}
		else if(range.equals("float"))
		{
			datatypeProp.setRange(owlModel.getXSDfloat());
		}
		else if(range.equals("date"))
		{
			datatypeProp.setRange(owlModel.getXSDdate());
		}
		else if(range.equals("boolean"))
		{
			datatypeProp.setRange(owlModel.getXSDboolean());
		}
		else if(range.equals("time"))
		{
			datatypeProp.setRange(owlModel.getXSDtime());
		}
		else
		{
			//��ʾ������Ϣ
		}    
		}
		catch(Exception e)
		{
			return 2;
		}
		return 0;
        }
	
	
	public int AddObjectProper(String propername,String superpropername,Collection<String> domainlist,Collection<String> rangelist){
		try{OWLObjectProperty objectProp = owlModel.createOWLObjectProperty(propername);
		if(superpropername!="")
		{
			objectProp.addSuperproperty((RDFProperty) owlModel.getRDFResource(superpropername));
		}
		if(!domainlist.isEmpty())
		{
			Collection<OWLNamedClass> domain=new HashSet<OWLNamedClass>();
			Iterator<String> dlist=domainlist.iterator();
			while(dlist.hasNext())
			{
				RDFResource oneObjectProperty=owlModel.getRDFResource(dlist.next());
				domain.add((OWLNamedClass) oneObjectProperty);
			}
			objectProp.setDomains(domain);
		}
		if(!rangelist.isEmpty())
		{
			Collection<OWLNamedClass> range=new HashSet<OWLNamedClass>();
			Iterator<String> rlist=rangelist.iterator();
			if(rlist.hasNext())
			{
				RDFResource oneObjectProperty=owlModel.getRDFResource(rlist.next());
				range.add((OWLNamedClass) oneObjectProperty);
			}
			objectProp.setRanges(range);
		}}catch(Exception e)
		{
			return 2;
		}
		return 0;
	}
	
	@SuppressWarnings("unchecked")
	public Collection<String> chooseObProperDomain(String superpropername)
	{
			RDFResource Property=owlModel.getRDFResource(superpropername);
			Collection<OWLNamedClass> domains= ((RDFProperty) Property).getDomains(true);
			Collection<String> dnames=new HashSet<String>();
			Iterator<OWLNamedClass> diterator= domains.iterator();

            if(diterator.hasNext())
			{while(diterator.hasNext())
			{
				OWLNamedClass o=diterator.next();
				dnames.add(o.getLocalName());
			}}
            else
            {
            	Iterator<OWLNamedClass> allclasses=owlModel.listOWLNamedClasses();
            	while(allclasses.hasNext())
    			{
    				OWLNamedClass o=allclasses.next();
    				dnames.add(o.getLocalName());
    			}
            	dnames.add("");
            }
			return dnames;
		
	
	}
	
	@SuppressWarnings("unchecked")
	public Collection<String> chooseObProperRange(String superpropername)
	{

			RDFResource Property=owlModel.getRDFResource(superpropername);
			Collection<OWLNamedClass> ranges= ((RDFProperty) Property).getRanges(true);
			Collection<String> rnames=new HashSet<String>();
			Iterator<OWLNamedClass> riterator= ranges.iterator();

            if(riterator.hasNext())
			{while(riterator.hasNext())
			{
				OWLNamedClass o=riterator.next();
				rnames.add(o.getLocalName());
			}}
            else
            {
            	Iterator<OWLNamedClass> allclasses=owlModel.listOWLNamedClasses();
            	while(allclasses.hasNext())
    			{
    				OWLNamedClass o=allclasses.next();
    				rnames.add(o.getLocalName());
    			}
            	rnames.add("");
            }
			return rnames;
		
		
	}
	
	@SuppressWarnings("unchecked")
	public Collection<String> chooseDaProperDomain(String superpropername)
	{
		if(superpropername!="")
		{
			RDFResource Property=owlModel.getRDFResource(superpropername);
			Collection<OWLNamedClass> domains= ((RDFProperty) Property).getDomains(true);
			Collection<String> dnames=new HashSet<String>();
			Iterator<OWLNamedClass> diterator= domains.iterator();

            if(diterator.hasNext())
			{while(diterator.hasNext())
			{
				OWLNamedClass o=diterator.next();
				dnames.add(o.getLocalName());
			}}
            else
            {
            	Iterator<OWLNamedClass> allclasses=owlModel.listOWLNamedClasses();
            	while(allclasses.hasNext())
    			{
    				OWLNamedClass o=allclasses.next();
    				dnames.add(o.getLocalName());
    			}
            	dnames.add("");
            }
			return dnames;
		}
		else
		{
			Iterator<OWLNamedClass> allclasses=owlModel.listOWLNamedClasses();
			Collection<String> dnames=new HashSet<String>();
			while(allclasses.hasNext())
			{
				OWLNamedClass o=allclasses.next();
				dnames.add(o.getLocalName());
			}
			dnames.add("");
			return dnames;
		}
		
	}
	public Collection<String> chooseDaProperRange()
	{
		Collection<String> ranges=new HashSet<String>();
		ranges.add("int");
		ranges.add("string");
		ranges.add("double");
		ranges.add("float");
		ranges.add("boolean");
		ranges.add("date");
		ranges.add("time");
		return  ranges;
	
	}
	
	 

	
	

}
