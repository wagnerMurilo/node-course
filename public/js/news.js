const news = document.querySelector('#news')
const newsMessage1 = document.querySelector('#newsMessage1')
const newsMessage2 = document.querySelector('#newsMessage2')
const newsImage = document.querySelector('#newsImage')

newsMessage1.textContent = ''    
newsMessage2.textContent = ''
newsImage.src = 'img/null.jpg'

news.addEventListener('submit', (e) => {
    e.preventDefault()

fetch('/news1234').then((response) => {
    response.json().then((data) => {
        let randomNews =Math.random()
        if(randomNews<0.2)
        {
            newsMessage2.textContent = 'Jornalista do jornal direitaonline.org'    
            newsImage.src ='img/News1.jpg'
        }else if(0.4>randomNews>0.2)
        {
            newsMessage2.textContent = 'Colunista do jornal folha de'   
            newsImage.src ='img/News2.jpg'
        }else if(0.6>randomNews>0.4)
        {
            newsMessage2.textContent = 'Jornalista do jornal DemiLovatoNews'    
            newsImage.src ='img/News3.jpg'
        }else if(0.8>randomNews>0.6)
        {
            newsMessage2.textContent = 'Estudante'
            newsImage.src ='img/News4.jpg'
        }
        else
        {
            newsMessage2.textContent = 'Rei da Belgica'
            newsImage.src ='img/News5.jpg'
        }
    
        console.log(data)
        if(data.error)
        {
            newsMessage1.textContent = data.error    
            newsMessage2.textContent = 'asieuhsaiuehiushiruaeriuahdsiu'
        }
        else
        {
                newsMessage1.textContent = data.sentence
            
        }
        })
    })
})