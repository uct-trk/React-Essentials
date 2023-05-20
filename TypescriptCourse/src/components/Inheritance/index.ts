// Parent class
class PersonalGeneral {
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

// Child class
class EmployeeInfo extends PersonalGeneral {
	address: string | undefined;
	boy: number | undefined;
	kilo: number | undefined;

	constructor(id: number, firstName: string, lastName: string, address: string | undefined, boy: number | undefined, kilo: number | undefined) {
		super(id, firstName, lastName);
		address = this.address;
		boy = this.boy;
		kilo = this.kilo;
	}
}

const personInfo: PersonalGeneral = new PersonalGeneral(1, 'Ugurcan', 'Türk');
console.log(personInfo);

const gelInfo: string = personInfo.getFullName();
console.log(gelInfo);

const emp = new EmployeeInfo(29, 'Can', 'Boz', 'Bursa', 190, 80);
console.log(emp);

// JavaScript'te kalıtım (inheritance), bir sınıfın başka bir sınıftan özelliklerini ve yöntemlerini devralmasıdır. Bir sınıf, başka bir sınıftan özellikleri ve işlevleri miras alarak kod tekrarını önler ve kodun daha modüler ve sürdürülebilir olmasını sağlar.
