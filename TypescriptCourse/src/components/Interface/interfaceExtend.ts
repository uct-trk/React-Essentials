interface IPerson {
	name: string;
	gender: string;
}

interface IEmployee extends IPerson {
	employeNumber: number;
}

interface IWorker extends IPerson {
	employeDepartment: string;
}

const calisanKisi: IEmployee = {
	employeNumber: 1,
	gender: 'male',
	name: 'Ugurcan',
};
console.log(calisanKisi.name);

const calisilanYer: IWorker = {
	employeDepartment: 'Ofis',
	gender: 'male',
	name: 'Ugurcan',
};
console.log(calisilanYer.employeDepartment);

// TypeScript'te, bir sınıfın bir interface'i uygulamasını sağlamak için implements anahtar kelimesini kullanabilirsiniz. İnterface'in belirlediği özellikleri ve metotları sınıf içinde tanımlayarak, bu özelliklerin ve metotların uygulanmasını sağlayabilirsiniz
interface IKisi {
	name: string;
	gender: string;
}

// extend edeilen propertileri classın içerisine yazmak zorundayız bu biraz dezavantajlı durum o yuzden extend daha matıklı
class Calisan implements IKisi {
	empNumber: number;
	name: string;
	gender: string;
	constructor(empNumber: number, name: string, gender: string) {
		empNumber = this.empNumber;
		name = this.name;
		gender = this.gender;
	}
}

const isciKisi = new Calisan(123, 'UCT', 'Erkek');
console.log(isciKisi);
