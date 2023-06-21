import express from "express"
import cors from "cors"

const app=express()
app.use(express.json())
const PORT=3000
app.use(cors())

app.get("/ping",(req,res)=>{
    console.log("alguien ha dado pin!!")
    res.setHeader("Content-Type","application/json")
    res.send("pong")
})


app.get("/hola/:nombre/:apellido",(req,res)=>{
    console.log("alguien ha dado pin!!")
    res.setHeader("Content-Type","application/json")
    const nombre=req.params.nombre
    const apellido=req.params.apellido
    console.log("alguien ha ingresado su nombre")
    res.send({nombre,apellido})
})



app.listen(PORT,()=>{
    console.log(`running application ${PORT}`)

})


