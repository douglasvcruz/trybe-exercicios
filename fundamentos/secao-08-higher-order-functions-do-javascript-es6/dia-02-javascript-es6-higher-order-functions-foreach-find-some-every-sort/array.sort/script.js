const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.sort();
console.log(numbers);

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points);

const points1 = [40, 100, 1, 5, 25, 10];
points1.sort((a, b) => b - a);
console.log(points1);
