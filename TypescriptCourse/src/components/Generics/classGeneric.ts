// Class generic (sınıf generic), TypeScript'te bir sınıfın generic parametrelere sahip olmasını ifade eder. Bu, sınıfın içindeki özelliklerin, metodların ve constructorların belirli bir türe veya belirli türlere bağlı olmasını sağlar.

class VeriDeposuGeneric<T> {
	veri: T;

	constructor(veri: T) {
		this.veri = veri;
	}

	getVeri(): T {
		return this.veri;
	}

	setVeri(veri: T): void {
		this.veri = veri;
	}
}

const stringDepoGeneric = new VeriDeposuGeneric<string>('Merhaba');
console.log(stringDepoGeneric.getVeri()); // "Merhaba"
stringDepoGeneric.setVeri('Selam');
console.log(stringDepoGeneric.getVeri()); // "Selam"

const sayiDepoGeneric = new VeriDeposuGeneric<number>(42);
console.log(sayiDepoGeneric.getVeri()); // 42
sayiDepoGeneric.setVeri(99);
console.log(sayiDepoGeneric.getVeri()); // 99

// 2. class generic örneği
class Stack<T> {
	private element: T[] = [];

	constructor(private size: number) {}

	isEmpty(): boolean {
		return this.element.length === 0;
	}
	isFull(): boolean {
		return this.element.length === this.size;
	}

	pushElem(element: T): void {
		if (this.element.length === this.size) {
			throw new Error('The stack is overflow');
		}
		this.element.push(element);
	}

	popElem(): T | undefined {
		if (this.element.length === 0) {
			throw new Error('The stack is empty');
		}
		return this.element.pop();
	}
}

// low ve high arasında rastgele bir sayı üretir
function randomBetween(low: number, high: number): number {
	return Math.floor(Math.random() * (high - low + 1) + low);
}

const numberss = new Stack<number>(5);

while (!numberss.isFull()) {
	const n: number = randomBetween(1, 10);
	console.log(`Push ${n} into the stack`);
	numberss.pushElem(n);
}

while (!numberss.isEmpty()) {
	const n: number | undefined = numberss.popElem();
	console.log(`Push ${n} into the stack`);
}
