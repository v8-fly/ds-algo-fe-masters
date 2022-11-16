const headerName = "BINARY SEARCH"
const title = document.getElementById("title")
title.innerHTML = `<h1>${headerName}</h1>`
console.log(";HArdik")

/*

The array should be ordered
comlexity => O(logn)

Remember if we perform halfing in solution
its either logn or nLogn 

*/

const linearSearch = (array, toFind) => {
  console.log(array, toFind)
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (element === toFind) {
      return {
        toFind: toFind,
        success: true,
      }
    }
  }
  return {
    toFind: toFind,
    success: false,
  }
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7], 100))
