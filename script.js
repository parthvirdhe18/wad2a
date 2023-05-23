const express=require('express')
const app=express()

app.listen(8080,()=>{
    console.log("Your Website is running")

})

app.get("/",(req,res)=>{
    // res.send("<h2>The website is static</h2>")
    res.sendFile(__dirname +"/index.html")
})