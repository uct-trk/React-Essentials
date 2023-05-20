
// void türü, TypeScript'te bir işlevin geri dönüş değerini ifade eden bir türdür. Bir işlevin void türüne sahip olması, işlevin herhangi bir değer döndürmediğini ve sadece yan etkileri olduğunu gösterir.
//Bir işlevin geri dönüş değeri olarak void belirtmek, o işlevin return ifadesi olmadan veya return; ifadesiyle sonlandırıldığını ifade eder. void türü, genellikle yan etki odaklı işlevlerde kullanılır, yani işlevin sonucu yerine bir eylem gerçekleştirilir.

  function sayHello(): void {
    console.log("Hello!");
  }
  
  function calculateSum(a: number, b: number): void {
    const sum = a + b;
    console.log(`Sum: ${sum}`);
  }
  
  sayHello(); // Çıktı: Hello!
  calculateSum(5, 3); // Çıktı: Sum: 8
  