const form = document.getElementById('form');
const heightEl = document.getElementById('height');
const weightEl = document.getElementById('weight');
const classification = document.getElementById('classification');
const minWeight = document.getElementById('min-weight');
const maxWeight = document.getElementById('max-weight');
const resultEl = document.getElementById('result');
const containerResult = document.getElementById('container-result');
const bmiEl = document.getElementById('bmi');
const welcome = document.getElementById('welcome');

const rangeInput = document.getElementById('customRange1');
const ageDisplay = document.getElementById('ageValue');

const sexInputs = document.querySelectorAll('input[name="sex"]');

// Function to calculate BMI
function calculateBMI(e) {
  e.preventDefault(); // Prevent form submission or page refresh

  // Metric system BMI calculation
  const height = heightEl.value;
  const weight = weightEl.value;

  bmiEl.style.display = 'flex';
  welcome.style.display = 'none';

  const bmi = ((weight / (height * height)) * 10000).toFixed(1); // BMI formula for Metric system
  const heightM = height / 100; // Convert height to meters

  // Calculate the minimum and maximum ideal weight range
  const min = (18.5 * heightM * heightM).toFixed(1);
  const max = (24.9 * heightM * heightM).toFixed(1);

  // Display the BMI result and ideal weight range
  resultEl.innerText = bmi;
  minWeight.innerText = `${min}kgs`;
  maxWeight.innerText = `${max}kgs`;

  // Classification based on BMI value
  if (bmi < 18.5) {
    classification.innerText = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    classification.innerText = 'Healthy weight';
  } else if (bmi > 24.9 && bmi <= 29.9) {
    classification.innerText = 'Overweight';
  } else {
    classification.innerText = 'Obese';
  }
}

// Add event listener to the button to trigger the BMI calculation
const calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', (e) => calculateBMI(e));

// Limit input of height and weight to reasonable lengths
function limitLength() {
  if (heightEl.value.length > 3 || weightEl.value.length > 3) {
    heightEl.value = heightEl.value.slice(0, 3);
    weightEl.value = weightEl.value.slice(0, 3);
  }
}

// Add event listeners for input changes
heightEl.addEventListener('input', limitLength);
weightEl.addEventListener('input', limitLength);

// Range for age display
rangeInput.addEventListener('input', () => {
  ageDisplay.textContent = rangeInput.value;
});

// Set initial value for age display
ageDisplay.textContent = rangeInput.value;
