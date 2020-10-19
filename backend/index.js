const express = require('express')

const app = express()
const port = 8080

app.get(
    '/',
    (request, response) => {
        response.send('Hello NodeJS')
    }
)

// Make listening app
app.listen(
    port,
    () => {
        console.log(`App is listening on port ${port}`)
    }
)