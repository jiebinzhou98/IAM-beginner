//Find the max value in the array

function findMax(arr){

    //set the initial max # be 0;
    let max = arr[0];
    //for loop to check all the value in the arr array;
    for(let i = 0; i < arr.length; i++){

        //if the i^th number is greater than max value, set max = that value;
        if(arr[i] > max){
            max = arr[i];
        }
    }
    //return max;
    return max;
}

console.log(findMax([1, 2, 5, 7, 9]))