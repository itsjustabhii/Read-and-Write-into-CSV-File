const createCsvWriter = require('csv-writer').createObjectCsvWriter
const csvWriter = createCsvWriter({
    path: 'newMagazineFile.csv',
    header: [
        {id: 'title', title: 'NAME'},
        {id: 'isbn', title: 'ISBN'},
        {id: 'authors', title: 'Authors'},
        {id: 'publishedAt', title: 'publishedAt'}

    ]
})

const records = [
    {title: 'Attitude is everything', isbn: 267195345, authors: 'Sidney Sheldon', publishedAt: '06.12.2012'},
    {title: 'Psychology of Money', isbn: 732719345, authors: 'Morgan Housel', publishedAt: '26.04.2009'},
    {title: 'Atomic Habits', isbn: 963195345, authors: 'James Clear', publishedAt: '14.02.2016'},
    {title: 'Rich Dad Poor Dad', isbn: 468795345, authors: 'Robert Kiyosaki', publishedAt: '03.05.2020'}
]

csvWriter.writeRecords(records)
    .then(() => {
        console.log('New Magazine CSV file created')
    })