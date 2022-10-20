const express = require('express');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
// app.use(express.static(path.join(__dirname, '../client/e-data-simulation-app/public/index.html')));
app.use(express.json());
app.use(cors());

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '../client/e-data-simulation-app/public/index.html'));
// });

app.get('/', function(req, res) {
    res.send("GET request received");
});

app.post('/', function(req, res) {
    const sendMail = async () => {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "navdeepmor.me@gmail.com",
                pass: "bbagdqobfhbkohan"
            }
        });

        const info = await transporter.sendMail({
            from: req.body.email,
            to: "navdeepmor.me@gmail.com",
            subject: `Website Contact Us`,
            text: req.body.msg,
            html: `<h2> client details </h2>`
                //    <b> ${req.body.fname} </b> 
                //    <b> ${req.body.contactNum} </b> 
                //    <b> ${req.body.email} </b> 
                //    <b> ${req.body.msg} </b>`
        });

        console.log("Message send : %s", info.messageId);
        console.log("Preview URL %s", nodemailer.getTestMessageUrl(info));
    }
    
    try {
        sendMail();
        res.send('Message send successfully !!');
    } catch {
        console.error();
    }
    
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})