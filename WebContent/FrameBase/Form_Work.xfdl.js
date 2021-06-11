(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"captioncolumn\" size=\"256\"/><Column id=\"checkboxcolumn\" size=\"256\"/><Column id=\"enablecolumn\" size=\"256\"/><Column id=\"idcolumn\" size=\"256\"/><Column id=\"levelcolumn\" size=\"256\"/><Column id=\"userdatacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"captioncolumn\">Wines</Col><Col id=\"levelcolumn\">0</Col><Col id=\"idcolumn\">A</Col><Col id=\"userdatacolumn\">19</Col></Row><Row><Col id=\"captioncolumn\">White Wines</Col><Col id=\"levelcolumn\">1</Col><Col id=\"idcolumn\">A-1</Col></Row><Row><Col id=\"captioncolumn\">Red Wines</Col><Col id=\"levelcolumn\">1</Col><Col id=\"idcolumn\">A-2</Col></Row><Row><Col id=\"captioncolumn\">Spirits</Col><Col id=\"levelcolumn\">0</Col><Col id=\"idcolumn\">B</Col><Col id=\"userdatacolumn\">19</Col></Row><Row><Col id=\"captioncolumn\">Vodka</Col><Col id=\"levelcolumn\">1</Col><Col id=\"idcolumn\">B-1</Col></Row><Row><Col id=\"captioncolumn\">Plain</Col><Col id=\"levelcolumn\">2</Col><Col id=\"idcolumn\">B-1-1</Col></Row><Row><Col id=\"captioncolumn\">Flavoured</Col><Col id=\"levelcolumn\">2</Col><Col id=\"idcolumn\">B-1-2</Col></Row><Row><Col id=\"captioncolumn\">Cognac</Col><Col id=\"levelcolumn\">1</Col><Col id=\"idcolumn\">B-2</Col></Row><Row><Col id=\"captioncolumn\">Rum</Col><Col id=\"levelcolumn\">1</Col><Col id=\"idcolumn\">B-3</Col></Row><Row><Col id=\"captioncolumn\">Teguila</Col><Col id=\"levelcolumn\">1</Col><Col id=\"idcolumn\">B-4</Col></Row><Row><Col id=\"captioncolumn\">Soft Drink</Col><Col id=\"levelcolumn\">0</Col><Col id=\"idcolumn\">C</Col></Row><Row><Col id=\"captioncolumn\">Coke</Col><Col id=\"levelcolumn\">1</Col><Col id=\"idcolumn\">C-1</Col></Row><Row><Col id=\"captioncolumn\">Juice</Col><Col id=\"levelcolumn\">1</Col><Col id=\"idcolumn\">C-2</Col></Row><Row><Col id=\"captioncolumn\">Age</Col><Col id=\"idcolumn\">D</Col><Col id=\"levelcolumn\">0</Col></Row><Row><Col id=\"captioncolumn\">Under 19</Col><Col id=\"idcolumn\">D-1</Col><Col id=\"levelcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">19+</Col><Col id=\"checkboxcolumn\">true</Col><Col id=\"idcolumn\">D-2</Col><Col id=\"levelcolumn\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Menu("Menu00","175","71","435","69",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset00");
            obj.set_captioncolumn("captioncolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_enablecolumn("enablecolumn");
            obj.set_idcolumn("idcolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_userdatacolumn("userdatacolumn");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1080,670,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
