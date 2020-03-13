// need :
// breed
const getJSON = require("get-json")

exports.by_breed_random = function (breed) {
    var url = 'https://dog.ceo/api/breed';
    var by_breed_all_link = url + '/' + breed + '/images';
    var by_breed_random_link = by_breed_all_link + '/random';

    return getJSON(by_breed_random_link)
}

exports.by_breed_all = function (breed) {
    var url = 'https://dog.ceo/api/breed';
    var by_breed_all_link = url + '/' + breed + '/images';

    return getJSON(by_breed_all_link)
}

exports.list = function () {
    var url = "https://dog.ceo/api/breeds/list/all"
    return getJSON(url)
}