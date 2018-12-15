/**
 * Created by dell on 2018/11/24.
 */
var image_width = 600;
var image_height = 320;
$(".image").css({
    "width":image_width,
    "height":image_height
});

var images_width = image_width*7;//图片的容器
var images_left = -image_width;
$("#images").css({
    "width":images_width,
    "left":images_left
});



var window_width = image_width;//图片的容器的容器
var window_height = image_height;
$("#window").css({
    "width":window_width,
    "height":window_height
});

var container_width = image_width;//图片的容器的容器的容器
var container_height = image_height;
$("#container").css({
   "width":container_width,
    "height":container_height
});