const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
// const path = require('path')

const app = express()
// middleware
// app.use(express.static(path.join(__dirname, '../client/e-data-simulation-app/public/index.html')));
app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

const PORT = process.env.PORT || 8000;
const CONNECTION_URL = 'mongodb://localhost:27017/e-data-simulation'

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const serviceRouter = require('./routes/service')  // OR app.use(require('./routes/service'))
const emailRouter = require('./routes/email')

app.use('/services', serviceRouter)
app.use('/send-email', emailRouter)

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '../client/e-data-simulation-app/public/index.html'));
// });

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

process.on('SIGINT', async function() {
    await mongoose.disconnect();
    process.exit(0)
})