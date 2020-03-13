exports.helper = function (ph) {
    switch (ph) {
        case ("proxy"):
        case ("lang"):
        case ("profile"):
        case ("hand"):
        case ("proxy"):
            return "seriously? just type the command, that's it.";

        case ("echo"):
            return "to test if the bot is online";
            break;

        case ("dog"):
            return (
                "gives information about dogs by breed :\n" +
                "[-b* >> breed][-l list of breeds][-a all pics]"
            )
            break;

        case ("holiday"):
            return (
                "in progress"
            )
            break;

        case ("astro"):
            return (
                "number and name of people on space :\n" +
                "[-p people and craft][-n number]"
            )
            break;

        case ("repeat"):
            return (
                'repeats text for specified times :\n' +
                '[-w* >> word][-t* >> times]'
            )
            break;

        case ("write"):
            return (
                'write with color: (tip: use only -w for random colors)\n' +
                '[-w* >> word][-c >> color]'
            )
            break;

        case ("ip"):
            return (
                "gives information about the ip given :\n" +
                '[-i* >> ip][-t timezone][-a astronomy]' +
                "\n*use $ip if you don't know your ip.*"
            )
            break;

        case ("currency"):
            return (
                "currency converter :\n" +
                '[-u1* >> first unit][-u2* >> second unit]' + '\n' +
                'tip : use $ccode to gain info about the country.'
            )
            break;

        case ("ccode"):
            return (
                'country code :\n' +
                '[-c* >> country]'
            )
            break;

        case ("movie_search"):
            return (
                "search movie names & types & year :\n" +
                "[-s* >> search][-t >> type: series,episode,movie][-y >> year]"
            )
            break;

        case ("movie_title"):
            return (
                "get information about the movie by giving the title :\n" +
                "[-n* >> name][-y >> year][-t >> type: series,episode,movie]"
            )
            break;

        case ("emoji"):
            return (
                "$emoji [name]* \n" +
                "[-l get emoji names]"
            )
            break;

        case ("locate"):
            return (
                "locate target by giving latitude and longitude \n" +
                "[--lat* >> latitude][--long* >> latitude]\n" +
                "options: [--currency][--detail][--geo] "

            )
            break;

    }
}
