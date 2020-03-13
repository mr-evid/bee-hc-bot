const websocket = require('ws');
const ws = new websocket('wss://hack.chat/chat-ws');
const getJSON = require('get-json')
const cheerio = require("cheerio")
const request = require("request")

const help_itself = require("./lib/help-itself")
const help = require("./lib/help")
const emoji_file = require("./lib/emoji")
const dog = require("./lib/dog")
const astro = require("./lib/astro")
const IP = require("./lib/ip")
const Country = require("./lib/country")
const ccode = require("./lib/ccode")
const currency = require("./lib/currency")
const movie = require("./lib/movie")
const fixed_url = require("./lib/fixed_url")
const locate = require("./lib/locate")

//          	<< join >>
ws.on('open',
	function open() {
		join = JSON.stringify({
			cmd: 'join',
			channel: 'bee',
			// channel: 'bee' ,
			nick: "Bee" + "#" + "pass"
		});
		ws.send(join);
	}
);

// this event is updated every time getting or sending a message.
ws.on('message', function incoming(data) {
	data = JSON.parse(data)
	var nick = data.nick;
	var text = data.text;
	var trip = data.trip;

	var msg = { cmd: 'chat', text: "" }

	function sender(txt) {
		msg.text = txt;
		ws.send(JSON.stringify(msg))
	}

	// initialize color when joining
	if (text === undefined) { sender(`/color ffff00`) }

	try {
		// ------ < initialize commands > ---- //
		if (text !== undefined && text.charAt(0) !== undefined && nick.toLowerCase() !== 'bee'
			&& trip !== "Bee/1N") {
			var splited = text.split(' ');
			var command = splited[0].toLowerCase();
			var Trip = trip

			// one word after para
			function para_recogniser(para) {
				var c = text.indexOf(para.toLowerCase(), command.length);
				var c2 = text.slice(c).split(' ');
				var c3 = c2[1]
				return c3
			}
			// from the para to the end
			function fromx_toend(para) {
				var i = text.indexOf(para)
				var s = text.slice(i + 3)
				return s
			}

			// ------  < bot responds >  -------- //
			// echo (to test bot)
			if (command == '$echo') sender(text.slice(6));

			// help
			if (command == '$help'
				|| (command.toLowerCase() == 'bee' && trip !== "Bee/1N")
			) {
				let _h = !text.match(/-h/gi);
				// If not help pro
				if (_h)
					sender(help_itself.main())
			}
			// pro help
			if (command === '$help') {
				var ph = para_recogniser('-h')
				var help_to_send = help.helper(ph)
				sender(help_to_send)
			}
			// about me
			if (command === '$profile') {
				sender(
					'a bot for hack.chat made by: \n' + `\${\\color{lightblue}\\text{LtPGv4}}$`
					+ ' aka ltp aka YouthLife'
				)
			}
			if (command === '$lang') {
				sender("Bee is written in JavaScript (NodeJS)")
			}
			//     << dog >>
			if (command == '$dog') {
				var breed = fixed_url.fix_url(para_recogniser('-b'))

				if (text === '$dog') {
					var url = 'https://dog.ceo/api/breeds/image/random'
					getJSON(url, function (err, res) {
						sender(res.message)
					})
				}
				else if (breed !== undefined) {
					if (text.match(/-a/gi)) {
						dog.by_breed_all(breed).then(
							function (res) {
								sender(
									data.nick + " request : " +
									res.message.join('\n') + ' '.repeat(1000)
								)
							}
						).catch(function (error) { sender(error) })
					}
					else {
						dog.by_breed_random(breed).then(
							function (response) {
								sender(response.message)
							}
						).catch(function (error) { sender(error) })
					}
				}
				if (text.match(/-l/gi)) {
					dog.list().then(
						function (res) {
							var result = JSON.stringify(res.message)
							var RL = result.length;
							var half1 = result.slice(0, RL * 1 / 2)
							var half2 = result.slice(RL * 1 / 2, RL)
							sender(half1);
							sender(half2);
						}
					).catch(function (error) { sender(error) })
				}

			}
			// repeat
			if (command === '$repeat' && text.match(/-w/gi)) {
				try {
					var times = para_recogniser('-t');
					var w = text.indexOf('-w');
					var wo = text.slice(w + 3, text.indexOf('-t'))
					var word = wo.replace(/ /gi, ' ')
					var result = word.repeat(times)
					if (result.length > 858) {
						sender('are you mad ?')
					}
					else {
						sender(word.repeat(times))
					}
				}
				catch (e) { console.log(e) }
			}
			// astro things
			if (command === '$astro') {
				if (text.match(/-n/gi)) {
					astro.number().then(
						function (res) {
							sender(res.number + ' people are in space.')
						}
					).catch(
						function (error) { sender(error) }
					)
				}
				if (text.match(/-p/gi)) {
					astro.people().then(
						function (res) {
							sender(astro.people_proc(res))
						}
					).catch(
						function (error) { sender(error) }
					)
				}
			}

			// IPv4
			if (command === '$ip') {
				var ip = para_recogniser('-i')
				let url = 'https://api.ipgeolocation.io';

				if (text === '$ip') {
					sender('get your ip : ' + url + '/getip')
				}
				if (text.match(/-i/gi) && para_recogniser('-i')
					&& !text.match(/-t/gi) && !text.match(/-a/gi)) {
					IP.ip_iGet(ip).then(
						function (res) {
							sender(IP.ip_i(res))
						}
					).catch(
						function (error) { sender(error) }
					)
				}
				if (text.match(/-a/gi) && para_recogniser('-i')
					&& text.match(/-i/gi)) {
					IP.ip_aGet(ip).then(
						function (res) {
							sender(IP.ip_a(res))
						}
					).catch(
						function (error) { sender(error) }
					)
				}
				if (text.match(/-i/gi) && para_recogniser('-i')
					&& text.match(/-t/gi)) {
					IP.ip_tGet(ip).then(
						function (res) {
							sender(IP.ip_a(res))
						}
					).catch(
						function (error) { sender(error) }
					)
				}
			}
			// country info
			if (command === '$country') {
				var country = fixed_url.fix_url(para_recogniser('-c'))
				if (text.match(/-c/gi) && country) {
					Country.get(country).then(
						function (res) {
							sender(Country.out(res))
						}
					).catch(function (error) { sender(error) })
				}
			}
			// country code ISO 3 and ISO 2
			if (command === '$ccode') {
				// var country = (para_recogniser('-c'))
				var country = fixed_url.fix_url(para_recogniser('-c'))
				if (text.match(/-c/gi) && country) {
					ccode.get(country).then(
						function (res) {
							sender(ccode.out(res))
						}
					).catch(function (e) { sender('Error!') })
				}
			}
			// holiday
			if (command === '$holiday') {
				sender("in progress")
			}
			// currency
			if (command === '$currency') {
				var u1 = fixed_url.fix_url(para_recogniser('-u1'))
				var u2 = fixed_url.fix_url(para_recogniser('-u2'))

				if (u1) { u1 = u1.toUpperCase() }
				if (u2) { u2 = u2.toUpperCase() }

				if (text.match(/-u1/gi) && text.match(/-u2/gi)) {
					currency.get_u(u1, u2)
						.then((data) => { sender(currency.out_u(data, u1, u2)) })
						.catch((e) => { sender(e) })
				}
			}
			// movie
			if (command === '$movie_title') {
				// find movie by name (title)
				var url = 'http://www.omdbapi.com/?apikey=5a2acd08&t='
				var name = (para_recogniser('-n')) // (title)
				var year = fixed_url.fix_url(para_recogniser('-y'))
				var type = fixed_url.fix_url(para_recogniser('-t')) // episode , movie , series

				var api = url + '&t=' + name
				var a = text.split()
				//----------------- search by title --------------------//
				// BUG  -> condition 

				if (text.match(/-n/gi) && !text.match(/-t/gi) && !text.match(/-y/gi)
				) {
					getJSON(api).then(
						function (res) {
							if (res.Type == 'series' && res.Title !== undefined && res.Title !== null) {
								sender(movie.out_T(res))
							}
							if (res.Title !== undefined && res.Title !== null) {
								sender(movie.out_T(res))
							}
						}
					).catch(
						function (e) { sender(e) }
					)
				}
				if (text.match(/-n/gi) && text.match(/-y/gi) && !text.match(/-t/gi)) {
					getJSON(api + '&y=' + year).then(
						function (res) {
							if (res.Type == 'series' && res.Title !== undefined && res.Title !== null) {
								sender(movie.out_T(res))
							}
							if (res.Title !== undefined && res.Title !== null) {
								sender(movie.out_T(res))
							}
						}
					).catch(
						function (e) { sender(e) }
					)
				}
				if (
					text.match(/-n/gi) && text.match(/-y/gi) && text.match(/-t/gi)
				) {
					getJSON(api + '&y=' + year + '&type=' + type).then(
						function (res) {
							if (res.Type == 'series' && res.Title !== undefined && res.Title !== null) {
								sender(movie.out_T(res))
							}
							if (res.Title !== undefined && res.Title !== null) {
								sender(movie.out_T(res))
							}

						}
					).catch(
						function (e) { sender(e) }
					)
				}
				if (
					text.match(/-n/gi) && text.match(/-t/gi) && !text.match(/-y/gi)
				) {
					getJSON(api + '&type=' + type).then(
						function (res) {
							if (res.Type == 'series' && res.Title !== undefined && res.Title !== null) {
								sender(movie.out_T(res))
							}
							else {
								if (res.Title !== undefined && res.Title !== null) {
									sender(movie.out_T(res))
								}

							}
						}
					).catch(
						function (e) { sender(e) }
					)

				}

			}

			if (command == "$movie_search") {

				// --------------- search by name --------------- //

				var url = 'http://www.omdbapi.com/?apikey=5a2acd08&s='
				var search = fixed_url.fix_url(para_recogniser('-s'))

				var s = text.search(/-s/gi)
				var t = text.search(/-t/gi)
				var y = text.search(/-y/gi)

				var api = (url + search)

				if (s > 0) {

					if (t < 0 && y < 0) {
						getJSON(api).then(
							function (res) {
								sender(movie.out_S1(res))
							}
						).catch(function (e) { sender(e) })
					}

					if (t > 0 && y < 0) {
						getJSON(api).then(
							function (res) {
								sender(movie.out_S2(res))
							}
						).catch(function (e) { sender(e) })
					}

					if (t > 0 && y > 0) {
						getJSON(api).then(
							function (res) {
								sender(movie.out_S3(res))
							}
						).catch(function (e) { sender(e) })
					}
					if (t < 0 && y > 0) {
						getJSON(api).then(
							function (res) {
								sender(movie.out_S4(res))
							}
						).catch(function (e) { sender(e) })
					}

				} else { sender("try: $help -h movie_search") }

			}

			if (command == "$emoji") {
				var name, emoji, output;

				name = text.slice(6);
				name = name.replace(/ /gi, '');
				name = name.toUpperCase();
				emoji = emoji_file.emoji();

				// if (name) output = "$\{\\huge{" + emoji[name] + "}}$";

				output = emoji[name]

				try {
					if (output) {
						var a = ['✅', '🍆', '💣', '💀', '💩', '❤️', '👍']
						var b = false

						for (let i = 0; i < a.length; i++) {
							if (ouput == a[i]) b = true;
						}

						if (b == true) sender("$\{\\huge{" + output + "}}$");
						else
							if (b == false) sender(output);
					}
				}
				catch (e) { sender('Not in list'); }

				if (text.match(/-l/gi)) {
					var a = [];
					for (let key in emoji) {
						a.push(key + '  ');
					}
					sender(a.join(''));
				}
			}

			if (command == "$locate") {
				var ApiKey = "20fd22e1db4a4231a79c46e38038aa1f"
				var lat = para_recogniser("--lat")
				var long = para_recogniser("--long")

				function send_located() {
					var url = `https://api.opencagedata.com/geocode/v1/json?key=${ApiKey}&q=${lat}%2C${long}`

					if (text.match(/-geo/gi)) {
						getJSON(url).then((res) => { sender(locate.geo(res)) })
							.catch((e) => { sender("Error!") })
					}
					else if (text.match(/-detail/gi)) {
						getJSON(url).then((res) => { sender(locate.detail(res)) })
							.catch((e) => { sender("Error!") })
					}
					else if (text.match(/-currency/gi)) {
						getJSON(url).then((res) => { sender(locate.currency(res)) })
							.catch((e) => { sender("Error!") })
					}
					else sender("@" + nick + " use -geo, -detail or -currency")
				}

				if (text.match(/--lat/gi) && text.match(/--long/gi)) {

					if ((lat[0] == "-" || lat[0] == "+") &&
						(long[0] == "-" || long[0] == "+")) send_located();
					else sender("use correct format\nexample: --lat -13.5361 --long +31.9251");

				}
				else { sender("use options") }

			}

			if (command == "$proxy") {
				var url = "http://sslproxies.org"

				request(url, function (error, response, html) {
					if (!error && response.statusCode == 200) {
						const $ = cheerio.load(html)
						function child(number) {
							return `nth-child(${number})`
						}
						let k = 1;
						let a = [];

						for (k; k < 12; k++) {
							a.push(
								$(`table 
						tbody:nth-child(2)
						tr:${child(k)}
						td:${child(1)}`)
									.text()

								+ ":" +

								$(`table 
						tbody:nth-child(2)
						tr:${child(k)} 
						td:${child(2)}`)
									.text()
							);
							a.push('-'.repeat(10))
						}
						sender(a.join("\n"))
					}
				});
			}
			if (command == "$hand") {
				var deck = [];
				['♠️', '♡', '♢', '♣️'].forEach((suit) => {
					"A 2 3 4 5 6 7 8 9 10 J Q K".split(" ").forEach((rank) => {
						deck.push(rank + suit);
					});
				});
				var hand = [];
				for (var i = 0; i < 5; i += 1) {
					hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
				}
				sender(hand.join(" "));
			}

			if (command == "$lol") {
				let output, r, li;

				li = ['bursted out', 'is laughing to death', 'is laughing hard',
					'is laughing (his/her) head off', 'is killing (him/her)self laughing'];

				r = Math.floor(Math.random() * (li.length - 1))

				output = `@${nick} ${li[r]}`

				sender(output);
			}

			// Admin
			if (trip == 'LtPGv4') {
				if (command == '$shutdown') {
					process.exit();
				}
			}

		}
	} catch (e) { console.log(e) }

});

// specified range number :
// var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min
