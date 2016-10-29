window.onload=function(){
  var imgs=$(".imgs");
  var lis=$("li",$(".bens")[0]);
  var left=$(".zhuazil")[0];
  var right=$(".zhuazir")[0];
  var n=0;
    console.log(imgs.length)
  /*页面状态初始化*/
  var t=setInterval(boom=function (){
           n++;
           if (n>=imgs.length) {
            n=0;
           };
           for(i=0;i<imgs.length;i++){
           	animate(imgs[i],{opacity:0});
            lis[i].style.background="black";
           }
           animate(imgs[n],{opacity:1});;
           lis[n].style.background="#e5004f";
  },2000) 

  for(i=0;i<imgs.length;i++){
   imgs[i].onmouseover=function(){
      clearInterval(t);
   }
   imgs[i].onmouseout=function(){
    t=setInterval(boom,2000)
   }
 }
   for(i=0;i<lis.length;i++){
  lis[i].index=i;
  lis[i].onclick=function(){
    for(i=0;i<lis.length;i++){
      lis[i].style.background="black"
       animate(imgs[i],{opacity:0});
    }
    lis[this.index].style.background="#e5004f "
     animate(imgs[this.index],{opacity:1});
  
 }
}
for(i=0;i<imgs.length;i++){
   lis[i].onmouseover=function(){
      clearInterval(t);
   }
   lis[i].onmouseout=function(){
    t=setInterval(boom,2000)
   }
 }
  right.onclick=function(){
          boom();
          
   }

    left.onclick=function(){
    
       n--;
           if (n<0) {
            n=imgs.length-1;
           };
           for(i=0;i<imgs.length;i++){
            animate(imgs[i],{opacity:0});
            lis[i].style.background="black";
           }
            animate(imgs[n],{opacity:1});
           lis[n].style.background="#e5004f";
  }
  
  for(var i=0;i<lis.length;i++){
  lis[i].index=i;
  lis[i].onclick=function(){
    if(n>this.index){
       animate(imgs[this.index],{opacity:1});
       animate(imgs[n],{opacity:0});
    }else if(n<this.index){
       animate(imgs[this.index],{opacity:1});
      animate(imgs[n],{opacity:0});
    }
    lis[n].style.background="black";
    lis[this.index].style.background="#e5004f";
    n=this.index;//从点选处开始
         }
       }


  sxblunbo(".q1",".w1",".e1",".r1",".r2")
  sxblunbo(".q2",".w2",".e2",".r3",".r4")
  sxblunbo(".q3",".w3",".e3",".r5",".r6")
  sxblunbo(".q4",".w4",".e4",".r7",".r8")
  sxblunbo(".q5",".w5",".e5",".r9",".r10")
  sxblunbo(".q6",".w6",".e6",".r11",".r12")
  sxblunbo(".q61",".w61",".e6",".r11",".r12")
  sxblunbo(".q7",".w7",".e7",".r13",".r14")
  sxblunbo(".q71",".w71",".e7",".r13",".r14")
  sxblunbo(".q8",".w8",".e8",".r15",".r16") 
  sxblunbo(".q81",".w81",".e8",".r15",".r16")
  sxblunbo(".q9",".w9",".e9",".r17",".r18")
  sxblunbo(".q91",".w92",".e9",".r17",".r18")
  sxblunbo(".q10",".w10",".e10",".r19",".r20")
  sxblunbo(".q11",".w11",".e10",".r21",".r22")
  sxblunbo(".q12",".w12",".e10",".r23",".r24")
  sxblunbo(".q121",".w121",".e10",".r231",".r241")
  function sxblunbo(obj,imgs,lis,left,right){
  var bans=$(obj)[0];
  var banner=$(imgs);
  var los=$(lis);
  var left=$(left)[0];
  var right=$(right)[0];
  var w=parseInt(getStyle(bans,"width"));
  var n=0;
  var next=0;
  var t=setInterval(moveimg,2000)
  var flag=true;
  function moveimg(){
     if(!flag){
       return;
     }
     flag=false;
      next=n+1;
      if(next==banner.length){
        next=0;
      }
      banner[next].style.left=w+"px";
      animate(banner[n],{left:-w},600);
      animate(banner[next],{left:0},600,function(){flag=true});
      for(var i=0;i<lis.length;i++){
          los[n].style.background="#fff";
      }
          los[next].style.background="#ccc";

            n=next;
   }

   
   
   bans.onmouseover=function(){
    clearInterval(t);
   }
   bans.onmouseout=function(){
    t=setInterval(moveimg,2000)
   }

   // 左右按钮
   
   right.onclick=function(){ 
     
     moveimg();
   }
   left.onclick=function(){
    
      moveimgL();
   }
    function moveimgL(){
      if(!flag){
       return;
     }
     flag=false;
      next=n-1;
      if(next<0){
        next=banner.length-1;
      }
      banner[next].style.left=-w+"px";
      animate(banner[n],{left:w},600);
      animate(banner[next],{left:0},600,function(){flag=true});
      for(var i=0;i<lis.length;i++){
          los[n].style.background="#fff";
      }
          los[next].style.background="#ccc";

            n=next;
   }
    


  
  // 移图 

  for(var i=0;i<banner.length;i++){
      los[i].index=i;
      los[i].onclick=function(){
        if(!flag){
         return;
        }
        flag=false;
        if(this.index>n){
           banner[this.index].style.left=w+"px";
           animate(banner[n],{left:-w},600);
           animate(banner[this.index],{left:0},600,function(){flag=true});
           for(var i=0;i<lis.length;i++){
           los[n].style.background="#fff";
           }
          los[this.index].style.background="#ccc";
        }else if(this.index<n){
           banner[this.index].style.left=-w+"px";
           animate(banner[n],{left:w},600);
           animate(banner[this.index],{left:0},600,function(){flag=true});
            for(var i=0;i<lis.length;i++){
            los[n].style.background="#fff";
            }
            los[this.index].style.background="#ccc";
        }
        n=this.index;
        next=this.index;

      }
  }

 }

  var it=$(".fsd");
  var hidd=$(".gedi");
  for(var i=0;i<it.length;i++){
    it[i].index=i;
    it[i].onmouseover=function(){
      hidd[this.index].style.display="block";
    }
    it[i].onmouseout=function(){
      hidd[this.index].style.display="none";
    }
  }
  var it1=$(".wd");
  var hidden1=$(".wdjd");
  for(var i=0;i<it1.length;i++){
    it1[i].index=i;
    it1[i].onmouseover=function(){
      hidden1[this.index].style.display="block";
    }
    it1[i].onmouseout=function(){
      hidden1[this.index].style.display="none";
    }
  }
  var it3=$(".sjjd");
  var hidden3=$(".wosj");
  for(var i=0;i<it3.length;i++){
    it3[i].index=0;
    it3[i].onmouseover=function(){
      hidden3[this.index].style.display="block";
    }
    it3[i].onmouseout=function(){
      hidden3[this.index].style.display="none";
    }
  }

  var it2=$(".gz");
  var hidden2=$(".jdma");
  for(var i=0;i<it2.length;i++){
    it2[i].index=0;
    it2[i].onmouseover=function(){
      hidden2[this.index].style.display="block";
    }
    it2[i].onmouseout=function(){
      hidden2[this.index].style.display="none";
    }
  }
  var it4=$(".fuwu");
  var hidden4=$(".khfw");
  for(var i=0;i<it4.length;i++){
    it4[i].index=0;
    it4[i].onmouseover=function(){
      hidden4[this.index].style.display="block";
    }
    it4[i].onmouseout=function(){
      hidden4[this.index].style.display="none";
    }
  }
  var it5=$(".nav");
  var hidden5=$(".daohang");
  for(var i=0;i<it5.length;i++){
    it5[i].index=0;
    it5[i].onmouseover=function(){
      hidden5[this.index].style.display="block";
    }
    it5[i].onmouseout=function(){
      hidden5[this.index].style.display="none";
    }
  }
  var it6=$(".qwe");
  var hidden6=$(".rdf");
  for(var i=0;i<it6.length;i++){
    it6[i].index=0;
    it6[i].onmouseover=function(){
      hidden6[this.index].style.display="block";
    }
    it6[i].onmouseout=function(){
      hidden6[this.index].style.display="none";
    }
  }
  var it7=$(".l11");
  var hidden7=$(".xx11");
  for(var i=0;i<it7.length;i++){
    it7[i].index=0;
    it7[i].onmouseover=function(){
      hidden7[this.index].style.display="block";
    }
    it7[i].onmouseout=function(){
      hidden7[this.index].style.display="none";
    }
  }
  var it8=$(".2l");
  var hidden8=$(".nzxxk2");
  for(var i=0;i<it8.length;i++){
    it8[i].index=0;
    it8[i].onmouseover=function(){
      hidden8[this.index].style.display="block";
    }
    it8[i].onmouseout=function(){
      hidden8[this.index].style.display="none";
    }
  }
  var it9=$(".3l");
  var hidden9=$(".3l1");
  for(var i=0;i<it9.length;i++){
    it9[i].index=0;
    it9[i].onmouseover=function(){
      hidden9[this.index].style.display="block";
    }
    it9[i].onmouseout=function(){
      hidden9[this.index].style.display="none";
    }
  }
  var it10=$(".4l");
  var hidden10=$(".4l1");
  for(var i=0;i<it10.length;i++){
    it10[i].index=0;
    it10[i].onmouseover=function(){
      hidden10[this.index].style.display="block";
    }
    it10[i].onmouseout=function(){
      hidden10[this.index].style.display="none";
    }
  }
  var it11=$(".5l");
  var hidden11=$(".5l1");
  for(var i=0;i<it11.length;i++){
    it11[i].index=0;
    it11[i].onmouseover=function(){
      hidden11[this.index].style.display="block";
    }
    it11[i].onmouseout=function(){
      hidden11[this.index].style.display="none";
    }
  }
  var it12=$(".6l");
  var hidden12=$(".6l1");
  for(var i=0;i<it12.length;i++){
    it12[i].index=0;
    it12[i].onmouseover=function(){
      hidden12[this.index].style.display="block";
    }
    it12[i].onmouseout=function(){
      hidden12[this.index].style.display="none";
    }
  }
  var it13=$(".7l");
  var hidden13=$(".7l1");
  for(var i=0;i<it13.length;i++){
    it13[i].index=0;
    it13[i].onmouseover=function(){
      hidden13[this.index].style.display="block";
    }
    it13[i].onmouseout=function(){
      hidden13[this.index].style.display="none";
    }
  }
  var it14=$(".8l");
  var hidden14=$(".8l1");
  for(var i=0;i<it14.length;i++){
    it14[i].index=0;
    it14[i].onmouseover=function(){
      hidden14[this.index].style.display="block";
    }
    it14[i].onmouseout=function(){
      hidden14[this.index].style.display="none";
    }
  }
  var it15=$(".9l");
  var hidden15=$(".9l1");
  for(var i=0;i<it15.length;i++){
    it15[i].index=0;
    it15[i].onmouseover=function(){
      hidden15[this.index].style.display="block";
    }
    it15[i].onmouseout=function(){
      hidden15[this.index].style.display="none";
    }
  }
  var it16=$(".10l");
  var hidden16=$(".10l1");
  for(var i=0;i<it16.length;i++){
    it16[i].index=0;
    it16[i].onmouseover=function(){
      hidden16[this.index].style.display="block";
    }
    it16[i].onmouseout=function(){
      hidden16[this.index].style.display="none";
    }
  }
  var it17=$(".qwer");
  var hidden17=$(".df");
  for(var i=0;i<it17.length;i++){
    it17[i].index=0;
    it17[i].onmouseover=function(){
      hidden17[this.index].style.display="block";
    }
    it17[i].onmouseout=function(){
      hidden17[this.index].style.display="none";
    }
  }
  var it18=$(".qwer1");
  var hidden18=$(".df1");
  for(var i=0;i<it18.length;i++){
    it18[i].index=0;
    it18[i].onmouseover=function(){
      hidden18[this.index].style.display="block";
    }
    it18[i].onmouseout=function(){
      hidden18[this.index].style.display="none";
    }
  }
  var it19=$(".qwer2");
  var hidden19=$(".df2");
  for(var i=0;i<it19.length;i++){
    it19[i].index=0;
    it19[i].onmouseover=function(){
      hidden19[this.index].style.display="block";
    }
    it19[i].onmouseout=function(){
      hidden19[this.index].style.display="none";
    }
  }
  var it20=$(".qwer3");
  var hidden20=$(".df3");
  for(var i=0;i<it20.length;i++){
    it20[i].index=0;
    it20[i].onmouseover=function(){
      hidden20[this.index].style.display="block";
    }
    it20[i].onmouseout=function(){
      hidden20[this.index].style.display="none";
    }
  }
  var it21=$(".qwer4");
  var hidden21=$(".df4");
  for(var i=0;i<it21.length;i++){
    it21[i].index=0;
    it21[i].onmouseover=function(){
      hidden21[this.index].style.display="block";
    }
    it21[i].onmouseout=function(){
      hidden21[this.index].style.display="none";
    }
  }
  var it22=$(".qwer5");
  var hidden22=$(".df5");
  for(var i=0;i<it22.length;i++){
    it22[i].index=0;
    it22[i].onmouseover=function(){
      hidden22[this.index].style.display="block";
    }
    it22[i].onmouseout=function(){
      hidden22[this.index].style.display="none";
    }
  }

 
  function xuangxiang(obj1,obj2){
  for(var i=0;i<obj1.length;i++){
    obj1[i].index=0;
    obj1[i].onmouseover=function(){
      obj2[this.index].style.display="block";
    }
    obj1[i].onmouseout=function(){
      obj2[this.index].style.display="none";
    }
  }
}
  xuangxiang($(".qwer6"),$(".df6"))
  xuangxiang($(".qwer7"),$(".df7"))
  xuangxiang($(".qwer8"),$(".df8"))
  xuangxiang($(".qwer9"),$(".df9"))
  xuangxiang($(".qwer10"),$(".df10"))
  xuangxiang($(".qwer11"),$(".df11"))
  xuangxiang($(".qwer12"),$(".df12"))
  xuangxiang($(".qwer13"),$(".df13"))
  xuangxiang($(".l12"),$(".xx12"))
  xuangxiang($(".l13"),$(".xx13"))
  xuangxiang($(".l14"),$(".xx14"))
  xuangxiang($(".l15"),$(".xx15"))
  xuangxiang($(".l16"),$(".xx16"))
  xuangxiang($(".l17"),$(".xx17"))
  xuangxiang($(".l18"),$(".xx18"))
  xuangxiang($(".l19"),$(".xx19"))
  xuangxiang($(".l22"),$(".xx22"))
  xuangxiang($(".l23"),$(".xx23"))
  xuangxiang($(".l24"),$(".xx24"))
  xuangxiang($(".l25"),$(".xx25"))
  xuangxiang($(".l26"),$(".xx26"))
  xuangxiang($(".l27"),$(".xx27"))
  xuangxiang($(".l28"),$(".xx28"))
  xuangxiang($(".l29"),$(".xx29"))
  xuangxiang($(".l32"),$(".xx32"))
  xuangxiang($(".l33"),$(".xx33"))
  xuangxiang($(".l34"),$(".xx34"))
  xuangxiang($(".l35"),$(".xx35"))
  xuangxiang($(".l36"),$(".xx36"))
  xuangxiang($(".l37"),$(".xx37"))
  xuangxiang($(".l38"),$(".xx38"))
  xuangxiang($(".l39"),$(".xx39"))
  xuangxiang($(".l42"),$(".xx42"))
  xuangxiang($(".l43"),$(".xx43"))
  xuangxiang($(".l44"),$(".xx44"))
  xuangxiang($(".l45"),$(".xx45"))
  xuangxiang($(".l46"),$(".xx46"))
  xuangxiang($(".l47"),$(".xx47"))
  xuangxiang($(".l48"),$(".xx48"))
  xuangxiang($(".l49"),$(".xx49"))
  xuangxiang($(".l52"),$(".xx52"))
  xuangxiang($(".l53"),$(".xx53"))
  xuangxiang($(".l54"),$(".xx54"))
  xuangxiang($(".l55"),$(".xx55"))
  xuangxiang($(".l56"),$(".xx56"))
  xuangxiang($(".l57"),$(".xx57"))
  xuangxiang($(".l58"),$(".xx58"))
  xuangxiang($(".l59"),$(".xx59"))
  xuangxiang($(".l62"),$(".xx62"))
  xuangxiang($(".l63"),$(".xx63"))
  xuangxiang($(".l64"),$(".xx64"))
  xuangxiang($(".l65"),$(".xx65"))
  xuangxiang($(".l66"),$(".xx66"))
  xuangxiang($(".l67"),$(".xx67"))
  xuangxiang($(".l68"),$(".xx68"))
  xuangxiang($(".l69"),$(".xx69"))
  xuangxiang($(".l72"),$(".xx72"))
  xuangxiang($(".l73"),$(".xx73"))
  xuangxiang($(".l74"),$(".xx74"))
  xuangxiang($(".l75"),$(".xx75"))
  xuangxiang($(".l76"),$(".xx76"))
  xuangxiang($(".l77"),$(".xx77"))
  xuangxiang($(".l78"),$(".xx78"))
  xuangxiang($(".l79"),$(".xx79"))
  xuangxiang($(".l82"),$(".xx82"))
  xuangxiang($(".l83"),$(".xx83"))
  xuangxiang($(".l84"),$(".xx84"))
  xuangxiang($(".l85"),$(".xx85"))
  xuangxiang($(".l86"),$(".xx86"))
  xuangxiang($(".l87"),$(".xx87"))
  xuangxiang($(".l88"),$(".xx88"))
  xuangxiang($(".l89"),$(".xx89"))
  xuangxiang($(".l92"),$(".xx92"))
  xuangxiang($(".l93"),$(".xx93"))
  xuangxiang($(".l94"),$(".xx94"))
  xuangxiang($(".l95"),$(".xx95"))
  xuangxiang($(".l96"),$(".xx96"))
  xuangxiang($(".l97"),$(".xx97"))
  xuangxiang($(".l98"),$(".xx98"))
  xuangxiang($(".l99"),$(".xx99"))
  xuangxiang($(".l102"),$(".xx102"))
  xuangxiang($(".l103"),$(".xx103"))
  xuangxiang($(".l104"),$(".xx104"))
  xuangxiang($(".l105"),$(".xx105"))
  xuangxiang($(".l106"),$(".xx106"))
  xuangxiang($(".l107"),$(".xx107"))
  xuangxiang($(".l108"),$(".xx108"))
  xuangxiang($(".l109"),$(".xx109"))
  xuangxiang($(".kka1"),$(".aak1"))
  xuangxiang($(".kka2"),$(".aak2"))
  xuangxiang($(".kka3"),$(".aak3"))
  xuangxiang($(".kka4"),$(".aak4"))
  xuangxiang($(".kka5"),$(".aak5"))
  xuangxiang($(".kka6"),$(".aak6"))

  



  // var hidden=$(".hidden")[0];
  var floor_nav=$(".floor-nav")[0];
  var floor_lis=$(".floor-lis");
  var floor=$(".fzxbtop");
  var now;
  var flag=true;
  var cHeight=document.documentElement.clientHeight;
  
  
  //floorHeigth-200<=scrollTop
  for (var i = 0; i < floor.length; i++) {
    floor[i].h=floor[i].offsetTop;
  };
  window.onscroll=function(){
    var obj=document.body.scrollTop?document.body:document.documentElement;
    var top=obj.scrollTop;
    if (top>=floor[0].h-400) {
      floor_nav.style.display="block";
    var nHeight=floor_nav.offsetHeight;
    floor_nav.style.top=(cHeight-nHeight)/2+"px";
    if(flag){
      flag=false;
      animate({height:100},500,function(){flag=true;})
    } 
  };
       if (top<=floor[0].h-400) {
      floor_nav.style.display="none";
          if(flag){
      flag=false;
      animate({height:0},500,function(){flag=true;})
    } 
    }
    for (var i = 0; i < floor.length; i++) {
      if (top>=floor[i].h-400) {
        for (var j = 0; j<floor_lis.length; j++) {
          floor_lis[j].style.background="#fff";
         }
        floor_lis[i].style.background="red";
        now=i;
       }
    }
  }
    for (var i = 0; i < floor_lis.length; i++) {
      floor_lis[i].index=i;
      floor_lis[i].onclick=function(){
        animate(document.body,{scrollTop:floor[this.index].h},500)
        animate(document.documentElement,{scrollTop:floor[this.index].h},500)
        now=this.index;
          }
        floor_lis[i].onmouseover=function(){
          this.style.background="red"
        }
        floor_lis[i].onmouseout=function(){
          if (this.index==now) {
            return;
          };
          this.style.background="#fff"
        }

      }

      
 
    var kuang=$(".biankuang");
    var xian=$(".hot");
    xian[0].style.display="block";
    for(var i=0;i<kuang.length;i++){
      kuang[i].index=i;
      kuang[i].onmouseover=function(){
        for(j=0;j<xian.length;j++){
          xian[j].style.display="none";
        }
        xian[this.index].style.display="block";
      }
    }
  
}


