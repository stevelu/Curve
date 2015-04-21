package com.curve.main;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class GetDataServlet
 */
public class GetDataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetDataServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String Path=request.getParameter("path");
		File file = new File(Path);

		StringBuilder cash = new StringBuilder();
		StringBuilder earn = new StringBuilder();
		StringBuilder time = new StringBuilder();
		cash.append("[");
		earn.append("[");
		time.append("[");
		String s ="";
		BufferedReader br = new BufferedReader(new FileReader(file));

		while( (s = br.readLine()) != null) {
			if(s.contains("cash"))
			{
				cash.append(s.substring(s.indexOf("cash:")+6) + ",");
				time.append("\""+s.substring(0, 8) + "\",");
			}
			if(s.contains("earn"))
			{
				earn.append(s.substring(s.indexOf("earn:")+6) + ",");
			}


		}
		cash.deleteCharAt(cash.lastIndexOf(","));
		cash.append("]");
		earn.deleteCharAt(earn.lastIndexOf(","));
		earn.append("]");
		time.deleteCharAt(time.lastIndexOf(","));
		time.append("]");

		br.close();
		/*String returnJson = "[{cash:'"+ cash +"',"+"earn:'"+earn+"'time:'"+time+"'}]";*/
		String returnJson = "{\"cash\":"+ cash +","+"\"earn\":"+earn+","+"\"time\":"+time+"}";
	
/*		RequestDispatcher requestDispatcher = request
				.getRequestDispatcher("/index.jsp");
		requestDispatcher.forward(request, response);*/
		
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.println(returnJson);
		out.flush();
		out.close();
	}

}
