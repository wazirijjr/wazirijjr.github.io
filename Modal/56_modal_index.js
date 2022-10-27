const nodeBg =document.querySelector(".modal-background")
const closeNode = document.querySelector(".Close")
const openBtn =document.querySelector(".button")
const modalBox = document.querySelector(".modal-box")
openBtn.addEventListener('click',function(event){
    event.preventDefault()
   // console.log(openBtn)
    nodeBg.classList.add("active")
    modalBox.classList.add("active")
   
})

closeNode.addEventListener('click',function(event){
    event.preventDefault()
    //console.log(openBtn)
    nodeBg.classList.remove("active")
    modalBox.classList.remove("active")
   
})


//closeNode.addEventListener('click',function(event){
    



