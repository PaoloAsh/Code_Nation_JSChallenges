
// Activity 3 / masterifelse

if (4 != "4" ) {
    console.log(true)
    }
else {
    console.log(false)
}

// ^^^^ running the program file name through the Terminal.

// Activity 3 / masterifelse

let food = "ice cream"
let hunger = "full"
let country = "UK"
let age = "17"

if (hunger == "full" && food == "ice cream") {
    console.log("Of course, who wouldn't")
}
else if (hunger == "hungry" && food == "ice cream") {
    console.log("Yes please I'm starving, could I also have pizza")
}

else if (hunger == "hungry" && food == "sprouts") {
    console.log("Actually, I can't wait")
}

else {
    console.log("No thanks, I'm stuffed")
}

if (country == "UK" && age > 17) {
    console.log("Age is greater than 17 and Country is the UK")
}

else {
    console.log("Age is not greater than 17 and Country is not the UK")
}

/// ^^^^

let food1 = "sprouts"

if (food1 == "ice cream" || food1 == "pizza") {
    console.log("Yey let's eat!!!")
}
else if (food1 == "sprouts" || food1 == "broccoli") {
    console.log("Urgh, no thanks")
}
else (
    console.log("Okay, go on then why not.")
)

// Activity 4 / Create a weekend 'alarm' 

// Activities_(Challenges)
// Activity 4 / Week 1 / Day 4 / MasterIfElse
// Create a weekend alarm. IF it's Saturday OR Sunday log ("string)"
// ELSE log "diff string"

let alarm = "Monday"

if (alarm == "Saturday" || alarm == "Sunday") {
    console.log("Yay, it's the weekend!!")
}

else 
    {
        console.log("Oh no, work again!")
    }


// Switch Statements

console.log("YOU ARE HERE")
console.log("")

let food2 = "asparagus" //aphrodisiac

switch(food2) {
    case "ice cream":
    case "pizza":
        console.log("Yay, let's eat")
        break
    case "sprouts":
    case "broccoli":
        console.log("Ugh, no thanks!")
        break  
    default:
        console.log("Okay, go on then, why not.")
        
}

console.log("")

// To do
// Activity 4a / Create a variable for any pizza topping. Create a switch statement.
// topping is one of favourite ingredients.
// log to the console "TEXT"

//console.log("YOU ARE HERE_2")
//console.log("")

//let topping = "Pepperoni"

//switch(topping) {
 //   if (topping == "Saturday" || alarm == "Sunday") 

 //   case "Pepperoni":
       // console.log("These are important ingrediants for my pizza!")
  //  case "Chilli Peppers":
      //  console.log("I don't mind having ${topping} on my pizza")
  //  case "Anchovies":
      //  console.log("${topping} should not be on my pizza")
//} 

// Activity 4 Switch Statements / Week 1 / Day 4 / Pizza Toppings
let topping = "Anchovies"

switch(topping) {
    case "Mushrooms":
    case "Tomato":
        console.log(`I don't mind having ${topping} on my pizza`)
    break
    case "Spinach":
    case "Anchovies":
        console.log(`${topping} should not be on my pizza`)
        break
    default:
        console.log("These are important ingrediants for my pizza!")
}

console.log("")

// Activity 5 / Create a variable called password
// if there are less than 8 (characters) / log to console pswd is too short
// otherwise log to console password
// 15_12_2022 Thur

