function convolution(arr = []){
    return arr.reduce((acc, item) => {
        return acc.concat(item)
    }, [])
}
var arrays = [[1,2,3], [4,5],[6]];
console.log(convolution(arrays));