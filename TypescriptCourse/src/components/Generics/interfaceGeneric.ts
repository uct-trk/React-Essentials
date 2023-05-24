// Interface generic, TypeScript'te bir interface'in generic parametrelere sahip olmasını ifade eder. Böylece, interface'i uygularken veya bir nesne oluştururken, belirli bir türü kullanarak interface'in davranışını ve yapılarını belirleyebilirsiniz.

interface Months<U, V> {
	key: U;
	value: V;
}

const month: Months<number, string> = {
	key: 1,
	value: 'Ocak',
};
console.log(month);

// VeriDeposu adında bir interface tanımladık ve bu interface generic bir parametre olan T'ye sahip. Bu interface, ekle ve getir adında iki metod içeriyor.
interface VeriDeposu<T> {
	ekle(veri: T): void;
	getir(): T;
}

// Daha sonra, StringDepo adında bir sınıf oluşturduk ve VeriDeposu<string> şeklinde generic parametreyi belirttik. Bu sayede, StringDepo sınıfı, sadece string türündeki verileri depolayabilir. ekle metodu string bir parametre alır ve getir metodu string bir değer döndürür.
class StringDepo implements VeriDeposu<string> {
	private veri: string = '';

	ekle(veri: string): void {
		this.veri = veri;
	}

	getir(): string {
		return this.veri;
	}
}

const stringDepo = new StringDepo();
stringDepo.ekle('Merhaba');
console.log(stringDepo.getir()); // "Merhaba"

// Benzer şekilde, SayiDepo adında bir sınıf oluşturduk ve VeriDeposu<number> şeklinde generic parametreyi belirttik. Bu sınıf, sadece number türündeki verileri depolayabilir.
class SayiDepo implements VeriDeposu<number> {
	private veri: number = 0;

	ekle(veri: number): void {
		this.veri = veri;
	}

	getir(): number {
		return this.veri;
	}
}

const sayiDepo = new SayiDepo();
sayiDepo.ekle(42);
console.log(sayiDepo.getir()); // 42
// Bu şekilde, interface generic kullanarak, belirli bir türü kullanarak bir interface'in davranışını belirleyebilir ve daha genel ve yeniden kullanılabilir kod oluşturabilirsiniz.

// generic interface için örnek
interface Collection<T> {
	add(o: T): void;
	remove(o: T): void;
}

class Liste<T> implements Collection<T> {
	private items: Array<T> = [];

	add(o: T): void {
		this.items.push(o);
		console.log(this.items);
	}

	remove(o: T): void {
		const index = this.items.indexOf(o);
		if (index > -1) {
			this.items.splice(index, 1);
		}
	}
}

const list = new Liste<number>();
for (let i = 0; i < 10; i++) {
	list.add(i);
}
