//rotate all the value in array; [1, 2, 3] => [3, 1, 2]


function rotateRight(arr){

    //if arrary length = 0, return
    if(arr.length === 0) return arr;

    //define the last element to be arrary length -1,( which is 1 before the last)
    const last = arr[arr.length -1];

    //Starting from the second-to-last index, we move backward (i--), 
    // and shift each element one position to the right by assigning arr[i + 1] = arr[i]    
    for(let i = arr.length-2; i >= 0; i--){
        arr[i+1] = arr[i];
    }
    //assign the index 0 value equal to last, which is the last value from the origin;
    arr[0] = last;
    return arr;
}

console.log(rotateRight([5, 1, 6, 8]))