export default function bubbleSort(array) {
  if (!array) return [];
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    for (let y = i + 1; y < array.length; y++) {
      if (array[i] > array[y]) {
        temp = array[i];
        array[i] = array[y];
        array[y] = temp;
      }
    }
  }
  return array;
}
