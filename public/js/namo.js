const namo = document.querySelector('#namo')
const namoMsg1 = document.querySelector('#namoMsg1')
const namoMsg2 = document.querySelector('#namoMsg2')
const namoImg = document.querySelector('#namoImg')

namoMsg1.textContent = ''    
namoMsg2.textContent = ''
namoImg.src ='img/null.jpg'

namo.addEventListener('submit', (e) => {
    e.preventDefault()
    let randomNamo =Math.random()
    console.log(randomNamo)
    if(namoMsg1.textContent === '')
    {
        if(randomNamo<0.2)
        {
            namoMsg1.textContent = 'O seu namorado e o Bernardo'    
            namoMsg2.textContent = 'Ele e romantigo, gosta de cavalgadas no parque, cinefilo e zoofilo, tem musculos definidos e coloca chantily no imbigo pra vc lambe'
            namoImg.src ='img/Namo1.jpg'

        }else if(0.4>randomNamo>0.2)
        {
            namoMsg1.textContent = 'O seu namorado e o Breno'   
            namoMsg2.textContent = 'Ele e corajoso como um tigre, forte como um lobo, voraz como uma hiena. Ele tb e esperto como uma lebre. Pessoas dizem q ele tb e astuto como um leopardo e agil como um gorila. A mae dele fala q ele e forte como um chipanze. Ele e modesto como um avestruz e diz apenas trabalhar duro como um rinoceronte'
            namoImg.src ='img/Namo2.jpg'
        }else if(0.6>randomNamo>0.4)
        {
            namoMsg1.textContent = 'Seu namorado e o Jurandir'    
            namoMsg2.textContent = 'Pau pra toda obra. Otimo pai, construiu uma casa para as filhas com as proprias maos, onde mantem elas trancadas. Ele tambem e pintor, motoboy, medico em medicina e artezao, mas perdeu o ar quando te viu e ficou com tezao.'
            namoImg.src ='img/Namo3.jpg'
        }else if(0.8>randomNamo>0.6)
        {
            namoMsg1.textContent = 'Seu namorado e o Samuel'    
            namoMsg2.textContent = 'Gamer, geek, programador full stack, tem um podcast e e fullrange. Seu super heroi favorito e o Pantera Verde e e fa de star trek(guerra nas estrelas)'
            namoImg.src ='img/Namo4.jpg'
        }
        else
        {
            namoMsg1.textContent = 'Gerador de namorado nao conseguiu encontrar um namorado pra vc'    
            namoMsg2.textContent = ''
            namoImg.src ='img/null.jpg'
        }
    }
    })