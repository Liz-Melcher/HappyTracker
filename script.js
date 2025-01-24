// Efficient function; tracks buttons that are toggled by the toggle state and button ID 
function setupToggle(buttonId, trackingOptionsId) {
    const button = document.getElementById(buttonId);
    const trackingOptions = document.getElementById(trackingOptionsId);
  
    button.addEventListener('click', () => {
      // Toggle the display of tracking options based on button's active state
      const isActive = button.classList.contains('active');
      trackingOptions.style.display = isActive ? 'block' : 'none';
    });
  }
  
  // Mapping of button IDs to their corresponding tracking option IDs
  const habitMappings = [
    { buttonId: 'sleep', optionsId: 'sleep-tracking-options' },
    { buttonId: 'read', optionsId: 'read-tracking-options' },
    { buttonId: 'hydration', optionsId: 'hydration-tracking-options' },
    { buttonId: 'move', optionsId: 'move-tracking-options' },
    { buttonId: 'meditate', optionsId: 'meditate-tracking-options' },
    { buttonId: 'own', optionsId: 'own-tracking-options' },
  ];
  
  // Set up event listeners for each habit
  habitMappings.forEach(mapping => {
    setupToggle(mapping.buttonId, mapping.optionsId);
  });

  // Function to log all active buttons to the console
  //This function may not be needed in the final version--------------
function logActiveButtons() {
    const activeButtons = habitMappings
      .filter(mapping => {
        const button = document.getElementById(mapping.buttonId);
        return button.classList.contains('active');
      })
      .map(mapping => mapping.buttonId);
  
    console.log(`Active buttons: ${activeButtons.join(', ')}`);
  }
  
  
  // Sends active button IDs to local storage 
function updateActiveButtonsInLocalStorage() {
    const activeButtons = habitMappings
      .filter(mapping => {
        const button = document.getElementById(mapping.buttonId);
        return button.classList.contains('active');
      })
      .map(mapping => mapping.buttonId);
  
    // Store the active button IDs in localStorage
    localStorage.setItem('activeButtons', JSON.stringify(activeButtons));
  }
  
  // Add a global click event listener to the document to run the functions that
  // - console log the active buttons
  // - send the buttons to local storeage 
  document.addEventListener('click', (event) => {
    // Check if the clicked element is one of the buttons
    if (event.target.tagName === 'BUTTON') {
      console.log(`Clicked button ID: ${event.target.id}`);
      
      // Log currently active buttons
      logActiveButtons();
  
      // Update active button IDs in localStorage
      updateActiveButtonsInLocalStorage();
      console.log(localStorage)
    }
  });
  
  // gives an error if no habits are elected 
  document.getElementById('continue-button').addEventListener('click', (event) => {
    const activeButtons = habitMappings.some(mapping => {
      const button = document.getElementById(mapping.buttonId);
      return button.classList.contains('active');
    });
  
    const errorSelectMessage = document.getElementById('error-select');
  
    // Prevent continuation if no active buttons
    if (!activeButtons) {
      event.preventDefault(); // Stop the default action (navigation)
      errorSelectMessage.style.display = 'block'; // Show the error message
    } else {
      errorSelectMessage.style.display = 'none'; // Hide the error message if there are active habits
    }
  });
  