// localStorage.setItem('result',JSON.stringify(calculation))

let calculation = '';

console.log(localStorage.getItem('calculation'));

function updateCalculation(input) {
  calculation += input;
  displayCalculation();
};

function displayCalculation() {
  document.querySelector('.js-display-calculation')
    .innerHTML = calculation;
};


