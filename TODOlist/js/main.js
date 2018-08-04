function addtolist(text1) {
	//当点击添加按钮时，输入框的文本即立刻添加到上述列表，按序从上到下排列
	//动态向ul中添加li元素
	if (document.getElementById("T").value.length===0) {
		alert("宝贝不能为空噢！");
		return;
	}
     var text1=document.getElementById("T").value;//获取文本输入框中的内容
     var Li=document.createElement("li");//创建元素li
     var Checkbox=document.createElement("input");
     var span=document.createElement("span");
     var Btn=document.createElement("button");
     var oUl = document.getElementsByTagName("ul")[0];//获取到Ul列表
     
     Checkbox.setAttribute("type","checkbox");
     Checkbox.setAttribute("id","t1");
     //Checkbox.addEventListener('click',addline);
     Btn.setAttribute("id","delbtn");
     Btn.innerHTML="DEL";
     Btn.name="DEL";/**/
     //Btn.addEventListener('click',delitem);
     span.innerHTML=text1;//向span中添加内容
     Li.appendChild(Checkbox);
     Li.appendChild(span);
     Li.appendChild(Btn);
     oUl.appendChild(Li);//向ul追加元素li
     document.getElementById("T").value="";//这两行代码，实现每次输完后，输入框的初始化
     document.getElementById("T").focus();

}
    //删除功能
  var oUl = document.getElementsByTagName("ul")[0];
        oUl.onclick = function(event) {
            var event = event || window.event;
            var target = event.target;
            if(target.name == "DEL") {
                target.parentNode.parentNode.removeChild(target.parentNode);
            }
        };
