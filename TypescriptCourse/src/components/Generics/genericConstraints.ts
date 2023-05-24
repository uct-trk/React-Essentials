// Generic constraints (generic kısıtlamalar), TypeScript'te generic bir parametrenin alabileceği türleri sınırlamak için kullanılan bir özelliktir. Böylece, belirli bir tür veya belirli özelliklere sahip türlerin kullanılmasını zorunlu kılabilirsiniz.
// Genellikle extends anahtar kelimesi ile kısıtlama yapılır ve bu şekilde generic parametre, belirtilen kısıtlamalara sahip türleri alabilir

//  Hesaplanabilir adında bir interface tanımladık. Bu interface, alan() adında bir metod içeriyor.
interface Hesaplanabilir {
	alan(): number;
}

// Daha sonra, toplamAlan adında bir fonksiyon tanımladık. Bu fonksiyon, generic bir parametre olan T'yi alır ve bu parametrenin Hesaplanabilir interface'ini uygulayan türlerden olmasını kısıtlar. Yani, sadece Hesaplanabilir interface'ini uygulayan türleri alabilir.
function toplamAlan<T extends Hesaplanabilir>(shapes: T[]): number {
	let toplam = 0;
	for (const shape of shapes) {
		toplam += shape.alan();
	}
	return toplam;
}

// Dikdortgen ve Kare sınıfları, Hesaplanabilir interface'ini uygulayan sınıflardır. Her biri alan() metodunu tanımlar.
class Dikdortgen implements Hesaplanabilir {
	constructor(private uzunluk: number, private genislik: number) {}

	alan(): number {
		return this.uzunluk * this.genislik;
	}
}
// Dikdortgen ve Kare sınıfları, Hesaplanabilir interface'ini uygulayan sınıflardır. Her biri alan() metodunu tanımlar.
class Kare implements Hesaplanabilir {
	constructor(private kenarUzunlugu: number) {}

	alan(): number {
		return this.kenarUzunlugu ** 2;
	}
}

// Son olarak, dikdortgen ve kare örneklerini oluşturduk ve toplamAlan fonksiyonuna bu örnekleri geçerek toplam alanlarını hesapladık.

const dikdortgen = new Dikdortgen(5, 3);
const kare = new Kare(4);

const toplam: number = toplamAlan([dikdortgen, kare]);
console.log(toplam); // 29

// sadece obje gönderebiliriz yani kısıtlama yaptık
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
	return {
		...obj1,
		...obj2,
	};
}

const person = merge({ name: 'Ugurcan' }, { age: 28 });
console.log(person);
