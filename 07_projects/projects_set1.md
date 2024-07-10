// project1 -color changer solution code

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    } else {
      body.style.backgroundColor = e.target.id;
    }
  });
});


##PROJECT 2- BMI CALCULATOR

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');
  if (height == '' || isNaN(height) || height < 0) {
    results.innerHTML = `please enter valid value, the value you entered is ${height}`;
  } else if (weight == '' || isNaN(weight) || weight < 0) {
    results.innerHTML = `please enter valid value, the value you entered is ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(BMI);
    if (BMI < 18.6) {
      results.innerHTML = `${BMI} and you are under weight`;
    } else if (18.6 < BMI && BMI < 24.9) {
      results.innerHTML = `${BMI} and you are Normal weight`;
    } else {
      results.innerHTML = `${BMI} and you are Over weight`;
    }
  }
});


##project 3- digital clock

const time = document.querySelector('#clock');
setInterval(function () {
  const date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);

