
function partition(a, l, h) {
    let pivot = a[l];
    let i = l + 1;
    let j = h;
  
    while (i <= j) {
      while (a[i] < pivot) {
        i++;
      }
      while (a[j] > pivot) {
        j--;
      }
  
      if (i <= j) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i++;
        j--;
      }    }
  
    let temp = a[l];
    a[l] = a[j];
    a[j] = temp;
  
    return j;
  }
  
  function quicksort(a, l, h) {
    if (l < h) {
      let p = partition(a, l, h);
      quicksort(a, l, p - 1);
      quicksort(a, p + 1, h);
    }
    return a;
  }
  
  const array = [5, 2, 7, 4, 9, 3, 6, 12];
  let l = 0;
  let h = array.length - 1;
  
  const sortedArray = quicksort(array, l, h);
  console.log(sortedArray);

