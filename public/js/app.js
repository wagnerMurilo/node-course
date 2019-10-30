
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')
message1.textContent = ''    
message2.textContent = ''


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('testing!')
    const location = search.value

    console.log(location)
    fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if(data.error)
        {
            message1.textContent = 'error'    
            message2.textContent = ''
        }else
        {
            message1.textContent = data.Location
            message2.textContent = data.Message
        }
    })
})
})