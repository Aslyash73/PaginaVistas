


const http = require('http');

http.createServer( (req, res )=>{
    console.log(req);

    // res.writeHead(200, {'Content-type': 'application/json'})
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-type': 'application/csv'})

    res.write( 'hola nombre');
    res.end();  //esperanding...

})
.listen( 8080);

console.log('Escuchando el puerto', 8080);