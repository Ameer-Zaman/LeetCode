const singleNumber = function(prices){
    
    const result = prices.reduce((accu , curre) => {
        accu[curre] = (accu[curre] || 0) + 1;
        return accu;
    }, {});

    const keys = Object.keys(result);

    const min = keys.reduce((min, curre) => 
        result[curre] < result[min] ? curre : min
    )

    return Number(min);

}

console.log(singleNumber([4,1,2,1,2]))