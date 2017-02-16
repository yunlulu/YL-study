
window.onload=function(){
    
     globalAudio = document.getElementById("music"); 
     // 为了解决iphone的冒泡兼容，不要去掉
    $("body").children().click(function () {
    });
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
  // 让音乐自动播放
// 音乐播放与暂停
$("#musicIcon").on("click",function(){
          if(globalAudio!==null){             
              if(globalAudio.paused){ globalAudio.play();}
                else{globalAudio.pause();} 
          }
          $(this).toggleClass("rotate");
});
autoPlayAudio();


};
// 解决ios音乐不自动播放的问题
function autoPlayAudio() {
        wx.config({
            // 配置信息, 即使不正确也能使用 wx.ready
            debug: false,
            appId: '',
            timestamp: 1,
            nonceStr: '',
            signature: '',
            jsApiList: []
        });
        wx.ready(function() {
            globalAudio.play();
        });
};



