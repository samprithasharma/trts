var fruits = ['apple', 'orange', 'banana'];
for (var index in fruits) {
    console.log(fruits[index]);
}
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
fruits.sort();
console.log(fruits);
console.log(fruits.pop());
fruits.push('papya');
console.log(fruits);
fruits = fruits.concat(['fig', 'mango']);
console.log(fruits);
