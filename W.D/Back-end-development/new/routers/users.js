import {Router} from "express"
import UserModel from "../models/User.js"
const router = Router()
const JWT_SECRET_USES="gshjdkfhhdfvcdhjsgj"


router.post("/register",(req,res)=>{
    try{
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    if(!email||!password||!name){
        res.status(400).send({message:"Please fill in all fields"})
    }

    const user =await UserModel.create({
        email:email,
        password:password,
        name:name,
    })
    return res.json((user))
}catch(err){
    return req.json({msg:"error in user"})
}
})
router.post("/login",(req,res)=>{
    try{
        const email = req.body.email
        const password = req.body.password
        const admin = await UserModel.findOne({email:email,password:password})
        if(!admin){
            return res.status(400).send({message:"Invalid email or password"})
            }
        const token =jwt.sign({email:email},JWT_SECRET_USES)
        return res.send(token)
    }catch(err){
        return res.json({msg:"error in admin"})
    }
})



export default router