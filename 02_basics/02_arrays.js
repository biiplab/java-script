const marvel_heros = ["ironman", "spiderman", "thor"]
const dc_heros = ["superman", "batman", "joker"]


// marvel_heros.push(dc_heros)   // with push array 
// console.log(marvel_heros);


const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);


const all_new_heros = [...marvel_heros, ...dc_heros]   // spread =>
// console.log(all_new_heros);


const flatArray = [1, 2, 3, 4, 5, [3, 2, 1], 6, 7, [1, 2, [3, 4, 5]]]
const real_flatArray = flatArray.flat(Infinity)
// console.log(real_flatArray);



console.log(Array.isArray("biplab"));
console.log(Array.from("biplab"));    // convert into array
console.log(Array.from({name: "biplab"}));    // cant convert into array 



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
