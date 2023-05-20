let array: Array<number> = [1, 2, 3, 4, 5, 6];
let element: number;
for (let index: number = 0; index < array.length; index++) {
	element = array[index];
	console.log(element);
}

// ayrıca inferance özelliği sayesinde tipi yazmadan kendisi belirleyebiliyor
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
	console.log(number);
}
