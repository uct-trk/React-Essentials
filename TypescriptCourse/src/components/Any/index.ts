// typescript any 
// any kullanırken veri tipi değişse bile hata fırlatmaz
let something : any = "tip ne gelirse gelsin hata vermez"
something = {
    firstName: "Ugurcan",
    lastName: "Turk" 
}
console.log(something)


const arrAny: Array<any> = [1,"selam",false]
console.log(arrAny)