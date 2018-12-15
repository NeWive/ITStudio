//对象字面量方式
var fruit1={
    "name":"Apple",
    "price":3,
    askPrice:function(){
        console.log(this.name+"'s price is "+this.price);
    }
}
//工厂模式
function createFruit(name,price){
    var obj = new Object();
    obj.name=name;
    obj.price=price;
    obj.askPrice=function(){
        console.log(this.name+"'s price is "+this.price);
    }
    return obj;
}
  
var fruit1=createFruit("Bananna",2);
var fruit2=createFruit("Orange",10);
fruit1.askPrice();
fruit2.askPrice();

//构造函数模式
function Fruit(name,price){
    this.name = name;
    this.price =price;
    this.askPrice=function(){
        console.log(this.name+"'s price is "+this.price);
    }
  }
  
  var fruit1= new Fruit("Bananna",2);
  var fruit2=new Fruit("Orange",10);

  console.log(fruit1 instanceof Fruit);
  console.log(fruit2 instanceof Fruit);
  console.log(fruit1.askPrice==fruit2.askPrice);
  //函数也是对象，定义一个函数就是实例化一个对象

//原型模式
function Person(){
}
Person.prototype.name = 'Grey';
Person.prototype.age = 20;
Person.prototype.job = 'Teacher';
Person.prototype.sayName = function(){
  console.log(this.name);
}
var person1 = new Person();
person1.sayName(); 

var person2 = new Person();
person2.sayName();

console.log(person1.sayName == person2.sayName);

person1.hasOwnProperty("name");
person1.name="Summer";
console.log(person1.name);
person1.hasOwnProperty("name");

//更为简单的原型写法
function Person(){
}
Person.prototype={
    name:"Grey",
    age:20,
    job:"Teacher",
    constructor:Person,
    sayName:function(){
        console.log(this.name);
    },
    draw:function(){
        
    }
}



