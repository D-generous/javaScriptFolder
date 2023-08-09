var myArray = ["Emmanuel", "Wasiu", "Dolapo", "Kunle", "Quawiyy", "Cynthia", "Bukky", "Taoheed", "Abeeb"]
console.log(myArray)
// myArray.splice(2, 0, "kkk", "mmm")
function mySlice(){
    var myBest = myArray.slice(1, 4);
    console.log(myBest)
}
function mySplice(){
    // myArray.splice(3, 0, "kk", "rr", "bb");
    // myArray.splice(2, 2,)
    console.log(myArray)
}
function mySort(){
    myArray.sort()
    console.log(myArray)
}
function myShift(){
    myArray.shift()
    console.log(myArray)
}
function myUnshift(){
    var answer = prompt("Enter the value you want to splice")
    myArray.unshift(answer)
    console.log(myArray) 
}
