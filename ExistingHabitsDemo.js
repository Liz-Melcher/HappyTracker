console.log ('ExistingHabitsDemo js is loaded')

//Pull data about chosen habits from local storage
// Active buttons are saved in local storage by ID in the html 
function getActiveButtonsFromLocalStorage() {
    // Get the data from local storage
    const activeButtons = localStorage.getItem('activeButtons');
    
    //Parse
    return activeButtons ? JSON.parse(activeButtons) : [];
  }
  
  //console log the active buttons for debugging
  const activeButtons = getActiveButtonsFromLocalStorage();
  console.log(`Retrieved active buttons: ${activeButtons.join(', ')}`);
  


//Unhide chosen habits when they are selected
function updateCardVisibility() {
    // Retrieve active buttons from local storage
    const activeButtons = getActiveButtonsFromLocalStorage();
  
    // Hides all card bodies; card body class is CSS from bootstrap
    const allCardBodies = document.querySelectorAll('.card-body');
    allCardBodies.forEach(cardBody => {
      cardBody.style.display = 'none';
    });
  
    // Decide which buttons are active buttons; display card bodies for those buttons only (buttons=habits) 
    activeButtons.forEach(buttonId => {
      // Construct the ID of the card body based on the button ID
      const cardBodyId = `${buttonId}Habit`;
      const cardBody = document.getElementById(cardBodyId);
  
      if (cardBody) {
        // Make the card body visible
        cardBody.style.display = 'block';
      }
    });
  }
  
  // Call the function after the page loads; I needed to add this part to make it work? 
  document.addEventListener('DOMContentLoaded', updateCardVisibility);
  

//Days of the week buttons: enable only up to the day of the week we are on
//days are indexed, Sunday is zero
//each habit button has the name of the habit and the day of the week in the button; days of the week are Capitalized.  
//e.g. id="sleep-Sunday"
 function activateCurrentAndPastDays() {
    const currentDayIndex = dayjs().day();  //current day index is pulling from days.js library 

    // Log the current day for debugging
    const currentDayName = dayjs().format('dddd');
    console.log(`Today is: ${currentDayName} (Index: ${currentDayIndex})`);

    // Needed this to make the console log for day names work
    const daysOfWeek = {
        Sunday: 0,
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
    };

    // Look at all buttons
    const dayButtons = document.querySelectorAll('.btn-outline-primary');
    //for this querry selector to work; the only buttons that can have this class on this page are the days of the week
    //----check the final styling; make sure no other buttons are button outline primary class in this html page --------------

    // Go through each button
    dayButtons.forEach(button => {
        const dayName = button.id.split('-')[1]; // get the day name from the button ID and the index; splitting the habit name from the day of the week name

        // Check if the dayName is valid
        if (daysOfWeek[dayName] !== undefined) { //if the day name is NOT undefined then > 
            const dayIndex = daysOfWeek[dayName]; // Map dayName to its index

            // Allow today and past day buttons
            if (dayIndex <= currentDayIndex) { //if the dayIndex is less than or equal to the current day > 
                button.disabled = false; // Enable the button
                button.classList.add('active'); // Add Bootstrap's "active" class for styling
            } else {
                button.disabled = true; // Disable future day buttons
                button.classList.remove('active'); // Ensure future buttons don't have "active" class
            }
        } else { //if the name of the day of the week is typed wrong in the ID, this is the error that generates; typed wrong includes not capitalized 
            console.error(`Invalid day name: ${dayName}`);
        }
    });
}

//added to make things load right? 
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page is fully loaded.");
    activateCurrentAndPastDays();
});





//Read the toggle state of each button and store it in local memory 

//Continue button should lead to charts 