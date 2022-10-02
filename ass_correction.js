var allToDo = []
var toDoOfUser = ""
// var toDoOfUser = inp.value  
function addTodo() {
    toDoOfUser = inp.value
    inp.value = ""

    if (toDoOfUser=="") {
        alert('empty todo list')
        disp.innerHTML="" 
    }

    else{
        allToDo.push(toDoOfUser)
        console.log(allToDo)
        
        // disp.innerHTML = ""
        // for (let index = 0; index < allToDo.length; index++) {
        //     disp.innerHTML += `
        //     <tr> 
        //     <td>${index}</td>
        //     <td><h1>${allToDo[index]}</h1></td>
        //     <td><button onclick="deleteItem(${index})">Delete</button></td>
        //     <td><button>Edit</button></td>
        //     </tr>
        //     `
        // }

        displayTodo()

    }
}
function displayTodo(){
    disp.innerHTML = ""
    for (let index = 0; index < allToDo.length; index++) {
        disp.innerHTML += `
        <tr> 
        <td>${index}</td>
        <td><h1>${allToDo[index]}</h1></td>
        <td><button onclick="deleteItem(${index})">Delete</button></td>
        <td><button onclick="editItem(${index})">Edit</button></td>
        </tr>
        `
    }
}
function deleteItem(i){
    // alert(i)
    allToDo.splice(i,1)
    console.log(allToDo)
    displayTodo()
}
function editItem(j){
    // console.log(j)
    var myEdit = prompt("Edit your Todo")
    // allToDo.splice(j,1,myEdit) 
    // or
    allToDo[j] = myEdit
    console.log(allToDo)
    displayTodo()
}

    function deleteAllTodo() {
    allToDo.splice(0, allToDo.length)
    disp.innerHTML = allToDo
}