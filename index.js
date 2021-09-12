const express = require('express');
const app = express();
const smsPost = require('./routes/smsPost');



app.use('/',smsPost)

const port = process.env.PORT || 3000;


app.listen(port, () => `Server running on port ${port} 🔥`);