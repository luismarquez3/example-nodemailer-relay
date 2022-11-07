const nodemailer = require('nodemailer');

//Ejemplo de envio de correo por smpt-relay de Google sin autenticación
const destinatario  = 'your-email@domain.com';
const subject       = 'Prueba';
const contenido     = 'Hola';

const transport = nodemailer.createTransport({
    host: 'smtp-relay.gmail.com',
    port: 25,
    secure: false,
    direct: true,
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
});


const mailOptions = {
    from: 'Name<example@email.com>',
    to: destinatario,
    subject: subject,
    text: contenido,
};

transport.sendMail(mailOptions,  (error, info)=>{
    if( error ) return  console.log(  error );
    
    console.log('ok');
    transport.close();

});  
