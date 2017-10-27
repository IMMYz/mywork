/**
 * Created by Yz on 2017/10/25.
 */
var util = require('util');
function Base(name,age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log('Hello'+this.name);
    }
}
// Sub只继承prototype中的属性
Base.prototype.showName = function(){
    console.log(this.name);
}

function Sub(){
    this.name = 'sub';
}

util.inherits(Sub,Base);

var objBase = new Base('Ezaaaa','12');
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
// objSub.sayHello();
console.log(objSub);
