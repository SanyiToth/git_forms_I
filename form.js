//4,5.
let form1 = document.getElementById('form-application')
let feedBack = document.getElementById('feedback')
let fullName = document.getElementById('fullname')

form1.addEventListener('submit', event => {
    event.preventDefault()
    feedBack.innerText = ''
    let nameFormat = /^[a-zA-Z]+ [a-zA-Z]+$/
    let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!fullName.value || form1.subject.value.length < 6 || !form1.email.value) {
        if (!fullName.value.match(nameFormat)) {
            feedBack.innerText = 'Wrong format of Name\n'
            fullName.required = true
        }
        if (form1.subject.value.length < 6) {
            feedBack.innerText += "Wrong length of Subject\n"
            form1.subject.required = true
        }
        if (!form1.email.value.match(emailFormat)) {
            feedBack.innerText += 'Wrong format of Email\n'
            form1.email.required = true
        }

    } else {
        window.alert("Form Sent!")
        feedBack.innerText = ''
    }
    console.log(fullName.value + ',' + form1.subject.value + ',' + form1.email.value + ',' + form1.message.value)
    console.log(fullName.validity.valid)
})


