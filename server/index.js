const express = require('express');
const cors = require('cors');
const monk = require('monk');

const app = express();
const db = monk('localhost/arachnibase')
// spideySenseDAO is a collection inside of the database
const spideySenseDAO = db.get('spideySenseDAO')
app.use(cors());
// JSON bodyparser
// any incoming request that has a content-type of application/json
// will be parsed by the middleware and put on the body
app.use(express.json());

const spideyModels = [
    "Spider-Man", 
    "Mary Jane Watson", 
    "Green Goblin", 
    "Venom", 
    "Doctor Octopus", 
    "Black Cat", 
    "Electro", 
    "Sandman", 
    "Lizard", 
    "Rhino", 
    "Mysterio", 
    "Kraven the Hunter", 
    "Vulture", 
    "Carnage", 
    "Scorpion", 
    "Shocker", 
    "Kingpin", 
    "Prowler", 
    "Silver Sable", 
    "Tombstone", 
    "Hammerhead", 
    "Jackal", 
    "Chameleon", 
    "Black Widow"
];

app.get('/', (request, response) => [
    response.json({
        message: 'You friendly neighborhood Spider-Man... '
    })
])

function isValidSpideySense(spideySense){
    return spideySense.name && spideySense.name.toString().trim() !== '' 
        && spideySense.content && spideySense.content.toString().trim() !== ''
}

app.post('/spideySense', (request, response) => {
    // validate the informatin
    if(isValidSpideySense(request.body)){
        // insert into db
        const spideySense = {
            name: request.body.name.toString(),
            content: request.body.content.toString(),
            created: new Date()
        }

        spideySenseDAO
            .insert(spideySense)
            .then(createdSpideySense => {
                // respond back to the client what was just created
                response.json(createdSpideySense);
            })

        console.log(spideySense)
    }else{
        response.status(422)
        response.json({
            message: `Hey Spider-pal I know you're in a pinch, but name and content are required!`
        })
        console.error(`ERROR: Hey Spider-pal I know you're in a pinch, but name and content are required!`)
    }
    console.log(request.body)
})

app.listen(8080, () => {
    console.log('Listening on http://localhost:8080')
})