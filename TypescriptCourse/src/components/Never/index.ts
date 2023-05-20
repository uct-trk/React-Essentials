
// never, TypeScript'te bir değer türüdür ve bir işlevin asla tamamlanmayacağını ifade eder. Bu tür, işlevlerin sürekli bir döngü içinde olduğu veya hata fırlattığı gibi durumlarda kullanılır. Bir işlevin geri dönüş türü olarak never belirtilirse, bu işlevin herhangi bir değer döndürmediği ve hiçbir zaman tamamlanmadığı anlamına gelir.


// Sonsuz döngüler: İşlevin hiçbir zaman sonlanmadığı bir döngü içinde olması durumunda never türü kullanılabilir. Örneğin:
// function infiniteLoop(): never {
//     while (true) {
//       console.log("Hello, World!");
//     }
//   }

// Hata fırlatma: İşlevin hata fırlatması durumunda never türü kullanılabilir
function throwError(message: string): never {
    throw new Error(message);
  }

// Tip eşleme tamamlanmadı: Bir switch ifadesinde tüm olası durumlar ele alınmış olsa bile, tip denetimi nedeniyle hiçbir durumun tam olarak eşleşmediği durumlarda never türü kullanılabilir.
function processValue(value: string | number): void {
    switch (typeof value) {
      case "string":
        console.log("String value:", value);
        break;
      case "number":
        console.log("Number value:", value);
        break;
      default:
        // `never` türü burada kullanılır
        const unreachable: never = value;
        console.log("Unreachable value:", unreachable);
    }
  }

 // never türü, asla bir değer içermeyen ve herhangi bir değere atanamayan bir türdür. Bu nedenle, never türü bir değişkenin veya dizi öğesinin türü olarak kullanılamaz. 
 let value: never; // Geçerli
 value = neverFunction(); // Geçerli
 
 let array: never[]; // Geçerli
 array = []; // Geçerli
 
 let error: Error; // Geçerli
 error = throwError("An error occurred"); // Geçerli
 
 let num: number;
 num = value; // Hatalı! `never` türü bir değere atanamaz

 // never türü, genellikle programın belirli bir noktada sonlanmasını veya istisnai durumları işaret etmek için kullanılır.





 