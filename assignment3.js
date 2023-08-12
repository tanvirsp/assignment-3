
// 1) javascript For in loop

function printObjectProperties(obj){
    if( Object.keys(obj).length === 0){
        return console.log("Object is Empty");
    };

    for(const props in obj){
        console.log(`${props}: ${obj[props]}`);
    };
    
};

// printObjectProperties({name:"Shawon"});



// 2) javascript function returns
function  findMaxNumber(arr){
    if(arr.length === 0){
        return null;
    };

    const maxNumber = Math.max(...arr);
    return maxNumber;

};




// 3) javascript Spread Operator
function mergeArrays(arr1, arr2){
    const merge = [...arr1, ...arr2];
    return merge;
};





// 4) javascript arrow function
const calculateSquare = (num) => num * num;






// 5) javascript es6 map
function doubleNumbers(arr){
    const double = arr.map(number => number* 2);
    return double;
};




// 6) javascript es6 static keyword

class MathUtility {

    static multiply(num1, num2){
        const result = num1 * num2;
        return result;
    }   
};




// 7) javascript es6 class inheritance
class Animal{
    constructor(name, sound){
        this.name = name;
        this.sound = sound;

    };

    makeSound(){
        console.log(this.sound);
    };
};


class Dog extends Animal{
    fetch(){
        console.log("Fetching the ball!.");
    }

};








// 8) javascript es6 super keyword
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;

    };

    introduce(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};


class Student extends Person{
    constructor(name, age, major){
        super(name, age,);
        this.major = major
    };
    introduce(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`);
    }
}

