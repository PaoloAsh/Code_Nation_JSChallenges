let favHolidayDestinations = [
    "Sennen Cove, Cornwall",
    "Berlin, Deutschland",
    "Riverton, New Zealand"
]

// FOR LOOPS:

// for (initialExpression; condition; increment/decrementExpression) {
// do stuff
// }

for (let i = 0; i < favHolidayDestinations.length; i++) {
    console.log(favHolidayDestinations[i])
}

for (let i = 0; i <= 10; i++) {
    console.log(i += 1)  
}

let evenNumbers = []
let evenNumbersRev = []
let oddNumbers = []

// finding even numbers btw 0 and 20
for (let n = 0; n <= 20; n++) {
    if (n % 2 == 0) {
        (evenNumbers.push(n))
       
    }
}
console.log(`The even numbers between 0 and 20 are: ${evenNumbers}`)

// finding even numbers btw 0 and 20 in reverse order
for (let n = 20; n >= 0; n--) {
    if (n % 2 == 0) {
        (evenNumbersRev.push(n))
       
    }
}
console.log(`The even numbers between 0 and 20 in reverse order are: ${evenNumbersRev}`)

// finding odd numbers btw 0 and 30
for (let n = 0; n <= 30; n++) {
    if (n % 2 != 0) {
        (oddNumbers.push(n))
       
    }
}
console.log(`The odd numbers between 0 and 30 are: ${oddNumbers}`)
console.log('\n')

// WHILE LOOPS

let lives = 3

while (lives > 0 ) {
    console.log("Well done! You're still in the game.")
    lives--
}

console.log("Game over!!!")
console.log('\n')

let currentDiceRoll = "3"

while(currentDiceRoll != 1) {
    console.log(currentDiceRoll)
    currentDiceRoll = Math.floor(Math.random()*6)+1
}

console.log(currentDiceRoll)

// You're a Child You're an Adult.
let Age = 14

while(Age < 18) {
    console.log(`You are ${Age}, You are a child!`)
    Age = Age + 1
}

console.log(`You are ${Age}, You are an adult!`)

// Activity 4: Generate 6 random numbers and log to terminal
let iterations = 0
let randomNumber = 0

while(iterations < 6)
    {    randomNumber = Math.floor(Math.random()*100)+1
    iterations++
        console.log(randomNumber)
    }

// Activity 5: Display films in array utlising for loop and if statement

console.log("\n")

// Loops / Activity 5 

// with Ghostbusters as 3rd film in array
let favFilmsTwo = [
    "Inception",
    "Rogue One: A Star Wars Story",
    "Ghostbusters",
    "Star Trek (2009)"
    ]

for (let i = 0; i < favFilmsTwo.length; i++) {
    console.log(favFilmsTwo[i])
}
console.log("\n")

if (favFilmsTwo[2] == "Ghostbusters") {
    console.log(`Yay it's Ghostbusters`)
}

if (favFilmsTwo[2] != "Ghostbusters") {
console.log(`Boo! We want Ghostbusters!`)
console.log(`Check again, it is there`)
}

// with Ghostbusters Not as 3rd film in array
let favFilms = [
    "Inception",
    "Rogue One: A Star Wars Story",
    "Star Trek (2009)",
    "Ghostbusters"
]
console.log("\n")

for (let i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i])
}
console.log(`\n`)

if (favFilms[2] == "Ghostbusters") {
    console.log(`Yay it's Ghostbusters`)
}

if (favFilms[2] != "Ghostbusters") {
    console.log(`Boo! We want Ghostbusters! \n`)
    console.log(`..."Check again, it is there \n`)
}

// Activity 6 / Generate a random number btw 1 and 30 six times
// Check whether divisible by 7 or not, inform user of outcome

let numberRandom = [];
i = 0

for (i = 0; i < 6;) {
numberRandom = Math.floor(Math.random()*30)+1
i++
    console.log(`The random number is ${numberRandom}`)
    if (numberRandom % 7 == 0) {
        console.log(`${numberRandom} is divisible by 7\n`)
    }
    if (numberRandom % 7 != 0) {
        console.log(`${numberRandom} is not divisible by 7\n`)
    }
}

// Activity 7 / Create 2 arrays of followers with 4 names in each
// 2 of which are the same. Use a nested loop to iterate over both
// arrays and output the matching followers.

const bobsFollowers = [
    "Twilight Hermon",
    "Bruce Befrawl",
    "Jio Loas",
    "Rediamond Light"
]

const hannahsFollowers = [
    "Rediamond Light",
    "Indeego Marnei"
    "Twilight Hermon"
    "Faith Tumans"
]

    // need to check for equal to (==) on an array item, 
    // need to check position one against all positions in second array
    // and then position two against all positions in second array etc.
    // if == on an array, need to log that to the console
    // 
    // its nested so i can iterate over one array and have inside that loop 
    // a loop that iterates over the second array and checks the if statement for all. 
    // if being if (arrayOne[0] == arrayTwo[0]) {do something}

    for (let i = 0; i < bobsFollowers.length; i++) {

        if (bobFollowers[i] == hannahsFollowers[0]) {
            console.log(`We have a match, it is ${hannahsFollower[0]}`)
        }

        else if ()


    }