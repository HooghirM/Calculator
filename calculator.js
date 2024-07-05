// Cloned onto my new laptop TEST

// console.log('Hi!')

/* Capture button clicks to handle user input.
• Update the display area with the current input and result.
• Perform arithmetic operations when the user clicks the equal button.
• Clear the display and reset the calculator state when the user clicks the clear button.
• Handle decimal numbers. */

/* Add button on calculator that stores the last result.
Upon clicking you can store the last number... OR
Have a list for the last number for the 2nd most recent, 3rd... however
make another button */

// LOGIC:
// HAVE INPUT FIELD FOR SELECTING NUMBER 0-9 
// HAVE 4 buttons for selecting operation
// Click calculate button to calculate the result
// Clear button to clear the input fields

 /*                  What i need to do for input fields           */
            // Need to track the input field selected
            // if id = '1stNumField'
            // then display 0 when clicked in 1stNumField
            // else id is 2ndNumField
            // then display 0 when clicked in 2ndNumField




// Variables for calculate function
let num1
let num2
let operator
let result

// Variable for tracking last input field selected
let lastSelectedInput;

/* Focus event tracks the last input field that was selected... ie "gained focus" 
for input field 1 & 2 & op */
document.getElementById('1stNumField').addEventListener('focus', function() {
        lastSelectedInput = this;
});

document.getElementById('2ndNumField').addEventListener('focus', function() {
        lastSelectedInput = this;
});

document.getElementById('opField').addEventListener('focus', function() {
        lastSelectedInput = this;
});


/* Number clicks */

document.addEventListener('click', function(event) {
        if (event.target.id === 'zero') {
            if (lastSelectedInput) {
                // Update the value of the last selected input field with the button's value
                lastSelectedInput.value += event.target.textContent;
            }
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.id === 'one') { 
            if (lastSelectedInput) {
                // Update the value of the last selected input field with the button's value
                lastSelectedInput.value += event.target.textContent;
            }
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.id === 'two') { 
            if (lastSelectedInput) {
                // Update the value of the last selected input field with the button's value
                lastSelectedInput.value += event.target.textContent;
            }
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.id === 'three') { 
            if (lastSelectedInput) {
                // Update the value of the last selected input field with the button's value
                lastSelectedInput.value += event.target.textContent;
            }
        }
    });
    
    document.addEventListener('click', function(event) {
        if (event.target.id === 'four') { 
            if (lastSelectedInput) {
                // Update the value of the last selected input field with the button's value
                lastSelectedInput.value += event.target.textContent;
            }
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.id === 'five') { 
            if (lastSelectedInput) {
                // Update the value of the last selected input field with the button's value
                lastSelectedInput.value += event.target.textContent;
            }
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.id === 'six') { 
            if (lastSelectedInput) {
                // Update the value of the last selected input field with the button's value
                lastSelectedInput.value += event.target.textContent;
            }
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.id === 'seven') { 
            if (lastSelectedInput) {
                // Update the value of the last selected input field with the button's value
                lastSelectedInput.value += event.target.textContent;
            }
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.id === 'eight') { 
            if (lastSelectedInput) {
                // Update the value of the last selected input field with the button's value
                lastSelectedInput.value += event.target.textContent;
            }
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target.id === 'nine') { 
            if (lastSelectedInput) {
                // Update the value of the last selected input field with the button's value
                lastSelectedInput.value += event.target.textContent;
            }
        }
    });


    /* Add commas for 1st & 2nd numbers */




    /* Arithmetic operations */

document.addEventListener('click', function(event) {
        if (event.target.id === 'Plus') {
                if (lastSelectedInput) {
                lastSelectedInput.value = '+';
                }
        }
});

document.addEventListener('click', function(event) {
        if (event.target.id === 'Minus') {
                if (lastSelectedInput) {
                lastSelectedInput.value = '-';
                }
        }
});

document.addEventListener('click', function(event) {
        if (event.target.id === 'Multiply') {
                if (lastSelectedInput) {
                lastSelectedInput.value = '*';
                }
        }
});

document.addEventListener('click', function(event) {
        if (event.target.id === 'Divide') {
                if (lastSelectedInput) {
                lastSelectedInput.value = '/';
                }
        }
});

// // Variables for calculate function
// let num1
// let num2
// let operator
// let result

// Calculate function
document.addEventListener('click', function(event) {
        if (event.target.id === 'Calculate') {
      
            // Retrieve current value of input fields using .value and parses to an int for numbers
            num1 = parseInt(document.getElementById('1stNumField').value);
            console.log(num1)
            num2 = parseInt(document.getElementById('2ndNumField').value);
            console.log(num2)
            operator = document.getElementById('opField').value;
            console.log(operator)

            if (operator === '+') {
                result = num1 + num2;
            } else if (operator === '-') {
                result = num1 - num2;
            } else if (operator === "*") {
                result = num1 * num2;
            } else if (operator === '/') {
                result = num1 / num2;
            } else {
                result = "Invalid operation"
                
            }

            let formattedResult = result.toLocaleString() // For commas in numbers
            console.log(formattedResult)
            document.getElementById('currentResult').textContent = `Current result: ${formattedResult}` 
            // Logic error may be on this line as well for clearing "Current result:"

        }
    });
3

    // Clear button functionality
    document.addEventListener('click', function(event) {
        if (event.target.id === 'Clear') {
            document.getElementById('1stNumField').value = '';
            document.getElementById('2ndNumField').value = '';
            document.getElementById('opField').value = '';
            document.getElementById('currentResult').textContent = ''; /*When clicking clear 2nd
             time, it clears "Current result:*/
        }
    });

    /* Add square root and exponents 
    Square roort -> use built in Math.sqrt() method
    Exponent -> */
    

    // Square root functionality
    document.addEventListener('click', function(event) {
        if (event.target.id === "squareRoot") {
            
                num1 = parseInt(document.getElementById('1stNumField').value);
                console.log(num1)
                let result = Math.sqrt(num1);
                console.log(result)
                document.getElementById('currentResult').textContent = `Current result: ${result.toLocaleString}`;
                console.log(result)
            
        }
    });

    /* Exponent functionality */

        

    


            // const num1 = parseFloat(document.getElementById('1stNumField').value);
            // const num2 = parseFloat(document.getElementById('2ndNumField').value);
            // const operation = document.getElementById('opField').value;

            // let result

            // switch (operation) {
            //     case '+':
            //     result = num1 + num2;
            //     break;
            //     case '-':
            //     result = num1 - num2;
            //     case '*':
            //     result = num1 * num2;
            //     case '/':
            //     result = num1 / num2;
            //         if (num2 !== 0) {
            //             result = num1 / num2;
            //         } else {
            //             result = 'Error: Division by zero'
            //         } 
            //         break;
            //     default:
            //             result = 'Invalid operation'

            // }
            // document.getElementById('resultField').textContent = result.toString();
                
       

            // if (lastSelectedInput === '+') {
            //     return randomNumber1 + randomNumber2;
            // } else if (lastSelectedInput === '-') {
            //     return randomNumber1 - randomNumber2;
            // } else if (lastSelectedInput === '*') {
            //     return randomNumber1 * randomNumber2;
            // } else if (lastSelectedInput === '/') {
            //     return randomNumber1 / randomNumber2;
            //     // console.log('Calculate button clicked');
            // }
    



//     document.addEventListener('click', function(event) {
//         if (event.target.id === 'Plus') {
//             const display = document.getElementById('opField');
//             if (display) {
//                 display.textContent += '+';
            
//             }
//         }
// });




//     function plus () {
        
//         // if (lastSelectedInput) {
//         //     lastSelectedInput.value = event.target.textContent;
//         // }
//     }


//     document.addEventListener('click', function(event) {
//         if (event.target.id === 'plus') {

//                 if (lastSelectedInput) {
                        
//                 }
//                 // if(lastSelectedInput) {
//                 //         lastSelectedInput.value = event.target.textContent;
//                 // }
                
                
                

//                 // if (lastSelectedInput) {
//                 //         // Update the value of the last selected input field with the button's value
//                 //         lastSelectedInput.value = '+';
            
//             }
//         });
//         // });





// let randomNumber1
// let randomNumber2
// let randomOperator

//        /* Random number generator */
//     document.addEventListener('click', function(event) {
//        if (event.target.id === 'Random') { // Check if the clicked element has the ID 'Random'
          
//         // Varibles containing random numbers between 1 and 9
//            let randomNumber1 = Math.floor(Math.random() * 9) +1
//            let randomNumber2 = Math.floor(Math.random() * 9) +1

//            // Display the random numbers in the input fields
//         document.getElementById('1stNumber').textContent = `1st number: ${randomNumber1}`
//         document.getElementById('2ndNumber').textContent = `2nd number: ${randomNumber2}`
            
//         // Have variables for storing most recent random nums for calculation
    
//            console.log('Random button clicked');
//        }
//        }); 

//     // FUNCTION TO GENERATE RANDOM ARITHMETIC OPERATOR
//     // MAKE IT 4 different buttons... one for each operator...
//     // NOT A STRING
//     document.addEventListener('click', function(event) {
//         if (event.target.id === 'Arithmetic') {

//             // Have 4 buttons for this so we can actually do the math and it doesn't have
//             // to be in a string

//         // Variables for arithmetic operators
//         let add = '+'
//         let subtract = '-'
//         let multiply = '*'  
//         let divide = '/'    

//         // Array of arithmetic operators
//         let operators = [add, subtract, multiply, divide]

//         // Randomly generate arithmetic operator
//         for (let index = 0; index < operators.length; index++) {
//             let randomOperator = operators[Math.floor(Math.random() * operators.length)]
//             document.getElementById('Arithmetic').textContent = `Arithmetic operator: ${randomOperator}`        
//             console.log('Arithmetic button clicked'); 
//             // Have a varable to store the most recent operator for future calculation

//         }
//     }
// });

// // let randomNumber1
// // let randomNumber2
// // let randomOperator
// document.addEventListener('click', function(event) {
//     if (event.target.id === 'Calculate') {
//     // Calculate the current inputs using both random numbers and arithmetic operator 

//         /* Need to access both current random numbers (randomNumber1/2) 
//         and arithmetic operator(randomOperator) */



//         // document.getElementById('Calculate').textContent = `Calculate ${result(randomNumber1, randomNumber2, randomOperator)}`

//         console.log(randomNumber1)
//         console.log(randomNumber2)
//         console.log(randomOperator)
//         console.log('Calculate button clicked')

//         /* Need to calculate the result of the two random numbers using 
//         the arithmetic operator */
        

//         // Need to display the result in the results section
        

//   }
// });

// function result(randomNumber1, randomNumber2, randomOperator){
//     // Conditional: if (+) rand1 + rand2 else if (-) rand1 - rand2, etc
//     if (randomOperator === '+'){
//         return randomNumber1 + randomNumber2
//     } else if (randomOperator === '-'){
//         return randomNumber1 - randomNumber2
//     } else if (randomOperator === '*'){
//         return randomNumber1 * randomNumber2
//     } else if (randomOperator === '/'){
//         return randomNumber1 / randomNumber2
//     }


// }
// document.addEventListener('click', function(event) {
//     if (event.target.id === 'Clear') {
//          // Clear the results and input section


//    }
                // });  