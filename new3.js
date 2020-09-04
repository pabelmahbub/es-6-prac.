//let is a scope variable

let patientName = "Sujon";
patientName = "Kabir";
console.log(patientName);

let sum = 0;
for(var i = 0; i < 8; i++){
    sum = sum + i;

}
// in for loop var = i is ok but let value is not valid outside loop
console.log(i);

// function

function add(num1 , num2){
    return num1 + num2;
}
console.log(add(8,7));

function add(num1 , num2=10){
    return num1 + num2;
}
console.log(add(8));


//string

const firstName = "Bibek";
const lastName ="Oberoy";
fullName =firstName + " " + lastName + " is a good boy";

// template in es-6


const fullName2 =`${firstName} ${lastName} is a good boy.`;
const fullName3 = `${788+98+97} is the score of ${firstName}.`;
console.log(fullName3);
console.log(fullName);
console.log(fullName);

//multi line in es-6


const multiLine = `I wonder to be with you
where is the destiny
where is the lost empire.
-Shakes`
console.log(multiLine);

//arrow fn in es-6

const doubleIt = num => num * 2;
const result = doubleIt(20);
console.log(result);

const add2 = (n,m)=> n + m;
const result2= add2(78,98);
console.log(result2);

//bigger fn in arrow

const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;

}

result3 = doMath(10,9);
console.log(result3);


//spread operator es-6

const ages = [12,13,9,90,15,17];
const ages1 = [898,98,87];

const ages2 = ages.concat(ages1);

// spread array

const allAges = [...ages, ...ages1, 98,...ages2];

console.log(ages2);
console.log(allAges);

money = [909, 87 ,876,879,908,87]
const maximum = Math.max(...money);
console.log(maximum);

//class of js(es-6)

class Student{
    constructor(sID, sName){
        this.id = sID;
        this.name = sName;
        this.school = "Gopalpur";
    }

}


const student1= new Student(12, "Mokles");
const student2 = new Student(34, "humayo");
console.log(student1,student2);
 
//Inheritance

class Parent{
    constructor(name){
        this.fatherName = "Sch....";

    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child('Tom');
console.log(baby.getFullName());
console.log(baby2.getFullName());
    


