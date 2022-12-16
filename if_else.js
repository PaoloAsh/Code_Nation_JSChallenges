// Code Nation / Week 1 / Day 4

let hunger = "full"

if (hunger == "hungry") {
    console.log("Yes please I'm starving!")
}
else if (hunger == "full") {
    console.log("No thanks, I'm stuffed!")
}
else {
    console.log("Oh go on then, why not!")
}

let music = "classical"

if (music == "classical") {
    console.log("Yes please I'm starving!")
}
else if (music == "disco") {
    console.log("No thanks, I'm stuffed!")
}
else {
    music.log("Oh go on then, why not!")
}

if (4 === "4") {            // if value is strictly (value and type) to string (type) 4 (value)
    console.log(true)       // output true
}
else{                       // otherwise output false
    console.log(false)
}
                            // as the value integer 4 is not strictly equal to the value string four
                            // output is false
                        
if (4 != "4") {             // is 4 not equal to 4 regardless of type?
    console.log(true)       
}                           // 4 is equal to 4 so the computer outputs/returns(?)
else{                       
    console.log(false)      // that the conditional statement asking whether 4 is Not Equal to
                            // 4 is false.
                         
}

let food = "sprouts"
let hunger2 = "full"

if (hunger2 == "full" && food == "ice cream") {
    console.log("Of course, who wouldn't")
}
else if (hunger2 == "hungry" && food == "ice cream") {
    console.log("Yes please I'm starving, could I also have pizza")
}
else if (hunger2 == "hungry" && food == "sprouts") {
    console.log("Actually, I can wait")
}
else {
    console.log("No thanks, I'm stuffed")
}

let food3 = "anchovies"

if (food3 == "ice cream" || food3 == "pizza") {
    console.log("Yay let's eat!!!")
}
else if (food3 == "sprouts" || food3 == "broccoli") {
    console.log("Ugh, no thanks")
}
else{
    console.log("Okay, go on then why not.")
}

// finish for the day Wk 1 / Day 4

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

// SWITCH statements see masterifelse.js




