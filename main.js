let numString = "";
let x = null;
let y = null;
let operator = null;

const calcDisplay = document.getElementById("displayText");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equal");

numberButtons.forEach(button => {
  button.addEventListener ("click", () => {
    const value = button.textContent;
    numString += value;
    calcDisplay.textContent = numString;
    operatorButtons.forEach(btn => btn.classList.remove("activeOperator"));

  });
});



operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    operatorButtons.forEach(btn => btn.classList.remove("activeOperator"));
    button.classList.add("activeOperator");

    operator = button.textContent;

    if (numString !== "") { 
      if (x === null) {
        x = numString;
        numString = "";
      } 
      else {
        y = numString;
      }
    }
    });
  });




  function operate(x, y, operator) {
    switch(operator) {
      case "+":
         return x + y;

      case "-":
        return x - y;
        
      case "*":

        return x * y;
    
      case "/":
        return y === 0 ? "You're going to Jail!" : x / y;
    }

}


equalButton.addEventListener("click", () => {
  if (x && operator && numString) {
    y = numString;
    const result = operate(Number(x), Number(y), operator);
    console.log("hello");
    console.log(x);
    console.log(y);
    console.log(operator);
    console.log(result);
    calcDisplay.textContent = result;
    x = result;
    y = null;
    numString = "";
    operator = null;
  }
})
