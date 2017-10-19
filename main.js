const fastify = require('fastify')();

var port = process.env.PORT || 8080;

fastify.get('/', function(req, rep){
    rep.send({hello: 'worlds!'});
});


fastify.get('/experiments/list', (req, rep)=>{
    //#TODO: Fetch this from a json or yaml file
    var experiments = [
        {
            title: 'Genetic Algorithms',
            kernels:[
                {
                    id: 1,
                    title: 'Byte Activation',
                    descriptiom: 'A random byte evolves until all its genes are activated',

                },
                {
                    id: 2,
                    title: 'Byte Parity Check',
                    description: 'Evolution of a byte with the last 2 digits being the parity verification digits against the first 6 digits'
                }
            ]
        }
    ];

    rep
        .code(200)
        .header('Content-Type', 'application/json')
        .send(experiments);
});

fastify.listen(port, function(err){
    if(err) throw err
    console.log(`Server listening on ${fastify.server.address().port}`);
})