/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    const split = s.split(" ")
    const stack = [];

    for(let ele of split){
        stack.push(ele)
    }

    let finalS = "";

    while(stack.length){
        let current = stack.pop();

        if(current){
            finalS += current + " ";
        }
    }

    return finalS.trim();
}

console.log(reverseWords("the sky is blue")) 