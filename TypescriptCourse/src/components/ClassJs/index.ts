// TypeScript'te sınıf kullanımı, nesne tabanlı programlamanın temel bir özelliğidir. Sınıflar, nesnelerin özelliklerini (alanlar) ve davranışlarını (metodlar) tanımlamak için kullanılır. Bir sınıf, bir şablondur ve ona dayanarak birden çok nesne oluşturulabilir.
// TypeScript sınıfları, JavaScript ES6 sınıflarına benzerdir. Ancak TypeScript, statik tür kontrolü ve tip güvenliği sağlamak için ilave özellikler ve sentaks ekler.

class Personal {
	id: number | undefined;
	firstName: string | undefined;
	lastName: string | undefined;

	constructor(id: number | undefined, firstName: string | undefined, lastName: string | undefined) {
		id = this.id;
		firstName = this.firstName;
		lastName = this.lastName;
	}

	getFullName() {
		return this.firstName + ' ' + this.lastName;
	}
}

const personInfo: Personal = new Personal(1, 'Ugurcan', 'Türk');
console.log(personInfo);

const gelInfo: string = personInfo.getFullName();
console.log(gelInfo);
