//find the average value in the array

function averageValue(arr){
    //define initial total sum = 0
    let sum = 0;
    //define the initial total number = 0
    let totalCount = 0;
    //set the initial average number;
    let avg = 0;
    //check all the numbers in the array and add them together;
    //and the total number will ⬆️  when the index of the the array[i] is not null;
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] != null){
            sum += arr[i];
            totalCount ++;
        }
    }
    // avg = (sum / totalCount).toFixed(2);
    avg = sum/totalCount;

    //parse the average to float type and display in 2 decimal number;
    return parseFloat(avg.toFixed(2))
    // return avg;

}

console.log(averageValue([1, 2, 3, 5, 6, 8]))