function Line(str, line)
{
    let s, ll, a;

    a = []
    ll = line - 1;
    s = str.split('\n');

    if (ll <= s.length)
    {
        for (let i = 0; i < line; i++) a.push(s[i]);
        let output = a.join('\n');
        return output;
    }
    else return null;
}

function Char(str, n)
{
    let a;
    a = [];

    for (let i=0; i < n; i++) a.push(str[i]);

    return a.join('')
}

module.exports = { Line: Line, Char: Char }