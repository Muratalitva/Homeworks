let num = [100, 55, 15, 300, 20];
let sum = 0;

for (let i = 0; i < num.length; i++) {
  sum += num[i];
  console.log(`${sum - num[i]} + ${num[i]} = ${sum}`);
}