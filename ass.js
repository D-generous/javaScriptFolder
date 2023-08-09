function myAdd(){
    var myAdding = adder.value;
    for (let index = 0; index < myAdding.length; index++) {
        // console.log(myAdding)  
    }
    console.log(myAdding)
    disp.innerHTML += `
    <p>${myAdding} <button onclick="myEdit()">Edit</button> <button onclick="myDelete()">Delete</button></p>
    `
}



function myEdit(){
    var editUser = []
    var myEditing = prompt("Enter the value you want to Edit");
    editUser.splice(0,1,myEditing);
    console.log(editUser)
    disp.innerHTML = `
    <p>${editUser} <button onclick="myEdit()">Edit</button> <button>Delete</button></p>
    `
}
function myDelete(){
    var deleteUser = []
    deleteUser.pop()
    disp.innerHTML = `
    <p>${deleteUser}</p>
    `
}