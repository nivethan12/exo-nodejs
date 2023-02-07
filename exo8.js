function Fusion(array1, array2) {
    let i = 0;
    let j = 0;
    let result = [];
  
    while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
        result.push(array1[i]);
        i++;
      } else {
        result.push(array2[j]);
        j++;
      }
    }
  
    while (i < array1.length) {
      result.push(array1[i]);
      i++;
    }
  
    while (j < array2.length) {
      result.push(array2[j]);
      j++;
    }
  
    return result;
  }
  
  let array1 = [10, 20, 30];
  let array2 = [15, 25, 35];
  console.log(Fusion(array1, array2));
  

  