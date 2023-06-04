
function partition(a, l, r) {
    let pivot = a[l];
    let i = l + 1;
    let j = r;
  
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
  
  function quicksort(a, l, r) {
    if (l < r) {
      let p = partition(a, l, r);
      quicksort(a, l, p - 1);
      quicksort(a, p + 1, r);
    }
    return a;
  }
  
  const array = [5, 2, 7, 4, 9, 3, 6, 12];
  let l = 0;
  let r = array.length - 1;
  
  const sortedArray = quicksort(array, l, r);
  console.log(sortedArray);

