package OWLObjectProperty;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import edu.stanford.smi.protegex.owl.jena.JenaOWLModel;
import edu.stanford.smi.protegex.owl.model.OWLNamedClass;
import edu.stanford.smi.protegex.owl.model.OWLObjectProperty;
import edu.stanford.smi.protegex.owl.model.RDFProperty;
import edu.stanford.smi.protegex.owl.model.RDFResource;

public class OWLObjectPro{
	private JenaOWLModel jenaOwlModel;
	public OWLObjectPro(JenaOWLModel jenaOwlModel){
		this.jenaOwlModel=jenaOwlModel;
	}
	public String getObjectProperty(){
		ArrayList<String> ObjectPropertyNames=new ArrayList<String>();
		try{
			@SuppressWarnings("unchecked")
			Collection<OWLObjectProperty> obProperties = jenaOwlModel.getUserDefinedOWLObjectProperties();
	 		Iterator<OWLObjectProperty> i=obProperties.iterator();
			while(i.hasNext()){
				OWLObjectProperty property =i.next();
				if(property.getLocalName()!=null)
				{
					ObjectPropertyNames.add(property.getLocalName());
				}
			}  
		}catch(Exception e){
			e.getStackTrace();
			return null;
		}
		String AllObjectProperties="";
        for(int i=0;i<ObjectPropertyNames.size();i++)
        {

        	AllObjectProperties=AllObjectProperties+ObjectPropertyNames.get(i)+"#";
        }
        return AllObjectProperties;
	}
	public int AddObjectProperty(String ObjectPropertyName,String[] superObjectPropertyName,Collection<String> domainlist,Collection<String> rangelist){
		try{
			OWLObjectProperty objectProp = jenaOwlModel.createOWLObjectProperty(ObjectPropertyName);
			if(superObjectPropertyName!=null)
			{
				for(int i=0;i<superObjectPropertyName.length;i++){
					RDFResource oneObjectProperty=jenaOwlModel.getRDFResource(superObjectPropertyName[i]);
					objectProp.addSuperproperty((RDFProperty) oneObjectProperty);
				}
			}
			if(!domainlist.isEmpty())
			{
				Collection<OWLNamedClass> domain=new HashSet<OWLNamedClass>();
				Iterator<String> dlist=domainlist.iterator();
				while(dlist.hasNext())
				{
					RDFResource oneObjectProperty=jenaOwlModel.getRDFResource(dlist.next());
					domain.add((OWLNamedClass) oneObjectProperty);
				}
				objectProp.setDomains(domain);
			}
			if(!rangelist.isEmpty())
			{
				Collection<OWLNamedClass> range=new HashSet<OWLNamedClass>();
				Iterator<String> rlist=rangelist.iterator();
				while(rlist.hasNext())
				{
					RDFResource oneObjectProperty=jenaOwlModel.getRDFResource(rlist.next());
					range.add((OWLNamedClass) oneObjectProperty);
				}
				objectProp.setRanges(range);
			}
		}catch(Exception e){
			return 1;
		}
		return 0;
	}
	
	public Collection<String> chooseObProperDomain(Collection<String> superpropernames)
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
						Iterator<OWLNamedClass> subClses = cls.getSubclasses(true).iterator(); subClses.hasNext();){
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
	public Collection<String> chooseObProperRange(Collection<String> superpropernames)
	{
			Iterator<String> sunames=superpropernames.iterator();
			Collection<String> rnames=new HashSet<String>();
			while(sunames.hasNext())
			{
			RDFResource Property=jenaOwlModel.getRDFResource(sunames.next());
			@SuppressWarnings("unchecked")
			Collection<OWLNamedClass> ranges= ((RDFProperty) Property).getRanges(true);
			
			Iterator<OWLNamedClass> riterator= ranges.iterator();

            if(riterator.hasNext())
			{
            	while(riterator.hasNext())
            	{
            		OWLNamedClass cls=riterator.next();
            		rnames.add(cls.getLocalName());
            		for(@SuppressWarnings("unchecked")
            			Iterator<OWLNamedClass> subClses = cls.getSubclasses(true).iterator(); subClses.hasNext();){
            			OWLNamedClass subCls = (OWLNamedClass)subClses.next();
            			rnames.add(subCls.getLocalName());
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
    				rnames.add(o.getLocalName());
    			}
            	rnames.add("");
            }
			
		}
		return rnames;
			
	}
	public int deleteObjectPro(String ObjectProName){
		try{
			RDFResource ObjectPro=jenaOwlModel.getRDFResource(ObjectProName);
			ObjectPro.delete();
		}catch(Exception e){
			e.getStackTrace();
			return 1;
		}
		return 0;
			
	}

}
