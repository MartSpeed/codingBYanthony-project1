const express = require('express');
// const cors = require('cors')

const app = express();

// app.use(cors());

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

// app.get('/', (request, response) => [
//     response.json({
//         message: 'You friendly neighborhood Spider-Man! '
//     })
// ])

// app.post('/spideySense', (request, response) => {
//     console.log(request.body)
// })

app.listen(8080, () => {
    console.log('Listening on http://localhost:8080')
})