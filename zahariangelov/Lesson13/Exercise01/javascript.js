var array = [1, 2, 3, 4];
sum = 0;

function sumum(num) {
    for (var i = 0; i < array.length; i++) {   
    sum = sum + num;
    }
    return sum;
}

console.log(array.forEach(sumum));