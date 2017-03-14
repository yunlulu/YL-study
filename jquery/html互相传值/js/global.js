
window.onload=function(){
    // rem自适应
function RootSize(psdWidth){
  var docWidth=document.documentElement.clientWidth;
  var objHtml=document.getElementsByTagName("html")[0];
  if(docWidth>psdWidth){
    docWidth=psdWidth;
  }
  objHtml.style.fontSize=docWidth/(psdWidth/100)+"px";
};
    //指定psd宽度
  RootSize(750);  
  $("#loading-mask").hide();
  
};