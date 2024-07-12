//Lesson 1: Adding date function to headeer of DOM
const userName = prompt("Please enter your name:");
document.querySelector('#userName').textContent =`Hello, ${userName}!`;
const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
    
};
welcomeMessage();

//Lesson 2: Selecting and Manipulating Elements
const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);


// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    
    // ⚠️ Hint 1: Check for duplicates
    // Use 'goalList' to get all existing goals and check if 'goalInput' matches any of them.
    
    // ⚠️ Hint 2: Prevent duplicates
    // If a duplicate is found, display an alert to the user and don't add the goal to the list.
    // If it's not a duplicate, proceed with adding it as a new goal.
    
    // ⚠️ Hint 3: Code structure
    // You might want to wrap the duplicate-checking logic in an 'if' statement.
    
    // ⚠️ Hint 4: Event listener
    // The event listener that removes goals when clicked is not related to this issue.
    // Focus on preventing duplicates for now.
    
      if (goalInput==="") {
        alert("Fitness goal field cannot be empty")
        return;
    }// prevent empty lists ,
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    // these hints really helped
    //how do i check for duplicates , use boolean either there is pr there isnt
    let isDuplicate = false;
    const existingGoals = document.querySelectorAll('#goalList li');// i had a small typo goalList was goalList
    existingGoals.forEach( goal=>{
        if(goal.textContent===goalInput){
            isDuplicate = true;
        }//just checks for duplicates , doesnt check for similarities
    });
    if (isDuplicate) {
        alert("Do not duplicate goals!");// alerts the user of using putting the same goal down
        
    } else {
        goalList.appendChild(newGoal); // adds the goal

        newGoal.addEventListener('click', () => {
            goalList.removeChild(newGoal); // removes the goal
        });

}; 

}

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///Lesson 4: Event Handling
let waterIntake = 0;
const updateWaterIntake = (change) => {
   
if (waterIntake + change < 0) {
    alert("Intake cannot be negative");
    return;
}// if statement to prevent people drink negative water
waterIntake += change;
document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};
document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));



const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

//Lesson 5: CSS Manipulation via JavaScript , Forms and User input
//Toggles the theme button
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);


//clear all fields once meal plan submitted
//debug error for glasses intake
//figure out if statement mahbob