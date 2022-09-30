function factorial(num){
    if(num==0){
        return 1;
    }else if(num<0){
        return "Please enter a valid input";
    }else{
        if(num==1){
            return 1;
        }
        return num*factorial(num-1);
    }
    
}

let a = factorial(5);

console.log(a);