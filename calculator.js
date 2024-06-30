// Cloned onto my new laptop TEST

// console.log('Hi!')

/* Capture button clicks to handle user input.
• Update the display area with the current input and result.
• Perform arithmetic operations when the user clicks the equal button.
• Clear the display and reset the calculator state when the user clicks the clear button.
• Handle decimal numbers. */


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

       // Sets HTML element w/ ID of 1stNumber to value of param randomNum 
    function FirstNumber(randomNumber1){
        document.getElementById('1stNumber').textContent = randomNumber1
    }

    // Sets HTML element w/ ID of 2ndNumber to value of param randomNum
    function SecondNumber(randomNumber2){
        document.getElementById('2ndNumber').textContent = randomNumber2
    }


  document.getElementById('Arithmetic').onclick = function(e){
        // Randomly generate arithmetic operator


  }

  document.getElementById('Calculate').onclick = function(e){
         // Calculate the current inputs using both random numbers and arithmetic operator 


  }

  document.getElementById('Clear').onclick = function(e){
         // Clear the results and input section


  }