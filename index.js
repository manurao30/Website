const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.static(path.join(__dirname, 'frontend/build')))

app.get('/api/name', cors(), async(req, res, next) => {
    try {
        console.log('lol')
    }
    catch(err) {
        next(err)
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/build/index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})