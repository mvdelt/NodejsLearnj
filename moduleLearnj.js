//take module
const jm = require('./junModule.js');

//set event handler

jm.evEm.on('tickj', function(d1,d2,d3,d4,d5){
    console.log(`event 111111 - ${d1},${d2},${d3},`);
    jm.evEm2.on('tickj', function(d1,d2,d3,d4,d5){
        console.log(`event 2 - ${d1},${d2},${d3},`);
    });
});

