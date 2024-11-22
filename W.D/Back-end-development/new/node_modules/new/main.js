import express from "express"
import userRouter from "../routers/users.js"
import adminRouter from "../routers/admin.js"

const app=express()
connectToDb()
app.use("/user",userRouter)
app.use("/admin",adminRouter)

// app.post("/", async (req, res) => {
//     const name = req.body.name
//     const age = req.body.age
//     const result = await StudentCollection.create({
//         name: name,
//         age: age
//     })
//     return res.json({ result })
// })

app.listen(3000, () => console.log("server started a port 3000"))