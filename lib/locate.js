exports.geo = function (res) {
    if (res.results) {
        var r = res.results[0]
        var a = r.annotations

        // geo
        var j = {
            "type": r.components._type,
            "city": r.components.city,
            "city_district": r.components.city_district,
            "continent": r.components.continent,
            "country": r.components.country,
            "county": r.components.county,
            "house_number": r.components.house_number,
            "neighbourhood": r.components.neighbourhood,
            "political_union": r.components.political_union,
            "postcode": r.components.postcode,
            "road": r.components.road,
            "state": r.components.state,
            "state_district": r.components.state_district,
            "suburb": r.components.suburb,
            "map_url": a.OSM.url
        }

        let k;
        for (k in j) {
            if (j[k] === undefined) {
                j[k] = "-"
            }
        }

        return (
            `Type                   ` + j.type +
            `\nmap                    ` + j.map_url +
            `\ncity                   ` + j.city +
            `\ncity district          ` + j.city_district +
            `\ncontinent              ` + j.continent +
            `\ncountry                ` + j.country +
            `\ncounty                 ` + j.county +
            `\nhouse number           ` + j.house_number +
            `\nneighbourhood          ` + j.neighbourhood +
            `\npolitical union        ` + j.political_union +
            `\npostcode               ` + j.postcode +
            `\nroad                   ` + j.road +
            `\nstate                  ` + j.state +
            `\nstate district         ` + j.state_district +
            `\nsuburb                 ` + j.suburb
        )

    }
    else {
        return "can't get results"
    }
}

exports.currency = function (res) {
    if (res.results) {
        var r = res.results[0]
        var a = r.annotations

        // --currency
        var j = {
            'iso_code': a.currency.iso_code,
            'name': a.currency.name,
            'subunit': a.currency.subunit,
            'symbol': a.currency.symbol,
            'subunit_to_unit': a.currency.subunit_to_unit
        }
    
        let k;
        for (k in j) {
            if (j[k] === undefined) {
                j[k] = "-"
            }
        }

        return (
            `iso code         ` + j.iso_code +
            `\nname             ` + j.name +
            `\nsymbol           ` + j.subunit +
            `\nsubunit          ` + j.subunit +
            `\nsubunit to unit  ` + j.subunit_to_unit
        )
    }
    else {
        return "can't get results"
    }
}

exports.detail = function (res) {
    if (res.results) {
        var r = res.results[0]
        var a = r.annotations

        // --detail
        var j = {
            'lat' : a.DMS.lat ,
            'lang' : a.DMS.lng ,
            'x' : a.Mercator.x ,
            'y' : a.Mercator.y ,
            'time_zone_name' : a.timezone.name ,
            'formatted' : r.formatted ,
            'calling_code' : a.callingcode ,
            'roadinfo' : a.roadinfo.road
        }

        let k;
        for (k in j) {
            if (j[k] === undefined) {
                j[k] = "-"
            }
        }

        return (
            `lat            `+ j.lat +
            `\nlang           `+ j.lang +
            `\nx              `+ j.x +
            `\ny              `+ j.y +
            `\ntime zone      `+ j.time_zone_name +
            `\nformatted      `+ j.formatted +
            `\ncalling code   `+ j.calling_code +
            `\nroad info      `+ j.roadinfo
        )
    }
    else {
        return "can't get results"
    }
}