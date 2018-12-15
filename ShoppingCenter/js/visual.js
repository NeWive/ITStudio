//出现窗口
$(".selection").eq(2).click(function(){
    let conf = $(".out_window");
    console.log(conf.css("visibility"));
    if(conf.css("visibility") == "hidden"){
        conf.css("visibility", "visible");
    }else{
        conf.css("visibility", "hidden");
    }
})

//log in出现下划线
let logIn = $(".logIn").eq(0);
logIn.mouseleave(function () {
    console.log()
    $(this).css("text-decoration","none");
})
logIn.mouseenter(function () {
    $(this).css("text-decoration","underline");
})

//shop now隐藏显示
let banner_showNow = $(".banner_showNow").eq(0);
let benner_downArrow = $(".banner_downArrow").eq(0);
let banner_button = $(".banner_button").eq(0);
banner_button.mouseenter(function () {
    banner_showNow.css("visibility","hidden");
    benner_downArrow.css("visibility","visible");
})
banner_button.mouseleave(function () {
    banner_showNow.css("visibility","visible");
    benner_downArrow.css("visibility","hidden");
})

//页面向下滑动
banner_button.click(function(){
    document.getElementById('saling').scrollIntoView();
})

//saling处效果
let saling = $("#saling").eq(0);
let para_font_white = $(".para_font_white").eq(0);
let saling_button = $(".saling_button").eq(0);
let button_arrow = $(".button_arrow").eq(0);
let saling_shop_now = $(".shop_now").eq(0);

//saling处文字出现
saling.mouseenter(function () {
    para_font_white.css("visibility","visible");
    console.log($(this));
});
saling.mouseleave(function () {
    para_font_white.css("visibility","hidden");
})
//箭头
saling_button.mouseenter(function () {
    button_arrow.css("visibility","visible");
    saling_shop_now.css("visibility","hidden");
})
saling_button.mouseleave(function () {
    button_arrow.css("visibility","hidden");
    saling_shop_now.css("visibility","visible");
})
//背景：待优化
$(document).ready(function(){
    saling.css({"background-size":"100%"});
    saling.mouseenter(function () {
        $(this).animate({
            "background-size": "120%"
        },1000);
    }).mouseleave(function () {
        $(this).animate({
            "background-size": "100%"
        },1000);
    });
})

//goldernshop
//按钮
let gold_button = $(".gold_button").eq(0);
let enter_shop_font = $(".enter_shop_font").eq(0);
let right_arrow_black = $(".right_arrow_black").eq(0);

gold_button.mouseenter(function () {
    enter_shop_font.css("visibility","hidden");
    right_arrow_black.css("visibility","visible");
});
gold_button.mouseleave(function () {
    enter_shop_font.css("visibility","visible");
    right_arrow_black.css("visibility","hidden");
});

//图片轮播
let lock = 1;
let imageContent = $(".imagesContent").eq(0);//选中图片面板
let left_arrow = $(".left_arrow").eq(0)//选中左箭头;
let right_arrow = $(".right_arrow").eq(0);//选中右箭头
const move_value = 465;
const pre_margin = -1395;//原有的margin

//按钮添加事件
left_arrow.mouseover(function(){
    left_arrow.animate({opacity:"1"});
})
right_arrow.mouseout(function(){
    right_arrow.animate({opacity:"0.6"});
})
right_arrow.mouseover(function(){
    right_arrow.animate({opacity:"1"});
})
left_arrow.mouseout(function(){
    left_arrow.animate({opacity:"0.6"});
})

left_arrow.click(function () {
    if(lock) {
        lock = 0;
        var now_margin = parseInt(imageContent.css("margin-left"));
        now_margin -= move_value;
        imageContent.animate({'marginLeft': now_margin}, function () {
            if(now_margin == -2790){
                imageContent.stop().css("marginLeft",pre_margin);
            }
            lock = 1;
        })
        }else{
            return;
        }
})

right_arrow.click(function () {
    if(lock) {
        lock = 0;
        var now_margin = parseInt(imageContent.css("margin-left"));
        now_margin += move_value;
        console.log(now_margin);
        imageContent.animate({'marginLeft': now_margin}, function () {
            if(now_margin == 0){
                imageContent.stop().css("marginLeft",pre_margin);
            }
            lock = 1;
        })
    }else{
        return;
    }
})

//底部输入框
let left_input_font = $(".input_font").eq(0);
let left_button = $(".footer_button").eq(0);
let right_input_font = $(".input_font").eq(1);
let right_button = $(".footer_button").eq(1);

left_input_font.blur(function () {
    if(left_input_font.val() == null || left_input_font.val() == "" || left_input_font.val() == 1){
        left_button.css("visibility","hidden");
    }else{
        left_button.css("visibility","visible");
    }
})

right_input_font.blur(function () {
    if(right_input_font.val() == null || right_input_font.val() == "" || right_input_font.val() == 1){
        right_button.css("visibility","hidden");
    }else{
        right_button.css("visibility","visible");
    }
})

//图片展示
let display = $(".img");
let cover_left = $(".cover_left");
let cover_right = $(".cover_right");
let lock_display = 1;
//第一块
let display_1 = display.eq(0);
let margin_left_dis1 = parseInt(display_1.css("marginLeft"));
let margin_top_dis1 = parseInt(display_1.css("marginTop"));
let img_dis1 = $(".display_1 img");
let margin_right_dis1 = parseInt(display_1.css("marginRight"));
//第二块
let display_2 = display.eq(1);
let margin_left_dis2 = parseInt(display_2.css("marginLeft"));
let margin_top_dis2 = parseInt(display_2.css("marginTop"));
let img_dis2 = $(".display_2 img");
let margin_right_dis2 = parseInt(display_2.css("marginRight"));
//第三块
let display_3 = display.eq(2);
let margin_left_dis3 = parseInt(display_3.css("marginLeft"));
let margin_top_dis3 = parseInt(display_3.css("marginTop"));
let img_dis3 = $(".display_3 img");
let margin_right_dis3 = parseInt(display_3.css("marginRight"));

//
$(".display_1").mouseenter(function () {
    if(lock_display) {
        lock_display = 0;
        margin_top_dis1 -= 10;
        margin_left_dis1 -= 10;
        cover_right.css("visibility", "visible");
        setTimeout(function () {
            img_dis1.animate({
                "width": 326,
                "height": 337
            })
        });
        setTimeout(function () {
            display_1.animate({
                "marginLeft": margin_left_dis1,
                "marginTop": margin_top_dis1
            })
        });
        setTimeout(function () {
            display_2.animate({
                "marginLeft": margin_left_dis2 + 10,
                "marginRight": margin_right_dis2 + 10,
                "marginTop": margin_top_dis2 + 10
            })
        });
        setTimeout(function () {
            img_dis2.animate({
                "height": 277,
                "width": 276
            })
        }, 1);
        setTimeout(function () {
            display_3.animate({
                "marginLeft": margin_left_dis3 + 10,
                "marginRight": margin_right_dis3 + 10,
                "marginTop": margin_top_dis3 + 10
            })
        })
        setTimeout(function () {
            img_dis3.animate({
                "height": 277,
                "width": 276
            })
        }, 1);
    }
});
$(".display_1").mouseleave(function () {
    if(!lock_display) {
        margin_top_dis1 += 10;
        margin_left_dis1 += 10;

        setTimeout(function () {
            img_dis1.animate({
                "width": 296,
                "height": 297
            })
        });
        setTimeout(function () {
            display_1.animate({
                "marginLeft": margin_left_dis1,
                "marginTop": margin_top_dis1
            })
        });
        setTimeout(function () {
            display_2.animate({
                "marginLeft": margin_left_dis2,
                "marginRight": margin_right_dis2,
                "marginTop": margin_top_dis2
            })
        });
        setTimeout(function () {
            img_dis2.animate({
                "height": 297,
                "width": 296
            })
        }, 1);
        setTimeout(function () {
            display_3.animate({
                "marginLeft": margin_left_dis3,
                "marginRight": margin_right_dis3,
                "marginTop": margin_top_dis3
            }, function () {
                cover_right.css("visibility", "hidden");
            })
        });
        setTimeout(function () {
            img_dis3.animate({
                "height": 297,
                "width": 296
            })
        }, 1);
        lock_display = 1;
    }
});

//第二块
$(".display_2").mouseenter(function () {
    if(lock_display) {
        lock_display = 0;
        margin_top_dis2 -= 10;
        margin_left_dis2 += 10;
        cover_left.css("visibility", "visible");
        cover_right.css("visibility", "visible");
        setTimeout(function () {
            img_dis2.animate({
                "width": 326,
                "height": 337
            })
        });
        setTimeout(function () {
            display_2.animate({
                "marginLeft": margin_left_dis2,
                "marginTop": margin_top_dis2
            })
        });
        setTimeout(function () {
            display_1.animate({
                "marginLeft": margin_left_dis1 - 10,
                "marginRight": margin_right_dis1 + 10,
                "marginTop": margin_top_dis1 + 10
            })
        });
        setTimeout(function () {
            img_dis1.animate({
                "height": 277,
                "width": 276
            })
        }, 1);
        setTimeout(function () {
            display_3.animate({
                "marginLeft": margin_left_dis3 + 10,
                "marginRight": margin_right_dis1 + 10,
                "marginTop": margin_top_dis1 + 10
            })
        });
        setTimeout(function () {
            img_dis3.animate({
                "height": 277,
                "width": 276
            })
        }, 1);
    }
});
$(".display_2").mouseleave(function () {
    if(!lock_display) {
        margin_top_dis2 += 10;
        margin_left_dis2 -= 10;

        setTimeout(function () {
            img_dis2.animate({
                "width": 296,
                "height": 297
            })
        });
        setTimeout(function () {
            display_2.animate({
                "marginLeft": margin_left_dis2,
                "marginTop": margin_top_dis2
            })
        })
        setTimeout(function () {
            display_1.animate({
                "marginLeft": margin_left_dis1,
                "marginRight": margin_right_dis1,
                "marginTop": margin_top_dis1
            }, function () {
                cover_left.css("visibility", "hidden");
            })
        });
        setTimeout(function () {
            img_dis1.animate({
                "height": 297,
                "width": 296
            })
        }, 1);
        setTimeout(function () {
            display_3.animate({
                "marginLeft": margin_left_dis3,
                "marginRight": margin_right_dis3,
                "marginTop": margin_top_dis3
            }, function () {
                cover_right.css("visibility", "hidden");
            })
        });
        setTimeout(function () {
            img_dis3.animate({
                "height": 297,
                "width": 296
            })
        }, 1);
        lock_display = 1;
    }
});

//第三块
$(".display_3").mouseenter(function () {
    if (lock_display) {
        lock_display = 0;
        margin_top_dis3 -= 10;
        margin_left_dis3 += 10;
        cover_left.css("visibility", "visible");
        setTimeout(function () {
            img_dis3.animate({
                "width": 326,
                "height": 337
            })
        });
        setTimeout(function () {
            display_3.animate({
                "marginLeft": margin_left_dis3,
                "marginTop": margin_top_dis3
            })
        });
        setTimeout(function () {
            display_1.animate({
                "marginLeft": margin_left_dis1 - 10,
                "marginRight": margin_right_dis1 + 10,
                "marginTop": margin_top_dis1 + 10
            })
        });
        setTimeout(function () {
            img_dis1.animate({
                "height": 277,
                "width": 276
            })
        }, 1);
        setTimeout(function () {
            display_2.animate({
                "marginLeft": margin_left_dis2 - 10,
                "marginRight": margin_right_dis2 + 10,
                "marginTop": margin_top_dis2 + 10
            })
        });
        setTimeout(function () {
            img_dis2.animate({
                "height": 277,
                "width": 276
            })
        }, 1);
    }
});
$(".display_3").mouseleave(function () {
    if(!lock_display) {
        margin_top_dis3 += 10;
        margin_left_dis3 -= 10;
        console.log(margin_left_dis3, margin_top_dis3, 2)

        setTimeout(function () {
            img_dis3.animate({
                "width": 296,
                "height": 297
            })
        });
        setTimeout(function () {
            console.log(margin_left_dis2, margin_top_dis2)
            display_3.animate({
                "marginLeft": margin_left_dis3,
                "marginTop": margin_top_dis3
            })
        });
        setTimeout(function () {
            display_1.animate({
                "marginLeft": margin_left_dis1,
                "marginRight": margin_right_dis1,
                "marginTop": margin_top_dis1
            }, function () {
                cover_left.css("visibility", "hidden");
            })
        });
        setTimeout(function () {
            img_dis1.animate({
                "height": 297,
                "width": 296
            })
        }, 1);
        setTimeout(function () {
            display_2.animate({
                "marginLeft": margin_left_dis2,
                "marginRight": margin_right_dis2,
                "marginTop": margin_top_dis2
            })
        });
        setTimeout(function () {
            img_dis2.animate({
                "height": 297,
                "width": 296
            })
        }, 1);
        lock_display = 1;
    }
});

//置顶
$(".toTop").click(function () {
    $('html,body').animate({scrollTop: '0px'}, 300);
})
