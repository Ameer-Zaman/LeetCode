/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let iterate = 0;

    for(let i = 0;i < nums.length; i++){
        if(nums[i] !== val){
            nums[iterate] = nums[i];
            iterate++;
        }
    }

    return iterate;
};

console.log(removeElement([3,2,2,3], 3))
