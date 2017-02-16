   $(function () {
      // 默认第一个显示 文本域出现在第一个块中
      $(".content-inner section").eq(0).fadeIn(300);
      // 点击笔
      $(".scroll-book6").on("click",function () {
        $(this).children().addClass("ani");
        $(".edit-pentxt").hide(200);
        setTimeout(function () {
          $("body").attr("class","index-bg").addClass("skin1");
           // $("body").css({"background-image":bgObj[0].bgImage,"background-color":bgObj[0].bgcolor});
           $(".content-outer").fadeOut(100);
           $(".content-inner").fadeIn(600);
           $(".edit-footer").slideDown(300);

        },4000);

      });
      // 祝福语录文字
      var happywordArr=["事业正当午，浪漫似乐谱，快乐莫你属，祝新年快乐!",
                        "打开“欢乐”的心!祝您新春愉快，心想事成。",
                        "迎财神，迎喜神，迎福神，迎新接福喜气旺!",
                        "春节乐陶陶，新年乐无限。祝您新年快乐!",
                        "爱情甜甜蜜蜜，钞票赚的多多。祝您新年大吉!",
                        "2017年，我用友情给力。祝您春节快乐!",
                        "一帆风顺吉星到，万事如意福临门。祝您新年快乐!",
                        "闻鸡起舞迎元旦，击壤而歌颂小康。祝您新年快乐!"];
      
        // 点击网页空白处关闭弹窗
        $(document).on("click",function (ev) {
          $(".edit-innersetting-box").fadeOut(300);
          $(".bgchoose-pop").fadeOut(200);
        });

      // 点击文字大小或者颜色切换切换选中状态
      $(document).on("click",".edit-settingbox span",function (ev) {
       ev.stopPropagation(); 
        $(".bgchoose-pop").fadeOut(300);
        $(this).addClass("current").siblings().removeClass("current");
      });
     // 点击文字大小，弹出文字大小的窗口
     $(document).on("click",".edit-settingbox span",function (ev) {
      // var target=ev.currentTarget;
      // console.log(target);
       $("#fontsize-box").fadeIn(300);
       $("#fontcolor-box").fadeOut(300);
     });
     // 点击改变文字大小
     $("#fontsize-box img").on("click",function () {
        var index=$(this).index();
       $(".fillTxt").attr("class","fillTxt body").addClass("fontsize"+(index+1));
     })

      // 点击颜色更换，弹出颜色的窗口
     $(document).on("click",".fontcolorsettingBtn",function () {
       $("#fontsize-box").fadeOut(300);
       $("#fontcolor-box").fadeIn(300);
     });
     // 点击色板改变文字颜色
     $(document).on("click","#fontcolor-box span",function () {
        var bgcolor=$(this).children("i").css("background-color");
        $(".txtarea *").css({"color":bgcolor});
     });

     // 点击底部导航，切换选中状态
    $(".edit-footer-list span").on("click",function () {
      $("#fontsize-box").fadeOut(300);
      $("#fontcolor-box").fadeOut(300);
      $(this).addClass("current");
    })
     // 点击祝福语录，弹出祝福语窗口
    $(document).on("click","#editNav1",function (ev) {
      var target=ev.currentTarget;
      $(".happyword-mask").fadeIn(300);
    });
    // 选择祝福语录
    $(".word-pop img").on("click",function(ev) {
      var index=$(this).index();
      $(".fillTxt").val(happywordArr[index]);
      // ev.stopPropagation(); 
    });
    // 选择语录后祝福语弹窗消失
    $(document).on("click",".happyword-mask",function (ev) {
      var target=ev.currentTarget;
       $(target).fadeOut(300);
    });

     // 点击主题贴图，弹出贴图窗口
    $(document).on("click","#editNav2",function (ev) {
      ev.stopPropagation(); 
      var target=ev.currentTarget;
      // 判断文字不能多于25个字
      var txtMessage=$(".fillTxt").val();
      var txtCall=$(".txtarea .call").val().trim();
      var txtInscribe=$(".txtarea .inscribe").val().trim();
      if(txtMessage.length>25){
        alert("多于25个文字的将会裁掉哟！");
        $(".fillTxt").val(txtMessage.substring(0,25));
        $(".bgchoose-pop").fadeIn(300);
      }
      else if(!txtMessage){
       alert("请输入祝福语或者从下方祝福语录选择哟！");
      }
      /*else if(!txtCall || !txtInscribe){
        alert("请把称呼和落款写完整哟！");
        $(this).removeClass("current");
      }*/
      else{
        console.log("成功！");
        $(".bgchoose-pop").fadeIn(300);
      }
      
    });
    // 选择主题
    $(".bgchoose-pop img").on("click",function () {
      var index=$(this).index();
      // 换整体背景
      $("body").attr("class","index-bg").addClass("skin"+(index+1));
      // 换圣旨，因为每个圣旨的大小和宽高不一，所以分别做了5块内容，
      $(".content-inner section").eq(index).fadeIn(300).siblings("section").fadeOut(200);
      
    });

    // 选择音乐弹窗出现
     $(document).on("click","#editNav3",function (ev) {
      var target=ev.currentTarget;
      $(".musicchoose-mask").fadeIn(300);
    });
     // 选择音乐
     $(".music-pop section").on("click",function (ev) {
      var index=$(this).index();
       $(this).children("span").addClass("current").end().siblings().find("span").removeClass("current");
       $("#music").attr("src","audio/music"+(index+1)+".mp3");
       ev.stopPropagation(); 
     });
     // 点击关闭按钮，选择音乐弹窗消失
    $(document).on("click",".pop-close",function () {
        $(this).parents(".mask").fadeOut(300);
    });

     // 点击生成贺卡
    $(document).on("click","#editNav4",function () {
      // 让文本变为只读，笔，文本大小颜色切换隐藏，底部导航隐藏
      $(".txtarea *").attr("readonly",true);
      $(".edit-pen2").fadeOut(300);
      $(".edit-settingbox").slideUp(300);
      $(".edit-footer").fadeOut(300);

      // 让送出祝福和返回上一页按钮显示
      $(".viewafterbtn").fadeIn(300);

    })
     // 点击送出祝福，分享到朋友遮罩显示
     $(document).on("click","#sendbtn",function () {
        $(".share-mask").fadeIn(300);
      });
      // 点击遮罩空白处，弹窗消失
    $(document).on("click",".share-mask",function (ev) {
      var target=ev.currentTarget;
       $(target).fadeOut(300);
    });
    
    // 点击返回上页
    $(document).on("click","#returnbtn",function () {
       // 让文本变为编辑，笔，文本大小颜色切换显示，底部导航显示
      $(".txtarea *").attr("readonly",false);
      $(".edit-pen2").fadeIn(300);
      $(".edit-settingbox").slideDown(300);
      $(".edit-footer").fadeIn(300);

      // 让送出祝福和返回上一页按钮隐藏
      $(".viewafterbtn").fadeOut(300);
    })



});