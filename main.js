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