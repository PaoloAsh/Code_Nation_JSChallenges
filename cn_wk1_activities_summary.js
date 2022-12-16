// Activities_(Challenges)
// Activity 4 / Week 1 / Day 4 / MasterIfElse
// Create a weekend alarm. IF it's Saturday OR Sunday log ("string)"
// ELSE log "diff string"

let day = "Wednesday"    // value day I believe is a string

if (day == "Saturday" || day == "Sunday") {
    console.log("Yay it's the weekend")
}
else {
    console.log("Oh no, work again!")
}

// completed 15_12_2022 PAA

// Activity 4 Switch Statements / Week 1 / Day 4 / Pizza Toppings
let topping = "Pepperoni"

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