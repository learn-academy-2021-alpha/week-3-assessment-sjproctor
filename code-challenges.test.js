// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

describe("when nums is called", () => {
  test("should get an array containing Fib numbers", () => {
    expect(nums(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(nums(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]





// b) Create the function that makes the test pass.
//
// const nums = (length) => {
//   let newFibArray = [1, 1]
//   for(let i=2; i<length; i++){
//     newFibArray.push(newFibArray[i - 2] + newFibArray[i - 1])
//   }
//   return newFibArray
// }

const nums = (num) => {
  if(num === 1){
    return [1]
  } else if(num === 2){
    return [1, 1]
  } else {
    let fibArray = nums(num - 1)
    let fibLength = fibArray.length
    fibArray.push(fibArray[fibLength - 1] + fibArray[fibLength - 2])
    return fibArray
  }
}



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("when onlyOdd is called", () => {
  var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
  // Expected output: [-9, 7, 9, 199]
  var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
  // Expected output: [-823, 7, 23]
  test("returns a new array of only odd numbers sorted from least to greatest", () => {
    expect(onlyOdd(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(onlyOdd(fullArr2)).toEqual([-823, 7, 23])
  })
})



// b) Create the function that makes the test pass.

const onlyOdd = (array) => {
  let sortThis = array.filter(value => {
    return value % 2 !== 0 && typeof value === "number"
  })
  return sortThis.sort((a, b) => a - b)
}



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// a) Create a test with expect statements for each of the variables provided.

describe("when evenOrOddString is called", () => {
  var middleLetters1 = "alpha"
  // Expected output: “p”
  var middleLetters2 = "rhinoceros"
  // Expected output: “oc”
  test("string of a single word and returns the middle letter/s of the word", () => {
    expect(evenOrOddString(middleLetters1)).toEqual("p")
    expect(evenOrOddString(middleLetters2)).toEqual("oc")
  })
})

const evenOrOddString = (word) => {
  let length = word.length
  let middle = Math.floor(length/2)
  if(length % 2 === 0){
    return word[middle - 1] + word[middle]
  } else {
    return word[middle]
  }
}





// b) Create the function that makes the test pass.





// --------------------4) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("when arraySum is called", () => {
  test("returns the array of the accumulating sums", () => {
    var numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]
    var numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]
    var numbersToAdd3 = []
    // Expected output: []
    expect(arraySum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(arraySum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(arraySum(numbersToAdd3)).toEqual([])
  })
})


// b) Create the function that makes the test pass.

const arraySum = (array) => {
  let numbersAdded = 0
  return array.map(value => {
    return numbersAdded += value
  })
}
