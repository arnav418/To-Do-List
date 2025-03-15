const button = document.getElementById('text-btn');
let textField = document.getElementById('text-inp');
let listItems = document.querySelector('ul');

button.addEventListener("click", function() {
    if (textField.value === "") {
        alert("Add Task in Input");
    } else {
        let storage = textField.value;
        console.log(storage);
        let dataStorage = document.createElement("li"); 
        dataStorage.textContent = storage; 
        listItems.appendChild(dataStorage); 
        textField.value = ""; 
    }
});

