const habits = document.querySelectorAll('.habit')

habits.forEach(habit => {
    habit.addEventListener('click', ()=>{
        console.log('clicked')
    })
})