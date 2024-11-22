import AdminModel from "../models/admin.js"
import {Router} from "express"
const JWT_ADMIN_SECRET="hfjhsdgfjdshcfhjsdgcfht"
const router = Router()

router.post("/register",(req,res)=>{
    try{
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    if(!email||!password||!name){
        res.status(400).send({message:"Please fill in all fields"})
    }

    const admin =await AdminModel.create({
        email:email,
        password:password,
        name:name,
    })
    return res.json((admin))
}catch(err){
    return req.json({msg:"error in admin"})
}
})
router.post("/login",(req,res)=>{
    try{
        const email = req.body.email
        const password = req.body.password
        const admin = await AdminModel.findOne({email:email,password:password})
        if(!admin){
            return res.status(400).send({message:"Invalid email or password"})
            }
        const token =jwt.sign({email:email},JWT_ADMIN_SECRET)
        return res.send(token)
    }catch(err){
        return res.json({msg:"error in admin"})
    }
})



export default router