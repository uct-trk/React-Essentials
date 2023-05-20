
//TypeScript inference, TypeScript'in değişkenlerin ve ifadelerin türlerini otomatik olarak çıkarmasını ifade eder. Inference, değişkenlere atanan değerler veya ifadelerin türlerine dayanarak TypeScript'in bu türleri tahmin etmesini sağlar.

// Bu kodda, message değişkenine atanan değer "Hello, TypeScript!" bir dize olduğu için TypeScript otomatik olarak message'ın türünü string olarak tahmin eder. Benzer şekilde, count değişkenine atanan değer 10 bir sayı olduğu için TypeScript count'un türünü number olarak tahmin eder.
let message = "Hello, TypeScript!";
let count = 10;

// Inference, değişkenlerin yanı sıra fonksiyonlarda da kullanılabilir. Bir fonksiyonun dönüş değeri, parametre türleri veya fonksiyonun içinde yapılan operasyonlar gibi faktörlere dayanarak TypeScript tarafından tahmin edilebilir.
function increament(counter:number){
    return counter++
}
console.log(increament(2))

// Sonuç olarak, TypeScript inference, değişkenlerin ve ifadelerin türlerini otomatik olarak tahmin etme yeteneğidir. Bu, kodun okunabilirliğini artırır ve hata yapma olasılığını azaltır. Ancak, bazen beklenmeyen tür tahminleri yapabileceği için dikkatli kullanılmalı ve gerektiğinde tür belirtimi kullanılmalıdır.