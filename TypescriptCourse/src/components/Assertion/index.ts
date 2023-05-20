
// TypeScript assertion (veya bazen "type assertion" veya "type cast" olarak da adlandırılır), TypeScript'te belirli bir değerin veya ifadenin türünü bildiren bir yapıdır. Assertion, TypeScript derleyicisine, programcının belirli bir tür hakkında bilgi sahibi olduğunu ve bu bilgiye dayanarak bir değeri veya ifadeyi belirli bir türe dönüştürmek veya bunun üzerinde işlem yapmak istediğini bildirir.

// TypeScript'te iki farklı şekilde assertion yapılabilir: "angle bracket" (< >) ve "as" sözdizimi.

// 1- Angle Bracket (< >) Sözdizimi:

let value: any = "Hello, TypeScript!";
let length: number = (<string>value).length;
// Yukarıdaki örnekte, value değişkeni any türünde tanımlanmıştır. Ancak, programcı value'nun aslında bir dize olduğunu biliyor ve bunu TypeScript'e bildirmek için <string> assertion kullanır. Bu şekilde value değişkeni string olarak ele alınır ve .length özelliğine erişebiliriz.
console.log(length)

// 2-  As Sözdizimi

let deger: any = "Hello, TypeScript!";
let uzunluk: number = (deger as string).length;
// Bu örnekte, deger değişkeni yine any türünde tanımlanmıştır. Ancak, deger'in bir dize olduğunu bildirmek için as assertion kullanılır. Bu şekilde deger değişkeni string olarak ele alınır ve .length özelliğine erişebiliriz.

let code:any = 123
let employeCode = <number>code
let employeCode = code as number
console.log(employeCode)
