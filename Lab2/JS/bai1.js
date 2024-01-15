const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    const failureItems = arr.map(item => `<li class="text">${item}</li>`);
    return failureItems;
}

const failureList = makeList(result.failure);
// console.log(failureList);
const failureItemsDiv = document.getElementById('failureItems');
failureItemsDiv.innerHTML = `<ul>${failureList}</ul>`;
