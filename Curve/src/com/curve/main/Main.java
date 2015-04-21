package com.curve.main;

import java.io.File;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

/**
 * <pre>
 * 
 *  Accela Automation
 *  File: Main.java
 * 
 *  Accela, Inc.
 *  Copyright (C): 2015
 * 
 *  Description:
 *  TODO
 * 
 *  Notes:
 * 	$Id: Main.java 72642 2009-01-01 20:01:57Z ACHIEVO\beyond.lu $ 
 * 
 *  Revision History
 *  &lt;Date&gt;,			&lt;Who&gt;,			&lt;What&gt;
 *  2015年4月17日		beyond.lu		Initial.
 *  
 * </pre>
 */
public class Main
{

	public Main()
	{
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) throws IOException
	{
		File file = new File("F:\\curve\\2015-4-15-9-48-6.log");

		StringBuilder sb = new StringBuilder();
		String s ="";
		BufferedReader br = new BufferedReader(new FileReader(file));

		while( (s = br.readLine()) != null) {
		sb.append(s + "\n");
		}

		br.close();
		String str = sb.toString();

	}

}

/*
*$Log: av-env.bat,v $
*/