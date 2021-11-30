const express = require('express')
const {formatPhoneNumber} = require("./formatPhoneNumber");
const path = require("path");
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + './views')))

app.get('/', function(req, res) {
    const contacts = require('./contacts.json')
    const data  = contacts.map(contact => {
        return {
            ...contact,
            'Phone 1 - Value': formatPhoneNumber(contact['Phone 1 - Value'], false)
        }
    })
    res.render('index.ejs', { data });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
