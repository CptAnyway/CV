const button = document.getElementById('themeToggle');

button.addEventListener('click', () => {
    const body = document.body;
    
    if (body.classList.contains('night-theme')) {
        body.classList.remove('night-theme');
        body.classList.add('day-theme');
        localStorage.setItem('theme', 'day');
        button.textContent = 'Badlands Mode';
    } else {
        body.classList.remove('day-theme');
        body.classList.add('night-theme');
        localStorage.setItem('theme', 'night');
        button.textContent = 'Night City Mode';
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const button = document.getElementById('themeToggle');
    
    if (savedTheme === 'night') {
        document.body.classList.add('night-theme');
        button.textContent = 'Night City Mode';
    } else {
        document.body.classList.add('day-theme');
        button.textContent = 'Badlands Mode';
    }

    const hour = new Date().getHours();
    if (!savedTheme) {
        if (hour >= 7 && hour < 21) {
            document.body.classList.add('day-theme');
            button.textContent = 'Badlands Mode';
        } else {
            document.body.classList.add('night-theme');
            button.textContent = 'Night City Mode';
        }
    }

});
