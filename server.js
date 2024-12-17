const express=require('express')
const app=express()

app.get('/',(request,response)=>{
    response.send("HEloo satyam")
})

app.listen(4000,'0.0.0.0',()=>{
    console.log("port 4000")
})