const news = document.querySelector('#news')
const newsMessage1 = document.querySelector('#newsMessage1')
const newsMessage2 = document.querySelector('#newsMessage2')

newsMessage1.textContent = ''    
newsMessage2.textContent = ''

news.addEventListener('submit', (e) => {
    e.preventDefault()

fetch('/news1234').then((response) => {
    response.json().then((data) => {
        console.log(data)
        if(data.error)
        {
            newsMessage1.textContent = data.error    
            newsMessage2.textContent = ''
        }
        else
        {
            newsMessage1.textContent = data.sentence
            newsMessage2.textContent = ''
        }
        })
    })
})