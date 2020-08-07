const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a353b75c716128ca63d73450226d87c4/'+latitude+','+longitude+'?units=si&lang=en'
    request({url, json:true}, (error, {body}) => {
        if (error)
        {
            callback(error, undefined)

        } else if (body.error)
        {
            callback(body.error, undefined)

        }
        else 
        {
            if(body.currently.temperature>20 && body.currently.precipProbability<50)
            {
                callback(undefined, body.daily.data[0].summary + '. Ta ' + body.currently.temperature + ' graus, com '+ body.currently.precipProbability  + ' % de chance de chuva, recomendo ir trabalhar pelado ctz')

            }
            else if (body.currently.temperature>20 && body.currently.precipProbability>=50)
            {
                callback(undefined, body.daily.data[0].summary + '. Ta ' + body.currently.temperature + ' graus, com '+ body.currently.precipProbability  + ' % de chance de chuva, pode ir pelado com uma galoxa')
    
            }
            else if (body.currently.temperature<5)
            {
                callback(undefined, body.daily.data[0].summary + '. Ta ' + body.currently.temperature + ' graus, com '+ body.currently.precipProbability  + ' % de chance de chuva, pode ir pelado de sobretudo')
    
            }
            else if (body.currently.temperature<20)
            {
                callback(undefined, body.daily.data[0].summary + '. Ta ' + body.currently.temperature + ' graus, com '+ body.currently.precipProbability  + ' % de chance de chuva, pode ir pelado com uma camisa social estilera')
    
            }
            else
            {
                callback(undefined, 'Nesse caso n da pra trabalhar pelado')
    
            }
        }
    })
 }

 module.exports = forecast