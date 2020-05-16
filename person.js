/*function(exports, require, __filename, __dirname){

})

console.log(__dirname,__filename);*/


class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greetings(){
        console.log(`my name is ${this.name} and iam ${this.age}`);

    }
}

module.exports=Person;