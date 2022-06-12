//const result = document.querySelector('.output');
const display = document.querySelector('.Summary');
const weighttext = document.getElementById('weight');
const heighttext = document.getElementById('height');
const button = document.querySelector('.btn');
const rst = document.querySelector('.reset');

const calcBMI = function (weight, height) {
    return parseFloat((weight / (height*height))).toFixed(2);
}

button.addEventListener('click', function () {
    const val = calcBMI(weighttext.value, heighttext.value);
    if (val <= 18.5) {
        display.textContent = `Your BMI index is ${val} and you're underweight 🤔`;
    } else if (val > 18.5 && val <= 24.9) {
        display.textContent = `Your BMI index is ${val} and you're in Normal weight 😀`;
    } else if (val >= 25 && val < 30) {
        display.textContent = `Your BMI index is ${val} and you're Overweighted 🤐`;
    } else if (val>30&&val<=34.9) {
        display.textContent = `Your BMI index is ${val} and you're in Obesity Class I 😓`;
    } else if (val>35 && val<=39.9) {
        display.textContent = `Your BMI index is ${val} and you're in Obesity Class II 😨`;
    } else if (val>=40) {
        display.textContent = `Your BMI index is ${val} and you're in Obesity Class III 😰`;
    } 
})
document.addEventListener('keypress', function () {
    
})
rst.addEventListener('click', function () {
    weighttext.value= heighttext.value = display.textContent = '';
})
    
