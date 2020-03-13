exports.main = function () {
    var arr = ["profile", "lang", "hand", "emoji", "dog", "astro", "repeat", 'write', 'ip',
        'currency', 'ccode', 'movie_title', 'movie_search', 'locate',
        'proxy', 'lol'
    ]

    return (
        "available commands: \n" +
        arr.join(" , ") + ' .' +
        "\n\nfor detail try: $help -h <command> \n" +
        '">>" : option requires parameter.\n' +
        '"*" : option required'
    )
}