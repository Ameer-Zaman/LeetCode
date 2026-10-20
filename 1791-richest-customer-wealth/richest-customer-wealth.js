const maximumWealth = function(accounts) {

    let array = [];
    let currentNum = 0;

    for(let i = 0; i < accounts.length; i++){
        for(let j = 0; j < accounts[i].length; j++){
            currentNum += accounts[i][j];
        }
        array.push(currentNum);
        currentNum = 0;
    }

    const max = Math.max(...array);

    return max;

};

console.log(maximumWealth( [[2,8,7],[7,1,3],[1,9,5]] ));