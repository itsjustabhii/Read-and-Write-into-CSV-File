const express = require('express')
const app = express()
const csv = require('csv-parser')
const fs = require('fs')
const results = []

const PORT = 8000

//Reads the data from CSV file
fs.createReadStream('books.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results)
    })

app.use('/', (req, res) => {    //Redirects to homepage 
    res.send(results)
})

app.listen(PORT, () => console.log(`Server running on PORT: http://localhost:${PORT}`))