export default function linearSearch(array, target) {
  if (!array) return;
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      result = target;
      break;
    }
  }
  return result;
}
