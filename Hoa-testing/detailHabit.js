const habitDetailsDiv = document.getElementById('habitDetails');

// Retrieve habit data from localStorage
const habitData = JSON.parse(localStorage.getItem('habit'));

if (habitData) {
  // Create elements to display habit details
  const habitTime = document.createElement('h3');
  const habitGoal = document.createElement('h3');

  habitTime.innerText = "Time of the day for your habit: " + habitData.time;
  habitGoal.innerText = "The goal you set for your habit: " + habitData.goal;

  // Append elements to the habitDetails div
  habitDetailsDiv.append(habitTime, habitGoal);
} else {
  habitDetailsDiv.innerText = 'No habit data found.';
}
