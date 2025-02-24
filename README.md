# HappyTracker
Bootcamp Project 1 

##Task: Create a tracker to manage chores and habits. 


##User Story
As a developer, I want to which days of the week I am most productive.  
I want to create a habit tracker that: Tracks habits daily  


##Acceptance Criteria  
Starting Index.html page:  
It is done when:   
Landing page directs users to pick a habit to start tracking  
If users have already identified a habit, they can continue tracking it.  
If users have not idenfieid a habit, and attempt to continue tracking, they get a message "No existing habits in local storage. Please start a new habit."  ![Home page on initial load](./Assets/HomePageFirstLoad.png)  

Entering New Habits Page  
It is done when:   
New habits page allows users to pick from several habits to track. [New Habits Page](./Assets/NewHabitsItemsSelected.png)  
If no habits are selected, users get an error and cannot continue from this page [New Habits page with error](./Assets/NewHabitsError.png)  
Users can select from 1 to 6 habits.  
Users get a message that says "start tracking..." when an item is selected   
If at least one habit is selected for tracking, users can continue to the tracking page  

Tracking Existing Habits Page  
It is done when:   
Only habits selected for tracking are displayed on the existing habits page  
Each habit lists the days of the week  
Days in the future are disabled for tracking  
Tracking data is written to local storage   
[ExistingHabitsTracking](./Assets/ExistingHabitsTracking.png)  
[Console Log with Memory](./Assets/ConsolelogMemory.png)  




Charts Page: coming soon. 
It is done when habits can be entered for a day of the week
It is done when habits can be marked as complete
It is done when completed habits can be tracked by day of the week
It is done when non-completed habits can be tracked day of the week 
It is done when the website can be viewed on a computer screen or mobile device.

##Assets
CSS Framework from Bootstrap (https://getbootstrap.com/)
Javascript Frameworks from Bootstrap, especially for toggle buttons
Javascript from Day.js for days of the week calculations (https://day.js.org/en/)
Planned for charts: Chart.js (https://www.chartjs.org/docs/latest/)

##Deployed application: (https://liz-melcher.github.io/HappyTracker/)

