
const resetNumber = document.getElementById('reset-number');
const count = document.getElementById('counter');

const generateNumber = () => {
    count.innerHTML = Math.floor(Math.random() * 10 + 1);
};

resetNumber.addEventListener('click', generateNumber);

// To generate a rander number on page load
generateNumber();   

