// Intersection (kesişim) TypeScript'te bir tür operatördür ve iki veya daha fazla türü birleştirir, yani bu türlerin ortak özelliklerini içeren bir yeni tür oluşturur. Intersection, birden fazla türü bir araya getirerek, bu türlerin birleşimini temsil eden bir tür oluşturmanıza olanak tanır.

interface BusinessPartner {
	name: string;
	credit: number;
}

interface Identity {
	name: string;
	id: number;
}

interface Concat {
	email: string;
	phone: string;
}

// Intersection, farklı türleri birleştirmek ve yeni türler oluşturmak için güçlü bir araçtır. Bu şekilde, farklı türleri tek bir türde birleştirebilir ve daha spesifik veya genel türler oluşturabilirsiniz.
type Employeee = Identity & Concat;

const employeee: Employeee = {
	name: 'Uğurcan',
	id: 123,
	phone: '123456789',
	email: 'ugurcan@asd.com',
};

console.log(employeee.email);
