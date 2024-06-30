console.log("hello from js file")
// this is a coment
// the js's variables are declared by the keywords 'let' and 'const'

//adding two numbers
console.log(23+47)
console.log((4+6+9)/77)

let a = 10;

console.log(a)

let b = 9*a

console.log(b)

let c = "hello"
//condicionals

if(a==10){
    console.log("yes it is")
}

// funtions 
function favoriteAnimal(animal){
    return animal + " is my fav animal"
}

console.log(favoriteAnimal("Goat"))

function factorial(n){
    if(n == 1) return 1
    return n*factorial(n-1)
}

console.log(factorial(5))