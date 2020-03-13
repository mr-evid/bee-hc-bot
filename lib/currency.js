const getJSON = require("get-json")


exports.get_u = function (u1, u2) {
	let url = 'https://free.currencyconverterapi.com/api/v6/convert?apiKey=4bc2a08270e3ce1f4897&q='
	+ u1 + '_' + u2 + '&compact=ultra'

	return getJSON(url)

}

exports.out_u = function (res, u1, u2) {
	for (let k in res) {
		return (
			'1 ' + u1 + " = " + JSON.stringify(res[k]) + ' ' + u2
		)
	}
}