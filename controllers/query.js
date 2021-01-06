const Query = require('../models/query')
const nodemailer = require('nodemailer');

exports.sendQueryMessage = (req,res) => {
    const _newQuery = new Query(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${process.env.GMAIL_USER}`,
          pass: `${process.env.GMAIL_PASS}`
        }
      });
    const mailList = [ 'raolakshayyadav02@gmail.com', 'rahulsarswat57@gmail.com', 'nipungoyal84328@gmail.com' ]

    _newQuery.save((err,data) => {
        if(err) return res.status(400).json({ message: "Something Went Wrong! Try Again Later!", error: err })
        if(data) {
            transporter.sendMail({
                from: 'miracleofficialteam@gmail.com',
                to: mailList,
                subject: 'New Query',
                html: `Id: ${data._id} <br>Name: ${data.name} <br>Phone: ${data.phone} <br>Email: ${data.email} <br>Service: ${data.service} <br>Message: ${data.message}`
            }, function (errorMsg, info) {
                if (errorMsg) {
                  console.log(errorMsg);
                  return res.status(400).json({ message: errorMsg })
                } else {
                  console.log('Email sent: ' + info.response);
                  return res.status(201).json({ message:"Your Request Is Succesfully Registered!", data: data })
                }
            });
        } 
    })
}

exports.getAllQueryMessages = (req,res) => {
    Query.find({})
    .exec((err,result) => {
        if(err) return res.status(400).json({ message: err })
        if(result) {
            return res.status(200).json({ data: result })
        }
    })
}