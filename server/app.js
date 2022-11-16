const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost:27017/e-data-simulation')

// middleware
// app.use(express.static(path.join(__dirname, '../client/e-data-simulation-app/public/index.html')));
app.use(cors())
app.use(express.json())

const serviceRouter = require('./routes/service')  // OR app.use(require('./routes/service'))
const emailRouter = require('./routes/email')

app.use('/service-info', serviceRouter)
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