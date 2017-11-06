//function circle(r){
//
//var result;
//var pi = 3.14;
//var r;
//
//result = 2*pi*r;
//
//document.write(result);
//}
//
//circle(10);
//
//circle(80);
//circle(27);


//_____________________________________TASK2______________________________//


//function area(a,b,c){
//    var result;
//    var square = a*b;
//    var triangle = a*(c-b)/2;
//    result = square + triangle;
//    document.write(result);
//}
//
//(area(10,6,10));
//(area(2,1,3));


//_____________________________________TASK3______________________________//

//function calc(x){
//    if(x%2 == 0){
//        return x*x;
//    } else {
//        return x*x*x;
//    }
//}
//
//document.write(calc(4));


//_____________________________________TASK4-reverse-sentence______________________________//



//
//function reverseWords(text) {
//    var result;
//    var words = text.split(" ");
//    result = words.map(function(x){
//        return x.split("").reverse().join("");
//    });
//    return result.join(" ");
//}
//
//
//
//var sentence = "The quick brown fox jumps over the lazy dog";
//reverseWords(sentence); // => 'ehT kciuq nworb xof spmuj revo eht yzal god' 

//_____________________________________TASK5-CONVERT-HEX______________________________//

//function convert(red, green, blue) {
//    var red = 255;
//    var green = 192;
//    var blue = 253;
//    var hexRed = red.toString(16);
//    var hexGreen = green.toString(16);
//    var hexBlue = blue.toString(16);
//
//
//    result = "#" + hexRed + hexGreen + hexBlue;
//
//return result;
//}
//
//document.write(convert(255, 192, 253)); // => #ffc0fd


//_____________________________________TASK5-shoppingCart______________________________//


var shoppingCart = [
    {
        name: "apple",
        type: "fruit",
        quantity: 5
    },
    {
        name: "banana",
        type: "fruit",
        quantity: 2
    },
    {
        name: "potato",
        type: "vegetable",
        quantity: 10
    },
    {
        name: "cheese",
        type: "diry",
        quantity: 1
    },
    {
        name: "yogurt",
        type: "diry",
        quantity: 3
    },
    {
        name: "steak",
        type: "meat",
        quantity: 1
    },
    {
        name: "ice cream",
        type: "sweet",
        quantity: 1
    },
    {
        name: "bounty",
        type: "sweet",
        quantity: 3
    }
];


// This function accepts a shopping cart list and returns the overall quantity of all the items in it
function quantity(shoppingCart) {


    var total = 0;
    for(i =0 ; i < shoppingCart.length; i++)
    {
        total += shoppingCart[i].quantity
    }

    return total;

}




// This function accepts a shopping cart list and returns the quantity of the fruit and vegetable items in it
function veganQuantity(shoppingCart) {

    var total = 0;
    for(i =0 ; i < shoppingCart.length; i++)
    {
        if (shoppingCart[i].type === 'vegetable' || shoppingCart[i].type === 'fruit' )
            total += shoppingCart[i].quantity
    }

    return total;

}

document.write(' overall ', quantity(shoppingCart)); // should return 26

document.write(' vegan ', veganQuantity(shoppingCart)); // should return 17








