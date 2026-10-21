const moveZeroes = function(nums) {

    let position = 0;

    for(let i = 0;i < nums.length; i++){
        if(nums[i] !== 0){
            let temp = nums[i]
            nums[i] = nums[position]
            nums[position] = temp;
            position++;
        }
    }

    return nums;
}

console.log(moveZeroes([0,1,0,3,12]));