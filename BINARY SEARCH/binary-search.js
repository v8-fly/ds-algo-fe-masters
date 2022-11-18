const headerName = "BINARY SEARCH"
const title = document.getElementById("title")
const timeComplexityDiv = document.getElementById("O(n)")
title.innerHTML = `<h1>${headerName}</h1>`
let timeComplexity

/*

The array should be ordered
comlexity => O(logn)

Remember if we perform halfing in solution
its either logn or nLogn 

*/

timeComplexity = "O(logn) - we do halfing"
timeComplexityDiv.innerHTML = `<h1>${timeComplexity}</h1>`

const binarySearch = (array, toFind) => {
  let low = 0
  let high = array.length - 1
  console.log(low, high)
  //   ALGO
  do {
    let midPoint = (low + high) / 2
    midPoint = Math.floor(midPoint)
    console.log({
      low,
      high,
      midPoint,
      valAtMid: array[midPoint],
    })
    if (toFind === array[midPoint]) {
      return {
        toFind,
        succcess: true,
      }
    } else if (toFind > array[midPoint]) {
      // adjust low
      console.log("IN toFind > array[midPoint]")
      low = midPoint + 1
    } else {
      console.log("IN toFind < array[midPoint]")
      high = midPoint
    }
  } while (low <= high)
  return {
    toFind,
    succcess: false,
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9))

/*

[1 ,2 ,3, 4, 5, 6 , 7]  , 5

ALGO START

1 - 
low is 0
high is 6
([low + high]/2)FLoor => 3 (index)
check if 3 (index) < or > or exactly equal to toFind
if(equal){
    return true
}
if(larger){
    Value is more away go more right
    you need to search right of MP

    // code 
    low becomes MP + 1 (we have checkes its not right value above)
}
if(lower){
    You have come a little far away need to short window
    you need to search left of MP

    // code 
    high becomes MP -  1 (we have checkes its not right value above)
}

ALGO START

EXIT CONDITION

low < high

[0 , 1 , 2,  3,  4]
[1 , 7 , 9 , 24, 37 , 45 , 56 , 66 , 78 90, ] , 24

low = 0
high = 4
MP = FLoor(0 + 4)/2 = 4/2 = 2 = 2
check index 2 => 9 (9 is less than 24)
adjust low (lows we dont consider)
low becomes MP+1 => 3 


low = 3
high = 4
MP = FLoor(3 + 4)/2 = 7/2 = 3.5 = 3
check index 3 =>  (24 is equal to toFind)
adjust high (high we always consider)
high becomes MP => 4




*/
