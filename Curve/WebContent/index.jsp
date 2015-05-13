<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="js/data.js"></script>
<script type="text/javascript" src="js/echarts.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</head>
<body>
<div>bug money</div>
<div id="show">bugmoney</div>
<div>all money</div>
<div id="all">bugmoney</div>
<table> 
<form>
<tr> 
<td> 
path： 
</td> 
<td> 
<input id="Path" type="text" name="Path" style="width:400px" value="F:\\curve\\2015-4-9-22-46-42.log"> 
<div id="div1" style="display:inline"> 
</div> 
</td> 
</tr> 
<tr align="center"> 
<td align="center"> 
<input class="submit" type="submit" value="提交" name="submit" >
</td> 
</tr> 
</form>
</table>
 <div id="main" style="height:400px"></div>
 <iframe width=100% height=500 marginwidth=0 marginheight=0 src="TimeLine.jsp"></iframe>

</body>
</html>