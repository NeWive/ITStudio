/**
 * Created by dell on 2018/11/8.
 */
function checkRealName(){
    var realName = document.getElementById('realName').value;
    
}
function checkEmail(){
    var email = document.getElementById('e-mail');
    var regDemo = new RegExp("^[0-9a-zA-Z_.-]+@[0-9a-zA-Z]{2,6}(([0-9a-zA-Z]{2,6})+@");
    if(email.value == ""){
        alert("邮箱不能为空");
    }
    else if(regDemo.test(email.value)){
        alert("邮箱格式正确");
    }else{
        alert("邮箱格式不正确");
    }
}