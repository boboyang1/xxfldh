function killErrors(){return true;}window.onerror=killErrors;
function mobileMode(){
	var mode=false;
	if(window.location.toString().indexOf('pref=padindex') != -8){}
	else {
		if(/AppleWebKit.*Mobile/i.test(navigator.userAgent)||(/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry|MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
			try {
				if(!(/iPad/i.test(navigator.userAgent))){ mode=true;}
			}
			catch(e){}
		}
	} 
	return mode;
}	
var asdtop="";
var asdfoot="";
var adLeftCouple="";
var adRightCouple="";
var adLeftFloat="";
var adRightFloat="";
var adLeftCoupleTop=0;
var adLeftCoupleLeft=0;
var adLeftCoupleTxt="";
var adRightCoupleTop=0;
var adRightCoupleRight=0;
var adRightCoupleTxt="";
var adLeftFloatLeft=0;
var adLeftFloatBottom=0;
var adLeftFloatTxt="";
var adRightFloatRight=0;
var adRightFloatBottom=0;
var adRightFloatTxt="";
var tongji="";
var cssurl="";
var adhost=window.location.host.toLowerCase();
var btnClose = "";
var dyplayTxt = "";
var myDate = new Date();
var date1 = (myDate.getMonth()+1);
date1="0"+date1;
var day1 = myDate.getDate();
day1="0"+day1;
//取后2位
date1=date1.substring(date1.length-2,date1.length);
day1=day1.substring(day1.length-2,day1.length);

//关闭按钮，暂时未用
btnClose = '<div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="javascript:closeFloat();" style="color:white;text-decoration:none;">×</a></div>';

function scrollx(p){
	var d = document,dd = d.documentElement,db = d.body,w = window,o = d.getElementById(p.id),ie6 = /msie 6/i.test(navigator.userAgent),style,timer;
	if(o){
		o.style.cssText +=";z-index:999;position:"+(p.ofloat&&!ie6?'fixed':'absolute')+";"+(p.oleft==undefined?'':'left:'+p.oleft+'px;')+(p.otop==undefined?'':'top:'+p.otop+'px')+(p.oright==undefined?'':'right:'+p.oright+'px;')+(p.obottom==undefined?'':'bottom:'+p.obottom+'px');
		if(p.ofloat&&ie6){
			if (p.otop!=undefined){
				o.style.cssText += ';top:expression(documentElement.scrollTop + '+p.otop+' + "px" );';
			}
			if(p.oleft!=undefined){
				o.style.cssText += ';left:expression(documentElement.scrollLeft + '+p.oleft+' + "px");';
			}
			if (p.obottom!=undefined){
				o.style.cssText += ';top:expression(documentElement.clientHeight - '+o.offsetHeight+' + documentElement.scrollTop - ' +p.obottom+' + "px" );';
			}
			if (p.oright!=undefined){
				o.style.cssText += ';left:expression(documentElement.clientWidth - '+o.offsetWidth+' + documentElement.scrollLeft - ' +p.oright+' + "px" );';
			}
			dd.style.cssText +=';background-image: url(about:blank);background-attachment:fixed;';
		}else{
			if(!p.ofloat){
				w.onresize = w.onscroll = function(){
					clearInterval(timer);
					timer = setInterval(function(){
						//双选择为了修复chrome 下xhtml解析时dd.scrollTop为 0
						var st = (dd.scrollTop||db.scrollTop),c;
						c = st - o.offsetTop + (p.otop!=undefined?p.otop:(w.innerHeight||dd.clientHeight)-o.offsetHeight);
						if(c!=0){
							o.style.top = o.offsetTop + Math.ceil(Math.abs(c)/10)*(c<0?-1:1) + 'px';
						}else{
							clearInterval(timer);
						}
					},10)
				}
			}
		}
	}
}

//广告顶部通栏  

asdtop=asdtop+"<A href=\"https://www.xxfldh.com\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/mw690/0060lm7Tly1ftiu9zkxy9j30rs01fq3d.jpg\" width=\"100%\"><\/A>"
if(mobileMode()){
asdtop="<A href=\"https://www.xxfldh.com\" target=\"_blank\"><img border=\"0\" src=\"https://wx3.sinaimg.cn/mw690/0060lm7Tly1ftiu9zkxy9j30rs01fq3d.jpg\" width=\"100%\"><\/A>";
  
}

//以下代码请勿修改
//ipad|
//if(!navigator.userAgent.match(/Android/i) &&!navigator.userAgent.match(/iphone|mac/i)){
		if (adLeftCoupleTxt!="" && !mobileMode()){
			adLeftCouple+='<div id="leftCouple" style="position:absolute;top:'+adLeftCoupleTop+'px;left:'+adLeftCoupleLeft+'px;">'+adLeftCoupleTxt+'<div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="#" onclick="leftCouple.style.visibility=\'hidden\';" style="color:white;text-decoration:none;">×</a></div></div>';
			document.writeln(adLeftCouple);
			scrollx({id:'leftCouple',otop:adLeftCoupleTop,oleft:adLeftCoupleLeft,ofloat:1})
		}
  		if (adRightCoupleTxt!="" && !mobileMode()){
			adRightCouple+='<div id="rightCouple" style="position:absolute;top:'+adRightCoupleTop+'px;right:'+adRightCoupleRight+'px;">'+adRightCoupleTxt+'<div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="#" onclick="rightCouple.style.visibility=\'hidden\';" style="color:white;text-decoration:none;">×</a></div></div>';
			document.writeln(adRightCouple);
				scrollx({id:'rightCouple',otop:adRightCoupleTop,oright:adRightCoupleRight,ofloat:1})
		}
		if (adLeftFloatTxt!="" && !mobileMode()){
			adLeftFloat+='<div id="leftFloat" style="position:absolute;bottom:'+adLeftFloatBottom+'px;left:'+adLeftFloatLeft+'px;">'+adLeftFloatTxt+'<div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="#" onclick="leftFloat.style.visibility=\'hidden\';" style="color:white;text-decoration:none;">×</a></div></div>';
			document.writeln(adLeftFloat);
			scrollx({id:'leftFloat',oleft:adLeftFloatLeft,obottom:adLeftFloatBottom,ofloat:1})
		}
		if (adRightFloatTxt!="" && !mobileMode()){
			adRightFloat+='<div id="rightFloat" style="position:absolute;bottom:'+adRightFloatBottom+'px;right:'+adRightFloatRight+'px;">'+adRightFloatTxt+'<div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="#" onclick="rightFloat.style.visibility=\'hidden\';" style="color:white;text-decoration:none;">×</a></div></div>';
			document.writeln(adRightFloat);
			scrollx({id:'rightFloat',oright:adRightFloatRight,obottom:adRightFloatBottom,ofloat:1})
		}
	//}