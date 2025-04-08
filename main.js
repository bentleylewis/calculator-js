let numString = "";
let x = null;
let y = null;
let operator = null;
let evaluationComplete = false;

const calcDisplay = document.getElementById("displayText");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");
const negateButton = document.getElementById("negate");
const percentButton = document.getElementById("toPercent");


numberButtons.forEach(button => {
  button.addEventListener ("click", () => {
    const value = button.textContent;
    if (evaluationComplete && operator === null) {
      softClearFornewInput();
      numString = value;
    }
    else {
      numString += value;
    }
    console.log("number click evaluation:");
    console.log("x:", x, "numString:", numString, "operator:", operator);
    calcDisplay.textContent = numString;
    operatorButtons.forEach(btn => btn.classList.remove("activeOperator"));

  });
});



operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    operatorButtons.forEach(btn => btn.classList.remove("activeOperator"));
    evaluationComplete = false;
    button.classList.add("activeOperator");
    console.log("Before operator evaluation:");
    console.log("x:", x, "numString:", numString, "operator:", operator);
    if(x !== null && numString !== "" && operator !==null) {
      y = numString;
      evaluate();
    }
    
    operator = button.textContent;

    if (x === null) {
      x = numString;
      numString = "";
    } 
    
    if (!evaluationComplete) {
      y = numString;
    }
    
    });
  });


equalButton.addEventListener("click", () => {

  if (x && operator && numString) {
    y = numString;
    evaluate();
  }
});


clearButton.addEventListener("click", () => {
  clear();
  operatorButtons.forEach(btn => btn.classList.remove("activeOperator"));
});


negateButton.addEventListener("click", () => {
  if(numString !== "") {
    numString = String(Number(numString) * -1);
    calcDisplay.textContent = numString;
  }
  else {
    x = String(Number(x) * -1);
    calcDisplay.textContent = x;
  }
});


percentButton.addEventListener("click", () => {
  if(numString !== "") {
    numString = String(Number(numString) * .01);
    calcDisplay.textContent = numString;
  }
  else {
    x = String(Number(x) * .01);
    calcDisplay.textContent = x;
  }
})


function evaluate() {
  const result = operate(Number(x), Number(y), operator);

  let displayValue = String(result);
  if (displayValue.length > 12) {
    displayValue = Number(displayValue).toPrecision(12);
  }
  calcDisplay.textContent = displayValue;
  x = result;
  y = null;
  numString = "";
  operator = null;
  evaluationComplete = true;
  console.log("Before operator evaluation:");
  console.log("x:", x, "numString:", numString, "operator:", operator);
}

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

function clear() {
  numString = "";
  x = null;
  y = null;
  operator = null;
  evaluationComplete = false;
  calcDisplay.textContent = numString;
}


function softClearFornewInput() {
  numString = "";
  x = null;
  evaluationComplete = false;
}