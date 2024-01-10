const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirsstTwo([a, b, ...arr]) {
    return arr;
}

const arr = removeFirsstTwo(source);
// console.log(arr); 
// console.log(source);
const resultDiv = document.getElementById('result');
resultDiv.innerHTML = `<li>${arr}</li>`;
resultDiv.innerHTML += `<li>${source}</li>`;
