function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}
// console.log(spreadOut());
const result = spreadOut();
const resultDiv = document.getElementById('result');
resultDiv.innerHTML = `<ul>${result.map(item => `<li>${item}</li>`).join('')}</ul>`;