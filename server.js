const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const nodeMailer = require("nodemailer");
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(cors());

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'holtzman.patrick@gmail.com',
        clientId: '727656314805-gh9ru4t35ss64q7j3bcblcquvb0ne1hm.apps.googleusercontent.com',
        clientSecret: 'KK6TKkzsH31O8z2RvsUa27U5',
        refreshToken: '1/hose6d2SSXyU1UsC2EyvKyJY4oStMpUwIAspeQXaDpI',
        accessToken: 'ya29.GlvcBA2uLwMyGEH6LgSErLFyAmGO4RuvKzkdk2AI1RNBTADZlug5VxYd58aGjKag4nsonzJyWV5hiJJmDp9AjO3io5V8047dJ4Upqh9xkd4Qul6RNM06kHpHoZoA'
    },
});

app.post("/mail", (req, res) => {
    transporter.sendMail({
        from: req.body.email,
        to: "holtzman.patrick@gmail.com",
        subject: `received from directimagecards.com  reply to ${req.body.email}`,
        text: req.body.comments

    },(err,res) => { if (err){
        console.log(err)
    }
    else{
        console.log("email sent", req.body, res)

        return res.json(req.body);
    }
    })
});

app.listen(PORT, () => console.log("server started on PORT: ", PORT));