// TypeScript, fonksiyonların aşırı yüklenmesini (function overloading) destekler. Fonksiyon aşırı yüklemesi, aynı isimde birden fazla fonksiyon tanımlamanıza ve farklı parametre listelerine dayalı olarak çağrılacak uygun fonksiyonu seçmenize olanak tanır.
//Fonksiyon aşırı yüklemesi, farklı parametre tipleri, parametre sayıları veya parametrelerin isteğe bağlı olup olmaması gibi farklı durumları ele almak için kullanılabilir.

//Örnek olarak, calculateArea adında bir fonksiyon düşünelim. Bu fonksiyon, kare ve dikdörtgenin alanını hesaplamak için kullanılabilir. Fonksiyon aşırı yüklemesi kullanarak, farklı parametre listelerine sahip iki farklı versiyonunu tanımlayabiliriz:

function calculateArea(side: number): number;
function calculateArea(length: number, width: number): number;

function calculateArea(arg1: number, arg2?: number): number {
	if (arg2 === undefined) {
		// Kare alanını hesapla
		return arg1 * arg1;
	} else {
		// Dikdörtgen alanını hesapla
		return arg1 * arg2;
	}
}
const area1 = calculateArea(5); // Kare alanı: 25
const area2 = calculateArea(3, 4); // Dikdörtgen alanı: 12
console.log(area1, area2);
