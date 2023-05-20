// number için yapılmış örnek
function toplam(...numbers: Array<number>): number {
	let total: number = 0;
	numbers.forEach((num) => (total += num));
	return total;
}
const result: number = toplam(1, 2, 3, 4, 5);
console.log(result);

// string için yapılmış örnek
function merge(message: string, ...names: Array<string>) {
	console.log(message + names.join(', '));
}
let res = merge('Mehaba', 'Ugurcan', 'Ahmet', 'Ayşe');
console.log(res);
