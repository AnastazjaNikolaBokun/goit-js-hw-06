let counterValue = document.querySelector("#value");

const minusButton = document.querySelector('button[data-action="decrement"]');
const plusButton = document.querySelector('button[data-action="increment"]');

const minusClick = () => {
  let minus = counterValue.textContent - 1;
  console.log(minus);
  counterValue.textContent = minus;
};

const plusClick = () => {
  let plus = ++counterValue.textContent;
  console.log(plus);
  counterValue.textContent = plus;
};

minusButton.addEventListener("click", minusClick);
plusButton.addEventListener("click", plusClick);
