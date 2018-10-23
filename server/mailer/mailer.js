const nodemailer = require('nodemailer');
const config = require('./../config/nnz_form_config.js');


// Шаблон письма
const { sendLink } = require('./templates/SendLink.js');


const mailer = {

    transporter() {
        return nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: config.mail.login, // generated ethereal user
                pass: config.mail.password  // generated ethereal password
            }
        });
    },

    sendMail(data) {
       console.log('Sending mail');
       const template = sendLink(data);
       return new Promise( (res, rej) => {
           mailer.transporter().sendMail(template, (error, info) => {
               if (error) {
                   return rej(error);
               }
               res(info);
               console.log('Message sent: %s', info.messageId);
               // Preview only available when sending through an Ethereal account
               console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
           });
       });
   }



};

module.exports = mailer;
