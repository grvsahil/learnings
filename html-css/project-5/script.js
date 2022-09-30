const url = "https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd";

async function getApi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    return show(data);
}

function show(data) {
    let table = `<thead><tr><th>Id</th><th>Name</th><th>Price</th><th>Description</th></tr></thead>`;

    for(let i of data){
        let desc = `${i.description}`;
        let fdesc = desc.substr(0,500);
        table+=`<thead><tr><td>${i.id}</td><td>${i.name}</td><td>${i.price}</td><td>${fdesc}</td></tr></thead>`
    }

    document.getElementById("tab").innerHTML=table;
}

getApi(url);


