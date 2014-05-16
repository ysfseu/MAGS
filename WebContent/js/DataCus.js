/**
 * 
 */
var map={};

//闅忕潃鑺傜偣浣嶇疆鐨勬敼鍙樺姩鎬佹敼鍙樼澶�
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
//鑾峰彇缁勬垚绠ご鐨勪笁鏉＄嚎娈电殑璺緞
function getArr(x1, y1, x2, y2, size) {
              var angle = Raphael.angle(x1, y1, x2, y2);//寰楀埌涓ょ偣涔嬮棿鐨勮搴�
              var a45 = Raphael.rad(angle - 45);//瑙掑害杞崲鎴愬姬搴�
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


	//鎷栧姩鑺傜偣寮�鏃剁殑浜嬩欢
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
draggerCr=function(){
    this.ox = this.attr("cx");
    this.oy = this.attr("cy");
    this.animate({ "fill-opacity": .2 }, 500);

}
	//鎷栧姩浜嬩欢
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
moveCr = function (dx, dy) {
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
	//鎷栧姩缁撴潫鍚庣殑浜嬩欢
up = function () {
		this.animate({ "fill-opacity": 0 }, 500);
	};
  /////////////////
function Show(url,id)
{
  xmlHttp=GetXmlHttpObject();
  if (xmlHttp==null)
  {
    alert ("Your Browser Don't support AJAX");
    return;
  }
  //var url="getObjectProperty?";
  //url=url+"?q="+str;
  url=url+"sid="+Math.random();
  xmlHttp.onreadystatechange=function()
  {
    if (xmlHttp.readyState==4)
    { 
      var ObjProArr=xmlHttp.responseText.split("#");
      alert(xmlHttp.responseText);
      for (var i = 0; i < ObjProArr.length; i++) {
        document.getElementById(id).appendChild(createLi(ObjProArr[i]));
      }
    }
  };
  xmlHttp.open("GET",url,true);
  xmlHttp.send(null);

}

function myFunction()
{
  Show("getObjectProperty?",loadObjPro);
  Show("getDataTypeProperty?",loadDtPro);
  Show("getClass?",loadClass);
}
/////////////////////////////
function showObjPro()
{
  var xmlHttp=GetXmlHttpObject();
  if (xmlHttp==null)
  {
    alert ("Your Browser Don't support AJAX");
    return;
  }
  var url="getObjectProperty?";
  //url=url+"?q="+str;
  url=url+"sid="+Math.random();
  xmlHttp.onreadystatechange=function(){loadObjPro(xmlHttp);};
  xmlHttp.open("GET",url,true);
  xmlHttp.send(null);
}
function loadObjPro(xmlHttp)
{
  if (xmlHttp.readyState==4)
  { 
    var ObjProArr=xmlHttp.responseText.split("#");
    alert(xmlHttp.responseText);
    for (var i = 0; i < ObjProArr.length-1; i++) {
      if (ObjProArr[i]!="") {
        document.getElementById("rdfobjpro").appendChild(createLi(ObjProArr[i]));
      };
     
    }
  }
};
function showDtPro()
{
  var xmlHttp=GetXmlHttpObject();
  if (xmlHttp==null)
  {
    alert ("Your Browser Don't support AJAX");
    return;
  }
  var url="getDataTypeProperty?";
  //url=url+"?q="+str;
  url=url+"sid="+Math.random();
  xmlHttp.onreadystatechange=function(){loadDtPro(xmlHttp);};
  xmlHttp.open("GET",url,true);
  xmlHttp.send(null);
}
function loadDtPro(xmlHttp)
{
  if (xmlHttp.readyState==4)
  { 
    alert(xmlHttp.responseText);
    var DtProArr=xmlHttp.responseText.split("#");
    for (var i = 0; i < DtProArr.length; i++) {
      if (DtProArr[i]!="") 
      {
        document.getElementById("rdfdtpro").appendChild(createLi(DtProArr[i]));
      }
      
    };
  }
};
function showClass()
{

  
  var xmlHttp=GetXmlHttpObject();
 
  if (xmlHttp==null)
  {
    alert ("Your Browser Don't support AJAX");
    return;
  }

  var url="getClass?";
  //url=url+"?q="+str;
  url=url+"sid="+Math.random();
  xmlHttp.onreadystatechange=function(){loadClass(xmlHttp);};
  xmlHttp.open("GET",url,true);
  xmlHttp.send(null);
}
function loadClass(xmlHttp)
{
  if (xmlHttp.readyState==4)
  { 
    alert(xmlHttp.responseText);
    var classArr=xmlHttp.responseText.split("#");
    for (var i = 0; i < classArr.length; i++) {
      if(classArr[i]!="")
      {
          document.getElementById("rdfclass").appendChild(createLi(classArr[i]));

      }
      
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
function createLi(value){
  var Label_Li=document.createElement("li");
  var li_text= document.createTextNode(value);
  Label_Li.appendChild(li_text);
  return Label_Li;
  
}

var flag = false, timer = null, r_len = 0;
function doubleClick() {
  //alert(this.data("Name"));
  //alert(map[this.data("Name")]);
  var name=this.node.nodeName;
  if (flag) 
  {
    if (name=="ellipse")
    {
        slideright("ObjProperties");
        flag=false;
    }
    else if (name=="rect") {
        slideright("properties");
        flag=false;

    }
    //alert(this.data("Name"));   
  } 
  else
  {
      if (name=="ellipse") 
      {
        var text=this.data("Name");
        document.getElementById("ObjProName").value=this.data("Name");
        $.get("getObjectProperty",null,function(data,textStatus)
          {
            alert(data);
            if (textStatus=="success"&&data!="")
            {
                var classnames=data.split("#");
                for (var i = 0; i < classnames.length; i++) 
                {
                    if(classnames[i]!=text)
                    {
                        var appoption="<option value='"+classnames[i]+"'>"+classnames[i]+"</option>";
                          $('#ObjPro').append(appoption);
                          $("#ObjPro").multiselect("refresh");
                    }   
                }  
            }
            else
            {
                alert("Get Class Name Failed");
            }

          });
          slideleft("ObjProperties");
          flag=true;
      }
      else if (name=="rect")
      {
            var text=this.data("Name");
            document.getElementById("ClassName").value=this.data("Name");
            $.get("getClass",null,function(data,textStatus){
                alert(data);
                if (textStatus=="success"&&data!="")
                {
                      var classnames=data.split("#");
                      for (var i = 0; i < classnames.length; i++)
                      {
                          if(classnames[i]!=text)
                          {
                              var appoption="<option value='"+classnames[i]+"'>"+classnames[i]+"</option>";
                              $('#sClass').append(appoption);
                              $("#sClass").multiselect("refresh"); 
                          }   
                      }         
                }
                else
                {
                      alert("Get Class Name Failed");
                }
            });
            slideleft("properties");
            flag=true;
      }
      else if(name=="circle"){
            var text=this.data("Name");
            document.getElementById("DtProName").value=this.data("Name");
            $.get("getDtDomain",null,function(data,textStatus){
                alert(data);
                if (textStatus=="success"&&data!="")
                {
                      var classnames=data.split("#");
                      for (var i = 0; i < classnames.length; i++)
                      {
                          if(classnames[i]!=text)
                          {
                              var appoption="<option value='"+classnames[i]+"'>"+classnames[i]+"</option>";
                              $('#dtDomain').append(appoption);
                              $("#dtDomain").multiselect("refresh"); 
                          }   
                      }         
                }
                else
                {
                      alert("Get Class Name Failed");
                }
            });
            $.get("getDtRange",null,function(data,textStatus){
                alert(data);
                if (textStatus=="success"&&data!="")
                {
                      var classnames=data.split("#");
                      for (var i = 0; i < classnames.length; i++)
                      {
                          if(classnames[i]!=text)
                          {
                              var appoption="<option value='"+classnames[i]+"'>"+classnames[i]+"</option>";
                              $('#dtRange').append(appoption);
                              $("#dtRange").multiselect("refresh"); 
                          }   
                      }         
                }
                else
                {
                      alert("Get Class Name Failed");
                }
            });
            slideleft("DtProperties");
            flag=true;

      }
      
  }
}
function slideright(id) {

    document.getElementById(id).style.display="none";
}

//鏀剁缉
function slideleft(id) {

     document.getElementById(id).style.display="block";
    // $("#common_box").css("z-index",101);
    // $("#common_box").css("background-color","#FFFFCC");
     document.getElementById(id).style.visibility="visible";

  }
 
function DefineObjPro(){
  var msgw,msgh,bordercolor;
  msgw=400;//鎻愮ず绐楀彛鐨勫搴�
  msgh=300;//鎻愮ず绐楀彛鐨勯珮搴�
  titleheight=25 //鎻愮ず绐楀彛鏍囬楂樺害
  bordercolor="#336699";//鎻愮ず绐楀彛鐨勮竟妗嗛鑹�
  titlecolor="#99CCFF";//鎻愮ず绐楀彛鐨勬爣棰橀鑹�
  var sWidth,sHeight;
  sWidth=document.body.offsetWidth;//娴忚鍣ㄥ伐浣滃尯鍩熷唴椤甸潰瀹藉害
  sHeight=screen.height;//灞忓箷楂樺害锛堝瀭鐩村垎杈ㄧ巼锛�
//鑳屾櫙灞傦紙澶у皬涓庣獥鍙ｆ湁鏁堝尯鍩熺浉鍚岋紝鍗冲綋寮瑰嚭瀵硅瘽妗嗘椂锛岃儗鏅樉绀轰负鏀惧皠鐘堕�鏄庣伆鑹诧級
  var bgObj=document.createElement("div");//鍒涘缓涓�釜div瀵硅薄锛堣儗鏅眰锛�
  //瀹氫箟div灞炴�锛屽嵆鐩稿綋浜�
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

  var msgObj=document.createElement("div")//鍒涘缓涓�釜div瀵硅薄锛堟彁绀烘灞傦級
  //瀹氫箟div灞炴�锛屽嵆鐩稿綋浜�
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
  //form.innerHTML="ObjectPorperty Name:"
  form.setAttribute("id","defnam");
  form.style.marginTop="25px"
 
  var text=document.createElement("input");
  text.setAttribute("type","text");
  text.setAttribute("id","nametext");
  form.appendChild(text);

  var user=document.createElement("Label");
  user.innerHTML="Object Property Name: ";
  user.setAttribute("for",text);
  form.insertBefore(user,text);

  var subm=document.createElement("div");
  subm.style.float="left";
  var canc=document.createElement("div");
  canc.style.float="left";

  var buttonSubmit=document.createElement("input");
  buttonSubmit.setAttribute("type","button");
  buttonSubmit.setAttribute("value","Submit");
  //buttonSubmit.style.vertical-align="top";
  buttonSubmit.style.width="75px";
  buttonSubmit.style.height="26px";
 // buttonSubmit.style.align="center";
  buttonSubmit.style.marginTop="10px";
  buttonSubmit.style.marginLeft="90px";
  buttonSubmit.style.marginBottom="10px";
  buttonSubmit.style.background=bordercolor;
  buttonSubmit.style.border="1px solid "+ bordercolor;
  buttonSubmit.style.color="white";
  //buttonSubmit.onclick=saveClass;

  var button=document.createElement("input");//鍒涘缓涓�釜input瀵硅薄锛堟彁绀烘鎸夐挳锛�
  //瀹氫箟input鐨勫睘鎬э紝鍗崇浉褰撲簬
  //<input type="button" align="center" style="width:100px; align:center; margin-left:250px; margin-bottom:10px;" value="close">
  button.setAttribute("type","button");
  button.setAttribute("value","Cancle");
  //button.style.vertical-align="top";
  button.style.width="75px";
  button.style.height="26px"
  //button.style.align="center";
  button.style.marginLeft="15px";
  button.style.marginTop="10px";
  button.style.background=bordercolor;
  button.style.border="1px solid "+ bordercolor;
  button.style.color="white";
  button.onclick=removeObj;
    function removeObj(){//鐐瑰嚮鏍囬鏍忚Е鍙戠殑浜嬩欢
      document.body.removeChild(bgObj);//鍒犻櫎鑳屾櫙灞侱iv
     // document.getElementById("msgDiv").removeChild(title);//鍒犻櫎鎻愮ず妗嗙殑鏍囬鏍�
      document.body.removeChild(msgObj);//鍒犻櫎鎻愮ず妗嗗眰
    }

  document.body.appendChild(msgObj);//鍦╞ody鍐呮坊鍔犳彁绀烘div瀵硅薄msgObj
  document.getElementById("msgDiv").appendChild(form);
  subm.appendChild(buttonSubmit);
  canc.appendChild(button);
  form.appendChild(subm);
  //form.appendChild(br);
  form.appendChild(canc);
  buttonSubmit.onclick=function(){
      var textValue=document.getElementById("nametext").value;
      if (textValue!="") {
      $.post("addDatatypePro",{className:textValue, superClassName:""},function(data,textStatus){
          alert(data);
          if (textStatus=="success"&&data==0) {
            document.body.removeChild(bgObj);
            document.getElementById("defnam").removeChild(subm);
            document.getElementById("defnam").removeChild(canc);
            //document.getElementById("msgObj").removeChild(buttonSubmit);
           // document.getElementById("msgDiv").removeChild(title);//鍒犻櫎鎻愮ず妗嗙殑鏍囬鏍�
            document.body.removeChild(msgObj);
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
            //alert(el.id);
            //alert(textValue);
            map[textValue]=el.id;
          }
          else if(data==1)
          {
            alert("please input nameThe Name has existed,please rename");
          }
          else{
            alert("Add Class Failed");
          }
        })

        
        //alert(map[textValue]);
       // alert(el.data("Name"));
        //alert(textValue);
        //elemSet.transform("r10").translate(100, 100);

      }else{
        alert("The Name has existed,please rename");
      }

  }
}



function DefineDtPro()
{
  var msgw,msgh,bordercolor;
  msgw=400;//鎻愮ず绐楀彛鐨勫搴�
  msgh=300;//鎻愮ず绐楀彛鐨勯珮搴�
  titleheight=25 //鎻愮ず绐楀彛鏍囬楂樺害
  bordercolor="#336699";//鎻愮ず绐楀彛鐨勮竟妗嗛鑹�
  titlecolor="#99CCFF";//鎻愮ず绐楀彛鐨勬爣棰橀鑹�
  var sWidth,sHeight;
  sWidth=document.body.offsetWidth;//娴忚鍣ㄥ伐浣滃尯鍩熷唴椤甸潰瀹藉害
  sHeight=screen.height;//灞忓箷楂樺害锛堝瀭鐩村垎杈ㄧ巼锛�
//鑳屾櫙灞傦紙澶у皬涓庣獥鍙ｆ湁鏁堝尯鍩熺浉鍚岋紝鍗冲綋寮瑰嚭瀵硅瘽妗嗘椂锛岃儗鏅樉绀轰负鏀惧皠鐘堕�鏄庣伆鑹诧級
  var bgObj=document.createElement("div");//鍒涘缓涓�釜div瀵硅薄锛堣儗鏅眰锛�
  //瀹氫箟div灞炴�锛屽嵆鐩稿綋浜�
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

  var msgObj=document.createElement("div")//鍒涘缓涓�釜div瀵硅薄锛堟彁绀烘灞傦級
  //瀹氫箟div灞炴�锛屽嵆鐩稿綋浜�
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
  form.innerHTML="Datatype Name:"
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

  var button=document.createElement("input");//鍒涘缓涓�釜input瀵硅薄锛堟彁绀烘鎸夐挳锛�
  //瀹氫箟input鐨勫睘鎬э紝鍗崇浉褰撲簬
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
    function removeObj(){//鐐瑰嚮鏍囬鏍忚Е鍙戠殑浜嬩欢
      document.body.removeChild(bgObj);//鍒犻櫎鑳屾櫙灞侱iv
     // document.getElementById("msgDiv").removeChild(title);//鍒犻櫎鎻愮ず妗嗙殑鏍囬鏍�
      document.body.removeChild(msgObj);//鍒犻櫎鎻愮ず妗嗗眰
    }
  document.body.appendChild(msgObj);//鍦╞ody鍐呮坊鍔犳彁绀烘div瀵硅薄msgObj
  document.getElementById("msgDiv").appendChild(form);
  document.getElementById("defnam").appendChild(text);
  document.getElementById("defnam").appendChild(button);//鍦ㄦ彁绀烘div涓坊鍔犳寜閽璞utton
  document.getElementById("defnam").appendChild(buttonSubmit);
  buttonSubmit.onclick=function()
  {
      var textValue=document.getElementById("nametext").value;
      if (textValue!="") {
        $.post("addDatatypePro",{datatypePro:textValue, superClassName:""},function(data,textStatus){
          alert(data);
          if (textStatus=="success"&&data==0) {
            document.body.removeChild(bgObj);//鍒犻櫎鑳屾櫙灞侱iv
            document.getElementById("defnam").removeChild(button);
            document.getElementById("defnam").removeChild(buttonSubmit);
            //document.getElementById("msgObj").removeChild(buttonSubmit);
           // document.getElementById("msgDiv").removeChild(title);//鍒犻櫎鎻愮ず妗嗙殑鏍囬鏍�
            document.body.removeChild(msgObj);//鍒犻櫎鎻愮ず妗嗗眰
            var cr=cpaper.circle(Math.random()*1153,Math.random()*500, 30);
            cr.attr({ fill: color, stroke: color, "fill-opacity": 0, "stroke-width": 2, cursor: "move" });
            //alert(dragfun.move);
            cr.drag(moveCr,draggerCr,up);
            cr.dblclick(doubleClick);
            shapes.push(cr);
            //alert(el.getBBox().x);
            text=cpaper.text(cr.getBBox().x+20,cr.getBBox().y+10,textValue);
            cr.data("text",text.id);
            cr.data("Name",textValue);
            //alert(el.id);
            //alert(textValue);
            map[textValue]=cr.id;
          }
          else if(data==1)
          {
            alert("The Name has existed,please rename");
          }
          else
          {
            alert("Add Class Failed");
          }
        });

        
        //alert(map[textValue]);
       // alert(el.data("Name"));
        //alert(textValue);
        //elemSet.transform("r10").translate(100, 100);

      }else{
        alert("please input name");
      }

  }
}

function DefineClass()
{
  var msgw,msgh,bordercolor;
  msgw=400;//鎻愮ず绐楀彛鐨勫搴�
  msgh=300;//鎻愮ず绐楀彛鐨勯珮搴�
  titleheight=25 //鎻愮ず绐楀彛鏍囬楂樺害
  bordercolor="#336699";//鎻愮ず绐楀彛鐨勮竟妗嗛鑹�
  titlecolor="#99CCFF";//鎻愮ず绐楀彛鐨勬爣棰橀鑹�
  var sWidth,sHeight;
  sWidth=document.body.offsetWidth;//娴忚鍣ㄥ伐浣滃尯鍩熷唴椤甸潰瀹藉害
  sHeight=screen.height;//灞忓箷楂樺害锛堝瀭鐩村垎杈ㄧ巼锛�
//鑳屾櫙灞傦紙澶у皬涓庣獥鍙ｆ湁鏁堝尯鍩熺浉鍚岋紝鍗冲綋寮瑰嚭瀵硅瘽妗嗘椂锛岃儗鏅樉绀轰负鏀惧皠鐘堕�鏄庣伆鑹诧級
  var bgObj=document.createElement("div");//鍒涘缓涓�釜div瀵硅薄锛堣儗鏅眰锛�
  //瀹氫箟div灞炴�锛屽嵆鐩稿綋浜�
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

  var msgObj=document.createElement("div")//鍒涘缓涓�釜div瀵硅薄锛堟彁绀烘灞傦級
  //瀹氫箟div灞炴�锛屽嵆鐩稿綋浜�
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

  var button=document.createElement("input");//鍒涘缓涓�釜input瀵硅薄锛堟彁绀烘鎸夐挳锛�
  //瀹氫箟input鐨勫睘鎬э紝鍗崇浉褰撲簬
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
    function removeObj(){//鐐瑰嚮鏍囬鏍忚Е鍙戠殑浜嬩欢
      document.body.removeChild(bgObj);//鍒犻櫎鑳屾櫙灞侱iv
     // document.getElementById("msgDiv").removeChild(title);//鍒犻櫎鎻愮ず妗嗙殑鏍囬鏍�
      document.body.removeChild(msgObj);//鍒犻櫎鎻愮ず妗嗗眰
    }
  document.body.appendChild(msgObj);//鍦╞ody鍐呮坊鍔犳彁绀烘div瀵硅薄msgObj
  document.getElementById("msgDiv").appendChild(form);
  document.getElementById("defnam").appendChild(text);
  document.getElementById("defnam").appendChild(button);//鍦ㄦ彁绀烘div涓坊鍔犳寜閽璞utton
  document.getElementById("defnam").appendChild(buttonSubmit);
  buttonSubmit.onclick=function()
  {
      var textValue=document.getElementById("nametext").value;
      if (textValue!="") {
        $.post("addRDFClass",{ClassName:textValue, superClassName:""},function(data,textStatus){
          alert(data);
          if (textStatus=="success"&&data==0) {
            document.body.removeChild(bgObj);//鍒犻櫎鑳屾櫙灞侱iv
            document.getElementById("defnam").removeChild(button);
            document.getElementById("defnam").removeChild(buttonSubmit);
            //document.getElementById("msgObj").removeChild(buttonSubmit);
           // document.getElementById("msgDiv").removeChild(title);//鍒犻櫎鎻愮ず妗嗙殑鏍囬鏍�
            document.body.removeChild(msgObj);//鍒犻櫎鎻愮ず妗嗗眰
            var re=cpaper.rect(Math.random()*1153,Math.random()*500, 35,25);
            re.attr({ fill: color, stroke: color, "fill-opacity": 0, "stroke-width": 2, cursor: "move" });
            //alert(dragfun.move);
            re.drag(moveEl,draggerEl,up);
            re.dblclick(doubleClick);
            shapes.push(re);
            //alert(el.getBBox().x);
            text=cpaper.text(re.getBBox().x+20,re.getBBox().y+10,textValue);
            re.data("text",text.id);
            re.data("Name",textValue);
            //alert(el.id);
            //alert(textValue);
            map[textValue]=re.id;
          }
          else if(data==1)
          {
            alert("The Name has existed,please rename");
          }
          else
          {
            alert("Add Class Failed");
          }
        });

        
        //alert(map[textValue]);
       // alert(el.data("Name"));
        //alert(textValue);
        //elemSet.transform("r10").translate(100, 100);

      }else{
        alert("please input name");
      }

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
        noneSelectedText: "==璇烽�鎷�=",
        checkAllText: "鍏ㄩ�",
        uncheckAllText: '鍏ㄤ笉閫�,
        selectedList:10
    });
});
  var appoption = "<option value='DATA'>DATA</option>";
    //$('#select1,#select2').append(appoption);
    $('#sela').append(appoption);
    $("select").multiselect("refresh");*/



var storeModel=function(){
  /*
    var children=$("#common_box").children("div");
    var i=0;
    var str=$("#NameID").val();
    alert(str);
    while(children[i]){
      str+="#"+children[i].innerHTML;
      i++;
    }*/
    var str="test";
    $.post("storeModel",{fileName:str},function(){;});
    alert(str);
}

