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
function getStartEndPoint()
{
	 this.getStartEnd=function(obj1, obj2) {
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
        };

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
	// $("#test" + this.id).offset({ top: this.oy + dy + 10, left: this.ox + dx + 10 });
  /*
		for (var i = st.length-1; i>=0;i--) {
	  		r.drawArr(st[i]);
		}*/
	};
moveEl = function (dx, dy) {
    var att = { cx: this.ox + dx, cy: this.oy + dy };
    this.attr(att);
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
  xmlHttp.onreadystatechange=stateChanged;
  xmlHttp.open("GET",url,true);
  xmlHttp.send(null);
}
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
var stateChanged=function()
{
  if (xmlHttp.readyState==4)
  { 
    var classArr=xmlHttp.responseText.split("#");
    for (var i = 0; i < classArr.length; i++) {
      var elem=document.getElementById("BasicSpec");
      elem.appendChild(document.createElement("br"));
      elem.appendChild(createLabel("div",classArr[i],classArr[i],classArr[i]));
    };
  }
};
var createLabel = function(type,id, name, value) {
    var label_var = document.createElement(type);
 
    var label_id = document.createAttribute("id");
    label_id.nodeValue = id;
 
    var label_text = document.createTextNode(value);
 
    label_var.setAttributeNode(label_id);
    var label_css = document.createAttribute("class");
    label_css.nodeValue = "select_css";
    label_var.setAttributeNode(label_css);
    label_var.appendChild(label_text);
 
    return label_var;
};

var flag = false, timer = null, r_len = 0;
  function DB() {
         //clearTimeout(initime);
         //根据状态flag执开展开收缩
         if (flag) {

                slideright();
                flag=false;
              } else {

                slideleft();
                flag=true;
              }
  }
  function slideright() {

    document.getElementById("common_box").style.display="none";
}

//收缩
function slideleft() {

     document.getElementById("common_box").style.display="block";
     $("#common_box").css("z-index",101);
     $("#common_box").css("background-color","#FFFFCC");
     document.getElementById("common_box").style.visibility="visible";

  }



var doubleClick=function(){
  var msgw,msgh,bordercolor;
  msgw=400;//提示窗口的宽度
  msgh=500;//提示窗口的高度
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

  var Mselect=document.createElement("select");
  Mselect.setAttribute("id","sela");
  Mselect.setAttribute("multiple","multiple");
  Mselect.setAttribute("size",5);
  var op=document.createElement("option");
  op.setAttribute("value","V1");
  op.innerHTML="test";
  var msgObj=document.createElement("div")//创建一个div对象（提示框层）
  //定义div属性，即相当于
  //<div id="msgDiv" align="center" style="background-color:white; border:1px solid #336699; position:absolute; left:50%; top:50%; font:12px/1.6em Verdana,Geneva,Arial,Helvetica,sans-serif; margin-left:-225px; margin-top:npx; width:400px; height:100px; text-align:center; line-height:25px; z-index:100001;"></div>
  msgObj.setAttribute("id","msgDiv");
  msgObj.setAttribute("align","center");
  //msgObj.style.background="#fff";
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
  document.body.appendChild(msgObj);
  //var p=document.createElement("p");
  //msgObj.appendChild(p);
  msgObj.appendChild(Mselect);
  

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
    $("select").multiselect("refresh");

}