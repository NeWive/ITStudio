/**
 * Created by dell on 2018/11/8.
 */
//var check = new Array(5);
//var error = "";

var realName = document.getElementById('realName');
function checkRealName(){
    var reg = new RegExp("^.{0,7}$");
    var circle = (document.getElementsByClassName('circle'))[0];
    var tips = (document.getElementsByClassName("tips"))[0];
    if(realName.value === ""){
        circle.style.display="inline-block";
        circle.style.backgroundColor="red";
        tips.innerHTML = "姓名为空";
        tips.style.display = "inline-block";
        return false;
    }else if(!reg.test(realName.value)){
        circle.style.display="inline-block";
        circle.style.backgroundColor="red";
        realName.value="";
        tips.innerHTML = "格式不正确，最长为7个字";
        tips.style.display = "inline-block";
        return false;
    }else{
        circle.style.backgroundColor="green";
        circle.style.display="inline-block";
        tips.style.display = "none";
        return true;
    }
}

var grade = document.getElementById('grade');
function checkGrade(){
    var circle = (document.getElementsByClassName('circle'))[1];
    var tips = (document.getElementsByClassName("tips"))[1];
    var reg = new RegExp("^201[0-4]{1}$");
    if(grade.value === ""){
        circle.style.display="inline-block";
        circle.style.backgroundColor="red";
        tips.innerHTML = "年级为空";
        tips.style.display = "inline-block";
        return false;
    }else if(!reg.test(grade.value)){
        circle.style.display="inline-block";
        circle.style.backgroundColor="red";
        tips.innerHTML = "格式不正确或年级不符合要求，只限2010-2014级";
        tips.style.display = "inline-block";
        grade.value="";
        return false;
    }else{
        circle.style.backgroundColor="green";
        circle.style.display="inline-block";
        tips.style.display="none";
        return true;
    }
}

var phoneNumber = document.getElementById('phoneNumber');
function checkPhoneNumber(){
    var reg = new RegExp("^[1-9][0-9]{10}$");
    var circle = (document.getElementsByClassName('circle'))[2];
    var tips = (document.getElementsByClassName("tips"))[2];
    if(phoneNumber.value === ""){
        circle.style.display="inline-block";
        circle.style.backgroundColor="red";
        tips.innerHTML = "手机号码为空";
        tips.style.display = "inline-block";
        return false;
    }else if(!reg.test(phoneNumber.value)){
        circle.style.display="inline-block";
        circle.style.backgroundColor="red";
        tips.innerHTML = "手机号码格式不正确";
        tips.style.display = "inline-block";
        phoneNumber.value="";
        return false;
    }else{
        circle.style.backgroundColor="green";
        circle.style.display="inline-block";
        tips.style.display="none";
        return true;
    }
}

var email = document.getElementById('e-mail');
function checkEmail() {
    var circle = (document.getElementsByClassName('circle'))[3];
    var tips = (document.getElementsByClassName("tips"))[3];
    var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
    if(email.value === ""){
        circle.style.display = "inline-block";
        circle.style.backgroundColor = "red";
        tips.innerHTML = "邮箱为空";
        tips.style.display = "inline-block";
        return false;
    }else if(!reg.test(email.value)){
        circle.style.display = "inline-block";
        circle.style.backgroundColor = "red";
        tips.innerHTML = "邮箱格式不正确";
        tips.style.display = "inline-block";
        email.value="";
        return false;
    }else{
        circle.style.backgroundColor = "green";
        circle.style.display = "inline-block";
        tips.style.display="none";
        return true;
    }
}

var introduction = document.getElementById('introduction');
function checkIntroduction(){
    var circle = (document.getElementsByClassName('circle'))[4];
    var tips = (document.getElementsByClassName("tips"))[4];
    if(introduction.value == ""){
        circle.style.display="inline-block";
        circle.style.backgroundColor="red";
        tips.innerHTML = "自我介绍为空";
        tips.style.display = "inline-block";
        return false;
    }else{
        circle.style.backgroundColor="green";
        circle.style.display="inline-block";
        tips.style.display="none";
        return true;
    }
}
var submit = document.getElementById("submit");
submit.onclick = function(){
    var result = new Array(5);
    result[0] = checkEmail();
    result[1] = checkGrade();
    result[2] = checkIntroduction();
    result[3] = checkPhoneNumber();
    result[4] = checkRealName();
    if(result[0] == false || result[1] == false || result[2] == false || result[3] == false || result[4] == false){
        alert('存在未完成填写的信息');
    }else{
        self.location = "jumpover.html";
    }
}


