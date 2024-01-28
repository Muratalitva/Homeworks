const array = [400, 122, 132, 111, 1100, 688, 900];

array.sort((a, b) => b - a);

for (let i = 0; i < array.length - 1; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] < array[j]) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

console.log(array.join(', '));