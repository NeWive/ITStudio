//jquery简介

// var $ = function(element){
// 	var ele;
// 	if(element.indexOf("#") != -1){
// 		ele = document.getElementById(element.substring(1));
// 		return ele;
// 	}
// }
// $("#first").onclick = function(){
// 	alert($("#first").clientHeight);
// }
// var first = document.getElementById("first");
// first.onclick = function(){
// 	alert(first.clientHeight);
// }


//jquery基础语法

//选择器
//$("p").css("background","#F08080");
//$(".second").eq(0).css("background","#EEDC82");
//$("[src!='images/red.jpeg']").attr("src","images/red.jpeg");
// $("#first").click(function(){
// 	$(this).css("background","#fff");
// })

//html内容
//alert($("p").text());
//console.log($("#first").html());
//$("p").eq(0).text("This is another example.");
//$("#first").prepend("<button>example</button>");
//$("#first").before("<button>example</button>");
//$("#third").remove();
//$("#third").empty();


//jquery事件
// $("img").eq(0).mouseover(function(){
// 	$(this).css("display","none");
// })


//jquery动画
// $("button").click(function(){
// 	$("img").toggle(500);
// })
// $("button").click(function(){
// 	$("img").slideToggle(200);
// })
// $("button").click(function(){
// 	$("img").fadeTo(200,0.5);
// })
// $("button").click(function(){
// 	$("img").animate({width:'150px',height:'150px'},2000,function(){
// 		alert("get√");
// 	})
// })
// $("img").click(function(){
// 	$(this).stop();
// })