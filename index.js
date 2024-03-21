const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send("server is running on deafult route")
})
app.use('/',require('./Routes/Auth'))
// app.use('/name',(req,res)=>{
//     res.send("server is runnning /name route")
// })
app.listen(1000,
    console.log(`server is runnuing at http://localhost:1000`)
    )