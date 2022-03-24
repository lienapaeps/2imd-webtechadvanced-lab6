const Primus = require('primus');

let go = (server) => {
    const primus = new Primus(server, {
        /* options */
    });

    // primus.save(__dirname +'/primuslib.js');

    primus.on('connection', (spark) => {
        // spark is the new connection.
        console.log("✨");
        // spark.on('data', (data) => {
        //     console.log('Data komt binnen');
        //     // console.log(data);
        //     primus.write(data); // iedereen krijgt de data te zien
        // });
    });

};

module.exports.go = go;