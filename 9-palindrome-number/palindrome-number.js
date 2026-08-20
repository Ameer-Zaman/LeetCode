var isPalindrome = function(x){
    const stringConvert = String(x);
    const length = stringConvert.length;
    const numberConvert = Number(stringConvert);
    let count = 0;
    let iterate = length;

    if(numberConvert >= 0 && numberConvert <= 9){
        return true;
    }

    for(let i = 0;i < length; i++){
        if(stringConvert[i] === stringConvert[iterate - 1]){
           count++;
        } 
        iterate--;
    }

    return count === length ? true : false;
    
}

console.log(isPalindrome(1000021))