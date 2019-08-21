function addTodo (event){
    const item = document.createElement('li')
    const input = document.querySelector('#item')
    item.innerText = input.value 
    const list = document.querySelector("ul")
    list.appendChild(item)
}

window.addEventListener