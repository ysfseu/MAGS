package OWLInit;

import java.net.URI;
import java.net.URL;

import edu.stanford.smi.protegex.owl.jena.JenaOWLModel;

public class StoreOWLModel {
	private JenaOWLModel jenaOwlModel;
	public StoreOWLModel(JenaOWLModel jenaOwlModel){
		this.jenaOwlModel=jenaOwlModel;
	}
	public int storeModel(URI fileName){
		try{
			jenaOwlModel.save(fileName);
		}catch(Exception e)
		{
			e.getStackTrace();
			return -1;
		}
		return 0;
	}

}
