// 1) Create an iffe that returns an object with fields: function setValue(), function showValue() and function reverseValue(). 
// Calling functions either logs the value or reverse it in an object. If value was not provided yet or is empty showValue function is to return information about 
// that. Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.  Closure pattern.

let iife = (function () {
    let value;
    function setValue(val) {
        if(val) {
            value = val;
        }
    }
    function showValue() {
        if(!value) {
            console.log('Nie podano argumentów.')
        }

    }
    function reverseValue() {
        if ((typeof value) === "number") {
            console.log(`Wartość, którą podałeś jest typu number. Odwrócenie Twojej wartości to ${value * (-1)}`);
        }
        if ((typeof value) === "string") {
            console.log(`Wartość, którą podałeś jest typu string. Odwrócenie Twojej wartości to ${[...value].reverse().join("")}`);
        }
        else { showValue()}
    }
    return {
        setValue,
        showValue,
        reverseValue
    }
})();

iife.setValue('Ala ma koty dwa.');
iife.reverseValue();