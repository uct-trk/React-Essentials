// TypeScript'te "generics" (generic types) kavramı, parametrik bir tür sistemini ifade eder. Generics, bir fonksiyon, sınıf veya arayüz tanımlanırken, bu tanımlamaların belirli bir türe bağlı olmasını sağlar. Böylece, daha genel ve yeniden kullanılabilir kod oluşturmanızı sağlar.
// Generics, bir tür veya değerin belirli bir yerde yerine konmasını sağlar. Bu, kodunuzun farklı veri tipleri üzerinde çalışmasını sağlar ve aynı zamanda statik tür denetimini korur.
// Generics'i tanımlarken genellikle "<>" sembollerini kullanırız.

// Fonksiyon generics
function diziYazdir<T>(dizi: T[]): void {
	for (let eleman of dizi) {
		console.log(eleman);
	}
}

const sayilar: number[] = [1, 2, 3, 4, 5];
const isimler: string[] = ['Alice', 'Bob', 'Charlie'];
const bools: boolean[] = [true, false, true, true, false, true, false, false];

diziYazdir(sayilar); // 1 2 3 4 5
diziYazdir(isimler); // Alice Bob Charlie
diziYazdir(bools); // true, false, true, true, false, true, false, false

// Yukarıdaki örnekte, diziYazdir adında bir fonksiyon tanımladık. Fonksiyon, T adında bir generics parametresi alır. Bu parametre, fonksiyonun çağrıldığı sırada belirli bir türe bağlanır.
//Fonksiyon içinde, dizi parametresi bir diziyi temsil eder ve T[] şeklinde generics parametresine bağlanır. Bu sayede, fonksiyon farklı türlerdeki dizilerle çalışabilir.

// Class generics
class Veritabani<T> {
	private veriler: T[] = [];

	ekle(veri: T): void {
		this.veriler.push(veri);
	}

	listele(): void {
		for (let veri of this.veriler) {
			console.log(veri);
		}
	}
}

const stringVeritabani = new Veritabani<string>();
stringVeritabani.ekle('Alice');
stringVeritabani.ekle('Bob');
stringVeritabani.listele();

const sayiVeritabani = new Veritabani<number>();
sayiVeritabani.ekle(1);
sayiVeritabani.ekle(2);
sayiVeritabani.listele();

// Yukarıdaki örnekte, Veritabani adında bir sınıf tanımladık. Sınıf, T adında bir generics parametresi alır. Bu parametre, sınıfın içindeki özellikler ve metodlarda kullanılabilir.
// Sınıf içinde, veriler adında bir dizi özelliği tanımladık ve bu özellik T[] şeklinde generics parametresine bağlandı. Böylece, Veritabani sınıfı farklı türlerde

interface VeritabaniKaydi<T> {
	id: string;
	veri: T; // generic olmasını sağladık
}

const kayit: VeritabaniKaydi<number> = {
	id: '1',
	veri: 123,
};
console.log(kayit.veri);

// özetlersek temel sebebimiz
// generic kullanma ihtiyacımızın temel sebebi tekrar tekrar kullanılabilir kod oluşturmaktır
