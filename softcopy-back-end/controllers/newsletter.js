const Mail = require('../models/newsletter')
const nodemailer = require('nodemailer');

exports.newsletter = (req,res) => {
    Mail.findOne({ email: req.body.email })
    .exec((err, data) => {
        if(err) return res.status(404).json({error: err})
        if(data) return res.status(400).json({ message: "You're already subscribed to our newsletter!"})

        const _newMail = new Mail(req.body);
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: `${process.env.GMAIL_USER}`,
              pass: `${process.env.GMAIL_PASS}`
            }
          });

        _newMail.save((error,result) => {
            if(error) return res.status(400).json({ message: "Something Went Wrong"})
            if(result) {
                transporter.sendMail({ 
                    from: 'softcopyofficialteam@gmail.com',
                    to: result.email,
                    subject: 'Welcome Message From Miracle Solutions',
                    text: 'Successfully Subscribed to Miracle Solutions Newsletter'
                }, function(errorMsg, info){
                    if (errorMsg) {
                      console.log(errorMsg);
                      return res.status(400).json({ message: errorMsg })
                    } else {
                      console.log('Email sent: ' + info.response);
                      return res.status(201).json({ message: "Welcome Aboard To Our Newsletter" })
                    }
                  });
            }
        } )
    })
}

exports.getNewsletter = (req,res) => {
    Mail.find({})
    .exec((err,data) => {
        if(err) return res.status(404).json({ message: "Something went wrong", error: err })
        if(data) return res.status(200).json({ emails: data.map((email) => {return email.email}) })
    })
}
