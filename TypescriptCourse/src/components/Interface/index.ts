// TypeScript, JavaScript'e tip sistemini ekleyen bir dil olduğu için "interface" anahtar kelimesini kullanarak tip tanımlamaları yapabiliriz. "interface" ile bir arayüz (interface) oluşturabilir ve bu arayüzü kullanarak nesnelerin veya fonksiyonların tiplerini kontrol edebiliriz.

// Bir arayüz (interface) tanımlama
interface Kisi {
	ad: string;
	yas: number;
	calisan: boolean;
	gobekAdi?: string; // optional, zorunluluk içermez.
}

// Bir nesne tanımlama
const kisi: Kisi = {
	ad: 'John',
	yas: 30,
	calisan: true,
	gobekAdi: 'Doe',
};

// Bir fonksiyonun parametrelerini ve dönüş değerini belirtme
function selamla(isim: string): void {
	console.log('Merhaba, ' + isim);
}

function tamİsim(kisi: Kisi): void {
	if (kisi.gobekAdi) {
		// optioal olan gobek adı varsa if içerisine girer
		console.log(`${kisi.ad} gobek adı: ${kisi.gobekAdi}`);
	} else {
		console.log(`${kisi.ad}`);
	}
}
console.log(tamİsim(kisi));

// Nesnenin özelliklerini kullanma
console.log(kisi.ad); // "John"

// Fonksiyonu çağırma
selamla('Alice'); // "Merhaba, Alice"

// --- Fonksiyonlarda interface tanımlama

// fonksiyonlarda interface oluşturabiliriz
// Bu şekilde, interface kullanarak fonksiyonların tipini belirleyebilir ve tip uyumunu sağlayabilirsiniz.
interface StringFormat {
	(str: string, isUpper: boolean): string;
}

const stringFormat: StringFormat = (isim, isUpper) => {
	return isUpper ? isim.toLocaleUpperCase() : isim.toLocaleLowerCase();
};

stringFormat('Ugur', false);
