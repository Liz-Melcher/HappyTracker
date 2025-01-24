const habitForm = document.getElementById('habitForm');
const timeInput = habitForm['time'];
const goalInput = habitForm['goal'];

habitForm.onsubmit = (e) => {
  e.preventDefault(); // Prevent page refresh

  const time = timeInput.value;
  const goal = goalInput.value;

  if (time && goal) {
    // Save data to localStorage
    const habitData = { time, goal };
    localStorage.setItem('habit', JSON.stringify(habitData));

    // Redirect to the detailHabit.html page
    window.location.href = 'detailHabit.html';
  } else {
    alert('Please fill in both fields!');
  }
};
