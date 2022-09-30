function createNewCard(news){
    let div = document.createElement('divElement');
    let img = document.createElement('img');
    let time = document.createElement('time');
    let content = document.createElement('content');
    let readMoreUrl = document.createElement('readMoreUrl');
    let author = document.createElement('author');

    div.setAttribute('class','container mt-3');
    img.setAttribute('width','300');
    img.setAttribute('height','300');
    img.setAttribute('class','mx-4');

    img.setAttribute('src',news.imageUrl);
    time.innerHTML = `<p class="mx-5 my-3">${news.time}</p>`;
    content.innerHTML = `<p class="mx-5">${news.content}<br><br>Read more here:-</p>`;
    readMoreUrl.innerHTML = `<a href="${news.readMoreUrl}" class="mx-5">${news.readMoreUrl}</a>`;
    author.innerHTML = `<p class="mx-5 my-3">Author: ${news.author}</p>`;

    div.appendChild(img);
    div.appendChild(time);
    div.appendChild(content);
    div.appendChild(readMoreUrl);
    div.appendChild(author);

    return div; 
}

function allNews(){
    document.getElementById('news-block').innerHTML = '';
    const link = "https://inshortsapi.vercel.app/news?category=all";
    fetch(link).then(function(response){
        return response.json();
    }).then(function(result){
        for(let i=0 ; i<result.data.length ; i++){

            let new_div = createNewCard(result.data[i]);

            let div = document.getElementById('news-block');
            div.appendChild(new_div);
        }
    });
}

function national(){
    document.getElementById('news-block').innerHTML = '';
    const link = "https://inshortsapi.vercel.app/news?category=national";
    fetch(link).then(function(response){
        return response.json();
    }).then(function(result){
        console.log(result.data[0]);
        for(let i=0 ; i<result.data.length ; i++){

            let new_div = createNewCard(result.data[i]);

            let div = document.getElementById('news-block');
            div.appendChild(new_div);
        }
    });
}

function world(){
    document.getElementById('news-block').innerHTML = '';
    const link = "https://inshortsapi.vercel.app/news?category=world";
    fetch(link).then(function(response){
        return response.json();
    }).then(function(result){
        console.log(result.data[0]);
        for(let i=0 ; i<result.data.length ; i++){

            let new_div = createNewCard(result.data[i]);

            let div = document.getElementById('news-block');
            div.appendChild(new_div);
        }
    });
}

function bussiness(){
    document.getElementById('news-block').innerHTML = '';
    const link = "https://inshortsapi.vercel.app/news?category=business";
    fetch(link).then(function(response){
        return response.json();
    }).then(function(result){
        console.log(result.data[0]);
        for(let i=0 ; i<result.data.length ; i++){

            let new_div = createNewCard(result.data[i]);

            let div = document.getElementById('news-block');
            div.appendChild(new_div);
        }
    });
}

function sports(){
    document.getElementById('news-block').innerHTML = '';
    const link = "https://inshortsapi.vercel.app/news?category=sports";
    fetch(link).then(function(response){
        return response.json();
    }).then(function(result){
        console.log(result.data[0]);
        for(let i=0 ; i<result.data.length ; i++){

            let new_div = createNewCard(result.data[i]);

            let div = document.getElementById('news-block');
            div.appendChild(new_div);
        }
    });
}

function technology(){
    document.getElementById('news-block').innerHTML = '';
    const link = "https://inshortsapi.vercel.app/news?category=technology";
    fetch(link).then(function(response){
        return response.json();
    }).then(function(result){
        console.log(result.data[0]);
        for(let i=0 ; i<result.data.length ; i++){

            let new_div = createNewCard(result.data[i]);

            let div = document.getElementById('news-block');
            div.appendChild(new_div);
        }
    });
}




