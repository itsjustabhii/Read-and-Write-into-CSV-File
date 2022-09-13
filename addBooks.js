const createCsvWriter = require('csv-writer').createObjectCsvWriter
const csvWriter = createCsvWriter({
    path: 'newBooksFile.csv',
    header: [
        {id: 'title', title: 'NAME'},
        {id: 'isbn', title: 'ISBN'},
        {id: 'authors', title: 'Authors'},
        {id: 'description', title: 'Description'}

    ]
})

const records = [
    {title: 'Attitude is everything', isbn: 267195345, authors: 'Sidney Sheldon', description: 'It\'s a book about crime thriller'},
    {title: 'Psychology of Money', isbn: 732719345, authors: 'Morgan Housel', description: 'Timeless Lessons on Wealth, Greed, and Happiness'},
    {title: 'Atomic Habits', isbn: 963195345, authors: 'James Clear', description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones'},
    {title: 'Rich Dad Poor Dad', isbn: 468795345, authors: 'Robert Kiyosaki', description: 'Offers personal finance education to help you learn about cash flow, real estate, investing, and business building'}
]

csvWriter.writeRecords(records)
    .then(() => {
        console.log('New Books CSV file created')
    })