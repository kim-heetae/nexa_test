<%@ page import = "org.apache.commons.logging.*" %>
<%@ page import = "com.nexacro17.xapi.data.*" %>
<%@ page import = "com.nexacro17.xapi.tx.*" %>
<%@ page import = "java.util.*" %>
<%@ page import = "java.sql.*" %>
<%@ page import = "java.io.*" %>
<%@ page contentType = "text/xml; charset=UTF-8" %>

<%
// PlatformData
PlatformData out_pData = new PlatformData();
// String sDept = (request.getParameter("sDept") == null) ? "" : request.getParameter("sDept");
	
int    nErrorCode  = 0;
String strErrorMsg = "START";

try {    
	/******* JDBC Connection *******/
	Connection conn = null;
	Statement  stmt = null;
	ResultSet  rs   = null;
	
	try { 
		Class.forName("oracle.jdbc.driver.OracleDriver");
		conn = DriverManager.getConnection("jdbc:oracle:thin:@127.0.0.1:1521:orcl11","scott", "tiger");

		stmt = conn.createStatement();
	  
		/******* SQL ************/
		String SQL;
		SQL  = "SELECT D.DEPTNO    \n" +
				"    , D.DNAME    \n" +
			   "     , D.LOC  \n" +
			   "     , E.EMPNO    \n" +
			   "     , E.ENAME    \n" +
			   "  FROM DEPT D, EMP E     \n" +
			   " WHERE E.DEPTNO = D.DEPTNO        \n" ;
		
		
		rs = stmt.executeQuery(SQL);
	  
		DataSet ds = new DataSet("out_dept");
		ds.addColumn("DEPTNO" 	  ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("DNAME" 	  ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("LOC"  ,DataTypes.STRING  ,(short)50 );
		ds.addColumn("EMPNO"    ,DataTypes.STRING  ,(short)10 );
		ds.addColumn("ENAME"    ,DataTypes.STRING  ,(short)10 );

		while(rs.next())
		{
			int row = ds.newRow();
			ds.set(row ,"DEPTNO"     ,rs.getString("DEPTNO")  );
			ds.set(row ,"DNAME"     ,rs.getString("DNAME"));
			ds.set(row ,"LOC"       ,rs.getString("LOC")  );
			ds.set(row ,"EMPNO"       ,rs.getString("EMPNO")  );
			ds.set(row ,"ENAME"       ,rs.getString("ENAME")  );
// 			row = row+1;
		}
		  
		// #1 dataset -> PlatformData
		out_pData.addDataSet(ds);
// 		System.out.print("값 출력"+ds.getString(row, 0));

		// #2 dataset -> PlatformData
		//DataSetList dsList = out_pData.getDataSetList();
		//dsList.add(ds);

		nErrorCode  = 0;
		strErrorMsg = "SUCC";
		
	} catch (SQLException e) {
		nErrorCode = -1;
		strErrorMsg = e.getMessage();
	}    
	
	/******** JDBC Close ********/
	if ( stmt != null ) try { stmt.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
	if ( conn != null ) try { conn.close(); } catch (Exception e) {nErrorCode = -1; strErrorMsg = e.getMessage();}
			
	} catch (Throwable th) {
		nErrorCode = -1;
		strErrorMsg = th.getMessage();
}

VariableList varList = out_pData.getVariableList();
varList.add("ErrorCode", nErrorCode);
varList.add("ErrorMsg" , strErrorMsg);


/*
Variable varErrCD = new Variable("ErrorCode");
varErrCD.set(nErrorCode);

Variable varErrMSG = new Variable("ErrorMsg");
varErrMSG.set(strErrorMsg);

out_pData.addVariable(varErrCD);
out_pData.addVariable(varErrMSG);
*/

HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
pRes.setData(out_pData);

// Send data
pRes.sendData();
%>
