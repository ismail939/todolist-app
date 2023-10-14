const express=require('express')
const app=express()

app.use(express.json())
app.get('/', (req, res)=>{
    res.render("home.ejs")    
})


app.listen('3000', ()=>{
    console.log('started listening on port 3000')
})