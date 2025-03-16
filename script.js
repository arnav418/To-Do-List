const button = document.getElementById('text-btn');
let textField = document.getElementById('text-inp');
let listItems = document.querySelector('ol');
let head = document.querySelector('h1');

button.addEventListener("click", function() {
    if (textField.value === "") {
        head.textContent = "Put Some task ⚠️";
        alert("Add Task in Input");
        
    }
    
    else {
        let storage = textField.value;
        console.log(storage);
        let dataStorage = document.createElement("li"); 
        dataStorage.textContent = storage; 
        listItems.appendChild(dataStorage); 
        textField.value = ""; 
        dataStorage.addEventListener('click',function(){
        setTimeout(listItems.removeChild(dataStorage),500);
        });
    }
    
});



