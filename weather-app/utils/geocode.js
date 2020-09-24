const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicnVjaGl0YTExMCIsImEiOiJja2ZiMG5lcDcwdGdsMnVvNTE3ZG5qM2NtIn0.RptbxXX70DtvCwCxZOix0Q'

    request({url, json : true}, (error, {body}) => {
        if(error) {
            callback('unable to connect to location serv',undefined)
        }
        else if(body.features.length === 0) {
           callback('Unable to find location. Try another search',undefined)
        }
        else {
            callback(undefined, {
                latitude : body.features[0].center[0],
                longitude : body.features[0].center[1],
                location : body.features[0].place_name
            })
        }
    })
}




module.exports = geocode