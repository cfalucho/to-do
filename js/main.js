const listItem = document.querySelector(".listOfTo-Do ul")
const itemInput = document.querySelector("input")
const addItemBtn = document.querySelector("button")



listItem.innerHTML = '';



addItemBtn.onclick = function() {addItem()}

    
 
function addItem(){
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

        for(let i = 0; list.length; i++){
            list[0].style.background = 'red';

        }
      
    }
    else {
        console.log("empty string")
    }   




    

}




