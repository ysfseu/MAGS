package OWLDataTypeProperty;
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
	public int AddDatatypeProper(String propername,String[] superpropername,Collection<String> domainlist,String range){
		try{
			OWLDatatypeProperty datatypeProp = jenaOwlModel.createOWLDatatypeProperty(propername);
			if(superpropername!=null)
			{
				for(int i=0;i<superpropername.length;i++){
					RDFResource oneDatatypeProp=jenaOwlModel.getRDFResource(superpropername[i]);
					datatypeProp.addSuperproperty((RDFProperty) oneDatatypeProp);
				}
			}
			if(!domainlist.isEmpty())
			{
				Collection<OWLNamedClass> domain=new HashSet<OWLNamedClass>();
				Iterator<String> dlist=domainlist.iterator();
				while(dlist.hasNext())
				{
					RDFResource oneDataProperty=jenaOwlModel.getRDFResource(dlist.next());
					domain.add((OWLNamedClass) oneDataProperty);
				}
				datatypeProp.setDomains(domain);
			}
			if(range.equals("int"))
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
				return 3;
			}    
		}catch(Exception e)
		{
			return 2;
		}
		return 0;
	}
	public Collection<String> chooseDaProperDomain(Collection<String> superpropernames)
	{
		if(!(superpropernames.isEmpty()))
		{
			Iterator<String> sunames=superpropernames.iterator();
			Collection<String> dnames=new HashSet<String>();
			while(sunames.hasNext())
			{
				RDFResource Property=jenaOwlModel.getRDFResource(sunames.next());
				@SuppressWarnings("unchecked")
				Collection<OWLNamedClass> domains= ((RDFProperty) Property).getDomains(true);
			
				Iterator<OWLNamedClass> diterator= domains.iterator();

				if(diterator.hasNext())
				{
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
				else
				{
					@SuppressWarnings("unchecked")
					Iterator<OWLNamedClass> allclasses=jenaOwlModel.listOWLNamedClasses();
					while(allclasses.hasNext())
					{
						OWLNamedClass o=allclasses.next();
						dnames.add(o.getLocalName());
					}
					dnames.add("");
				}
			
			}
			return dnames;
		}
		else
		{
			@SuppressWarnings("unchecked")
			Iterator<OWLNamedClass> allclasses=jenaOwlModel.listOWLNamedClasses();
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
