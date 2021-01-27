//1,2,3

let elForm = document.querySelector('form')
let elInput = document.getElementById("text")
let elCheck = document.getElementById("terms")
let paragraph = document.getElementById("form-feedback")

elForm.addEventListener("submit", event => {
    event.preventDefault()
    if (elInput.value.length <= 5 || elInput.value.length > 9) {
        paragraph.innerText += ("length must between 6 and 10 characters")
    }
    console.log(elInput.value)
    paragraph.innerText += elInput.value + "," + elForm.terms.checked

})








