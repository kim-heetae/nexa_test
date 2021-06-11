(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("empManager");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"empno\" type=\"STRING\" size=\"256\"/><Column id=\"ename\" type=\"STRING\" size=\"256\"/><Column id=\"sal\" type=\"STRING\" size=\"256\"/><Column id=\"ck\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"empno\">9001</Col><Col id=\"ename\">김유신</Col><Col id=\"sal\">3000</Col></Row><Row><Col id=\"empno\">9002</Col><Col id=\"ename\">이성계</Col><Col id=\"sal\">3200</Col></Row><Row><Col id=\"empno\">9003</Col><Col id=\"ename\">이순신</Col><Col id=\"sal\">3400</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"deptno\" type=\"STRING\" size=\"256\"/><Column id=\"dname\" type=\"STRING\" size=\"256\"/><Column id=\"loc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_sel","0","60","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("EMP SELECT");
            this.addChild(obj.name, obj);

            obj = new Grid("gr_emp","0","120","320","320",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"bind:ck\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"사원명\"/><Cell col=\"3\" text=\"급여\"/></Band><Band id=\"body\"><Cell text=\"bind:ck\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:EMPNO\"/><Cell col=\"2\" text=\"bind:ENAME\"/><Cell col=\"3\" text=\"bind:SAL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","440","120","240","580",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_dept");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPTNO\"/><Cell col=\"1\" text=\"DNAME\"/><Cell col=\"2\" rowspan=\"2\" text=\"LOC\"/><Cell row=\"1\" text=\"EMPNO\"/><Cell row=\"1\" col=\"1\" text=\"ENAME\"/></Band><Band id=\"body\" border=\"1px groove\"><Cell text=\"bind:DEPTNO\"/><Cell col=\"1\" text=\"bind:DNAME\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:LOC\"/><Cell row=\"1\" text=\"bind:EMPNO\"/><Cell row=\"1\" col=\"1\" text=\"bind:ENAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_sel","440","60","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("DEPT SELECT");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("empManager.xfdl", function() {

        this.btn_sel_onclick = function(obj,e)
        {
        	alert("조회 버튼 호출 성공");
        	this.transaction("svcSelect"
        	,"SvcURL::select_emp.jsp"
        	,""
        	,"ds_emp=out_emp"
        	,""
        	,"fn_callback");
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG)
        {
        	alert("fn_callback 호출 성공");
        	if(errCD < 0){
        		this.alert("Error: " + errMSG);
        		return;
        	}
        	if(svcID == "svcSelect"){
        		this.alert("Retrieve Success!!!");
        	}
        };
        this.btn_dept_sel_onclick = function(obj,e)
        {
        	alert("DEPT조회 버튼 호출 성공");
        	this.transaction("svcSelect"
        	,"SvcURL::select_dept.jsp"
        	,""
        	,"ds_dept=out_dept"
        	,""
        	,"fn_callback");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_sel.addEventHandler("onclick",this.btn_sel_onclick,this);
            this.btn_dept_sel.addEventHandler("onclick",this.btn_dept_sel_onclick,this);
        };

        this.loadIncludeScript("empManager.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
