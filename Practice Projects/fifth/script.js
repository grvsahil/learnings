const link = "https://picsum.photos/200/300";

async function getImg(){
    const response = await fetch(link);
    console.log(response);
    document.getElementById("myImg").setAttribute("src",response.url);
}
getImg();



