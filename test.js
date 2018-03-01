// JavaScript Document
$(function(){
	$(".set a img").eq(0).toggle(function(){
		$("#wxyt_speed").show();
	},function(){
			$("#wxyt_speed").hide();
	})
	
	
	$(".colspan2 .fleft .wxyt_cnt img").css({"height":"auto"});
    $(".colspan2 .fleft .wxyt_cnt").css({"height":"auto"});
	$(".form1 .Menu ul li").click(function(){
		var meta = $(".meta").height();
        $(".jjl").css({"height":meta});
        console.log("aa");
	})
	$("#wxyt_speed input").click(function(){
			var sy = $("#wxyt_speed input").index(this);
			$("#wxyt_speed input").removeClass("move");
			$(this).addClass("move");
			
	})
         $(window).resize(function() {
         var width = $(document.body).width();
         if(width<1000){
	$(".container").css({"left":"0","margin-left":"0"});
	}else{
		$(".container").css({"left":"50%","margin-left":"-501px"});
	}
         }); 
         $("#List11").hover(function(){
		$(this).show();	
	},function(){
		$(this).hide();
		})	
    $("#slide_btn").hover(function(){
		$("#slb").css({"display":"block"});	
	},function(){
		$("#slb").css({"display":"block"});	
	})
	
	$(".a_prev img").hover(function(){
		$(this).attr("src","http://i.tq121.com.cn/i/radar/l1.png");
	},function(){
		$(this).attr("src","http://i.tq121.com.cn/i/radar/l.png");
	})
	$("#play_btn1 img").hover(function(){
		$(this).attr("src","http://i.tq121.com.cn/i/radar/play2.png");
	},function(){
		$(this).attr("src","http://i.tq121.com.cn/i/radar/play1.png");
	})
	$(".a_next img").hover(function(){
		$(this).attr("src","http://i.tq121.com.cn/i/radar/r1.png");
	},function(){
		$(this).attr("src","http://i.tq121.com.cn/i/radar/r.png");
	})
    $(".set a:first img").hover(function(){
		$(this).attr("src","http://i.tq121.com.cn/i/radar/set.png");
	},function(){
		$(this).attr("src","http://i.tq121.com.cn/i/radar/set1.png");
	})
    $(".set a").eq(1).find("#fd").hover(function(){
		$(this).attr("src","http://i.tq121.com.cn/i/radar/fd1.png");
	},function(){
		$(this).attr("src","http://i.tq121.com.cn/i/radar/fd.png");
	})
	$(".set a").eq(1).find("#sx").hover(function(){
		$(this).attr("src","http://i.tq121.com.cn/i/radar/sx1.png");
	},function(){
		$(this).attr("src","http://i.tq121.com.cn/i/radar/sx.png");
	})
	
	$(".a_stop1 img").hover(function(){
		$(this).attr("src","http://i.tq121.com.cn/i/radar/pause1.png");
	},function(){
		$(this).attr("src","http://i.tq121.com.cn/i/radar/pause.png");
	})
    
    $("#slide1").change(function(){
		wxyt.stop();
	})
	$("#slide2").change(function(){
			wxyt.stop();
	})



$(".set img").eq(1).click(function(){
	$(".container").addClass("containerbox").siblings().hide();
	$(".containerbox").css({"left":"0","margin-left":"0","top":"0"});
	var height = document.documentElement.clientHeight||document.body.clientHeight;
	var imgH=height-92;
	$(".containerbox .colspan2 .fleft .wxyt_cnt img").css({"height":imgH});
	var width = document.documentElement.clientWidth||document.body.clientWidth;
	$(".wxyt_ft").css({"width":width})
	
})
$("#sx").click(function(){
	
		$(".container").removeClass("containerbox").siblings().show();
		$('.provinceLinks').hide();
	$(".container").css({"left":"50%","margin-left":"-501px","top":"250px"});
		$(".container .colspan2 .fleft .wxyt_cnt img").css({"height":"auto"});	
		$("#slitu").css({"width":"460px"});
		$("#sld").css({"width":"430px"});
		$(".wxyt_ft").css({"width":"680px"})
})	
	
	
	
	
	
})
var rotate_delay = 500;






//var rotate_delay = 300; // delay in milliseconds (5000 = 5 secs)
current = 0;
current_current  = 0;
current_start = 0;
current_end =0;





function ap(name) 
{
	var m=$('#'+name).innerHTML;
	if(m=="播放")
	{
		document.getElementById(name).innerHTML="停止";
		document.getElementById("bbb").innerHTML="播放";
		rotate();
	}
	else if(m=="停止")
	{
		document.getElementById(name).innerHTML="播放";
		rotate();
	}
}

function changes() 
{

	ap1('bbb');
}

function rotate() 
{	
		/*
		if (document.getElementById("aaa").innerHTML== "停止")
		{
			current = (current == document.slideform.slide.length-1) ? 0 : current+1;
			document.images.show.src = document.slideform.slide[current].value;
			document.slideform.slide.selectedIndex = current;
			window.setTimeout("rotate()", rotate_delay);
		}
				*/
		if (document.getElementById("aaa").innerHTML== "停止")
		{
			if(current<document.slideform.slide.length)
			{
				
				document.images.show.src = document.slideform.slide[current].value;
				document.getElementById("large").href=show_large(document.slideform.slide[current].value);
				document.slideform.slide.selectedIndex = current;
				window.setTimeout("rotate()", rotate_delay);
				
				if(current==document.slideform.slide.length-1)
				{
					document.getElementById("aaa").innerHTML="播放";
					current=-1;
				}
				current++;
			}
		}
}


function ap1(name) 
{
	var m=document.getElementById(name).innerHTML;
	if(m=="播放")
	{
		
		video_start();
		//document.getElementById(name).innerHTML="停止";
		//document.getElementById("aaa").innerHTML="播放";
		rotate1();
	}
	else if(m=="停止")
	{
	//	document.getElementById(name).innerHTML="播放";
		rotate1();
	}
}

function video_start() 
{
	/*
	current_current=0;
	current_start = document.slideform.slide1.selectedIndex;
	current_current=current_start;
	current_end = document.slideform.slide2.selectedIndex;
	//alert("current_current="+current_current+"/current_start="+current_start+"/current_end="+document.slideform.slide2.selectedIndex);
	if(current_start>current_end)
	{
		var j=0;
		j=current_start;
		current_start=current_end;
		current_end=j;
		current_current=current_start;
	}
	current_end++;
*/

current_current=0;
	var gostring=go_str();//获取时间间隔的开始
	var tostring=to_str();//获取时间间隔的结束
	//alert(gostring+"--"+tostring);
	if(gostring>tostring)//判断开始和结束的大小，并设置为正确的格式
	{
	
		var jj=0;
		jj=gostring;
		gostring=tostring;
		tostring=jj;
	}
	//alert("gostring="+gostring+"/tostring"+tostring);
	//设置slide控件的第一个值的index
	var goindex;
	var toindex;
	
	var j=0;
	for (i=0;i<document.slideform.slide3.length;i++)
	{
		var on_str= document.slideform.slide3[i].text;
		 var onstring=strsub1(on_str);
		 if(gostring==onstring)
		 {
		 	goindex=i;
		 	j=1;
		 }
	}
	if(j==0)
	{
		for (i=0;i<document.slideform.slide3.length-1;i++)
		{
			var on_str= document.slideform.slide3[i].text;
			var iii=i+1;
			var on_str1= document.slideform.slide3[iii].text;
			var onstring=strsub1(on_str);
			var onstring1=strsub1(on_str1);
			if(gostring>onstring && gostring<onstring1)
			{
				goindex=iii;
				j=1;
			}
		}
	}
	current_start=goindex;
	current_current=goindex;
		//设置slide控件的第一个值的index  end
		
	//设置slide控件的最后一个值的index
		var j=0;
	for (i=0;i<document.slideform.slide3.length;i++)
	{
		var on_str= document.slideform.slide3[i].text;
		 var onstring=strsub1(on_str);
		 if(tostring==onstring)
		 {
		 	toindex=i;
		 	j=1;
		 }
	}
	if(j==0)
	{
		for (i=0;i<document.slideform.slide3.length-1;i++)
		{
			var on_str= document.slideform.slide3[i].text;
			var iii=i+1;
			var on_str1= document.slideform.slide3[iii].text;
			var onstring=strsub1(on_str);
			var onstring1=strsub1(on_str1);
			if(tostring>onstring && tostring<onstring1)
			{
				toindex=i;
				j=1;
			}
		}
	}
	current_end=toindex+1;
	//设置slide控件的最后一个值的index   end
	//alert("current_current="+current_current+"current_end="+current_end);
	
	//重新设置slide的值
		for (m=document.slideform.slide.length-1;m>0;m--) ///////////清空列表
		document.slideform.slide.options[m]=null ;
		var j=0;
		for (i=current_start;i<current_end;i++)////////////给列表重新赋值
		{
			
			document.slideform.slide[j]=new Option(document.slideform.slide3[i].text) ;
			document.slideform.slide[j].value=document.slideform.slide3[i].value ;
                            var big =document.slideform.slide3[i].getAttribute("bigpic");
                             document.slideform.slide[j].setAttribute("bigpic",big);

			j++;
		}
		//alert("j="+j+"/current_start="+current_start+"/current_end="+current_end+"/toindex="+toindex+"/goindex="+goindex);
}

function rotate1() 
{	

	if (document.getElementById("bbb").innerHTML== "停止")
	{
		/*
		current = (current == document.slideform.slide.length-1) ? 0 : current+1;
			//alert(current);
		document.images.show.src = document.slideform.slide[current].value;
		document.slideform.slide.selectedIndex = current;
		window.setTimeout("rotate1()", rotate_delay);
		*/

		if(current<document.slideform.slide.length)
		{
			document.images.show.src = document.slideform.slide[current].value;
			document.getElementById("large").href=show_large(document.slideform.slide[current].value);
			document.slideform.slide.selectedIndex = current;
			window.setTimeout("rotate1()", rotate_delay);
			if(current==document.slideform.slide.length-1)
			{
				document.getElementById("bbb").innerHTML="播放";
				current=-1;
			}
			current++;
		}
	
	}
}


function  go_str()
{
	var go=document.slideform.slide1.value;
	var gostr;
   gostr=strsub(go);
   //alert(gostr);
   return gostr;
}

function  to_str()
{
	var to=document.slideform.slide2.value;
	var tostr;
    tostr=strsub(to);
  // alert(tostr);
   return tostr;
}

function strsub(str)//切割组合字符串为0808011230格式
{
	var year,month,day,hour,minute,timestr;
		year=str.substring(0,2); 
		month=str.substring(3,5); 
		day=str.substring(6,8); 
		hour=str.substring(9,11); 
		minute=str.substring(12,14); 
		
		timestr=year+month+day+hour+minute;

		return  timestr;
}

function strsub1(str)//切割组合字符串为0808011230格式
{
	var year,month,day,hour,minute,timestr;
		year=str.substring(2,4); 
		month=str.substring(5,7); 
		day=str.substring(8,10); 
		hour=str.substring(11,13); 
		minute=str.substring(14,16); 
		
		timestr=year+month+day+hour+minute;

		return  timestr;
}


var imgW;
/*$(window).resize(function(){
	//setLeft();
	var width = document.documentElement.clientWidth||document.body.clientWidth;
	imgW = width;
	
	console.log(imgW)
	
	
	ss(width);
	
})*/




var wxyt = document.getElementById("slide");

	wxyt.img = document.getElementById("wxyt_img");
	wxyt.loading = document.getElementById("wxyt_loading");
	wxyt.btn = document.getElementById("play_btn");
	wxyt.fd = document.getElementById("fd");
	wxyt.sx = document.getElementById("sx");
	wxyt.btn1 = document.getElementById("play_btn1");
	wxyt.slide = document.getElementById("slide_btn");
	wxyt.slidewidth = document.getElementById("slide_cur");
	wxyt.speedRatio = document.getElementById("wxyt_speed").getElementsByTagName("input");
	var wxytCnt = document.getElementById("wxytCnt");
	
	

function ss (width){

	
	var height = document.documentElement.clientHeight||document.body.clientHeight;
	var width = document.documentElement.clientWidth||document.body.clientWidth;
	var imgH=height-92;
	wxyt.img.style.height=imgH+"px";
	
	var imgWs=width-237;
	var imgS=width-270;
	
	document.getElementById("slitu").style.width=imgWs+"px";
	document.getElementById("sld").style.width=imgS+"px";

	
}






wxyt.fd.onclick = function() {
	var width = document.documentElement.clientWidth||document.body.clientWidth;
	imgW = width-270;
	ss(width);
	this.style.display="none";
	document.getElementById("sx").style.display="block";
};


wxyt.sx.onclick = function() {
		var width = 430;
	
	imgW = width;
	ss(width);
	this.style.display="none";
	document.getElementById("fd").style.display="block";
}



wxyt.btn.onclick = function() {
    wxyt.loading.style.display = 'block';
    return false;
};

wxyt.onchange = function(from) {
    if (!from) {
        wxyt.stop();
	
    }
	

    this.slide.style.cssText = "left:" + Math.ceil(imgW * this.selectedIndex / this.options.length + imgW / this.options.length) + "px;";
    this.slidewidth.style.cssText = "width:" + Math.ceil(imgW * this.selectedIndex / this.options.length + imgW / this.options.length) + "px;";
    this.img.src = this.options[this.selectedIndex].value;
    document.getElementById("wxyt_img_a").href = wxyt.options[wxyt.selectedIndex].getAttribute("bigPic");
    //document.getElementById("slb").innerHTML = "" + this.options[this.selectedIndex].innerHTML;
		var slbInner = this.options[this.selectedIndex].innerHTML
    document.getElementById("slb").innerHTML = slbInner.substr(5);

};



wxyt.change = function(index, from) {

    this.selectedIndex = index;
    this.onchange(from);
};
wxyt.first = function() {
    this.change(0);
};
wxyt.prev = function() {
    if (this.selectedIndex > 0) {
        this.selectedIndex--;
    }
    this.onchange();
    wxyt.stop();
};
wxyt.next = function(from) {

    if (this.selectedIndex < (this.options.length - 1)) {
		
        this.selectedIndex++;
        this.onchange(from);
		
		
		
		
    } else {
        this.selectedIndex = 0;
        this.slide.style.cssText = "left:" + Math.ceil(imgW / this.options.length) + "px";
        this.slidewidth.style.cssText = "width:" + Math.ceil(imgW / this.options.length) + "px";
        this.img.src = this.options[this.selectedIndex].value;
        //document.getElementById("wxyt_img_a").href = wxyt.options[wxyt.selectedIndex].getAttribute("bigPic");
        //document.getElementById("wxyt_title").innerHTML = "风云二号气象卫星云图 " + this.options[this.selectedIndex].innerHTML;
        this.stop();
    }
};
wxyt.nextFrame = function() {
    wxyt.next();
    wxyt.stop();
};
wxyt.last = function() {
    this.change(this.options.length - 1);
};
wxyt.speed = 500;
wxyt.playSpeed = function() {
    for (var i = 0; i < wxyt.speedRatio.length; i++) {
        wxyt.speedRatio[i].onclick = function() {
            wxyt.speed = this.name;
			console.log(this.name);
            if (wxyt.playing) {
                clearInterval(wxyt.playing);
                wxyt.play(true);
            }
        };
    }
};
wxyt.playing = false;
wxyt.play = function(fromSpeedRatio) {
    var that = this;
    if (typeof(that.selectedIndex) != undefined && that.selectedIndex < (that.options.length - 1)) {
        that.change(this.selectedIndex, fromSpeedRatio);
    } else {
        this.first();
    }
    wxyt.playAction();
    this.playing = setInterval(function() {
        wxyt.playAction();
    },
    this.speed);
    wxyt.btn.className = "a_play a_stop";
	wxyt.btn.style.display = "none";
    wxyt.btn.title = "暂停";
	
	
	
	wxyt.btn1.className = "a_play1 a_stop1";
    wxyt.btn1.innerHTML = "<img src='http://i.tq121.com.cn/i/radar/pause.png'>";
    wxyt.btn1.title = "暂停";
};
wxyt.playAction = function() {
    var that = this;
    if (that.selectedIndex < (that.options.length - 1)) {
        that.next(true);
    } else {
        init();
    }
};
wxyt.stop = function() {
    clearInterval(this.playing);
    this.playing = false;
    wxyt.btn.className = "a_play";
    wxyt.btn.style.display = "none";
    wxyt.btn.title = "播放";
	
	
	
	 wxyt.btn1.className = "a_play1";
    wxyt.btn1.innerHTML = "<img src='http://i.tq121.com.cn/i/satellite/play.png'>";
    wxyt.btn1.title = "播放";
    wxytCnt.title = "点击看大图";
};
drag(wxyt.slide);
 wxyt.btn1.onclick = function() {
			
            if (this.className == "a_play1") {
                wxyt.play();
            } else {
                wxyt.stop();
            }
            return false;
        };



function loadimg(div, srcs, key) {
    if (key < (srcs.length - 1)) {
        src = srcs[key];
        img = document.createElement("img");
        div.appendChild(img);
        img.src = src.value;
        key++;
        if (!
        /*@cc_on!@*/
        0) {
            img.onload = function() {
                if (this.complete == true) {
                    loadimg(div, srcs, key);
                }
            };
        } else {
            img.onreadystatechange = function() {
                if (this.readyState == "complete" || this.readyState == "loaded") {
                    loadimg(div, srcs, key);
                }
            };
        }
        img.onerror = function() {
            loadimg(div, srcs, key);
        };
    } else {
        wxyt.btn.onclick = function() {
            if (this.className == "a_play") {
                wxyt.play();
				
				
            } else {
                wxyt.stop();
				
            }
            return false;
        };
		
		 wxyt.btn1.onclick = function() {
			
            if (this.className == "a_play1") {
                wxyt.play();
            } else {
                wxyt.stop();
            }
            return false;
        };
		
		
		
        if (wxyt.loading.style.display == 'block') {
            wxyt.loading.style.display = 'none';
            wxyt.btn.onclick();
        }
    }
}
function drag(o) {
    o.onmousedown = function(a) {
        var d = document;
        if (!a) a = window.event;
        var x = a.pageX ? a.pageX: a.clientX;
        var b = parseInt(o.style.left, 10);
        if (o.setCapture) o.setCapture();
        else if (window.captureEvents) window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
        d.onmousemove = function(a) {
            if (!a) a = window.event;
            if (!a.pageX) a.pageX = a.clientX;
            var tx = b + a.pageX - x;
            if (tx < 2) {
                tx = 2;
            } else if (tx > imgW) {
                tx = imgW;
            };
            wxyt.selectedIndex = Math.floor((tx - 2) * wxyt.options.length / imgW);
            wxyt.onchange();
            /*o.style.cssText="left:"+tx+"px";// 2013-10-12*/

        };
        d.onmouseup = function() {
            if (o.releaseCapture) o.releaseCapture();
            else if (window.captureEvents) window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
            d.onmousemove = null;
            d.onmouseup = null;
        };
    }
}





function init() {
	imgW = 430;
    loadimg(document.getElementById("temp_div"), wxyt.options, 0);
    wxyt.change(wxyt.options.length - 1, 500);
    //wxyt.slide.style.cssText = "left:" + Math.ceil(imgW / wxyt.options.length) + "px";
  //  wxyt.slidewidth.style.cssText = "width:" + Math.ceil(imgW / wxyt.options.length) + "px";
    wxyt.selectedIndex = 0;
    wxyt.img.src = wxyt.options[wxyt.options.length - 1].value;
  //  document.getElementById("wxyt_img_a").href = wxyt.options[wxyt.options.length - 1].getAttribute("bigPic");
    //document.getElementById("wxyt_title").innerHTML = "风云二号气象卫星云图 " + wxyt.options[wxyt.options.length - 1].innerHTML;
    wxyt.playSpeed();
    wxyt.stop();
    wxytCnt.title = "点击看大图";
}

init(); 
 
