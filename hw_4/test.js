


// console.log(a);



//null

// var student={
//     age:20,
//     sex:"m",
//     talk:function(){
//         console.log("lalalal");
//     }

// }

// student.talk();

// var student = null;

// var student;

// var a =3.3;
// var a=3;

//NAN
// var a=parseInt(NaN==NaN);
// console.log(a);
// // 1+true
// // 0/0
// // NaN==NaN
// var a="sssss";

// 1+"22"
// "22"-0+1
// console.log();


// console.log(a);

// function aa()
// {
//     a =2;
// }
// aa();

//函数声明

// function hello(){
//     console.log("hello");
// }
// hello();

// var hello=function(){
//     console.log("hello");
// }

// // hello();

// var anotherhello=hello;
// anotherhello();

// function add(){
//     var a=2;
//     return a;
// // }
// console.log(add());
// function foo(){
//     function bb(){
//         console.log("I am bb");
//     }
//     return bb;
// }

// var anotherfoo=foo();
// console.log(anotherfoo);
// anotherfoo();



//作用域

// var a=4;
// function aa(){
//     var a =5;
//     function bb(){
//         var b =2;
//         console.log(a);

//     }
//     bb();

//     // if(){

//     // }
// }
// aa();
// var foo = function(){
//     console.log("i am foo");
// }();


// function foo(){
//     console.log("i am foo");
// }();



//没有块级作用域
// function aa(){
//     var a=3;
    // var x=2;
	
    
//    (function(){
//         if(a<10)
//         {
//             var x=1;
//         }
//         console.log("sssssss");
//     }());
// (function(){
// var a=2;


// a= a+5;

// console.log(a);
// }());
// (function(){
// var a=2;

// a=a+3;

// console.log(a);
// }(window))

    
   
    // (function(){
    //     var x =1;
    // })()
    // let x=2;
//     if(a<10)
//     {
//         let x=1;
//     }

// 	console.log(x+a);
// }

// aa();
// function add(a,b){
//     return arguments[0];
// }

// var a = add(5);
// console.log(a);


// function sum(a){
// 	return a+10;
// }
// var sum=function(a){
//     return a+10;
// }
// sum = function(a){
//     return a+20;
// }

// var c= sum(5);
// console.log(c);
//LHS RHS


//LHS找不到？

// function foo(){
//     "use strict"
//     b=4;

// }
// foo();
// console.log(b);

//RHS找不到？找到非法？
// function foo2(){

//     var a=3;
//     a();
//     // console.log(a);
// }
// foo2();

// //提升




//变量提升，准确来说是某个作用域范围内的提升

// var a;
// a =2;

// console.log(a);

// 函数提升
// foo();
// function foo(){
//     var a;
//     console.log(a);
//     a = 2;
   
// }

//函数表达式
// var foo;
// console.log(foo);
// foo();
// foo = function(){
//     console.log(a);
//     var a = 2;
// }

//函数优先






function foo(){
    console.log(1);
}
var foo = function(){
    console.log(2);
};

foo(); //1