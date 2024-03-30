const Fruits = ["Orange", "Mango", "Banana", "Apple"]
console.log(Fruits.length);
console.log(Fruits.toString());
console.log(Fruits.at(2));
console.log(Fruits.at(-2));
console.log(Fruits[2]);
console.log(Fruits.join("*"));
console.log(Fruits);
console.log(Fruits.pop());
console.log(Fruits);
console.log(Fruits.push("Appricots"));
console.log(Fruits);
console.log(Fruits.shift());
console.log(Fruits);
console.log(Fruits.unshift("Almond"));
console.log(Fruits);
Fruits[0] = "Grapes"
console.log(Fruits);
Fruits[Fruits.length] = "x"
console.log(Fruits);
delete Fruits[2]
console.log(Fruits);
const anArray = ["1", "2", "3"]
const Array2 = [1, 2, 3]
console.log(Fruits.concat(anArray, Array2));
console.log(Array2);
Array2.copyWithin(2, 0) 
console.log(Fruits);
console.log(Fruits.copyWithin(2, 0, 2));
const array3 = [[1, 2], [3, 4], [5, 6, [7, 8]]] 
console.log(array3[2][2][1]);
console.log(array3);
console.log(array3.flat(2));
console.log(Array2);
Array2.splice(0, 1, "y", "x")
