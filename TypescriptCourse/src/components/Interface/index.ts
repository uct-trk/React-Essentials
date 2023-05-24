// TypeScript, JavaScript'e tip sistemini ekleyen bir dil olduğu için "interface" anahtar kelimesini kullanarak tip tanımlamaları yapabiliriz. "interface" ile bir arayüz (interface) oluşturabilir ve bu arayüzü kullanarak nesnelerin veya fonksiyonların tiplerini kontrol edebiliriz.

// Bir arayüz (interface) tanımlama
interface Kisi {
	ad: string;
	yas: number;
	calisan: boolean;
}

// Bir nesne tanımlama
const kisi: Kisi = {
	ad: 'John',
	yas: 30,
	calisan: true,
};

// Bir fonksiyonun parametrelerini ve dönüş değerini belirtme
function selamla(isim: string): void {
	console.log('Merhaba, ' + isim);
}

// Nesnenin özelliklerini kullanma
console.log(kisi.ad); // "John"

// Fonksiyonu çağırma
selamla('Alice'); // "Merhaba, Alice"
