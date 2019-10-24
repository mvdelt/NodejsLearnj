// add modules
const httpj = require('http');
const fsj = require('fs');
const sioj = require('socket.io')();

//create web server
const servj = httpj.createServer(function(req, res){
    //read pagej.html
    fsj.readFile('pagej.html', function(err, datj){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(datj);
    })
});
servj.listen(58880, function(){
    console.log('server running at ~~:58880 j!');
});

//create&exc socket server
const ioj = sioj.listen(servj);
ioj.sockets.on('connection', function(socketj){
    //when 'Clickedj' event occurs...
    socketj.on('Clickedj', function(cli_sent_dataj){
        //print data from client
        console.log('cli sent data:', cli_sent_dataj);
        //print
        socketj.emit('send_back_from_server', cli_sent_dataj);
    });
    console.log('kk');
});