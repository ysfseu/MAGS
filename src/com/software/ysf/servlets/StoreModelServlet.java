package com.software.ysf.servlets;

import java.io.IOException;
import java.net.URISyntaxException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.software.ysf.owl.MyModelFactory;
import com.software.ysf.owl.StoreOWLModel;

import edu.stanford.smi.protegex.owl.jena.JenaOWLModel;

/**
 * Servlet implementation class StoreModelServlets
 */
@WebServlet("/StoreModelServlets")
public class StoreModelServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public StoreModelServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String fileName=request.getParameter("fileName");
		JenaOWLModel jenaOwlModel=MyModelFactory.getJenaModel();
		StoreOWLModel storeOWLModel = new StoreOWLModel(jenaOwlModel);
		try {
			storeOWLModel.storeModel((getServletContext().getResource("/WEB-INF/storedData/"+fileName)).toURI());
		} catch (URISyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("Store Model Error");
			
		}
		
	}

}
