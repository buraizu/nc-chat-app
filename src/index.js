const path = require('path')
const express = require('express')

const app = express()

const port = process.env.PORT || 3000

// __dirname is current directory for this file
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log(`server is up on port ${port}!`)
})