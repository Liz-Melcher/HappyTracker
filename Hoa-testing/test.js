const readDays = ['Monday', 'Tuesday', 'Saturday'];  // Days for reading habit
const codeDays = ['Tuesday', 'Thursday', 'Friday'];  // Days for coding habit

// Get current day of the week
const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });

// Retrieve habit points from localStorage
let readPoints = parseInt(localStorage.getItem('readPoints')) || 0;
let codePoints = parseInt(localStorage.getItem('codePoints')) || 0;

// Function to update points
function updatePoints(habit) {
    if (habit === 'reading' && readDays.includes(currentDay)) {
        readPoints++;
        localStorage.setItem('readPoints', readPoints);
    } else if (habit === 'coding' && codeDays.includes(currentDay)) {
        codePoints++;
        localStorage.setItem('codePoints', codePoints);
    }
    renderChart(); // Re-render the chart after updating points
}

// Function to render the chart
function renderChart() {
    const ctx = document.getElementById('habitChart').getContext('2d');
    if (window.myChart) {
        window.myChart.destroy(); // Destroy existing chart if it exists
    }
    window.myChart = new Chart(ctx, {
        type: 'bar', // Bar chart
        data: {
            labels: ['Reading', 'Coding'],
            datasets: [{
                label: 'Points for the Week',
                data: [readPoints, codePoints],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Set up event listeners for habit buttons
document.getElementById('readHabitBtn').addEventListener('click', () => updatePoints('reading'));
document.getElementById('codeHabitBtn').addEventListener('click', () => updatePoints('coding'));

// Initialize the chart when the page loads
window.onload = renderChart;

// Sample data for the habits (you can update this dynamically later)
let habitData = {
    labels: ["Reading", "Coding"], // X-axis labels
    datasets: [{
        label: 'Points Earned',
        data: [5, 3], // 5 points for Reading, 3 points for Coding (change based on your logic)
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
        borderWidth: 1
    }]
};

// Chart.js setup
let ctx = document.getElementById('habitChart').getContext('2d');
let habitChart = new Chart(ctx, {
    type: 'bar', // Chart type (bar chart in this case)
    data: habitData, // Pass the data to the chart
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to update habit data dynamically
function updateChartData(habit, points) {
    // Update data for the clicked habit
    if (habit === 'Reading') {
        habitData.datasets[0].data[0] = points; // Update reading points
    } else if (habit === 'Coding') {
        habitData.datasets[0].data[1] = points; // Update coding points
    }

    // Update chart
    habitChart.update();
}

// Example usage when a button is clicked
document.getElementById('readHabitBtn').addEventListener('click', function() {
    updateChartData('Reading', 6); // Adding 1 more point to Reading
});

document.getElementById('codeHabitBtn').addEventListener('click', function() {
    updateChartData('Coding', 4); // Adding 1 more point to Coding
});
