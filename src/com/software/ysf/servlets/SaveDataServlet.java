package com.software.ysf.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class SaveDataServlet
 */
@WebServlet("/SaveDataServlet")
public class SaveDataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public SaveDataServlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String parameters=request.getParameter("Properties");
		System.out.println(parameters);
		String[] properties=parameters.split("#");
		response.setContentType("text/html;charset=GB2312");
		PrintWriter out=response.getWriter();
		out.println("<html><head><title>SaveData</title></head>");
		out.println("<body>");
		for (int i = 0; i < properties.length; i++) {
			out.println("<div>"+properties[i]+"</div>");
			
		}
		out.println("</body></html>");
		out.close();		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
}
