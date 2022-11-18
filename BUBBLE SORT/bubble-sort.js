const headerName = "BUBBLE SORT"
const title = document.getElementById("title")
const timeComplexityDiv = document.getElementById("O(n)")
title.innerHTML = `<h1>${headerName}</h1>`
let timeComplexity
/*

As the name suggests its a sorting algorithm
What does it do , for an unsorted array it sorts it in assending order
How 

O(n) is n square

n(n+1)/2


simply i and j loop n square simple
*/

timeComplexity = "O(n-square)"
timeComplexityDiv.innerHTML = `<h1>${timeComplexity}</h1>`

const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    // [6, 8, 1, 13, ,99]
    //  you go > 0 to 3 (array.length(5) - 1) => les than 4 i-e 3
    //  i values from 0 , 1 , 2 , 3

    for (let j = 0; j < array.length - 1 - i; j++) {
      const element1 = array[j]
      const element2 = array[j + 1]
      console.log(element1, element2)
      if (element1 > element2) {
        ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
        // let temp = array[j]
        // array[j] = array[j + 1]
        // array[j + 1] = temp
      }
    }
    console.log("/*********/", array)
  }
}

console.log(bubbleSort([6, 8, 1, 130, 99]))

/*
ALGO START

[6, 8, 1, 13, ,99]

Start with 0

step 1 - compare n and n+1 (n > n+1) => swap
         6 > 8  > NO, NO Swap
         [6, 8, 1, 13, 99]

step 2 - compare n and n+1 (n > n+1) => swap
         9 > 6  > YES Swap new array 
         [8,6, 9,3,4,5,6,0,1] 
         
         -
         -
         -

GO UPTO n-1
*/
