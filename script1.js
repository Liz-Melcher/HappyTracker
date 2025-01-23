//functions for making the time of day, and frequency options drop down, and for registering toggle.
//this code is correct but ineffecient 
// updated script.js with a more efficient option 

const sleepButton = document.getElementById('sleep');
  const sleeptrackingOptions = document.getElementById('sleep-tracking-options');

  sleepButton.addEventListener('click', () => {
    // Check if the "Sleep" button is active
    const isActive = sleepButton.classList.contains('active');
    
    if (isActive) {
      // If the button is active, show the tracking options
      sleeptrackingOptions.style.display = 'block';
    } else {
      // If the button is not active, hide the tracking options
      sleeptrackingOptions.style.display = 'none';
    }
  });

  const readButton = document.getElementById('read');
  const readTrackingOptions = document.getElementById('read-tracking-options');

  readButton.addEventListener('click', () => {
    // Check if the "Read" button is active
    const isActive = readButton.classList.contains('active');
    
    if (isActive) {
      // If the button is active, show the tracking options
      readTrackingOptions.style.display = 'block';
    } else {
      // If the button is not active, hide the tracking options
      readTrackingOptions.style.display = 'none';
    }
  });

  const hydrationButton = document.getElementById('hydration');
  const hydrationTrackingOptions = document.getElementById('hydration-tracking-options');

  hydrationButton.addEventListener('click', () => {
    // Check if the "Read" button is active
    const isActive = hydrationButton.classList.contains('active');
    
    if (isActive) {
      // If the button is active, show the tracking options
      hydrationTrackingOptions.style.display = 'block';
    } else {
      // If the button is not active, hide the tracking options
      hydrationTrackingOptions.style.display = 'none';
    }
  });

  const moveButton = document.getElementById('move');
  const moveTrackingOptions = document.getElementById('move-tracking-options');

  moveButton.addEventListener('click', () => {
    // Check if the "Read" button is active
    const isActive = moveButton.classList.contains('active');
    
    if (isActive) {
      // If the button is active, show the tracking options
      moveTrackingOptions.style.display = 'block';
    } else {
      // If the button is not active, hide the tracking options
      moveTrackingOptions.style.display = 'none';
    }
  });

const meditateButton = document.getElementById('meditate');
const meditateTrackingOptions = document.getElementById('meditate-tracking-options');

meditateButton.addEventListener('click', () => {
  // Check if the "Meditation" button is active
  const isActive = meditateButton.classList.contains('active');
  
  if (isActive) {
    // If the button is active, show the tracking options
    meditateTrackingOptions.style.display = 'block';
  } else {
    // If the button is not active, hide the tracking options
    meditateTrackingOptions.style.display = 'none';
  }
});

const ownButton = document.getElementById('own');
const ownTrackingOptions = document.getElementById('own-tracking-options');

ownButton.addEventListener('click', () => {
  // Check if the "Meditation" button is active
  const isActive = ownButton.classList.contains('active');
  
  if (isActive) {
    // If the button is active, show the tracking options
    ownTrackingOptions.style.display = 'block';
  } else {
    // If the button is not active, hide the tracking options
    ownTrackingOptions.style.display = 'none';
  }
});