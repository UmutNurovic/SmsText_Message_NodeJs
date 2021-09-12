const router = require('express').Router();
const Vonage = require('@vonage/server-sdk');



const vonage = new Vonage({
    apiKey: "you api key",
    apiSecret: "you api Secret"
});

const from =  "Pinkman APIs"
const to = "you phone number"
const text = 'A text message sent using the pinkman SMS API'

router.post("/", (req, res) => {
    vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            res.json(err)
        } else {
            if(responseData.messages[0]['status'] === "0") {
                res.json("Message sent successfully.")

            } else {
                res.json(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    });

});

module.exports = router;