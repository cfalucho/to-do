const listItem = document.querySelector(".listOfTo-Do ul")
const itemInput = document.querySelector("input")
const addItemBtn = document.querySelector("button")



listItem.innerHTML = '';



addItemBtn.onclick = function() {addItem()}

    
 
function addItem(name, color){
    if(itemInput.value !== ''){
        let list = document.createElement('li')
        list.textContent = itemInput.value
        listItem.appendChild(list)
    
    
        let removeTaskBtn = document.createElement('button')
        removeTaskBtn.textContent = "\u274C"
        removeTaskBtn.setAttribute('class', 'removeItem')
        listItem.append(removeTaskBtn)
    
        removeTaskBtn.addEventListener('click', function() {
            this.parentElement.removeChild(list)
            this.parentElement.removeChild(removeTaskBtn)
    
        }) 

      
    }
    else {
        console.log("empty string")
    }   




    

}

addItem('')


