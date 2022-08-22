const express = require('express')
const dns = require('dns')
const products = require('./products.js')

const app = express()
app.use(express.json());

app.use('/products',products)


app.post('/getmeip', (req, res) => {
    const website = req.body.website_name
    let ip = ""
    dns.lookup(website,(err, address, family) => {
        res.end(`address: ${address} \nfamily: ${family}`);
    })
})

app.listen('8080')