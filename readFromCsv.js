const express = require('express')
const app = express()
const csv = require('csv-parser')
const fs = require('fs')
const results = []

const PORT = 8000

//Sample Book data used for sorting according to title
const book = [
    { title: 'Attitude is everything', isbn: 267195345, authors: 'Sidney Sheldon', description: 'It\'s a book about crime thriller' },
    { title: 'Psychology of Money', isbn: 732719345, authors: 'Morgan Housel', description: 'Timeless Lessons on Wealth, Greed, and Happiness' },
    { title: 'Atomic Habits', isbn: 963195345, authors: 'James Clear', description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones' },
    { title: 'Rich Dad Poor Dad', isbn: 468795345, authors: 'Robert Kiyosaki', description: 'Offers personal finance education to help you learn about cash flow, real estate, investing, and business building' },
    { title: 'Life\'s amazing Secrets', isbn: 621375345, authors: 'Gaur Gopal Das', description: 'How to Find Balance and Purpose in Your Life' }
]

//Sample Magazine data used for sorting according to title
const magazine = [
    { title: 'Beautiful cooking', isbn: 5454-5587-3210, authors: 'null-walter@echocat.org', publishedAt: '21.05.2011' },
    { title: 'My family and me', isbn: 4545-8541-2012, authors: 'null-mueller@echocat.org', publishedAt: '10.07.2011' },
    { title: 'Cooking for gourmets', isbn: 2365-5632-7854, authors: 'null-lieblich@echocat.org', publishedAt: '05/01/2012' },
]


//Reads the data from CSV file
fs.createReadStream('books.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', (req, res) => {
    // console.log(results)
})

app.use('/', (req, res) => {    //Redirects to homepage 
    res.send(results)
})


//Sort the books based on title
function compareToSort(x, y) {
    if (x.title < y.title)
    return -1
    if (x.title > y.title)
    return 1
    return 0
}
console.log(book.sort(compareToSort))

//Sort magazines based on title using the same function
console.log(magazine.sort(compareToSort))


// Find all books and Magazines by their ISBN
// app.use('/:id', (req, res) => {
//     const {id} = req.params     //Destructure the id
//     const book = booksDirectory.find(b => b.isbn === id)
// })

app.listen(PORT, () => console.log(`Server running on PORT: http://localhost:${PORT}`))