let displayValue = "";

            function addToResult(value) {
                displayValue += value;
                // console.log(displayValue);
                document.getElementById("result").innerHTML = displayValue;
            }
            function clearResult() {
                displayValue = "";
                document.getElementById("result").innerHTML = displayValue;
            }

            function operate(operator) {
                displayValue += " " + operator + " ";
                // console.log(displayValue);
                document.getElementById("result").innerHTML = displayValue;
            }

            function calculate() {
                try {
                    displayValue = eval(displayValue);
                    // console.log(displayValue);
                    document.getElementById("result").innerHTML = displayValue;
                } catch (error) {
                    document.getElementById("result").innerHTML = "Error";
                }
            }