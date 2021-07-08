function isEven(number){
    switch(number){
        case 0:
            return true;
        case 1 | -1:
            return false;
        default:
            return isEven(Math.abs(number) - 2);
    }
}
console.log(isEven(50));