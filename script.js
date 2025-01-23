// Function to toggle tracking options based on button activity
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
  
  // Add a global click event listener to the document
// document.addEventListener('click', (event) => {
//     // Check if the clicked element is one of the buttons
//     if (event.target.tagName === 'BUTTON') {
//       console.log(`Clicked button ID: ${event.target.id}`);
//     }
//   });

  // Function to log all active buttons
function logActiveButtons() {
    const activeButtons = habitMappings
      .filter(mapping => {
        const button = document.getElementById(mapping.buttonId);
        return button.classList.contains('active');
      })
      .map(mapping => mapping.buttonId);
  
    console.log(`Active buttons: ${activeButtons.join(', ')}`);
  }
  
  // Add a global click event listener to the document
//   document.addEventListener('click', (event) => {
//     // Check if the clicked element is one of the buttons
//     if (event.target.tagName === 'BUTTON') {
//       console.log(`Clicked button ID: ${event.target.id}`);
//       // Log currently active buttons
//       logActiveButtons();
//     }
//   });
  
  // Function to update active button IDs in localStorage
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
  
  // Add a global click event listener to the document
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
  
  