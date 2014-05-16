package com.software.ysf.owl;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import edu.stanford.smi.protegex.owl.jena.JenaOWLModel;
import edu.stanford.smi.protegex.owl.model.OWLDatatypeProperty;
import edu.stanford.smi.protegex.owl.model.OWLNamedClass;
import edu.stanford.smi.protegex.owl.model.RDFProperty;
import edu.stanford.smi.protegex.owl.model.RDFResource;

public class OWLDatatypePro {
	private JenaOWLModel jenaOwlModel;
	public OWLDatatypePro(JenaOWLModel jenaOwlModel){
		this.jenaOwlModel=jenaOwlModel;
	}
	public String getDatatypeProperty(){
		ArrayList<String> DatatypePropertyNames=new ArrayList<String>();
		try{
			@SuppressWarnings("unchecked")
			Collection<OWLDatatypeProperty> dataProperties = jenaOwlModel.getUserDefinedOWLDatatypeProperties();
	 		Iterator<OWLDatatypeProperty> i=dataProperties.iterator();
			while(i.hasNext()){
				OWLDatatypeProperty property =i.next();
				if(property.getLocalName()!=null)
				{
					DatatypePropertyNames.add(property.getLocalName());
				}
			}  
		}catch(Exception e){
			e.getStackTrace();
			return null;
		}
		String AllDatatypeProperties="";
        for(int i=0;i<DatatypePropertyNames.size();i++)
        {

        	AllDatatypeProperties=AllDatatypeProperties+DatatypePropertyNames.get(i)+"#";
        }
        return AllDatatypeProperties;
	}
	public int AddDatatypeProper(String propername,String[] superpropername,String[] domainlist,String range){
		try{
			OWLDatatypeProperty datatypeProp = jenaOwlModel.createOWLDatatypeProperty(propername);
			if(superpropername!=null)
			{
				for(int i=0;i<superpropername.length;i++){
					RDFResource oneDatatypeProp=jenaOwlModel.getRDFResource(superpropername[i]);
					datatypeProp.addSuperproperty((RDFProperty) oneDatatypeProp);
				}
			}
			else
			{
				return 3;
			}
			if(domainlist!=null)
			{
				Collection<OWLNamedClass> domain=new HashSet<OWLNamedClass>();
				//Iterator<String> dlist=domainlist.iterator();
				for(int i=0;i<domainlist.length;i++)
				{
					RDFResource oneDataProperty=jenaOwlModel.getRDFResource(domainlist[i]);
					domain.add((OWLNamedClass) oneDataProperty);
				}
				datatypeProp.setDomains(domain);
			}
			if(range==null)
			{
				return 0;
			}
			else if(range.equals("int"))
			{
				datatypeProp.setRange(jenaOwlModel.getXSDint());
			}
			else if(range.equals("string"))
			{
				datatypeProp.setRange(jenaOwlModel.getXSDstring());
			}
			else if(range.equals("double"))
			{
				datatypeProp.setRange(jenaOwlModel.getXSDdouble());
			}
			else if(range.equals("float"))
			{
				datatypeProp.setRange(jenaOwlModel.getXSDfloat());
			}
			else if(range.equals("date"))
			{
				datatypeProp.setRange(jenaOwlModel.getXSDdate());
			}
			else if(range.equals("boolean"))
			{
				datatypeProp.setRange(jenaOwlModel.getXSDboolean());
			}
			else if(range.equals("time"))
			{
				datatypeProp.setRange(jenaOwlModel.getXSDtime());
			}
			else
			{
				return 2;
			}    
		}catch(Exception e)
		{
			return 1;
		}
		return 0;
	}
	public Collection<String> chooseDtProperDomain(String [] superpropernames)
	{
		Collection<String> dnames=new HashSet<String>();
		if(superpropernames!=null)
		{
			//Iterator<String> sunames=superpropernames.iterator();	
			for(int i=0;i<superpropernames.length;i++)
			{
				RDFResource Property=jenaOwlModel.getRDFResource(superpropernames[i]);
				@SuppressWarnings("unchecked")
				Collection<OWLNamedClass> domains= ((RDFProperty) Property).getDomains(true);
			
				Iterator<OWLNamedClass> diterator= domains.iterator();
				while(diterator.hasNext())
				{
					OWLNamedClass cls=diterator.next();
					dnames.add(cls.getLocalName());
					for(@SuppressWarnings("unchecked")
							Iterator<OWLNamedClass> subClses = cls.getSubclasses(true).iterator(); subClses.hasNext();)
					{
						OWLNamedClass subCls = (OWLNamedClass)subClses.next();
						dnames.add(subCls.getLocalName());
					}

				}
			}
			return dnames;
		}
		else
		{
			@SuppressWarnings("unchecked")
			Collection<OWLNamedClass> allclasses=jenaOwlModel.getUserDefinedOWLNamedClasses();
			Iterator<OWLNamedClass> iter=allclasses.iterator();
			while(iter.hasNext())
			{
				OWLNamedClass oneclass=iter.next();
				if(oneclass.getLocalName()!=null)
		 	    {
					
					dnames.add(oneclass.getLocalName());
		 	    }
			}
			//dnames.add("");
			return dnames;
		}
	}
	public Collection<String> chooseDtProperRange()
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
	public int deleteDatatypePro(String DatatypeProName){
		try{
			RDFResource DatatypePro=jenaOwlModel.getRDFResource(DatatypeProName);
			DatatypePro.delete();
		}catch(Exception e){
			e.getStackTrace();
			return 1;
		}
		return 0;
			
	}

}
