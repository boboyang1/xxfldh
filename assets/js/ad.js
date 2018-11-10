var url = location.search;
url = url.substr(1);
var bs={
versions:function(){
var u = navigator.userAgent, app = navigator.appVersion;
return {
trident: u.indexOf('Trident') > -1, 
presto: u.indexOf('Presto') > -1,
webKit: u.indexOf('AppleWebKit') > -1, 
gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, 
mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), 
ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), 
android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
iPhone: u.indexOf('iPhone') > -1,
iPad: u.indexOf('iPad') > -1         
};
}(),
language:(navigator.browserLanguage || navigator.language).toLowerCase()
} 
var flag = true;
if(bs.versions.mobile && url!='mobile'){
if(bs.versions.android||bs.versions.iPhone||bs.versions.iPad||bs.versions.ios){
flag=false;
}
}
if(flag){
document.writeln("<div align='center'><a href=\'https://www.xxfldh.com\' target=\'_blank\' ><img src=\'https://wx3.sinaimg.cn/mw690/0060lm7Tly1ftiu9zkxy9j30rs01fq3d.jpg\'width=\'80%\'></a><\/div>");//zhaozu

}else{
document.writeln("<div align='center'><a href=\'http://dow.2837976.com/download/live.html?source=baobao005\' target=\'_blank\' ><img src=\'http://www.assab-die.cn/man/bb.gif\'width=\'100%\'></a><\/div>");

}
