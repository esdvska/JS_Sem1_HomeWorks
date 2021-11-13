// 2) Create four function definitions. One for every basic math operations and taking two input parameters. Create one more function. 
// This function is to return calculation object. This object is to have parameters object field that holds two operation parameters inside (x and y)
// and a function field that points to a function with math operation (defined at the beginning). A function setOperation() that sets the field from previous 
// sentence and a calculate() function that makes calculation and returns its value. 


let add = function (a,b) {
    return(a + b);
}
let sub = function (a,b) {
    return a - b;
}
let mul = function (a,b) {
    return a * b;
}
let div = function (a,b) {
    return a / b;
}

let calculation = (function() {
    let x, y, operation; 
    let setOperation = function(a, b, c) { 
        if(a, b) {  
            x = a;
            y = b;
        } 
        switch(c) {
            case "+":
                operation = add;
                break;
            case "-":
                operation = sub;
                break;
            case "*":
                operation = mul;
                break;
            case "/":
                operation = div;
                break;
            default:
                console.log('Nie podano znaku matematycznego')
                break;
            
        }
    }

    let calculate = function() {
        return operation(x,y);
    }
    
    return {
        setOperation,
        calculate
    }
})();

calculation.setOperation(-54, 4, '*');
calculation.calculate();