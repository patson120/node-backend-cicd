
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(express.json())
app.use(cors())

app.get('/names', (req, res) => {
    return res.status(200).json({name: "Kenne Tchinda"})
})


app.listen(PORT, () => {
    console.log("Server is running on port " +PORT);
})
