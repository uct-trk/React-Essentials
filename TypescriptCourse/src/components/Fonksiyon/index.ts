// TypeScript, JavaScript'in tüm fonksiyon özelliklerini destekleyen bir dildir ve aynı zamanda statik tür kontrolü ve tür çıkarımı gibi ek özellikler sunar.

function add(a: number, b: number): number {
	return a + b;
}

console.log(add(4, 6));

function bastir(): void {
	console.log('Ugurcan Turk');
}
bastir();

function sayi(): number {
	return 10;
}
let result: number = sayi();
console.log(result);

function birlestir(ad: string, soyad: string): string {
	return ad + ' ' + soyad;
}
let sonuc = birlestir('Ugurcan', 'Türk');
console.log(sonuc);
