// TypeScript'te "type guard" (tür koruyucusu), bir değerin belirli bir türde olduğunu doğrulamanızı sağlayan bir ifade veya işlevdir. Bu, belirli bir türdeki özelliklere erişmek veya bir değeri belirli bir şekilde işlemek için kullanışlıdır. Tür koruyucusu, TypeScript'in statik tür denetimi sistemini kullanarak kodunuzda daha güvenli ve doğru tür bilgisi sağlar.
// 1- typeof Tür Koruyucusu:
type tip = string | number;

function eklemeFn(a: tip, b: tip) {
	if (typeof a === 'number' && typeof b === 'number') {
		return a + b;
	}
	if (typeof a === 'string' && typeof b === 'string') {
		return a.concat(b);
	}

	throw new Error('Lütfen doğru formatta data gönderin');
}

console.log(eklemeFn(10, 5)); // 15
console.log(eklemeFn('merhaba', 'nasılsın')); // merhaba nasılsın yazısını görürüz
console.log(eklemeFn(10, 'a')); // error hatası verir, Lütfen doğru formatta data gönderin

// 2-  instanceof Tür Koruyucusu:
class Kedi {
	miyavla(): void {
		console.log('Miyav!');
	}
}

class Köpek {
	havla(): void {
		console.log('Hav!');
	}
}

type voiceAnimal = Kedi | Köpek;

function sesCikar(hayvan: voiceAnimal) {
	if (hayvan instanceof Kedi) {
		hayvan.miyavla(); // Kedi türünde ise miyavla metodu çağırılabilir.
	} else if (hayvan instanceof Köpek) {
		hayvan.havla(); // Köpek türünde ise havla metodu çağırılabilir.
	}
}

const kedi = new Kedi();
const köpek = new Köpek();

sesCikar(kedi); // "Miyav!"
sesCikar(köpek); // "Hav!"

// Yukarıdaki örnekte, sesCikar adında bir işlev tanımladık. Bu işlev, Kedi veya Köpek türündeki bir değeri parametre olarak alır. İşlev içinde instanceof ifadesini kullanarak değerin türünü kontrol eder ve ilgili özelliklere erişim sağlar. Bu şekilde, sesCikar işlevi, aldığı değerin türüne göre farklı işlemler gerçekleştirebilir.
