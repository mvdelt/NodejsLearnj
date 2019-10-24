const http = require('http');
const portN = 8080;

const parseCookiesj = (cookiej = '') =>
    cookiej
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

http.createServer((req, res) => { //i.요청(request)에 대한 콜백함수
    const pcooj = parseCookiesj(req.headers.cookie);
    console.log(req.url, pcooj);
    res.writeHead(200, {'Set-Cookie':'junCoo=TestYo;hu=kwa;aa=bb'});
    res.end('<p>Cookie Test Jun!!</p>');
}).listen(portN, console.log(`yoyo~ server listening at port #${portN}...`));