
const express = require('express');
const app = express();

app.use(express.json());

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
];

// Displaying message
app.get('/info', (request, response) => {
    response.send(
        `<p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>`
    );
})

// Get All
app.get('/api/persons/', (request, response) => {
    response.json(persons);
});

// Get By
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    console.log(id);
    const person = persons.find( person => person.id === id);
    // Handle undefined results in find method
    if (person)
        response.json(person);
    else
        response.status(404).end();
})

// DELETE 
app.delete("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    person = persons.filter(person => person.id === id);
    response.status(204).end();
})

// POST 
app.post("/api/persons", (request, response) => {
    let newId, match;

    const body = request.body;

        newId = Math.floor(Math.random(999));
        console.log(newId);
    
    if (!body.name || !body.number){
        return response.status(400).json({
            error: "Values missing, fill all the fields"
        })
    }

})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})