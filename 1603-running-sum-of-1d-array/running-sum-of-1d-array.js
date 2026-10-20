const runningSum = function(nums) {

    let result = [0];

    for(let i = 0;i < nums.length; i++){
        result.push(nums[i] + result[i]);
    }

    result.splice(0,1)

    return result;
}

console.log(runningSum([1,2,3,4]));