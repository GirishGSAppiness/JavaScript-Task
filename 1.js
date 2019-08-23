function getIndexToIns(arr, num) {
    let index = arr.sort((a, b) => a - b).findIndex((currentNum) => num <= currentNum)
    return index === -1 ? arr.length : index
  }getIndexToIns([20, 3, 5], 19);