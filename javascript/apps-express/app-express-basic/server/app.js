const express = require('express')
    
const app = express()
const port = 5000
                   
app.get('/', async (req, res) => {
    // Response sent to browser
    res.send('Hello Web Browser!')
})

app.get('/folder', async (req, res) => {
    // Response sent to browser
    res.send('Hello Web Browser from /folder !')
})
    
app.listen(port, () => {
    // Outputs to terminal
    console.log(`Express app listening on port ${port}`)
})