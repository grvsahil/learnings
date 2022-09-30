const link = "https://meme-api.herokuapp.com/gimme";
getImg();
const arr = [];

function getImg(){
    fetch(link).then(function(value){
        return value.json();
    }).then(function(res){
        let final = res.url;
        document.getElementById("myImg").setAttribute("src",final);
        arr.push(final);
    });
}

function getPrevImg(){
    document.getElementById("myImg").setAttribute("src",arr.pop());
}


