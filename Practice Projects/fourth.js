let arr = [0,0,0,0,1,1,1,1,1,1,1];

function CountOnes(arr, low, high){
    if(arr[low]==1){
        return arr.length;
    }else if(arr[high]==0){
        return 0;
    }else{
        let firstOne = 0;
        let lastOne = arr.length-1;
        while(low<=high){
            let mid = parseInt((low+high)/2); 
            if(arr[mid]==1 && arr[mid-1]==0){
                firstOne=mid;
                break;
            }else if(arr[mid]==1){
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
        let totalOnes = lastOne - firstOne+1;
        return totalOnes;
    }
    
}

let result = CountOnes(arr, 0, arr.length-1);

console.log(result);


