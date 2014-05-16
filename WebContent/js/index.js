function SignUp(){
  var msgw,msgh,bordercolor;
  msgw=300;//鎻愮ず绐楀彛鐨勫搴�
  msgh=200;//鎻愮ず绐楀彛鐨勯珮搴�
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
 
 // $("#defnam").append("UserName: <input type='text'></input>");
  var text=document.createElement("input");
  text.setAttribute("type","text");
  text.setAttribute("id","nametext");
  text.setAttribute("name","UserName:");
  text.style.marginTop="10px";
  var br=document.createElement("br")
  //form.appendChild(user);
  form.appendChild(text);
  form.appendChild(br);
  

  var textp=document.createElement("input");
  textp.setAttribute("type","password");
  textp.setAttribute("id","passwordtext");
  textp.style.marginTop="10px";
  var br2=document.createElement("br")
  //form.appendChild(user);
  form.appendChild(textp);
  form.appendChild(br2);

  var textr=document.createElement("input");
  textr.setAttribute("type","password");
  textr.setAttribute("id","repassword");
  textr.style.marginTop="10px";

  //form.appendChild(password);
  form.appendChild(textr);
  var password=document.createElement("Label");
  password.innerHTML="Password:";
  password.setAttribute("for",textp);

  var rpassword=document.createElement("Label");
  rpassword.innerHTML="Password:";
  rpassword.setAttribute("for",textr);

  var user=document.createElement("Label");
  user.innerHTML="UserName: ";
  user.setAttribute("for",text);
  form.insertBefore(user,text);
  form.insertBefore(password,textp);
  form.insertBefore(rpassword,textr);

  var buttonSubmit=document.createElement("input");
  buttonSubmit.setAttribute("type","button");
  buttonSubmit.setAttribute("value","SignUp");
  //buttonSubmit.style.vertical-align="top";
  buttonSubmit.style.width="75px";
  buttonSubmit.style.height="26px"
 // buttonSubmit.style.align="center";
  buttonSubmit.style.marginTop="5px"
  buttonSubmit.style.marginLeft="60px";
  buttonSubmit.style.marginBottom="10px";
  buttonSubmit.style.background=bordercolor;
  buttonSubmit.style.border="1px solid "+ bordercolor;
  buttonSubmit.style.color="white";
  //buttonSubmit.onclick=saveClass;
  var subm=document.createElement("div");
  subm.style.float="left";
  var canc=document.createElement("div");
  canc.style.float="left";

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
  button.style.marginTop="5px";
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
  //document.getElementById("defnam").appendChild(text);
  subm.appendChild(buttonSubmit);
  canc.appendChild(button);
  document.getElementById("defnam").appendChild(subm);
  //form.appendChild(br);
  document.getElementById("defnam").appendChild(canc);
  buttonSubmit.onclick=function(){
      var textValue=document.getElementById("nametext").value;
      if (textValue!="") {
      $.post("addDatatypePro",{className:textValue, superClassName:""},function(data,textStatus){
          alert(data);
          if (textStatus=="success"&&data==0) {
            document.body.removeChild(bgObj);//鍒犻櫎鑳屾櫙灞侱iv
            document.getElementById("defnam").removeChild(button);
            document.getElementById("defnam").removeChild(buttonSubmit);
            //document.getElementById("msgObj").removeChild(buttonSubmit);
           // document.getElementById("msgDiv").removeChild(title);//鍒犻櫎鎻愮ず妗嗙殑鏍囬鏍�
            document.body.removeChild(msgObj);//鍒犻櫎鎻愮ず妗嗗眰
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
            alert("The Name has existed,please rename");
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
        alert("please input name");
      }

  }
}

function Login(){
  var msgw,msgh,bordercolor;
  msgw=300;//鎻愮ず绐楀彛鐨勫搴�
  msgh=200;//鎻愮ず绐楀彛鐨勯珮搴�
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
 
 // $("#defnam").append("UserName: <input type='text'></input>");
  var text=document.createElement("input");
  text.setAttribute("type","text");
  text.setAttribute("id","nametext");
  text.setAttribute("name","UserName:");
  text.style.marginTop="10px";
  var br=document.createElement("br")
  //form.appendChild(user);
  form.appendChild(text);
  form.appendChild(br);
  

  var textp=document.createElement("input");
  textp.setAttribute("type","password");
  textp.setAttribute("id","passwordtext");
  textp.style.marginTop="10px";
  var br2=document.createElement("br")
  //form.appendChild(user);
  form.appendChild(textp);
  form.appendChild(br2);

 
  var password=document.createElement("Label");
  password.innerHTML="Password:";
  password.setAttribute("for",textp);


  var user=document.createElement("Label");
  user.innerHTML="UserName: ";
  user.setAttribute("for",text);
  form.insertBefore(user,text);
  form.insertBefore(password,textp);

  var buttonSubmit=document.createElement("input");
  buttonSubmit.setAttribute("type","button");
  buttonSubmit.setAttribute("value","SignIn");
  //buttonSubmit.style.vertical-align="top";
  buttonSubmit.style.width="75px";
  buttonSubmit.style.height="26px"
 // buttonSubmit.style.align="center";
  buttonSubmit.style.marginTop="5px"
  buttonSubmit.style.marginLeft="60px";
  buttonSubmit.style.marginBottom="10px";
  buttonSubmit.style.background=bordercolor;
  buttonSubmit.style.border="1px solid "+ bordercolor;
  buttonSubmit.style.color="white";
  //buttonSubmit.onclick=saveClass;
  var subm=document.createElement("div");
  subm.style.float="left";
  var canc=document.createElement("div");
  canc.style.float="left";

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
  button.style.marginTop="5px";
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
  //document.getElementById("defnam").appendChild(text);
  subm.appendChild(buttonSubmit);
  canc.appendChild(button);
  document.getElementById("defnam").appendChild(subm);
  //form.appendChild(br);
  document.getElementById("defnam").appendChild(canc);
  buttonSubmit.onclick=function(){
      var textValue=document.getElementById("nametext").value;
      if (textValue!="") {
      $.post("addDatatypePro",{className:textValue, superClassName:""},function(data,textStatus){
          alert(data);
          if (textStatus=="success"&&data==0) {
            document.body.removeChild(bgObj);//鍒犻櫎鑳屾櫙灞侱iv
            document.getElementById("defnam").removeChild(button);
            document.getElementById("defnam").removeChild(buttonSubmit);
            //document.getElementById("msgObj").removeChild(buttonSubmit);
           // document.getElementById("msgDiv").removeChild(title);//鍒犻櫎鎻愮ず妗嗙殑鏍囬鏍�
            document.body.removeChild(msgObj);//鍒犻櫎鎻愮ず妗嗗眰
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
            alert("The Name has existed,please rename");
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
        alert("please input name");
      }

  }
}