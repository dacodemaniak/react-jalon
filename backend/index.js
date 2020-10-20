const express = require('express')
const cors = require('cors')

const app = express()
const port = 8080

app.use(cors())

app.get(
    '/',
    (request, response) => {
        const jalons = [
            {
                id: 1,
                title: 'ReactJS présentation',
                segment: 'Présentation',
                viewed: false
            },
            {
                id: 2,
                title: 'Composants purs',
                segment: 'Composants',
                viewed: false
            },
            {
                id: 3,
                title: 'props',
                segment: 'Composants',
                viewed: false
            },            
        ]
        response.json(jalons)
    }
)

// Make listening app
app.listen(
    port,
    () => {
        console.log(`App is listening on port ${port}`)
    }
)