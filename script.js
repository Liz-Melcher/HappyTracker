// Get references to the button and the input container
const createHabitButton = document.querySelector('.create-habit');
const habitInputContainer = document.getElementById('habit-input-container');
const submitHabitButton = document.getElementById('submit-habit');

// Show the text input when the "Create a New Habit" button is clicked
createHabitButton.addEventListener('click', () => {
    habitInputContainer.style.display = 'block'; // Show the input container
});

// Handle the habit submission
submitHabitButton.addEventListener('click', () => {
    const habitInput = document.getElementById('habit-input').value;

    if (habitInput) {
        console.log(`New habit created: ${habitInput}`);
        // Optionally, clear the input field and hide the container after submission
        habitInputContainer.style.display = 'none';
        document.getElementById('habit-input').value = ''; // Clear the input field
    } else {
        alert("Please enter a habit!");
    }
});

