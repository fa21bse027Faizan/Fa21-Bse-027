
let name = "Faizan"
console.log(name.length)
console.log(name.at(7));
console.log(name.charAt(7));
console.log(name[7]);
console.log(name.charAt(name.length - 4))
console.log(name.at(-4))

name[0] = "a"
console.log(name);

console.log(name.slice(-5));
console.log(name.substring(0, 5))
console.log(name.substr(-5))

console.log(name.toLowerCase())
console.log(name.toUpperCase());


console.log("M.".concat(" ", name))
console.log("M." + " " + name);

let s = "   v   "
console.log(s);
console.log(s.trim());
console.log(s.trimStart());
console.log(s.trimEnd());

let n = "8"
console.log(n.padStart(2, "0"));
console.log(n.padEnd(3, "0"));
let n2 = 8
console.log(n2.toString().padEnd(3, "Rs"));

console.log(n.repeat(5));

console.log(name.replace("Ali", "Hamza"));
