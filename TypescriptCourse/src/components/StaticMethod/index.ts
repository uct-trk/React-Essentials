//JavaScript'de bir sınıfa ait olan statik bir metod, o sınıfa ait bir işlevdir. Farklı olarak, statik metodlar sınıfın örneği olmadan doğrudan sınıf üzerinden çağrılabilir ve örneklere uygulanmaz. Statik metodlar, genellikle sınıf düzeyindeki yardımcı fonksiyonları veya sınıfın genel işlevselliğini sağlamak için kullanılır.
class Circle {
	static pi: number = 3.14;
	static hesapla(r: number) {
		return this.pi * r * r;
	}
}

// Statik metodu çağıralım
console.log(Circle.hesapla(5));

let newObj = new Circle(); // yeni obje oluşturup statik method çağıramayız
//console.log(newObj.hesapla(2)) statik methodlar sadece sınıf üzerinden çağırılabilir.
