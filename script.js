const inputText = document.querySelector('.textIn');
const btn = document.querySelectorAll('.btn');
const btnRest = document.querySelector('.restEqual');
const eql = document.querySelector('.equal');
const del = document.querySelector('.del');
let displayvalue = 0;
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    let num = btn[i].value;
    inputText.value += num;
  });
}
const rest = function () {
  inputText.value = '';
};
btnRest.addEventListener('click', rest);
eql.addEventListener('click', function () {
  displayvalue = eval(inputText.value);
  inputText.value = displayvalue;
  console.log(displayvalue);
});
del.addEventListener('click', function () {
  const dell = inputText.value;
  inputText.value = dell.slice(0, dell.length - 1);
});
