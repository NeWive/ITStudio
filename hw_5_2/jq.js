/**
 * Created by dell on 2018/11/23.
 */
var left = $("#pre");
var right = $("#next");
var show = $("#images");
var place = 0;//位置
var step = 300;//每次移动距离
var count;//计时器
var lock = true;//按钮锁
var timeLock = true;
left.mouseover(function(){
    left.animate({opacity:"0.6"});
})
right.mouseout(function(){
    right.animate({opacity:"0"});
})
right.mouseover(function(){
    right.animate({opacity:"0.6"});
})
left.mouseout(function(){
    left.animate({opacity:"0"});
})
function moveToRight(){
    if(lock) {
        lock = false;
        place = parseInt(show.css('left'));
        place = place - step;
        setButton(place);//设置按钮颜色
        if (place == -1800) {
            $(".select_button a").eq(0).css("backgroundColor", "blue");
        }
        right.attr("disabled", "true");
        show.animate({'left': place}, function () {
            if (place == -1800) {
                show.stop().css('left', -300);
            }
            lock = true;
        })
    }else{
        return;
    }
}
right.click(function(){
    clearInterval(count);
    moveToRight();
    count = setInterval(moveToRight,2500);
});

function moveToLeft(){
    if(lock) {
        lock = false;
        place = parseInt(show.css('left'));
        place = place + step;
        setButton(place);
        if (place == 0) {
            $(".select_button a").eq(4).css("backgroundColor", "blue");
        }
        show.animate({'left': place}, function () {
            lock = true;
            if (place == 0) {
                show.stop().css('left', -1500);
            }
        })
    }else{
        return;
    }
}
left.click(function(){
    clearInterval(count);
    moveToLeft();
    count = setInterval(moveToRight,2500);
});

function setButton(place){
    var number = (place/(-300)) - 1;
    $('.select_button a').css("backgroundColor","black");
    $(".select_button a").eq(number).css("backgroundColor","blue");
}
function init(){
    $(".select_button").eq(0).css("backgroundColor","blue");
    countTime();
}
$("#select").on("click","li",function(event){
    clearInterval(count);
    $('.select_button a').css("backgroundColor","black");
    var target = (event.target);
    $(target).css("backgroundColor","blue");
        //获取元素的父元素
    var parentLi = target.parentElement;

    var liIndex =Array.prototype.indexOf.call(parentLi.parentNode.children, parentLi);
    setButton(-(liIndex + 1)*300);
    moveByButton(liIndex);
})
function moveByButton(liIndex){
    show.animate({'left': (liIndex == 0 ? (liIndex - 1)*step:-(liIndex + 1)*step)},function(){
        count = setInterval(moveToRight,2500);
    });
}
$("#window").mouseover(function(){
    timeLock = false;
});
$("#window").mouseout(function(){
    timeLock = true;
});
function countTime(){
        count = setInterval(function(){
            if(timeLock){
                moveToRight();
            }
        }, 2500);
}




