const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const course = require("./routes/courses.js")
const port = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/course',course)

app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(port,()=>{
    console.log(`server listening req at http://localhost:${port}/`);
})
