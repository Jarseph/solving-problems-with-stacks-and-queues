const Stack = require("./lib/stack");

const evaluate = (expression) => {
  let stack = new Stack();
  let op = ["+", "-", "*", "/"];

  expression = expression.split(" ")
   for(let char of expression) {
     if(!op.includes(char)) {
       stack.push(char)
     } else {
       let a = stack.pop();
       let b = stack.pop();
     if(char == "+") {
       let result = Number(a)+ Number(b);
       stack.push(result)
     } else if (char == "-") {
       let result = Number(b) - Number(a)
       stack.push(result)
     } else if ( char == "*") {
       let result = Number(a)* Number(b)
       stack.push(result)
     } else if (char == "/") {
       let result= Number(b)/Number(a);
       stack.push(result)
     }
     } 
   }
  return stack.top.value;
};

module.exports = evaluate;
