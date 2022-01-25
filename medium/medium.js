function cutPizzaSlices(x) {
    return function(pieces){
     return x / pieces;
    }
};

let cutPizzaSlices = (pieces) => {
    return (x) => Each person gets ${pieces / x} slices of pizza;
};
let pizza = cutPizzaSlices(8);

console.log(pizza(2));
console.log(pizza(3));