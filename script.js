//Make this script only for newHabits.html and not anything else? Otherwise it throws errors? 

// window.onload = () => {
//     const habitStates = JSON.parse(localStorage.getItem('habitStates')) || {};

//     // Function to update the button based on state
//     function updateButtonState(buttonId, state) {
//         const button = document.getElementById(buttonId);
//         if (state === 'active') {
//             button.classList.add('active');
//             button.setAttribute('aria-pressed', 'true');
//         } else {
//             button.classList.remove('active');
//             button.setAttribute('aria-pressed', 'false');
//         }
//     }
//     // Restore previous states from localStorage
//     Object.keys(habitStates).forEach(buttonId => {
//         updateButtonState(buttonId, habitStates[buttonId]);
//     });

//     // Add event listeners to each button
//     const buttons = document.querySelectorAll('button[data-bs-toggle="button"]');
//     buttons.forEach(button => {
//         button.addEventListener('click', (e) => {
//             const buttonId = e.target.id;
//             const isActive = e.target.classList.contains('active') ? 'active' : 'inactive';
//             habitStates[buttonId] = isActive;
//             localStorage.setItem('habitStates', JSON.stringify(habitStates));
//             console.log(localStorage)
//         });
//     });
// };

const sleepButton = document.getElementById('sleep');
  const trackingOptions = document.getElementById('sleep-tracking-options');

  sleepButton.addEventListener('click', () => {
    // Check if the "Sleep" button is active
    const isActive = sleepButton.classList.contains('active');
    
    if (isActive) {
      // If the button is active, show the tracking options
      trackingOptions.style.display = 'block';
    } else {
      // If the button is not active, hide the tracking options
      trackingOptions.style.display = 'none';
    }
  });