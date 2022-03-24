// SERVER

const Primus = require('primus');

let go = (server) => {
    const primus = new Primus(server, {
        /* options */
    });

    // primus.save(__dirname +'/primuslib.js');

    // checken of er connectie is met spark, spark is 1 connectie of client
    primus.on('connection', (spark) => {
        // spark is the new connection.
        console.log("✨");
        // op de client komt er data binnen
        spark.on('data', (data) => {
            console.log('Data komt binnen');
            console.log(data);
            
            // elke client moet de data terugkrijgen
            primus.write(data);
        });
    });

};

module.exports.go = go;