const express = require('express')
const cors = require('cors')

const app = express()

app.get('/api/name', cors(), async(req, res, next) => {
    try {
        console.log('lol')
    }
    catch(err) {
        next(err)
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})