const request = require ('request')

const geocode = (address, callback) => {
    url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoid2FnbmVybWFjaGFkbyIsImEiOiJjazIzMWI4NmQxdWJ0M29xdDZyMmozNXg4In0.HHfbHSy_MdI886hInOo1zQ'
    request({url, json:true},(error, {body})=>{
    
        if(error)
        {
            callback('unable to connect to saehiauh', undefined)
        }else if (!body.features[0])
        {
            callback('eu duvido q vc mora ai, de qq forma, recomendo home office', undefined)

        } else
        {
           callback(undefined,{
                latitude: body.features[0].center[1],
                longitude:body.features[0].center[0],
                location: body.features[0].place_name
            } )

        }
    })

} 

module.exports = geocode