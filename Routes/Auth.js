const express = require('express');
const router = express.Router();
router.get('/name',async(req,res)=>{
  return  res.send("server is runnning /name route")
})
router.get('/test',async(req,res)=>{
    return  res.send("server is runnning /test route")
  })
module.exports=router