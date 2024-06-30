// Cloned onto my new laptop TEST

// console.log('Hi!')

/* Capture button clicks to handle user input.
• Update the display area with the current input and result.
• Perform arithmetic operations when the user clicks the equal button.
• Clear the display and reset the calculator state when the user clicks the clear button.
• Handle decimal numbers. */


/* I have the script src for this file in display.html so 
I can run in browser instead of using node.js */
    document.addEventListener('click', function(event) {
       if (event.target.id === 'Random') { // Check if the clicked element has the ID 'Random'
           // Your logic here
           let randomNumber1 = 0
           let randomNumber2 = 0

           alert(randomNumber1 = (Math.random() * 9))
           alert(randomNumber2 = (Math.random() * 9))

           console.log('Random button clicked');
       }
       }); 
 

/*On click for Random Digit generator (Can't use document.getElementById
Because it used a DOM & "node calculator.js doesn't have DOM access" */
// document.getElementById('Random').onclick = function(randomNumber1, randomNumber2){
    // When button clicked
    // Generate random number 1 in 1st number:
    // Generate random number 2 in 2nd number:

    // Random number 1/2 instantiated and assigned 0 to start as a value
//     let randomNumber1 = 0
//     let randomNumber2 = 0

    // Math.random() * 10
//     alert(Math.random() * 9)

    // Generate random number 1 and 2 (BEST OPTION I THINK)
//     alert(randomNumber1 = (Math.random() * 9))
//     alert(randomNumber2 = (Math.random() * 9))


    // Display random number 1 and 2 in the input fields
//      $(h1.Random).text(randomNumber1)
//      $(h1.Random).text(randomNumber2)

     
    // $(h1.Random).data('randomNumber', randomNumber1)
    // $(h1.Random).data('randomNumber2', randomNumber2)




  document.getElementById('Arithmetic').onclick = function(e){
        // Randomly generate arithmetic operator


  }

  document.getElementById('Calculate').onclick = function(e){
         // Calculate the current inputs using both random numbers and arithmetic operator 


  }

  document.getElementById('Clear').onclick = function(e){
         // Clear the results and input section


  }