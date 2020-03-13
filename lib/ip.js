const getJSON = require("get-json")

exports.ip_iGet = function (ip) {
    let url = 'https://api.ipgeolocation.io';
    let ip_url = "https://api.ipgeolocation.io/ipgeo?apiKey=155f9c3ea8c34448993488b3f37a301d&ip="
    return getJSON(ip_url + ip)
}

exports.ip_i = function (res) {
    let output = (
        'continent          ' + res.continent_name +
        '\ncountry            ' + res.country_name +
        '\ncountry capital    ' + res.country_capital +
        '\ncity               ' + res.city +
        '\ndistrict           ' + res.district +
        '\nlatitude           ' + res.latitude +
        '\nlongitude          ' + res.longitude +
        '\nis eu              ' + res.is_eu +
        '\ncalling code       ' + res.calling_code +
        '\ncountry tld        ' + res.country_tld +
        '\nlanguages          ' + res.languages +
        '\ncountry flag       ' + res.country_flag +
        '\norganization       ' + res.organization
    )
    return output
}

exports.ip_aGet = function (ip) {
    let url = 'https://api.ipgeolocation.io/astronomy?apiKey=155f9c3ea8c34448993488b3f37a301d&ip='
    return getJSON(url + ip)
}

exports.ip_a = function (res) {
    let output = (
        'date                  ' + res.date
        + '\nsunrise               ' + res.sunrise
        + '\nsunset                ' + res.sunset
        + '\nsolar noon            ' + res.solar_noon
        + '\nday length            ' + res.day_length
        + '\nsun altitude          ' + res.sun_altitude
        + '\nsun distanse          ' + res.sun_distance
        + '\nsun azimuth           ' + res.sun_azimuth
        + '\nmoon rise             ' + res.moonrise
        + '\nmoon set              ' + res.moonset
        + '\nmoon altitude         ' + res.moon_altitude
        + '\nmoon distance         ' + res.moon_distance
        + '\nmoon azimuth          ' + res.moon_azimuth
    )
    return output
}

exports.ip_tGet = function (ip) {
    let url = "https://api.ipgeolocation.io/timezone?apiKey="
    +"155f9c3ea8c34448993488b3f37a301d&ip=13.1.1.1"

    return getJSON(url)
}

exports.ip_t = function (res) {
    let output = (
        'time zone        '+res.timezone
        +'\ndate time        '+res.date_time
        +'\ndate time text   '+res.date_time_txt
        +'\ntime 24          '+res.time_24
        +'\ntime 12          '+res.time_12
        +'\nweek             '+res.week
        +'\nmonth            '+res.month
        +'\nyear             '+res.year
        +'\nyear abbr        '+res.year_abbr
        +'\nis dst           '+res.is_dst
        +'\ndst saving       '+res.dst_savings
    )
    return output
}