const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

app.listen(3030, () => console.log('Example app listening on port 3030!'))
