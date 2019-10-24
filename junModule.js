//create an EventEmitter object
evj = require('events');
exports.evEm = new evj();
exports.evEm2 = new evj();


//emit an event
/*
setInterval(function(){
    //exports.evEm.emit('tickj', 'tickj data', 1, 22, 333, 'yesj');
    exports.evEm2.emit('tickj', 'tickj data', 1, 22, 333, 'yesj');
}, 1000);
setInterval(function(){
    exports.evEm.emit('tickj', 'tickj data', 1, 22, 333, 'yesj');
    //exports.evEm2.emit('tickj', 'tickj data', 1, 22, 333, 'yesj');
}, 2000);
*/
setInterval(function(){
    console.log('tickj emit -start');
    exports.evEm.emit('tickj', 3,5,7,9,11);    
    exports.evEm2.emit('tickj', 3,5,7,9,11);    
    console.log('tickj emit -fin');
}, 3000);
