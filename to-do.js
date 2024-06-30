const inputBox = document.getElementById("Input-Box");
const listContainer = document.getElementById("list-container");

functionaddTask(){
    if(inputBox.value === ''){
        alert("You must have to write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}ṣṅṁ