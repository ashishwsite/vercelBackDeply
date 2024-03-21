const express=require('express')
const app=express()
app.use('/',(req,res)=>{
    res.send("server is runnning")
})
app.listen(1000,
    console.log(`server is runnuing at http://localhost:1000`)
    )