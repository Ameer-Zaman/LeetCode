const isAnagram = function (s, t){
    // Split the variables
    const sSplit = s.split("");
    const tSplit = t.split("");
    const sFrequency = {};
    const tFrequency = {};

    if(s.length !== t.length){
        return false;
    }

    // Count the Each Characters of sSplit
    for(const letter of sSplit){
        sFrequency[letter] = (sFrequency[letter] || 0) + 1;
    }

    for(const letter of tSplit){
        tFrequency[letter] = (tFrequency[letter] || 0) + 1;
    }

    for(const letter of Object.keys(sFrequency)){
        if(sFrequency[letter] !== tFrequency[letter]){
            return false;
        }
    }

    return true;

}

console.log(isAnagram("rat", "cat"));