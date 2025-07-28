import { NextFunction, Request, Response } from "express"
import { jwtPassword } from "./config"
import jwt from 'jsonwebtoken'
export const userMiddleware = (req:Request, res:Response,next:NextFunction)=>{
   const header =req.headers["authorization"]
   const decoded =jwt.verify(header as string, jwtPassword)
   if(decoded){
    //bhai decoded so it's a genuine user and we will send a id to  request object as well
     console.log(decoded)
    //@ts-ignore
    req.userId= decoded.id 
    next()
   }else{
     res.status(403).json({
      message:"Not Loged In"
     })
   }
}