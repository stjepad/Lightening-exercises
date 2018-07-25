// Lightning Exercise Loop over every item in this array
//  ```[45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]```
// and return a new array that contains only the strings. Log out the result.
stringArray = []
array = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]




array.forEach(element => {if(typeof(element)=== "string"){
    stringArray.push(element)
}})
console.log(stringArray)


