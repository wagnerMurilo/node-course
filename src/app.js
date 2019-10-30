const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app = express()

const port = process.env.PORT || 3000
//define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine nd views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//setup express static directory
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        name:'wagner',
        age:'28',
        title:'nd n'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        name:'wagner',
        age:'28',
        title:'vendo corsel 87'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        name:'leon',
        age:'28',
        title:'HEEEELP'
    })
})

app.get('/astro', (req, res) => {
    res.render('astro', {
        name:'olavo de caraio',
        age:'28',
        title:'gerador de astrologias'
    })
})

app.get('/deus', (req, res) => {
    res.render('deus', {
        name:'coca cola company',
        age:'28',
        title:'benca online'
    })
})

app.get('/news', (req, res) => {
    res.render('news', {
        name:'bot de feliz aniversario automatico',
        age:'28',
        title:'opiniao dos especialistas do jornal'
    })
})

app.get('/senso', (req, res) => {
    res.render('senso', {
        name:'devolva minha fantasia',
        age:'28',
        title:'repositorio de moral'
    })
})

app.get('/namo', (req, res) => {
    res.render('namo', {
        name:'criacionismo, eu sou uma webpage q nao preciso me questionar, pois äe sö fechar os olhos e',
        age:'28',
        title:'gerador de namorado'
    })
})

app.get('/weather', (req, res) => {
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error)
        {
            return res.send(error)    
        } else
        {
            forecast(latitude, longitude, (error, forecastMessage) => {
                if(error)
                {
                    return send(error)
                } else
                {
                    return res.send({
                        Location: location,
                        Message: forecastMessage,
                        address: req.query.address}
                        )
                }
            } )
            
        }
    })    
})

app.get('*', (req, res) => {
    res.render('404', {
        name:'wagner',
        age:'28',
        title:'404'
    })
})

app.listen(port, () => {
    console.log('app running on port '+port)
})