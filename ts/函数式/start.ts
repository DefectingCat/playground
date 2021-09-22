const arr = [1, 2, 3, 4, 5, 6];

const newArr: number[] = [];
for (const i of arr) {
  if (i > 2) newArr.push(i);
}

const findNumberGreatThanTwo = (val: number) => val > 2;
const newArr2 = arr.filter(findNumberGreatThanTwo);

console.log(newArr, newArr2);
