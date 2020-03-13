const getJSON = require("get-json")

exports.get = function (country){
    api = 'https://restcountries.eu/rest/v2/name/';
    url = api + country;

    return getJSON(url)
}

exports.out = function (res) {
    var a = []
    for(let k in res){
        a.push (
            'country name        '+res[k].name +
            '\ncountry code ISO2   '+res[k].alpha2Code +
            '\ncountry code ISO3   '+res[k].alpha3Code +
            // '\nflag                '+res[k].flag +
            '\n'+'-'.repeat(24)
        )
    }
    return a.join("\n")
}