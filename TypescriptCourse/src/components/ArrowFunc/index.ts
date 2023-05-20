function multipy(a: number, b: number, c?: number) {
	if (typeof c !== 'undefined') {
		return a * b * c;
	}
	return a * b;
}

let res = multipy(3, 5); // 3. arguman optionaldır yani isteğe bağlı olarak yollayabiliriz
console.log(res);

// Arrow fonksiyonlarda typescript kullanımı

type MathOperation = (a: number, b: number) => number;

const sum: MathOperation = (a, b) => a + b;
const product: MathOperation = (a, b) => a * b;

sum(4, 2);
product(1, 3);

//Yukarıdaki örnekte, MathOperation türü, iki number parametresi alan ve number türünde bir değer döndüren fonksiyonları ifade eder. sum ve product değişkenleri bu türe uygun fonksiyonları referanslar.
//Bu şekilde TypeScript, fonksiyonların daha güvenli ve tutarlı bir şekilde kullanılmasını sağlar.
