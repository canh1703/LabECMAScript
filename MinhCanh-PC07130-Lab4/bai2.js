const axios = require('axios');
//1
async function fetchUrls(urls){
    const results = [];
    for (const url of urls){
        const res = await axios.get(url);
        results.push(res);
    }
    return results;
}

//Giải thích đoạn code 1 vòng lặp for...of được sử dụng để lặp qua mảng urls một cách tuần tự.

//2
async function fetchUrlsParalles(urls){
    const results = await Promise.all(
        urls.map(function(url){
            return axios.get(url);
        })
    );
    return results;
}

//Giải thích đoạn code 2 Promise.all được sử dụng để tạo một promise mới, nơi tất cả các promises từ các yêu cầu HTTP được tạo bởi axios.get(url) được kết hợp thành một mảng duy nhất.
//Qui chung lại điểm khác biệt chính giữa 2 đoạn code là cách chúng xử lý đồng thời các yêu cầu HTTP.