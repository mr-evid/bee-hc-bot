const getJSON = require("get-json")

exports.number = function () {
    let url = 'http://api.open-notify.org/astros.json';

    return getJSON(url)
}


exports.people = function () {
    let url = 'http://api.open-notify.org/astros.json';

    return getJSON(url)
}

exports.people_proc = function (res) {
    var craft = [];
    var name = [];

    for (let k in res.people) {
        name.push(res.people[k].name)
        craft.push(res.people[k].craft)
    }

    var s_name = 'name    ' + name.join('\nname    ')
    var s_craft = 'craft   ' + craft.join('\ncraft   ')
    let output = ('\n' + s_name + '\n' + '-'.repeat(20) + '\n' + s_craft)
    return output
}


