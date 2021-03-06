package web.mvc;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

import com.google.gson.Gson;
import com.util.HashMapBinder;

public class Board41Controller extends MultiActionController{
//	<bean id = "board-controller">
//		<property name = "boardLogic">
//	<bean/>
	Logger logger = Logger.getLogger(Board41Controller.class);
	private Board41Logic boardLogic = null;

	public void setBoardLogic(Board41Logic boardLogic) {
		logger.info("setBoardLogic 호출성공");
		this.boardLogic = boardLogic;
	}
	//request로 유지하는 방법
	//메소드를 정의하는것은 가능하다.
	//파라미터가 없이도 괜찮은가? - req, res가 없을시 메소드를 찾지못해 실행되지 않는다. - req,res를 파라미터로 가지고있는 메소드를 찾아간다.
	// 이 사실 하나만 보더라도 이것은 의존적이다 라고 이야기 할 수 있지 않을까? - 여러분의 생각은 무엇입니까?
	// 최초 나는 ModelAndView를 사용했습니다. 이것은 MultiActionController를 상속 받았을 때
	// 우리가 doGet에서는 누릴 수 없었던 반환 타입을 바꾸어 쓸 수 있는 혜택을 누릴 수 있게 된 것이다.
	// 여기에 동의 하나? 동의 한다면 ModelAndView의 scope를 request로 한 이유로 생각해보자.
	// 이 생각의 끝에 forward로 페이지를 부른 다는 사실을 인지하게 될 것이다.
	// ModelAndView가 있는데 굳이 파라미터에 req, res가 있어야만 한다. 그렇지 않으면 매핑을 해주지 않을 것이라고
	// 말하는 것은 앞뒤가 맞지 않는 것이다. 이상한 태도를 보이는 것이다.
	// 굳이 없어도 되는 것을 형식적으로 가지고 있어야 한다. doGet안에 있는 것이니까 너도 있어야 해줄거야? 라고 말하는 것이다.
	public ModelAndView getBoardList(HttpServletRequest req, HttpServletResponse res) 
	throws Exception
	{
		logger.info("Board41Controller - getBoardList(req, res) 호출성공");
		HashMapBinder hmb = new HashMapBinder(req);
		Map<String, Object> target = new HashMap<>();
		hmb.bind(target);
		List<Map<String, Object>> boardList = null;
//		boardList = new ArrayList<>();
//		Map<String, Object> rmap = new HashMap<>();
//		rmap.put("mem_id", "hit");
//		rmap.put("mem_pw", "123");
//		rmap.put("mem_name", "김희태");
//		boardList.add(rmap);
//		
//		rmap = new HashMap<>();
//		rmap.put("mem_id", "apple");
//		rmap.put("mem_pw", "456");
//		rmap.put("mem_name", "이순신");
//		boardList.add(rmap);
//		
//		rmap = new HashMap<>();
//		rmap.put("mem_id", "tomato");
//		rmap.put("mem_pw", "789");
//		rmap.put("mem_name", "강감찬");
//		boardList.add(rmap);
		
		boardList = boardLogic.getBoardList(target);
//		boardLogic.getBoardList(target);
		logger.info("boardList : " + boardList);
		ModelAndView mav = new ModelAndView();
		String name = "이순신";
		mav.setViewName("board/getBoardList");
		mav.addObject("boardList", boardList);
		logger.info("boardList1 : " + boardList);
//		HttpSession session = req.getSession();
//		session.setAttribute("name", name);
		RequestDispatcher view = req.getRequestDispatcher("getBoardList.jsp");
		view.forward(req, res);//이 부분이 있다면 webcontent - board경로를 탄다// 없다면 web-inf - views - board경로를 탄다
		
//		Gson gson = new Gson();
//		res.setContentType("application/json;charset=utf-8");
//		String imsi = gson.toJson(target);
//		PrintWriter out = res.getWriter();
//		out.print(target);
		return mav;
	}
	public ModelAndView getBoardList() {//파라미터로 req , res가 없기때문에 실행되지 못한다.
		logger.info("Board41Controller - getBoardList() 호출성공");
		ModelAndView mav = new ModelAndView();
		return mav;
	}
	//json으로 내보내주는 방법 - @RestController:String , @Controller:void or ModelAndView or String
	//@RestController
	public void jsonGetBoardList(HttpServletRequest req, HttpServletResponse res) 
			throws Exception
	{
		logger.info("Board41Controller - jsongetBoardList 호출성공");
		
		List<Map<String, Object>> boardList = null;
		boardList = boardLogic.getBoardList(null);
//		boardList = new ArrayList<>();
//		Map<String, Object> rmap = new HashMap<>();
//		rmap.put("mem_id", "hit");
//		rmap.put("mem_pw", "123");
//		rmap.put("mem_name", "김희태");
//		boardList.add(rmap);
//		
//		rmap = new HashMap<>();
//		rmap.put("mem_id", "apple");
//		rmap.put("mem_pw", "456");
//		rmap.put("mem_name", "이순신");
//		boardList.add(rmap);
//		
//		rmap = new HashMap<>();
//		rmap.put("mem_id", "tomato");
//		rmap.put("mem_pw", "789");
//		rmap.put("mem_name", "강감찬");
//		boardList.add(rmap);
		
//		RequestDispatcher view = req.getRequestDispatcher("jsonGetBoardList.jsp");
//		view.forward(req, res);//이 부분이 있다면 webcontent - board경로를 탄다// 없다면 web-inf - views - board경로를 탄다
		Gson gson = new Gson();
		String imsi = gson.toJson(boardList);
		
		PrintWriter out = res.getWriter();
		res.setContentType("application/json;charset=utf-8");
		out.print(imsi);
	}
}
