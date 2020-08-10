const kkkkkj = document.querySelector('#pudolbtn')
const pudolTexto = document.querySelector('#pudolTexto')
const assImage = document.querySelector('#assImage')

assImage.src = 'img/nullinho.jpg'
pudolTexto.textContent = ''
    function setup() {
        let canvarrr= createCanvas(600, 600).parent(between);
       // pdf = createPDF();
       // pdf.beginRecord();
      }
      
      function draw() {
        stroke(0);
       // text("isso 'e um pudol", width * 0.5, height * 0.5);
    
        if (mouseIsPressed === true) {
          line(mouseX, mouseY, pmouseX, pmouseY);
        }
        
        
            
            // 
      }

      kkkkkj.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log("sl mano")
        pudolTexto.textContent = 'o presente objeto assima e um pudol ass presidente do comite internacional dos pudol'
        assImage.src = 'img/ass.png'
        //saveCanvas( pudol,".png")
        })
