const getJSON = require("get-json")

exports.get = function (country){
    let api = 'https://restcountries.eu/rest/v2/name/';
    let url = api + country;
    return getJSON(url)
}

exports.out = function (res) {
    for (let k in res) {
        let output = (
            'country name      ' + res[k].name +
            '\ncountry code      ' + res[k].alpha3Code +
            '\ncurrency name     ' + res[k].currencies[k].name +
            '\ncurrency code     ' + res[k].currencies[k].code +
            '\ncurrency symbol   ' + res[k].currencies[k].symbol +
            '\ncapital           ' + res[k].callingCodes[k]
        )
        return output
    }
}