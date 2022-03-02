class Demo {

    // parameterized constructor
    constructor(x, y) {
        console.log(x);
        console.log(y);        
        
    }

    //function declaration.
    GetData(): string {
        return "Komal";
    }

    //parameterised functin.
    Sum(num1,num2): Number{
        var answer = num1+num2;
        return answer;
    }
}

//object creation
var obj: Demo = new Demo(2,3);

//syntax - object creation
// var objname : classname = new classname();

//method call
// objectName.MethodName()

var returnedName = obj.GetData();
console.log(returnedName);

var answer = obj.Sum(11,2);
console.log(answer);


/** how to run this program
 * 
 * 1. tsc TamariFileName.ts
 * 2. node TamariFileName.js 
 */
