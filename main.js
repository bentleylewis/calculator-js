let numString = "";
let x = null;
let y = null;
let operator = null;

const calcDisplay = document.getElementById("displayText");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

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