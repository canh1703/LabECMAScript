let API_URL = "https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students";

function generateTableHeader(headerTitles){
    let html = ``;
    headerTitles.forEach(element => {
        html += `<th>${element}</th>`;
    });

    return `<thead><tr>${html}</tr></thead>`;
}

function generateTableRowStudents(data){

    return `<tr>
            <td>${data.id}</td>
            <td><img height="50" src="${data.avatar}"/></td>
            <td>${data.name}</td>
            <td>${data.createAt}</td>
            </tr>`;
}

function generateTable(headers,data){
    let html = ``;

    let headerRow = generateTableHeader(headers);

    data.forEach(element =>{
        html+= generateTableRowStudents(element);
    })

    return `<table>${headerRow}<body>${html}</body></table>`
}



fetch(API_URL)
.then(function(response){
    response.json().then(function(data){
        // console.log(data);
        let headers =[
            "id",
            "avatar",
            "name",
            "date"
        ];
        let app = document.getElementById('app');
        app.innerHTML = generateTable(headers,data)
    })
})
.catch(function(response){
    console.log("Error: \n" + response);
})

