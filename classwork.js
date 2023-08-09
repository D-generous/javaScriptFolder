let allItems = ["Kunle", "Sola", "Fola", "Kola"]

function deleteMe(){
    var mySplice = document.getElementById("splicing").value
    allItems.splice(mySplice, 2)
    console.log(allItems)

}