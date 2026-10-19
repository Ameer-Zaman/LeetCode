var merge = function(nums1, m, nums2, n) {
        const first = nums1.splice(0,m);
        const second = nums2.splice(0,n);
        const result = [...first, ...second];

        result.sort((a,b) => a-b);

        nums1.splice(0, nums1.length , ...result);

    return nums1;

};

console.log(merge([1,2,3,0,0,0], 3 , [2,5,6], 3));