/**
 * Created by dell on 2018/11/14.
 */
var count = 0;
$("#button").click(function(){
    var list = $("#list");
    var content = $("#content");
    if(content.val() != "") {
        list.append("<li><span class='words'></span><button class='delete'>删除</button></li>");
        getContent(content.val());
        count = count + 1;
        content.val("");
    }

})
function getContent(content){
    console.info(content);
    $(".words").eq(count).text(content);
}
//$("#list").on("click","button",function(event){
//    var target = (event.target).parentNode;
//    target.remove();
//    count--;
//})
$("#list").delegate("button","click",function(event){
    var target = (event.target).parentNode;
    target.remove();
    count--;
})
