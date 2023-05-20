let x:number = 15
let y:number = 25

if(x > y){
    console.log("x, y den büyüktür")
} 
else if(x < y){
    console.log("y, x den büyüktür")
}
else {
    console.log("eşittir")
}

let result:void = x > y ? console.log("x, y den büyüktür") : x < y ? console.log("y, x den büyüktür") :  console.log("eşittir")