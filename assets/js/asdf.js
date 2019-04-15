var system ={
win : false,
mac : false,
xll : false
};
//检测
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
if(system.win||system.mac||system.xll){
document.writeln("<div align='center'><a href=\'http://www.leisitu.info/?adref=xxfldh_com\' target=\'_blank\' ><img src=\'https://www.zgyxyd.com/images/yn.gif\'width=\'100%\'></a><\/div>");//zhaozu

}else{
document.writeln("<div align='center'><a href=\'http://www.leisitu.info/?adref=xxfldh_com\' target=\'_blank\' ><img src=\'https://www.zgyxyd.com/images/yn.gif\'width=\'100%\'></a><\/div>");//zhaozu
}
