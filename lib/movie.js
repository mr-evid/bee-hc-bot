const getJSON = require("get-json")
const fixed_url = require("./fixed_url")

//------------ search title ------------//

exports.out_T = function (res) {
	return (
		'\nTitle          ' + res.Title +
		'\nYear           ' + res.Year +
		'\nReleased       ' + res.Released +
		'\nRuntime        ' + res.Runtime +
		'\nGenre          ' + res.Genre +
		'\nDirector       ' + res.Director +
		'\nWriter         ' + res.Writer +
		'\nActors         ' + res.Actors +
		'\nLanguage       ' + res.Language +
		'\nCountry        ' + res.Country +
		'\nAwards         ' + res.Awards +
		'\nTotal seasons  ' + res.totalSeasons +
		'\nImdb rating    ' + res.imdbRating +
		'\nPoster         ' + res.Poster +
		'\nPlot           ' + res.Plot
	)
}

//----------- search movie -------------//

exports.get_S = function (api){
	// let url = fixed_url(api)   -> if everything is fine use it.
	return getJSON (api)
}

exports.out_S1 = function (res) {
	var result = res.Search;
	var a = [];

	for (let k in result) {
		a.push("Title : " + result[k].Title + "\n")
	}
	return (a.join(''))
}

exports.out_S2 = function (res) {
	var result = res.Search;
	var a = [];

	for (let k in result) {
		a.push(
			"Title : " + result[k].Title + "\n" +
			"Type : " + result[k].Type + "\n"
		)
	}
	return (a.join(''))
}

exports.out_S3 = function (res) {
	var result = res.Search;
	var a = [];

	for (let k in result) {
		a.push(
			"Title :  " + result[k].Title + "\n" +
			"Type  :  " + result[k].Type + "\n" +
			"Year  :  " + result[k].Year + "\n"
		)
	}
	return (a.join(''))
}

exports.out_S4 = function (res) {
	var result = res.Search;
	var a = [];

	for (let k in result) {
		a.push(
			"Title :  " + result[k].Title + "\n" +
			"Year  :  " + result[k].Year + "\n"
		)
	}
	return (a.join(''))
}