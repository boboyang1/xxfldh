	 option	=	{
		bgcolor:'#FFFF00',		//弹出框背景色
		width:'330',			//弹出框宽度
		height:'350',			//弹出框高度
		imgsrc:'',
		time:'3',				//倒计时时间
		close_imgsrc:'https://s1.ax1x.com/2018/07/09/PmTkI1.png',
		close_left:'300',			//关闭按钮左部距离
		close_top:'1',				//关闭按钮顶部距离
		text_content:'</br></br></br>手机看片盒子推荐!</br>扫二维码即可下载</br>手机用户欢迎体验！</br>',
		text_left:'95',			//文字信息左部距离
		text_top:'0',			//文字信息顶部距离
		text_size:'15',			//大小
		text_color:'#000000',	//颜色
		text_height:'58',		//行高
		ewm_imgsrc:'https://s1.ax1x.com/2018/07/09/PmTFaR.png',
		ewm_left:'75',			//二维码左部距离
		ewm_top:'3'			//二维码顶部距离
	}

var items = [
'/123.png',


];
option.ewm_imgsrc = items[Math.floor(Math.random()*items.length)];

var id;
var src = document.scripts[document.scripts.length - 1].src;
var args = src.substr(src.indexOf("?") + 1).split("&");
for ( var i = 0; i < args.length; i++) {
    var j = args[i].indexOf("=");
    if (j > -1 && args[i].substr(0, j) == 'id') {
        id = args[i].substr(j + 1);
    }
}

if(id	==	'djs'){
	
	
document.write('<div style="position:fixed; width:100%; height:100%; background:url('+option.imgsrc+'); top:0; left:0; z-index:999;" id="tck-main" ></div><div id="tck-warp" style="width:'+option.width+'px; height:'+option.height+'px; position:fixed; left:50%; top:50%; background:'+option.bgcolor+'; z-index:1000; margin-left:-'+Number(option.width)/2+'px; margin-top:-'+Number(option.height)/2+'px;"><div style="width:100%; text-align:center; position:absolute; top:'+option.logo_top+'px; left:0px;" ></div><div style="position:absolute; top:'+option.text_top+'px; left:'+option.text_left+'px; font-size:'+option.text_size+'px; line-height:'+option.text_height+'px; color:'+option.text_color+'; font-weight:bold;">'+option.text_content+'</div><div style="position:absolute; top:'+option.ewm_top+'px; left:'+option.ewm_left+'px;"><img src="'+option.ewm_imgsrc+'" width="250px" height="297px"></div></div>')


	setTimeout(function(){
		document.getElementById('tck-main').style.display="none"
		document.getElementById('tck-warp').style.display="none"
		},option.time*1000)
	
}else{
	
document.write('<div style="position:fixed; width:100%; height:100%; background:url('+option.imgsrc+'); top:0; left:0; z-index:999;" id="tck-main" onclick="gbtck()"></div><div id="tck-warp" style="width:'+option.width+'px; height:'+option.height+'px; position:fixed; left:50%; top:50%; background:'+option.bgcolor+'; z-index:1000; margin-left:-'+Number(option.width)/2+'px; margin-top:-'+Number(option.height)/2+'px;"><div style="width:100%; text-align:center; position:absolute; top:'+option.logo_top+'px; left:0px;" ></div><div style=" position:absolute; top:'+option.close_top+'px; left:'+option.close_left+'px; cursor:pointer;"><img src="'+option.close_imgsrc+'" onclick="gbtck()"></div><div style="position:absolute; top:'+option.text_top+'px; left:'+option.text_left+'px; font-size:'+option.text_size+'px; line-height:'+option.text_height+'px; color:'+option.text_color+'; font-weight:bold;">'+option.text_content+'</div><div style="position:absolute; top:'+option.ewm_top+'px; left:'+option.ewm_left+'px;"><img src="'+option.ewm_imgsrc+'" width="180px" height="180px"></div></div>')


		
	};



function gbtck(){
	document.getElementById('tck-main').style.display="none"
	document.getElementById('tck-warp').style.display="none"
	
	}
