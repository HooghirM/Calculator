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


                /* Random number generator */
    document.addEventListener('click', function(event) {
       if (event.target.id === 'Random') { // Check if the clicked element has the ID 'Random'
          
        // Varibles containing random numbers between 1 and 9
           let randomNumber1 = Math.floor(Math.random() * 9) +1
           let randomNumber2 = Math.floor(Math.random() * 9) +1

        // Display the random numbers in the input fields
        FirstNumber(`1st number: ${randomNumber1}`)
        SecondNumber(`2nd number: ${randomNumber2}`)
        
           console.log('Random button clicked');
       }
       }); 


       /* MAYBE PUT THESE IN RANDOM ON CLICK FUNCTIONs*/
       // Sets HTML element w/ ID of 1stNumber to value of param randomNum 
    function FirstNumber(randomNumber1){
        document.getElementById('1stNumber').textContent = randomNumber1
    }

    // Sets HTML element w/ ID of 2ndNumber to value of param randomNum
    function SecondNumber(randomNumber2){
        document.getElementById('2ndNumber').textContent = randomNumber2
    }


    // FUNCTION TO GENERATE RANDOM ARITHMETIC OPERATOR
    document.addEventListener('click', function(event) {
        if (event.target.id === 'Arithmetic') {

        // Variables for arithmetic operators
        let add = '+'
        let subtract = '-'
        let multiply = '*'  
        let divide = '/'    

        // Array of arithmetic operators
        let operators = [add, subtract, multiply, divide]

        // Randomly generate arithmetic operator
        for (let index = 0; index < operators.length; index++) {
            let randomOperator = operators[Math.floor(Math.random() * operators.length)]
            document.getElementById('Arithmetic').textContent = `Arithmetic operator: ${randomOperator}`         
        }
    }
});
//             if (index === add){
//                 document.getElementById('Arithmetic').textContent = add 
//             } else if (index === subtract){
//                 document.getElementById('Arithmetic').textContent = subtract
//             } else if (index === multiply){
//                 document.getElementById('Arithmetic').textContent = multiply
//             } else {
//                 document.getElementById('Arithmetic').textContent = divide
//             }
//         }
//     }
// });

//             } else (index === subtract || multiply || divide);{
//                 document.getElementById('Arithmetic').textContent = subtract || multiply || divide

//             /*  */
//         }
//     }
// }
// });
    

//         for (let i = 0; i < operators.length; i ++) {
//             if (operators[i] === add) {
//             } else if (operators[i] === subtract) {
//             } else if (operators[i] === multiply) {
//             } else {
//             operators[i] === divide
//             }
//         }
//     }
// });
            
            // let randomOperator = operators[Math.floor(Math.random() * operators.length)]
            // document.getElementById('Arithmetic').textContent = randomOperator

            // randomOperator(`Arithmetic operator: ${operators}`)

    //     }



        


    //     }
    // });

//   document.getElementById('Arithmetic').onclick = function(e){
//         // Randomly generate arithmetic operator




        // Varibles containing arithmetic operators
        // let add = '+'
        // let subtract = '-'  
        // let multiply = '*'
        // let divide = '/'  
        
        // if (add){
        //     document.getElementById('Arithmetic').textContent = add
        // } else if {
        //     document.getElementById('Arithmetic').textContent = subtract
        // } else if {
        //     document.getElementById('Arithmetic').textContent = multiply
        // } else {
        //     document.getElementById('Arithmetic').textContent = divide
        // }

        // // Array of arithmetic operators
        // let operators = [add, subtract, multiply, divide]


    // }   

  document.getElementById('Calculate').onclick = function(e){
         // Calculate the current inputs using both random numbers and arithmetic operator 


  }

  document.getElementById('Clear').onclick = function(e){
         // Clear the results and input section


  }