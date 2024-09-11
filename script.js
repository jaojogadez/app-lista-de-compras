const box = document.getElementById("item-box") // div onde fica os produtos
const form = document.querySelector("form")
const input = document.getElementById("item")
let inputNumberID = 0

form.onsubmit = (e) => {
    e.preventDefault()
    
    // cria uma 'row'
    const newRow = document.createElement("div") 
    newRow.classList.add("row", "p-3", "m-3", "shadow", "rounded-3")

    // cria uma 'col'
    const newCol = document.createElement("div")
    newCol.classList.add("col", "d-flex", "gap-2")

    // cria o lixinho
    const newCol1 = document.createElement("div")
    newCol1.classList.add("col-1")
    const newTrash = document.createElement("i")
    newTrash.classList.add("bi", "bi-trash", "secondary-color", "fs-5")

    // cria input
    const newInput = document.createElement("input")
    newInput.setAttribute("type" ,"checkbox")
    newInput.id = `list-item${++inputNumberID}`
    newInput.classList.add("form-check-input", "rounded-circle", "form-control-md")

    // cria label
    const newLabel = document.createElement("label")
    newLabel.setAttribute("for", `list-item${inputNumberID}`)
    newLabel.textContent =  input.value
    newLabel.classList.add("w-100")


    
    newCol.appendChild(newInput)
    newCol.appendChild(newLabel)

    newCol1.appendChild(newTrash)
    newRow.appendChild(newCol)
    newRow.appendChild(newCol1)

    box.appendChild(newRow)
}

