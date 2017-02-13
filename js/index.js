$(function(){
// banner
  function banner(){
    var arr=["#ffe6e7","#f74346","#ffb8ca","#e6000a","#0e0e0e","#7810df","#fc275f","#ff8e65"]

    var num=0;
    var t=setInterval(move,2000);  

    function move(type){

      type=type||"right";
      console.log(type)
      // num++;
       if (type=="right") {
        num++;
        if (num>7) {
          num=0;
        }
       }else if(type=="left"){
        num--;
        if (num<0) {
          num=7;
        }
       }
        $(".banner-pic li").css({"opacity":0}).eq(num).animate({opacity:1},500);
        $(".banner-btn li").removeClass("first").eq(num).addClass("first");
        $(".bannerbox").css({"background":arr[num]});
     
    }

    $(".bannerbox").hover(function(){
      $(".banner-leftbtn").animate({opacity:0.5},500);
      $(".banner-rightbtn").animate({opacity:0.5},500);
      clearInterval(t);
    },function(){
      t=setInterval(move,2000);
      $(".banner-leftbtn").animate({opacity:0},500);
      $(".banner-rightbtn").animate({opacity:0},500);
    })

    $(".banner-btn li").mouseover(function(){
      $(".banner-btn li").removeClass("first").eq($(this).index()).addClass("first");
      $(".banner-pic li").css({"opacity":0}).eq($(this).index()).animate({"opacity":1},500);
      $(".bannerbox").css({"background":arr[$(this).index()]});
      num=$(this).index();
    })

    $(".banner-leftbtn").click(function(){
      move("left");
    })
    $(".banner-rightbtn").click(function(){
      move("right");
    })
  }
  banner();
// top导航
  var shangjia=$(".shangjia")[0];
  var shang=$(".shang")[0];
  var shang1=$(".shang")[1];
  var shang3=$(".shang3")[0];
  var shang4=$("#topboxnav-left1")[0];
  var gmhy=$(".gmhy")[0];
  var wdgm=$(".wdgm")[0];
  var sjgm=$(".sjgm")[0];
  var scj0=$(".scj-0")[0];
  var scj1=$(".scj-1")[0];
  var webxia1=$(".webxia-1")[0];
  var webxia=$(".webxia")[0];
  var xiaosanjiao=$(".xiaosanjiaox")
  webxia1.onmouseover=function(){
    webxia.style.display="block";
    webxia1.style.background="#fff";
    // xiaosanjiao[3].style.transform="rotate(180deg)";
    animate(xiaosanjiao[3],{transform:"rotate(180deg)"},300);
  }
  webxia1.onmouseout=function(){
    webxia1.style.background="#f2f2f2";
    webxia.style.display="none";
    animate(xiaosanjiao[3],{transform:"rotate(0deg)"},300);
  }
  shang.onmouseover=function(){
    shangjia.style.display="block";
    shang.style.background="#fff";
    animate(xiaosanjiao[2],{transform:"rotate(180deg)"},300);
  }
  shang.onmouseout=function(){
    shang.style.background="#f2f2f2";
    shangjia.style.display="none";
    animate(xiaosanjiao[2],{transform:"rotate(0deg)"},300);
  }
  shang1.onmouseover=function(){
    sjgm.style.display="block";
    shang1.style.background="#fff";
    animate(xiaosanjiao[3],{transform:"rotate(180deg)"},300);
  }
  shang1.onmouseout=function(){
    shang1.style.background="#f2f2f2";
    sjgm.style.display="none";
    animate(xiaosanjiao[3],{transform:"rotate(0deg)"},300);
  }
  shang3.onmouseover=function(){
    wdgm.style.display="block";
    shang3.style.background="#fff";
    animate(xiaosanjiao[3],{transform:"rotate(180deg)"},300);
  }
  shang3.onmouseout=function(){
    shang3.style.background="#f2f2f2";
    wdgm.style.display="none";
    animate(xiaosanjiao[3],{transform:"rotate(0deg)"},300);
  }
  shang4.onmouseover=function(){
    gmhy.style.display="block";
    shang4.style.background="#fff";
  }
  shang4.onmouseout=function(){
    shang4.style.background="#f2f2f2";
    gmhy.style.display="none";
  }
  var num111=0;
  function topxx(){
    $(".gmhy-bottom .bottom-bottom .left").click(function(){
      num111++;
      if (num111>3) {
        return;
      }
      $(this).prev().find(".tct-p img").eq(num111-1).addClass("first");
    })
    $(".gmhy-bottom .bottom-bottom .right").click(function(){
      num111--;
      if (num111<0) {
        return;
      }
      $(this).prev().prev().find(".tct-p img").eq(num111).removeClass();
    })
  }
  topxx();
// main
  function mainbav(){
        var now=0;
        var next=0;
        var flag=true;
        var t1=setInterval(move,5000)
        function move(type){
            type=type||"bottom";
            if(type=="top"){
                next=now-1;
                if(next<0){
                    next=2;
                }
                $(".mainbav-right-picbox li").eq(now).animate({"top":"40px"},500,function(){
                    flag=true;
                })
                $(".mainbav-right-picbox li").eq(next).css({"top":"-40px"}).animate({"top":"0"},500);
                now=next;
            }else if(type=="bottom"){
                next=now+1;
                if(next>2){
                    next=0;
                }
                $(".mainbav-right-picbox li").eq(now).animate({"top":"-40px"},500,function(){
                    flag=true;
                })
                $(".mainbav-right-picbox li").eq(next).css({"top":"40px"}).animate({"top":"0"},500);
                now=next;
            }
        }
        $(".mainbav-right").hover(function(){
            clearInterval(t1)
        },function(){
            t1=setInterval(move,5000)
        })
        $(".mainbav-right-anniu-top").click(function(){
            if(flag){
                flag=false;
                move("top");
            }
        })
        $(".mainbav-right-anniu-bottom").click(function(){
            if(flag){
                flag=false;
                move("bottom");
            }
        })
    }
    mainbav()
// 选项卡
  function xxk(){
    $(".banner-left li").hover(function(){
      $(".banner-left-js").css({"display":"none"}).eq($(this).index()).css({"display":"block"})
    },function(){
      $(".banner-left-js").css({"display":"none"})
    })
  }
  xxk();
// 楼层选项卡
    $(".lc2").each(function(lc2num){
        function lc2(lc2num){
            var num=0;
            function move(type){
                type=type||"right";
                if(type=="left"){
                    num--;
                    if(num<0){
                        num=2;
                    };
                    $(".lc2-bottom-right-big-picbox").eq(lc2num).children().removeClass().eq(num).addClass("first");
                     $(".lc2-bottom-right-big-btnbox").eq(lc2num).children().removeClass().eq(num).addClass("first");
                }else if(type=="right"){
                    num++;
                    if(num>=3){
                        num=0;
                    };
                     $(".lc2-bottom-right-big-picbox").eq(lc2num).children().removeClass().eq(num).addClass("first");
                     $(".lc2-bottom-right-big-btnbox").eq(lc2num).children().removeClass().eq(num).addClass("first");
                }
            }
            // 中部选项卡
            $(".lc2-bottom-right-big-btnbox").eq(lc2num).children().mouseover(function(){
                $(".lc2-bottom-right-big-btnbox").eq(lc2num).children().removeClass().eq($(this).eq(lc2num).index()).addClass("first");
                $(".lc2-bottom-right-big-btnbox").eq(lc2num).children().removeClass().eq($(this).eq(lc2num).index()).addClass("first");
                num=$(this).eq(lc2num).index();
            })
            // 左右按钮
            $(".lc2-bottom-right-big-left").eq(lc2num).click(function(){
                move("left");
            })
            $(".lc2-bottom-right-big-right").eq(lc2num).click(function(){
                move("right");
            })
            // 移入移出
            $(".lc2-bottom-right-big").eq(lc2num).hover(function(){
                    $(".lc2-bottom-right-big-right").eq(lc2num).css({"display":"block"})
                    $(".lc2-bottom-right-big-left").eq(lc2num).css({"display":"block"})
                },
                function(){
                    $(".lc2-bottom-right-big-right").eq(lc2num).css({"display":"none"})
                    $(".lc2-bottom-right-big-left").eq(lc2num).css({"display":"none"});
                }
            )
            // 整体选项卡
            var nub=0;
            $(".lc2-top ul").eq(lc2num).children().click(function(){
                $(".lc2-top ul").eq(lc2num).children().removeClass("first").eq($(this).index()).addClass("first");
                $(".lc2-bottom").eq(lc2num).children(".lc2-bottom-right").removeClass("first").eq($(this).index()).addClass("first");
                nub=$(this).index();
            })
            // 整体右侧按钮
            $(".lc2-bottom").eq(lc2num).children(".lc2-bottom-right").children(".lc2-bottom-right-xiaokuai").click(function(){
                nub++;
                if(nub>=8){
                    nub=0;
                };
                $(".lc2-top ul").eq(lc2num).children().removeClass("first").eq(nub).addClass("first");
                $(".lc2-bottom").eq(lc2num).children(".lc2-bottom-right").removeClass("first").eq(nub).addClass("first");
            })
            // 整体右侧移入移出
            $(".lc2-bottom").eq(lc2num).children(".lc2-bottom-right").hover(function(){
                    $(".lc2-bottom").eq(lc2num).children(".lc2-bottom-right").children(".lc2-bottom-right-xiaokuai").css({"display":"block"})
                },
                function(){
                   $(".lc2-bottom").eq(lc2num).children(".lc2-bottom-right").children(".lc2-bottom-right-xiaokuai").css({"display":"none"})
                }
            )
        }
        lc2(lc2num)
    }) 
// 楼层选项卡
    $(".lc").each(function(lcnum){
        function lc(lcnum){
            var num=0;
            function move(type){
                type=type||"right";
                if(type=="left"){
                    num--;
                    if(num<0){
                        num=2;
                    };
                    $(".lc-bottom-right-big-picbox").eq(lcnum).children().removeClass().eq(num).addClass("first");
                     $(".lc-bottom-right-big-btnbox").eq(lcnum).children().removeClass().eq(num).addClass("first");
                }else if(type=="right"){
                    num++;
                    if(num>=3){
                        num=0;
                    };
                     $(".lc-bottom-right-big-picbox").eq(lcnum).children().removeClass().eq(num).addClass("first");
                     $(".lc-bottom-right-big-btnbox").eq(lcnum).children().removeClass().eq(num).addClass("first");
                }
            }
            // 中部选项卡
            $(".lc-bottom-right-big-btnbox").eq(lcnum).children().mouseover(function(){
                $(".lc-bottom-right-big-btnbox").eq(lcnum).children().removeClass().eq($(this).eq(lcnum).index()).addClass("first");
                $(".lc-bottom-right-big-btnbox").eq(lcnum).children().removeClass().eq($(this).eq(lcnum).index()).addClass("first");
                num=$(this).eq(lcnum).index();
            })
            // 左右按钮
            $(".lc-bottom-right-big-left").eq(lcnum).click(function(){
                move("left");
            })
            $(".lc-bottom-right-big-right").eq(lcnum).click(function(){
                move("right");
            })
            // 整体选项卡
            var nub=0;
            $(".lc-top ul").eq(lcnum).children().click(function(){
                $(".lc-top ul").eq(lcnum).children().removeClass("first").eq($(this).index()).addClass("first");
                $(".lc-bottom").eq(lcnum).children(".lc-bottom-right").removeClass("first").eq($(this).index()).addClass("first");
                nub=$(this).index();
            })
            // 整体右侧按钮
            $(".lc-bottom").eq(lcnum).children(".lc-bottom-right").children(".lc-bottom-right-xiaokuai").click(function(){
                nub++;
                if(nub>=7){
                    nub=0;
                };
                $(".lc-top ul").eq(lcnum).children().removeClass("first").eq(nub).addClass("first");
                $(".lc-bottom").eq(lcnum).children(".lc-bottom-right").removeClass("first").eq(nub).addClass("first");
            })
            // 整体右侧移入移出
            $(".lc-bottom").eq(lcnum).children(".lc-bottom-right").hover(function(){
                    $(".lc-bottom").eq(lcnum).children(".lc-bottom-right").children(".lc-bottom-right-xiaokuai").css({"display":"block"})
                },
                function(){
                   $(".lc-bottom").eq(lcnum).children(".lc-bottom-right").children(".lc-bottom-right-xiaokuai").css({"display":"none"})
                }
            )
        }
        lc(lcnum)
    })
// 晒单选项卡
 function rxb(){
        var num=0
        $(".hot-right-top #right").click(function(){
            num++;
            if(num>=3){
                num=0;
            };
            $(".hot-right-bottom").removeClass("first").eq(num).addClass("first");
        })
        $(".hot-right-top #left").click(function(){
            num--;
            if(num<0){
                num=2;
            };
            $(".hot-right-bottom").removeClass("first").eq(num).addClass("first");
        })
    }
    rxb()
// foot 二维码
  $(".foot-ewm-pic").hover(function(){
    $(this).find("img").eq(1).show();
  },function(){
    $(this).find("img").eq(1).hide();
  })
// 楼层跳转
  var flag1=true;

  function lctz(){
    
  // 滚动条滚动 
    $(window).scroll(function(){
      var top=$(window).scrollTop();
      if(top>=700){
        $(".top").css({display:"block"});
      }else{
        $(".top").css({display:"none"});
      }
        $(".lcdh").each(function(index){
        var top1=$(".lcdh").eq(index).offset().top;
        if(top>=top1-80 && flag1==true){
          $(".floornav li span").css({color:"#5e5e5e"}).eq(index).css({color:"#c00"});
          $(".floornav li p").css({color:"#5e5e5e"}).eq(index).css({color:"#c00"});
          n=index;
        }
      })
      if(top>=1600 && top<=7460){
        $(".floornav").css({"opacity":1});
      }else{
        $(".floornav").css({"opacity":0});
      }
    })
  }

    // 点击指标跳转
      $(".floornav-top").click(function(){
        // flag1=false;
        $("html,body").animate({scrollTop:0},300,function(){
          // flag1=true;
        })
      })
      $(".floornav-bottom").click(function(){
        // flag1=false;
        $("html,body").animate({scrollTop:7500},300,function(){
          // flag1=true;
        })
      })
  

    // 点击跳转
    $(".floornav li").each(function(index){
    $(this).click(function(){
        flag1=false;
        var top=$(".lcdh").eq(index).offset().top;
        $("html,body").animate({scrollTop:top-30},500,function(){
        $(".floornav li span").css({color:"#5e5e5e"}).eq(index).css({color:"#c00"});
        $(".floornav li p").css({color:"#5e5e5e"}).eq(index).css({color:"#c00"});
        n=index;
        flag1=true;
        });
      })
    })

  lctz();
// 右侧固定
    function rg(){
        var flag=true;
        $(".right-guding-yiru").each(function(index){
            $(".right-guding-yiru").eq(index).hover(function(){
                 // $(".right-guding-js2").animate({"left":"0px","width":"0px"},300)
                if(flag){
                    flag=false;
                    $(".right-guding-js").eq(index).animate({"left":"-82px","width":"90px"},300,function(){
                        flag=true;
                    })
                }
            },function(){
                $(".right-guding-js").eq(index).animate({"left":"0px","width":"0px"},300)
            })
        })
        $(".right-guding-yiru2").hover(function(){
           $(".right-guding-js2").animate({"left":"-140px","width":"140px"},300)
        },function(){
            $(".right-guding-js2").animate({"left":"0px","width":"0px"},300)
        })
    }
    rg()
})
