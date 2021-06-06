<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	StringBuilder path = new StringBuilder(request.getContextPath());
	path.append("/");
%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>getBoardList.jsp 게시판 구현 - [WEB-INF]</title>
<jsp:include page="../../../common/commonUIglobal.jsp" flush= "false"/>
</head>
<body>
<table class = "easyui-datagrid" data-options = "url:'./jsonGetBoardList.sp4', title:'게시판-[WEB-INF]',toolbar:'#tb_board'" style = "width:500px;height:350px">
    <thead>
        <tr>
            <th data-options="field:'BM_NO'">글번호</th>
            <th data-options="field:'BM_TITLE'">글제목</th>
            <th data-options="field:'BM_DATE'">작성일</th>
            <th data-options="field:'BS_FILE'">첨부파일</th>
            <th data-options="field:'BM_HIT'">조회수</th>
        </tr>
    </thead>
</table>
<div id="tb_board" style="padding:2px 5px;">
        <a href="#" class="easyui-linkbutton" iconCls="icon-search" plain="true">조회</a>
        <a href="#" class="easyui-linkbutton" iconCls="icon-add" plain="true">입력</a>
        <a href="#" class="easyui-linkbutton" iconCls="icon-edit" plain="true">수정</a>
        <a href="#" class="easyui-linkbutton" iconCls="icon-cancel" plain="true">삭제</a>
</div>
</body>
</html>