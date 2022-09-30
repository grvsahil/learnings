let string = "I am a js developer";
let strArray = string.split(" ");
let finalArray = [];

for(let i=strArray.length-1 ; i>=0 ; i--){
    finalArray.push(strArray[i]);
}
let finalString = finalArray.toString();
finalString = finalString.replace(/,/g , " ");
console.log(finalString);