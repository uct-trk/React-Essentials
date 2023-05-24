// Bir soyut sınıf, doğrudan örneklendirilemeyen ve genellikle diğer sınıflar için bir temel sınıf olarak kullanılan bir sınıftır. Soyut sınıflar, genellikle ortak özelliklere sahip sınıflar için bir şablondur ve diğer sınıfların bu şablona uymasını sağlar. Soyut sınıflar genellikle soyut metotlar (abstract methods) içerir, yani metotların sadece imzası tanımlanır, ancak gerçek uygulama ayrıntıları alt sınıflar tarafından sağlanır.

// JavaScript'te soyut sınıfların yerine kullanılabilecek bir yaklaşım, soyut sınıf davranışı sergileyecek bir sınıfı normal bir sınıf olarak tanımlamak ve soyut metotların atılmasını (throw) sağlamaktır. Böylece alt sınıflar, soyut metotları uygulamak zorunda kalır.

abstract class SoyutSinif {
	constructor() {
		if (new.target === SoyutSinif) {
			throw new Error('SoyutSinif doğrudan örneklendirilemez.');
		}
	}

	soyutMetot(): void {
		throw new Error('soyutMetot alt sınıflar tarafından uygulanmalıdır.');
	}
}

class AltSinif extends SoyutSinif {
	soyutMetot(): void {
		console.log("AltSinif'ta soyutMetot uygulandı.");
	}
}

// SoyutSinif doğrudan örneklendirilemez
// const soyut = new SoyutSinif(); // Hata: SoyutSinif doğrudan örneklendirilemez.

const alt = new AltSinif();
alt.soyutMetot(); // Çıktı: AltSinif'ta soyutMetot uygulandı.
