const url = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";

async function getApi(url){
    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
    show(data);
}
getApi(url);

function show(data){
    let tab = 
        `<tr>
            <th>Id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>Age</th>
            <th>E-mail</th> 
        </tr>`;

        for(let r of data){
            tab+=`<tr>
                <td>${r.id}</td>
                <td>${r.firstName}</td>
                <td>${r.lastName}</td>
                <td>${r.age}</td>
                <td>${r.address}</td>
                <td>${r.email}</td>
            </tr>`;
        }
        document.getElementById("table").innerHTML=tab;
}
