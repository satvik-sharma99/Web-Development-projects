document.addEventListener('DOMContentLoaded', function () {
    //This line ensures that the script runs only when the DOM (Document Object Model) has been fully loaded.


    const input = document.querySelector('.input');
    const buttons = document.querySelectorAll('.button');
   // It selects the input field and all buttons on the calculator using their respective class names.

    buttons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
    });
    //This loop adds a click event listener to each button. When a button is clicked, the handleButtonClick function is called.

    function handleButtonClick(event) {
      const buttonText = event.target.innerText;
  
      switch (buttonText) {
        case 'C':
          clearInput();
          break;
        case '=':
          calculateResult();
          break;
        default:
          addToInput(buttonText);
          break;
      }
    }
//The handleButtonClick function determines which button was clicked by extracting the text content of the clicked button. It then performs different actions based on the button text:

//If 'C' is clicked, it calls clearInput to clear the input field.
//If '=' is clicked, it calls calculateResult to evaluate and display the result.
//For other buttons, it calls addToInput to append the button text to the input field.
  
    function clearInput() {
      input.value = '';
    }

    //The clearInput function sets the input field value to an empty string, effectively clearing it.
  
    function addToInput(value) {
        input.value += value;
      }
    //The addToInput function appends the provided value to the current input field value.


      function calculateResult() {
        try {
          input.value = eval(input.value);
        } catch (error) {
          input.value = 'Error';
        }
      }
    });
//The calculateResult function attempts to evaluate the expression in the input field using eval.
// If successful, it sets the input field value to the result. If an error occurs (e.g., division by zero), it sets the input field value to 'Error'.

   
  
