const nodemailer = require('nodemailer')

// send email fn
async function sendEmail(req, res) {
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
        subject: `contact us - ${req.body.email}`,
        text: req.body.msg,
        html: `<h2> client details </h2> <br/>
                Name : <b> ${req.body.fname} </b> <br/> 
                Contact No. : <b> ${req.body.contactNum} </b> <br/>
                Email : <b> ${req.body.email} </b> <br/> 
                Message : <b> ${req.body.msg} </b>`
    });

    console.log("Message send : %s", info.messageId);
    console.log("Preview URL %s", nodemailer.getTestMessageUrl(info));
    res.send('Sent');
}

module.exports = {sendEmail};