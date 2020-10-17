const valueCount = document.querySelector('.value');
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');

let countIncr = 0;
const funcIncr = () => {
    countIncr += 1;
    valueCount.textContent = countIncr;
};

const funcDecr = () => {
    countIncr -= 1;
    valueCount.textContent = countIncr;
}
increment.addEventListener('click', funcIncr);
decrement.addEventListener('click', funcDecr)
