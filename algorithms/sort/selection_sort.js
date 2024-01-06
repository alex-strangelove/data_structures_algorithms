export default function selectionSort(array) {
  let minIdx = 0;
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    minIdx = i;
    for (let y = i + 1; y < array.length; y++) {
      minIdx = array[y] > array[minIdx] ? minIdx : y;
    }
    temp = array[i];
    array[i] = array[minIdx];
    array[minIdx] = temp;
  }
  return array;
}
