function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      // Pick the current element to be inserted into the sorted sequence
      const currentElement = arr[i];
      let j = i - 1;
  
      // Move elements of arr[0..i-1] that are greater than currentElement
      // one position ahead of their current position
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Place the currentElement at its correct position
      arr[j + 1] = currentElement;
    }
  }
  
  // Example usage:
  const arrayToSort = [12, 11, 13, 5, 6];
  insertionSort(arrayToSort);
  console.log("Sorted array:", arrayToSort);
  