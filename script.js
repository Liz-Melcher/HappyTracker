// Condensed function
//Toggles habits
//Displays habit time of day and frequency for tracking 
function setupButtonToggle(buttonId, optionsId) {
    const button = document.getElementById(buttonId);
    const options = document.getElementById(optionsId);
  
    button.addEventListener('click', () => {
      const isActive = button.classList.contains('active');
      options.style.display = isActive ? 'block' : 'none';
    });
  }
  
  // button and button tracking options: 
  const buttonOptionsMapping = [
    { buttonId: 'sleep', optionsId: 'sleep-tracking-options' },
    { buttonId: 'read', optionsId: 'read-tracking-options' },
    { buttonId: 'hydration', optionsId: 'hydration-tracking-options' },
    { buttonId: 'move', optionsId: 'move-tracking-options' },
    { buttonId: 'meditate', optionsId: 'meditate-tracking-options' },
    { buttonId: 'own', optionsId: 'own-tracking-options' },
  ];
  
  // Run the function for each button 
  buttonOptionsMapping.forEach(({ buttonId, optionsId }) =>
    setupButtonToggle(buttonId, optionsId)
  );
  

  // make the error pop up if no habits are selected and the person tries to move forward 
  document.getElementById('continue-button').addEventListener('click', () => {
    const habitButtons = document.querySelectorAll('.btn-habit'); // Assuming habit buttons have a class `btn-habit`
    const errorMessage = document.getElementById('error-select');
  
    // Check if any habit button is selected (has the 'active' class)
    const isAnyHabitSelected = Array.from(habitButtons).some(button =>
      button.classList.contains('active')
    );
  
    if (!isAnyHabitSelected) {
      // If no habit is selected, show the error
      errorMessage.style.display = 'block';
      event.preventDefault() // prevents navigtation
    } else {
      // Otherwise, hide the error and proceed
      errorMessage.style.display = 'none';
      window.location.href = 'ExistingHabits.html'; // Navigate to the desired page
    }
  });
  