const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a353b75c716128ca63d73450226d87c4/'+latitude+','+longitude+'?units=si'
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
            callback(undefined, body.daily.data[0].summary + ' it is currently ' + body.currently.temperature + ' degrees out with '+ body.currently.precipProbability  + ' percent of chance to rain')
        }
    })
 }

 module.exports = forecast