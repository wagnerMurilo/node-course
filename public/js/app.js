
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')

message1.textContent = ''    
message2.textContent = ''


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    console.log(location)
    fetch('/weather?address='+location).then((response) => {
    response.json().then((data) => {
        console.log(data)
        if(data.error)
        {
            message1.textContent = data.error    
            message2.textContent = ''
        }else if(data.location=== '')
        {
        
            message1.textContent = data.error
        }
        else
        {
            message1.textContent = data.Location
            message2.textContent = data.Message
        }
    })
})
})