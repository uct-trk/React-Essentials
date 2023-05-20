// enumda başlangıç değerini istediğimiz sayı ile başlatabiliriz.Default olarak sıfırdan başlar
// aşağıdaki örnek number içindir
enum Media {
    Newspaper = 1,
    NewsLatter,
    Magazine,
    Book
}

console.log(Media.Magazine) // 3 gözükecektir

// aşağıdaki örnek string enum örneğidir
enum PrintMedia {
    Newspaper = "NEWSPAPER",
    NewsLatter = "NEWSLATTER",
    Magazine = "MAGAZİNE",
    Book = "BOOK"
}

console.log(PrintMedia.NewsLatter) // NEWSLATTER değeri gözükecektir
console.log(PrintMedia["Book"])