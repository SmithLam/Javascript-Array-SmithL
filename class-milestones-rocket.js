const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];


    // Print out an array of the inventors whose name starts with 'A'.
    // Print out an array of the inventors whose name contains 'n'.

    // Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).

    // Print out an array of the numbers which are odd.

    // Print out an array of the numbers that have two digits.

    // Print out an array of the numbers which are prime.



let aFound = inventors.filter(name =>name.includes('A', 0))
console.log('1. The inventors that start with "A" in their names are', aFound)


let nFound = inventors.filter(name => name.includes('n'))
console.log('2. The inventors with "n" in their names are', nFound)



let sameFound = inventors.filter(name => {
  let eachLetter = name.split("")
  for (let i=0; i<eachLetter.length; i++) {
    if (eachLetter[i] == eachLetter[i-1]){
     return true
    }
  }
  return false
})

console.log('3. The inventors with repeating alphabets are', sameFound)

// let sameFound2 = inventors.filter(name =>{
//  let isRepeat = false
//  let splitName = name.split('')
//  splitName.map((letter,i)=>{
//    if (splitName[i] === splitName[i+1]){
//      isRepeat = true
//    }
//    return isRepeat})
//  })

// console.log('3a. The inventors with repeating alphabets are', sameFound2)


let oddFound = numbers.filter(num => num%2==1)
console.log('4. The odd numbers are', oddFound)

let twoDigitFound = numbers.filter(num => num>9)
console.log('5. The two digit numbers are', twoDigitFound)

let primeFound = numbers.filter(num => checkPrime(num));

function checkPrime(num){
  for (let a=2; a<num; a++){
    if (num%a === 0 ){
      return false
    }
  }
  return num >1;
}

console.log('6. The prime numbers are', primeFound)



    // Print out the first name of each inventor.
    // Print out the length of every inventor's full name.
    // Print out all the inventors' names in uppercase.
    // Print out initials of all inventors(e.g. A.E., I.N., ...)
    // Print out an array of every number multiplied by 100.

let firstNameFound = inventors.map(name =>{
 let firstName = name.split(' ')[0]
 return firstName
})

console.log("7. The first names of inventors are", firstNameFound)

let fullNameFound = inventors.map(name =>{
 let nameLength = (name.length)-1
 return nameLength
})
console.log("8. The length of inventors names are", fullNameFound)

let fullNameUpper = inventors.map(name =>{
let nameUppercase = name.toUpperCase()
return nameUppercase
})
console.log("9. The full names in uppercase are", fullNameUpper)

let fullNameInitial = inventors.map(name =>{
let FirstName = name.split(' ')[0]
let MiddleName = name.split(' ')[1]
// let LastName = name.split(' ')[2]
console.log(MiddleName)
let firstInitial = FirstName[0]+MiddleName[0];
 return firstInitial
});


console.log("10. Wrong The initial of the inventors names are", fullNameInitial)

// let newArray2 = inventors.map(name =>{
//   let nameSplit = name.split('')
//   return nameSplit.reduce((total, item)=>{
//   if ('A' <= item && item <= 'Z')
//   return total+=item
// }
// return total
// }, '')

// console.log("10a. The initial of the inventors names are", newArray2)

let fullNameInitial2 = inventors.map(x => {
    let eachName = x.split(" ");
    return eachName.reduce((total,item)=>{
      return total += item.charAt(0);
    },'')

})

console.log("10a. The initial of the inventors names are", fullNameInitial2)

let multiplyBy100 = numbers.map(num => num*100)
console.log("11. The numbers multiplied by 100 are", multiplyBy100)


    // Sort all the inventors in alphabetical order, A-Z.
    // Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
    // Sort all the inventors by length of name, shortest name first.
    // Sort all the inventors by length of name, longest name first. Do not use the reverse method.

let inventorSortAtoZ = inventors.sort((a,b)=> {
  if (a>b){return 1}
 else if (a<b){return -1}
 else {return 0}
}
)

console.log("12. The order of inventors from A to Z are", inventorSortAtoZ)

let inventorSortZtoA = inventors.sort((a,b)=> {
  if (a>b){return -1}
 else if (a,b){return 1}
 else {return 0}
}
)

console.log("13. The order of inventors from Z to A are", inventorSortZtoA)

let inventorSortShortest = inventors.sort((a,b)=> {
return a.length - b.length
}
)

console.log("14. The order of names from shortest is", inventorSortShortest)

let inventorSortLongest = inventors.sort((a,b)=> {
 let lengthA = a.split("").length
  let lengthB = b.split("").length
  if (lengthA>lengthB){return -1}
 else if (lengthA>lengthB){return 1}
 else {return 0}
}
)
console.log("15. The order of names from longest is", inventorSortLongest)


    // Find the sum of all the numbers.
    // Find the sum of all the even numbers.
    // Create a string that has the first name of every inventor.


let totalNumber = numbers.reduce((total, num)=> {
  return total+=num},)
console.log("16. The total sum of number is", totalNumber)

let numberEven = numbers.filter(num => num%2 == 0)
let totalEvenNumber = numberEven.reduce((total, num)=> {
  return total+=num},)
console.log("17. The total sum of even numbers are", totalEvenNumber)

let firstNameString = firstNameFound.reduce((total, num)=> {
  return total+=num +" "},"")
console.log("17. A string containing their first name is", firstNameString)


    // Does any inventor have the letter 'y' in their name?
    // Does every inventor have the letter 'e' in their name?
    // Does every inventor have first name that's longer than 4 characters?


let inventorsSome = inventors.some(name =>{
  let eachAlphabet=name.split("")
  eachAlphabet === 'y'})
console.log("18. Is it true that any inventor has y in their name?", inventorsSome)

let inventorsEvery = inventors.every(name =>{
  let eachAlphabet=name.split("")
  eachAlphabet === 'e'})
console.log("19. Is it true that every inventor has e in their name?", inventorsEvery)

let inventorsFirstEvery = inventors.every(name =>{
  let firstName=name.split(" ")[0]
  firstName.length > 4 })
console.log("20. Is it true that every inventor has first name longer than 4 characters ?", inventorsFirstEvery)


    // Find the inventor that has a middle name.

    // Bonus: Return a new array, that only has inventors without a middle name. (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above.)

    // Find the number divisible by 7.

    // Bonus: Return a new array, that only has the numbers that are not divisible by 7.

let findInventorsMiddle = inventors.find(name =>{
  let eachName=name.split(" ")
  return eachName.length == 3
})
console.log("21. The inventor with a middle name is ", findInventorsMiddle)

let findInventorsNoMiddle = inventors.filter(name =>{
  let eachName=name.split(" ")
  return eachName.length < 3
})
console.log("22. The inventors without a middle name are ", findInventorsNoMiddle)

let findNumberDivisible7 = numbers.find(num =>{
  return num%7 === 0
})
console.log("23. The number divisible by 7 is ", findNumberDivisible7)

let findNumberNotDivisible7 = numbers.filter(num =>{
  if (num%7 === 0){
    return false
  }
  else {return true}
})
console.log("24. The number not divisible by 7 are ", findNumberNotDivisible7)

//Finish the milestones.

//Rocket


let fib=[]
let a = 1
let b = 1
let c = 0
let i


function fibo(num){
  for (i=0; i<num; i++){
    c = a+b
    a = b
    b = c 
    fib.push(b)
  }
}

fibo(12)

console.log("25. Your 14th number should be ", fib[fib.length-1])