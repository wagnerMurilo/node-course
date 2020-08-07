const astro = document.querySelector('#astro')
const astroMessage1 = document.querySelector('#astroMessage1')
const astroMessage2 = document.querySelector('#astroMessage2')
const astroMessage3 = document.querySelector('#astroMessage3')
const astroMessage4 = document.querySelector('#astroMessage4')
const astroMessage5 = document.querySelector('#astroMessage5')
const astroImage = document.querySelector('#astroImg')

astroMessage1.textContent = ''    
astroMessage2.textContent = ''
astroMessage3.textContent = ''    
astroMessage4.textContent = ''
astroMessage5.textContent = ''

astro.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('gotit')
    fetch('/news1').then((response) => {
        response.json().then((data) => {
            
            console.log(data)
            if(data.error)
            {
                astroMessage1.textContent = data.error    
                astroMessage2.textContent = 'asieuhsaiuehiushiruaeriuahdsiu'
            }
            else
            {
                astroMessage1.textContent = 'O seu elemento e: ' + data.sentence
            }
        })
    })

    fetch('/news1').then((response) => {
        response.json().then((data) => {
                
            console.log(data)
            if(data.error)
            {
                astroMessage1.textContent = data.error    
                astroMessage2.textContent = 'asieuhsaiuehiushiruaeriuahdsiu'
            }
            else
            {
                    astroMessage2.textContent = 'Seu animal e: ' + data.sentence
            }
            })
        })

        fetch('/news1').then((response) => {
            response.json().then((data) => {
                    
                console.log(data)
                if(data.error)
                {
                    astroMessage1.textContent = data.error    
                    astroMessage2.textContent = 'asieuhsaiuehiushiruaeriuahdsiu'
                }
                else
                {
                        astroMessage3.textContent = 'Fruta/verdura/legume ' + data.sentence
                }
                })
            })

            fetch('/news1').then((response) => {
                response.json().then((data) => {
                        
                    console.log(data)
                    if(data.error)
                    {
                        astroMessage1.textContent = data.error    
                        astroMessage2.textContent = 'asieuhsaiuehiushiruaeriuahdsiu'
                    }
                    else
                    {
                            astroMessage4.textContent = 'Palavra da sorte ' + data.sentence
                    }
                    })
                })
    
    let randomAstro =Math.random()
    console.log(randomAstro)
    if(astroMessage5.textContent === '')
    {
        if(randomAstro<0.2)
        {
            astroMessage5.textContent = 'Cuidado ao beber cafe no sol pois pode entortar a boca'    
            
        }else if(0.4>randomAstro>0.2)
        {
            astroMessage5.textContent = 'Seu primo do interior vai te chamar pra andar de cavalo'   
            
        }else if(0.6>randomAstro>0.4)
        {
            astroMessage5.textContent = 'Alguem colocou uma sementinha no seu ventre'    
            
        }else if(0.8>randomAstro>0.6)
        {
            astroMessage5.textContent = 'O nome "Adenor" traz bom olhado, voce devia tatuar ele na bunda'    
                    }
        else
        {
            astroMessage5.textContent = 'Nao acredite no que os outros dizem, acredite em apps que geram palavras randomicas'    
            
        }
    }
})
