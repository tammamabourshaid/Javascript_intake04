let someString :string;

someString = "this is a string";

// we can only aign strings to it since we gave it a string type!

//this won't work 
//
//someString= 3;

//we do not have to give the variable a string type
// but if we already use it as a string , typescript will know it is a string
// and won't let us change its type
//forExample
let anotherString = "Iam a string";
//and again this won't work
//anotherString=4;



//NOT THE BEST WAY
//but! if we do not give a type to the variable
//it could have any type!
//for exmple:
// let sentence :any;
let sentence;
// we can assigne a string
sentence="This is a sentence!";
//we can assign a number!
sentence=4;















class Car{
    engineName :string;
    gears:number;
    private speed: number;

    constructor(speed:number){
        this.speed=speed||0;
    }
    accelerate():void{
        this.speed++;
    }
    throttle():void{
        this.speed--;
    }
    getSpeed():void{
        console.log(this.speed);
    }
    static numberOfWheels():number{
        return 4;
    }
}

let car1 = new Car(5);
car1.accelerate();
car1.getSpeed();


//like java, if a function is static we can use it inside the class without intializing the class with NEW keyword
console.log(Car.numberOfWheels());




//INTERFACES
interface User{
    username:string;
    password:string;
    confirmPassword?:string; // it can or cant have that not sure
}
let user:User;  // this is how we use it!

user={username:"mohamed",password:"blabla"};

interface canDrive{
    accelerate(speeed:number):void;
}
let theCar :canDrive={
    accelerate:function(speed:number);
}




// it will only accept numbers!
let arrayOfNumber: Array<number>;

arrayOfNumber=[1,2,3];




// if we wanna export a class

export class bla{

}