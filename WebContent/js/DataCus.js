/**
 * 
 */


//随着节点位置的改变动态改变箭头
Raphael.fn.drawArr = function (obj) {
	var point = getStartEnd(obj.obj1, obj.obj2);
	var path1 = getArr(point.start.x, point.start.y, point.end.x, point.end.y, 8);

	if (obj.arrPath){
  		obj.arrPath.attr({ path: path1 });
	} else {
  		obj.arrPath = this.path(path1);
	}
	return obj;
};
//获取组成箭头的三条线段的路径
function getArr(x1, y1, x2, y2, size) {
              var angle = Raphael.angle(x1, y1, x2, y2);//得到两点之间的角度
              var a45 = Raphael.rad(angle - 45);//角度转换成弧度
              var a45m = Raphael.rad(angle + 45);
              var x2a = x2 + Math.cos(a45) * size;
              var y2a = y2 + Math.sin(a45) * size;
              var x2b = x2 + Math.cos(a45m) * size;
              var y2b = y2 + Math.sin(a45m) * size;
              var result = ["M", x1, y1, "L", x2, y2, "L", x2a, y2a, "M", x2, y2, "L", x2b, y2b];
              return result;
            }
function getStartEnd(obj1, obj2) {
            var bb1 = obj1.getBBox(),
            bb2 = obj2.getBBox();
            var p = [
            { x: bb1.x + bb1.width / 2, y: bb1.y - 1 },
            { x: bb1.x + bb1.width / 2, y: bb1.y + bb1.height + 1 },
            { x: bb1.x - 1, y: bb1.y + bb1.height / 2 },
            { x: bb1.x + bb1.width + 1, y: bb1.y + bb1.height / 2 },
            { x: bb2.x + bb2.width / 2, y: bb2.y - 1 },
            { x: bb2.x + bb2.width / 2, y: bb2.y + bb2.height + 1 },
            { x: bb2.x - 1, y: bb2.y + bb2.height / 2 },
            { x: bb2.x + bb2.width + 1, y: bb2.y + bb2.height / 2 }
            ];
            var d = {}, dis = [];
            for (var i = 0; i < 4; i++) {
              for (var j = 4; j < 8; j++) {
                var dx = Math.abs(p[i].x - p[j].x),
                dy = Math.abs(p[i].y - p[j].y);
                if (
                 (i == j - 4) ||
                 (((i != 3 && j != 6) || p[i].x < p[j].x) &&
                   ((i != 2 && j != 7) || p[i].x > p[j].x) &&
                   ((i != 0 && j != 5) || p[i].y > p[j].y) &&
                   ((i != 1 && j != 4) || p[i].y < p[j].y))
                 ) {
                  dis.push(dx + dy);
                d[dis[dis.length - 1]] = [i, j];
              }
            }
          }
          if (dis.length == 0) {
            var res = [0, 4];
          } else {
            res = d[Math.min.apply(Math, dis)];
          }
          var result = {};
          result.start = {};
          result.end = {};
          result.start.x = p[res[0]].x;
          result.start.y = p[res[0]].y;
          result.end.x = p[res[1]].x;
          result.end.y = p[res[1]].y;
          return result;
        }


	//拖动节点开始时的事件
draggerRe = function () {
		this.ox = this.attr("x");
		this.oy = this.attr("y");
		this.animate({ "fill-opacity": .2 }, 500);
	};
draggerEl=function(){
    this.ox = this.attr("cx");
    this.oy = this.attr("cy");
    this.animate({ "fill-opacity": .2 }, 500);

}
	//拖动事件
moveRe = function (dx, dy) {
		var att = { x: this.ox + dx, y: this.oy + dy };
		this.attr(att);

    cpaper.getById(this.data("text")).attr(att);
	// $("#test" + this.id).offset({ top: this.oy + dy + 10, left: this.ox + dx + 10 });
  /*
		for (var i = st.length-1; i>=0;i--) {
	  		r.drawArr(st[i]);
		}*/
	};
moveEl = function (dx, dy) {
    var att = { cx: this.ox + dx, cy: this.oy + dy };
    var attText={x: this.ox + dx, y: this.oy + dy}
    this.attr(att);
    //alert(cpaper.getById(this.data("text")).node.tagName);
    cpaper.getById(this.data("text")).attr(attText);
  // $("#test" + this.id).offset({ top: this.oy + dy + 10, left: this.ox + dx + 10 });
  /*
    for (var i = st.length-1; i>=0;i--) {
        r.drawArr(st[i]);
    }*/
  };
	//拖动结束后的事件
up = function () {
		this.animate({ "fill-opacity": 0 }, 500);
	};

function showObjPro()
{
  xmlHttp=GetXmlHttpObject();
  if (xmlHttp==null)
  {
    alert ("Your Browser Don't support AJAX");
    return;
  }
  var url="getObjectProperty?";
  //url=url+"?q="+str;
  url=url+"sid="+Math.random();
  xmlHttp.onreadystatechange=loadObjPro;
  xmlHttp.open("GET",url,true);
  xmlHttp.send(null);
}
var loadObjPro=function()
{
  if (xmlHttp.readyState==4)
  { 
    var ObjProArr=xmlHttp.responseText.split("#");
    for (var i = 0; i < ObjProArr.length; i++) {
     document.getElementById("rdfclass").appendChild(createLi(ObjProArr[i]));
    };
  }
};
function showDtPro()
{
  xmlHttp=GetXmlHttpObject();
  if (xmlHttp==null)
  {
    alert ("Your Browser Don't support AJAX");
    return;
  }
  var url="getDatatypeProperty?";
  //url=url+"?q="+str;
  url=url+"sid="+Math.random();
  xmlHttp.onreadystatechange=loadDtPro;
  xmlHttp.open("GET",url,true);
  xmlHttp.send(null);
}
var loadDtPro=function()
{
  if (xmlHttp.readyState==4)
  { 
    var DtProArr=xmlHttp.responseText.split("#");
    for (var i = 0; i < DtProArr.length; i++) {
      document.getElementById("rdfclass").appendChild(createLi(DtProArr[i]));
    };
  }
};
function showClass()
{


  xmlHttp=GetXmlHttpObject();

  if (xmlHttp==null)
  {
    alert ("Your Browser Don't support AJAX");
    return;
  }

  var url="getClass?";
  //url=url+"?q="+str;
  url=url+"sid="+Math.random();
  xmlHttp.onreadystatechange=loadClass;
  xmlHttp.open("GET",url,true);
  xmlHttp.send(null);
}
var loadClass=function()
{
  if (xmlHttp.readyState==4)
  { 
    var classArr=xmlHttp.responseText.split("#");
    for (var i = 0; i < classArr.length; i++) {
      document.getElementById("rdfclass").appendChild(createLi(classArr[i]));
    };
  }
};
function GetXmlHttpObject()
{
  var xmlHttp=null;
  try
    {
      // Firefox, Opera 8.0+, Safari
      xmlHttp=new XMLHttpRequest();
    }
  catch (e)
    {
    // Internet Explorer
      try
      {
        xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
      }
      catch (e)
      {
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    }
  return xmlHttp;
}

var createLabel = function(type,id,value) {
    var label_var = document.createElement(type);
 
    var label_id = document.createAttribute("id");
    label_id.nodeValue = id;
 
    var label_text = document.createTextNode(value);
 
    label_var.setAttributeNode(label_id);
    //var label_css = document.createAttribute("class");
    //label_css.nodeValue = "select_css";
    l//abel_var.setAttributeNode(label_css);
    label_var.appendChild(label_text);
 
    return label_var;
};
var createLi=function(value){
  var Label_Li=document.createElement("li");
  var li_text= document.createTextNode(value);
  Label_Li.appendChild(li_text);
  
}

var flag = false, timer = null, r_len = 0;
function doubleClick() {
         //clearTimeout(initime);
         //根据状态flag执开展开收缩
  if (flag) {

    document.getElementById("ClassName").value=this.data("Name");
    //alert(this.data("Name"));
    slideright();
    flag=false;
    } else {
      document.getElementById("ClassName").value=this.data("Name");
      slideleft();
      flag=true;
    }
}
function slideright() {

    document.getElementById("properties").style.display="none";
}

//收缩
function slideleft() {

     document.getElementById("properties").style.display="block";
    // $("#common_box").css("z-index",101);
    // $("#common_box").css("background-color","#FFFFCC");
     document.getElementById("properties").style.visibility="visible";

  }
 
function DfName(){
  var msgw,msgh,bordercolor;
  msgw=400;//提示窗口的宽度
  msgh=300;//提示窗口的高度
  titleheight=25 //提示窗口标题高度
  bordercolor="#336699";//提示窗口的边框颜色
  titlecolor="#99CCFF";//提示窗口的标题颜色
  var sWidth,sHeight;
  sWidth=document.body.offsetWidth;//浏览器工作区域内页面宽度
  sHeight=screen.height;//屏幕高度（垂直分辨率）
//背景层（大小与窗口有效区域相同，即当弹出对话框时，背景显示为放射状透明灰色）
  var bgObj=document.createElement("div");//创建一个div对象（背景层）
  //定义div属性，即相当于
  //<div id="bgDiv" style="position:absolute; top:0; background-color:#777; filter:progid:DXImagesTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75); opacity:0.6; left:0; width:918px; height:768px; z-index:10000;"></div>
  bgObj.setAttribute('id','bgDiv');
  bgObj.style.position="absolute";
  bgObj.style.top="0";
  bgObj.style.background="#777";
  bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
  bgObj.style.opacity="0.6";
  bgObj.style.left="0";
  bgObj.style.width=sWidth + "px";
  bgObj.style.height=sHeight + "px";
  bgObj.style.zIndex = "10000";
  document.body.appendChild(bgObj);

  var msgObj=document.createElement("div")//创建一个div对象（提示框层）
  //定义div属性，即相当于
  //<div id="msgDiv" align="center" style="background-color:white; border:1px solid #336699; position:absolute; left:50%; top:50%; font:12px/1.6em Verdana,Geneva,Arial,Helvetica,sans-serif; margin-left:-225px; margin-top:npx; width:400px; height:100px; text-align:center; line-height:25px; z-index:100001;"></div>
  msgObj.setAttribute("id","msgDiv");
  msgObj.setAttribute("align","center");
  msgObj.style.background="white";
  msgObj.style.border="1px solid " + bordercolor;
  msgObj.style.position = "absolute";
  msgObj.style.left = "50%";
  msgObj.style.top = "50%";
  msgObj.style.font="12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
  msgObj.style.marginLeft = "-225px" ;
  msgObj.style.marginTop = -75+document.documentElement.scrollTop+"px";
  msgObj.style.width = msgw + "px";
  msgObj.style.height =msgh + "px";
  msgObj.style.textAlign = "center";
  msgObj.style.lineHeight ="25px";
  msgObj.style.zIndex = "10001";
  var form=document.createElement("form");
  form.innerHTML="Class Name:"
  form.setAttribute("id","defnam");
  var text=document.createElement("input");
  text.setAttribute("type","text");
  text.setAttribute("id","nametext");
  var buttonSubmit=document.createElement("input");
  buttonSubmit.setAttribute("type","button");
  buttonSubmit.setAttribute("value","Submit");
  buttonSubmit.style.width="60px";
  buttonSubmit.style.align="center";
  buttonSubmit.style.marginLeft="250px";
  buttonSubmit.style.marginBottom="10px";
  buttonSubmit.style.background=bordercolor;
  buttonSubmit.style.border="1px solid "+ bordercolor;
  buttonSubmit.style.color="white";
  //buttonSubmit.onclick=saveClass;

  var button=document.createElement("input");//创建一个input对象（提示框按钮）
  //定义input的属性，即相当于
  //<input type="button" align="center" style="width:100px; align:center; margin-left:250px; margin-bottom:10px;" value="close">
  button.setAttribute("type","button");
  button.setAttribute("value","close");
  button.style.width="60px";
  button.style.align="center";
  button.style.marginLeft="250px";
  button.style.marginBottom="10px";
  button.style.background=bordercolor;
  button.style.border="1px solid "+ bordercolor;
  button.style.color="white";
  button.onclick=removeObj;
    function removeObj(){//点击标题栏触发的事件
      document.body.removeChild(bgObj);//删除背景层Div
     // document.getElementById("msgDiv").removeChild(title);//删除提示框的标题栏
      document.body.removeChild(msgObj);//删除提示框层
    }
  document.body.appendChild(msgObj);//在body内添加提示框div对象msgObj
  document.getElementById("msgDiv").appendChild(form);
  document.getElementById("defnam").appendChild(text);
  document.getElementById("defnam").appendChild(button);//在提示框div中添加按钮对象button
  document.getElementById("defnam").appendChild(buttonSubmit);
  buttonSubmit.onclick=function(){
  var textValue=document.getElementById("nametext").value
  if (textValue!="") {
    document.body.removeChild(bgObj);//删除背景层Div
    document.getElementById("defnam").removeChild(button);
    document.getElementById("defnam").removeChild(buttonSubmit);
    //document.getElementById("msgObj").removeChild(buttonSubmit);
   // document.getElementById("msgDiv").removeChild(title);//删除提示框的标题栏
    document.body.removeChild(msgObj);//删除提示框层
    var el=cpaper.ellipse(Math.random()*1153,Math.random()*500, 40,20);
    el.attr({ fill: color, stroke: color, "fill-opacity": 0, "stroke-width": 2, cursor: "move" });
    //alert(dragfun.move);
    el.drag(moveEl,draggerEl,up);
    el.dblclick(doubleClick);
    shapes.push(el);
    //alert(el.getBBox().x);
    text=cpaper.text(el.getBBox().x+20,el.getBBox().y+10,textValue);
    el.data("text",text.id);
    el.data("Name",textValue);
   // alert(el.data("Name"));
    //alert(textValue);
    //elemSet.transform("r10").translate(100, 100);

  }else{
    alert("please input name");
  }

}
  
  

 /* var Mselect=document.createElement("select");
  Mselect.setAttribute("id","sela");
  Mselect.setAttribute("multiple","multiple");
  Mselect.setAttribute("size",5);
  var op=document.createElement("option");
  op.setAttribute("value","V1");
  op.innerHTML="test";
document.getElementById("msgDiv").appendChild(Mselect);
 $(function(){
    $("select").multiselect({
        noneSelectedText: "==请选择==",
        checkAllText: "全选",
        uncheckAllText: '全不选',
        selectedList:10
    });
});
  var appoption = "<option value='DATA'>DATA</option>";
    //$('#select1,#select2').append(appoption);
    $('#sela').append(appoption);
    $("select").multiselect("refresh");*/

}