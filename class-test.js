let numbers = [1, 2, 3, 4, 5, 100, 200]

function isOdd(num){
 return num%2 == 1
}

let oddArray = []

oddArray = numbers.filter(isOdd)

console.log(oddArray)

oddArray2 = numbers.filter( num => num%2 == 1)

console.log(oddArray2)

oddArray3 = numbers.map( num => num*100)

console.log(oddArray3)

oddArray4 = numbers.filter( num => num*100)

console.log(oddArray4)

oddArray5 = numbers.filter( num => num*100)

console.log(oddArray5)

oddArray6 = numbers.sort( (a,b) => {
if (a>b){return 2}
else if (a<b) {return -2}
else {return 0}
})
console.log(oddArray6)

let mathTest = [[100,8], [100,3], [80,4]]

mathTestSort = mathTest.sort ((a,b)=>{
if (a[0]<b[0]){return 2}
else if (a[0]>b[0]) {return -2}
else {
  if (a[1]>b[1]){return -2}
else if (a[1]<b[1]) {return 2}
else {return 0}
}
})

console.log(mathTestSort)


reduceNumber = numbers.reduce((total, num)=> {
  console.log("total is",total)
  console.log("num is", num)
  return total+=num},)


console.log(reduceNumber)


Alpha = ['b','a','c', 'e', 'd', 'f']

AlphaSort = Alpha.sort((a,b)=> {
  if (a>b){return 1}
 else if (a,b){return -1}
 else {return 0}
}
)

console.log("AlphaSort is",AlphaSort)

let beta = ['apple', 'orange', 'apple', 'apple']

betaSome = beta.some(item => item === 'orange')
console.log("betaSome is: ", betaSome)
// <!---some is just boolean true/false-->

betaEvery = beta.every(item => item === 'orange')
console.log("betaEvery is: ", betaEvery)
// <!---every is just boolean true/false-->

betaFind = beta.find(item => item === 'orange')
console.log("betaFind is: ", betaFind)

betaFindIndex = beta.findIndex(item => item === 'orange')
console.log("betaFindIndex is: ", betaFindIndex)

let inventors = [ 'mr. A', "mr. B", 'mr. C', 'mr. D']

let result = inventors.some (name => name.includes('E'))
console.log("result is", result)


