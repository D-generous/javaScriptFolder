let allItems = ["Kunle", "Sola", "Fola", "Kola"];
// console.log(allItems)
function deleteMe(){
    // for (let index = 0; index < allItems.length; index++) {
    //     console.log(allItems[index])
    //     disp.innerHTML += `
    //     <h1>${allItems[index]}</h1>
    //     `
    // }

    // disp.innerHTML += `
    // <h1>${allItems[0]}</h1>
    // <h1>${allItems[1]}</h1>
    // <h1>${allItems[2]}</h1>
    // <h1>${allItems[3]}</h1>
    // `

    // var userName =userValue.value.split(",");
    // var startingPoint = userName[0];
    // var numberOfThingsToDelete = userName[1];
    // var replacement = userName[2];
    // allItems.splice(startingPoint,numberOfThingsToDelete,replacement);
    // // console.log(allItems)
    // for (let index = 0; index < allItems.length; index++) {
    //     console.log(allItems[index])
    //     disp.innerHTML += `
    //     <h1>${allItems[index]}</h1>
    //     `
    // }

    allItems.splice(userValue.value.split(",")[0],userValue.value.split(",")[1],userValue.value.split(",")[2]);
    console.log(allItems)
    
}