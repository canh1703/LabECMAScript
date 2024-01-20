let promise = new Promise(function (resolve, reject) {
    reject(1);

    setTimeout(() => resolve(2),1000);
});

promise.then(alert);
// Kết quả là bằng 1 và lỗi