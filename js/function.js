/*
	一、getClass(classname)   获取指定类名元素
		classname   指定要获取元素的classname
		思路:
		1、判断浏览器是否支持，若支持，使用原生函数，不支持，进行下一步；
	 	  document.getElementsByClassName
		2、获取所有的元素；
		3、元素的类名是否等于指定类名，若符合条件，则放在一个数组中；
		4、返回数组。
*/
	function getclass(classname,range){
  range=range||document;
  // 三元表达式的方法
  // range=range?range:document;
  // range=range==undefined?document:range;
	if (document.getElementsByClassName) {
        // w3c使用
        return range.getElementsByClassName(classname);
	}
	else{
       var a=range.getElementsByTagName('*');
       var arr=[];
       for (var i =0; i<a.length; i++) {
        // 当前元素的className中是否包含指定的类名
       	if (checkclass(a[i].className,classname)) {
       	arr.push(a[i]);
       }
   }
   return arr;
	}
}

/*
	二、getParent(classname,range)   获得名为range的classname类名元素
*/
	function getParent(classname,range){
		range=range||document;
		// alert(classname);
		if(document.getElementsByClassName){
		// alert(range);
			return range.getElementsByClassName(classname);
		}
		else{
			var all=range.getElementsByTagName("*");
			var arr=[];
			for(var i=0;i<all.length;i++){
				//当前元素的className是否包含传入的classname
				if(check(all[i].className,classname)){
					arr.push(all[i]);
				}
			}return arr;
		}	
	}
		//当前元素的className是否包含传入的classname
function check(classstr,classname){
	var arr=classstr.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==classname){
			return true;
		}
	}
		return false;
}

/*  三、使用$符号进行元素的选择
	思路：
	1、初始化参数range
	2、把name去空
	3、判断第一个字符
	4、获取元素
	用法：
	$(".one") 获取指定的类名的元素
	$("#one") 获得指定ID名的元素
	$("div")  获得指定标签名的元素

	trim():用来去空    //有兼容性问题 ，用正则解决   //以后讲
		eg: var str="  abc";
			alert(str.trim().length);
	判断range
	1、range=range||document
	2、range=range===undefined?document:range
	3、range=range?range:document
*/
function $(selecter,range){
 
  if (typeof selecter=="function") {
        window.onload=function(){
          selecter();
        }
  }else if(typeof selecter=="string"){
     range=range?range:document;
  // selecter=selecter.trim();
  if (selecter.charAt(0)==".") {
    return getclass(selecter.substring(1),range);
  }
  else if (selecter.charAt(0)=="#") {
    return range.getElementById(selecter.substring(1))
  }
  else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selecter)){
    return range.getElementsByTagName(selecter);
  }
  else if (/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(selecter)) {
    return document.createElement(selecter.slice(1,-1));
  }
}
}

/*
	getContent(obj,value)
	//获取或设置obj中的内容
	考虑兼容性

*/
 function getContent(obj,value){
 	if(value){
 		if(obj.innerText){
 			obj.innerText=value;
 		}else{
 			obj.TextContent=value;
 		}
 	}else{
 		if(obj.innerText){
 			return obj.innerText;
 		}else{
 			return obj.TextContent;
 		}
 	}
 }


 /************获取属性
	getStyle(obj,attr)    获取指定元素的样式
	obj  指定对象
	attr 样式属性
1、判断浏览器是否支持；
2、返回属性值
 *****************/
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}