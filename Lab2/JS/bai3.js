const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];
// console.log(arr2);
const resultDiv = document.getElementById('result');
resultDiv.innerHTML = `<li>${arr2}</li>`;
resultDiv.innerHTML += `<li>${arr1}</li>`;