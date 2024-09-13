const box = document.getElementById("item-box") // div onde fica os produtos
const form = document.querySelector("form")
const input = document.getElementById("item")
const p = document.querySelector(".text-muted")
let inputNumberID = 0
let qtndListItem = 0

form.onsubmit = (e) => {
    e.preventDefault()
    
    // cria uma 'row'
    const newRow = document.createElement("div") 
    newRow.classList.add("row", "p-3", "m-3", "shadow", "rounded-3")
    newRow.setAttribute("draggable", "true")
    qtndListItem++
    
    if(qtndListItem != 0){
        p.classList.add("d-none")
    }
    

    // cria uma 'col'
    const newCol = document.createElement("div")
    newCol.classList.add("col", "d-flex", "gap-2")

    // cria o lixinho
    const newCol1 = document.createElement("div")
    newCol1.classList.add("col-1")
    const newTrash = document.createElement("i")
    newTrash.classList.add("bi", "bi-trash", "secondary-color", "fs-5")
    newTrash.onclick = () =>{
        newRow.remove()
        qtndListItem--
        if(qtndListItem === 0){
            p.classList.remove("d-none")
        }
    }

    // cria input
    const newInput = document.createElement("input")
    newInput.setAttribute("type" ,"checkbox")
    newInput.id = `list-item${++inputNumberID}`
    newInput.classList.add("form-check-input", "rounded-circle", "form-control-md")
    newInput.addEventListener("change", () => {
        if(newInput.checked){
            newRow.classList.add("checked")
            newLabel.classList.add("text-decoration-line-through")
        }
        else{
            newRow.classList.remove("checked")
            newLabel.classList.remove("text-decoration-line-through")

        }
    })

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
    input.value = ""
    console.log(qtndListItem)

}

new Sortable(box, {
    animation: 350
})
