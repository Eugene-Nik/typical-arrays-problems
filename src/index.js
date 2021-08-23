function sort(a, b) {
    if (a < b) {
        return -1;
    } else if (b < a) {
        return 1;
    } else {
        return 0;
    }
}

exports.min = function min (array) {
    if ( array == null || array.length == 0 ){
        return 0;
    } else {
       return array.sort(sort).shift();
    }
}

exports.max = function max (array) {
    if ( array == null || array.length == 0 ){
        return 0;
    } else {
       return array.sort(sort).pop();
    }
}

exports.avg = function avg (array) {
    if (array == null || array.length == 0 ){
        return 0;
    } else {
        let summ = 0;
        for (let i = 0; i <= array.length - 1; i++){
        summ = summ + array[i];
        } return  summ / array.length;
    } 
}
