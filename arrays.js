let favHolidayDestinations = [
    "Sennen Cove, Cornwall",
    "Berlin, Deutschland",
    "Riverton, New Zealand"
]

let favFilms = [

    "Inception",
    "Rogue One: A Star Wars Story",
    "Star Trek (2009)"
]


console.log(favHolidayDestinations)
console.log(favFilms)

//console.log(favFilms[1])

console.log(favHolidayDestinations.length)

//console.log(favHolidayDestinations.pop())   // removes last element 
                                            // in array and returns 
                                            // that element, the length
                                            // of the array is changed.

//console.log(favHolidayDestinations.shift()) // removes first element
                                            // in array and returns
                                            // that removed element,
                                            // the length of the array
                                            // is changed.

// push() - The push() method adds one or more elements
// to the end of an array and returns the new length of the array.


                                            // map() do not understand map - The map() method creates a new array populated
// with the results of calling a provided function on every element 
// in the calling array.

// slice() - do not fully understand slice() - The slice method returns a shallow copy of a portion
// of an array into a new array object selected from start to end
// where start and end represent the index of items in the array.
// The original array is not modified.

// splice() - the splice method changes the contents of an array by 
// removing existing elements and/or adding new elements in place. 

// unshift() - the unshift method adds one or more elements to the beginning
// of an array and returns the new length of the array.

favFilms.unshift("Blade Runner 2049")

console.log(favHolidayDestinations)
console.log(favFilms)


// Activity 5 Arrays
let favSongs = [
    "Mrs Robinson",
    "Surfin' USA",
    "Kids in America"
]

console.log(favSongs)

favSongs.push("Terminator Theme", "Enigma Variations: Nimrod")
console.log(favSongs)

favSongs.pop(4)
console.log(favSongs)