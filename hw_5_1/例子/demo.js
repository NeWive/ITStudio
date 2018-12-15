
// function baz(){
//     //当前调用栈是baz
//     //当前调用位置是全局作用域
//     console.log("baz");
//     bar(); //bar的调用位置
    
// }
// function bar(){
//     //当前调用栈是baz->bar
//     //调用位置在baz
//     console.log("bar");
//     foo();  //foo的调用位置
// }
// function foo(){
//     //当前调用栈是baz->bar->foo
//     //调用位置在bar
//     console.log("foo");
// }
// baz(); //baz的调用位置





// function foo(){
//     console.log(this.a);
// }
// var a = 2;
// foo(); //2


// function foo(){
//     console.log(this.a);
// }
// var obj = {
//     a:2,
//     foo:foo
// };
// obj.foo(); //2

//this.a  等价于 obj.a


// var obj={
//     a:2,
//     foo:foo
// };

// var a = "oops,global";
// function foo(){
//     console.log(this.a);
// }
// console.log(obj.foo);
// var bar = obj.foo;  //函数别名
// // var a = "oops,global";

// foo();
// bar(); //"oops,global"


// function foo(){
//     console.log(this.a);
// }
// var obj={
//     a:2
// };
// foo.call(obj);  //2



// function foo(a){
//     this.a = a;
// }

// var bar = new foo(2);
// var bar2 = new foo(3);
// console.log(bar.a);  //2



// function aa(){
//     c = 2;
// }
// aa();
// console.log(c);