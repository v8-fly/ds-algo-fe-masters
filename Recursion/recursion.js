const headerName = "Recursion"
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

timeComplexity = "unknown"
timeComplexityDiv.innerHTML = `<h1>${timeComplexity}</h1>`

const recursion1 = (num) => {
  // console.log(num)
  if (num === 1) {
    console.log("N", num)
    return 1
  }
  let out = num + recursion1(num - 1)
  // console.log("OPERATIONS SUM", out)
  console.log("N", num)
  return out
}

const recursion2 = (num) => {
  // console.log(num)
  if (num === 1) {
    console.log("N", num)
    return 1
  }
  return num + recursion2(num - 1)
}

console.log(recursion2(5))

/*

WE GO DOWN STACK

ALGO START
retAddress ,    retValue ,        Arguments
recursion(5)     5 + val               5
recursion(4)     4 + val               4
recursion(3)     3 + val               3
recursion(2)     2 + val               2
recursion(1)     1                     1


WE GO UP STACK NOW since we have returned form base condition

retAddress ,    retValue ,              Arguments
recursion(5)     5 +  10 = 15               5
recursion(4)     4 +  6 = 10                4
recursion(3)     3 + 3 = 6                  3
recursion(2)     2 +  1 = 3                 2
recursion(1)     1                  1

WE RETURN 15


See example 1

There are 3 steps 

Pre => num + recursion2(num - 1) when we do num + 
Recurse =>  actual num + recursion2(num - 1) actually => recursion2(num - 1) 
POST =>   
let out = num + recursion1(num - 1)
console.log("OPERATIONS SUM", out)
 >>> . THIS ONE    >>> console.log("N", num)
 PRINTS 
 1
 2
 3
 4
 5



*/
