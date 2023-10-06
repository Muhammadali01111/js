const son = prompt("Son kiriting")
if(son % 3 == 0 && son % 5 == 0){
    document.write("FizzBuzz")
} else if(son % 3 == 0){
    document.write("Fizz")
} else if(son % 5 == 0){
    document.write("Buzz")
} else {
    document.write(`${son} 3ga ham 5ga ham bo'linmaydi`)
}
// const name = prompt("Kim bor")

// if(name == "admin"){
//     const password = prompt("parolni kiriting:")
//  if(password == "123"){
//     document.write("Xush kelibsiz")
// } else if(password == null){
//     document.write("Canceled")
// } else{
//     document.write("login noto'g'ri")
// }
// } else if(password == null){
//     document.write("Canceled")
// } else{
//     document.write("parol noto'g'ri")
// }