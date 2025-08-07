import express from 'express'
import jwt from "jsonwebtoken"
import { ContentModel, LinkModel, UserModel } from './db';
import { jwtPassword } from './config';
import { userMiddleware } from './middleware';
import { hashPass, verifyPass } from './passwordHashing';
import random from './linkgenerator';

// import { hash } from 'bcrypt';

// const bodyParser = require('body-parser')
const app=express()
const PORT =8080;


// app.use(bodyParser.json())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: "connected"
    });
});

app.post('/api/v1/signUp', async (req,res)=>{
    //todo -zod hash password
  try{
    const { username, password } = req.body
    const hashedPass =await hashPass(password)
    await UserModel.create({
        username: username,
        password:hashedPass
    })

    res.status(200).json({
        message:"User Signed up"
    })
  }catch(e:any){
    res.status(500).json({
        message:"Error aa gaya-re baba"
    })
  }
    //using jwt in signin
})

app.post('/api/v1/signIn', async (req, res) => {
  const { username, password } = req.body

  try {
    const existingUser = await UserModel.findOne({ username })

    if (!existingUser) {
      return res.status(403).json({
        message: 'User not found. Please sign up first.'
      })
    }
    //@ts-ignore
    const isPasswordCorrect = await verifyPass(password, existingUser.password)
    if (!isPasswordCorrect) {
      return res.status(403).json({ message: 'Incorrect Password' })
    }

    const token = jwt.sign(
      {
        id: existingUser._id,
        username: existingUser.username // Add this only if you need it for auditing/content tagging
      },
      jwtPassword
    //   { expiresIn: '5h' } access token wee can set expiry
    )

    // To addAdd refresh token with longer expiry (7-10 days)
    return res.json({ token })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Internal server error' })
  }
})
//to add content
app.post("/api/v1/content", userMiddleware,async (req,res)=>{
    const link = req.body.link
    // const type = req.body.type
    const title = req.body.title
    const tags = req.body.tags
    console.log(tags)
    
    if (!title || !link) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    await ContentModel.create({
        link,
        title,
        tags: [],
        //@ts-ignore
        userId:req.userId
    })
    res.status(200).json({
        message:"Content Added In Your Brain" 
    })

  })
//to get the cotent
app.get("/api/v1/content",userMiddleware,async (req,res)=>{
    //change schema and get username of person who posted that
    //@ts-ignore
    const id = req.userId
    console.log(req)
    const data =await ContentModel.find({userId:id}).populate("userId", "username")
    res.status(200).send(data)
})
//delete
app.delete("/api/v1/delete/:id", userMiddleware,async (req,res)=>{
    //@ts-ignore
      const itemId = req.params.id;
    //@ts-ignore
    const retObj=await ContentModel.deleteOne({
      _id:itemId,
      //@ts-ignore
     userId: req.userId 
    })
    if(retObj.acknowledged){
        res.status(200).json({
            message:"Content deleted as per your command"
        })
    }else{
        res.status(403).json({
            message:"Content doesn't exit inside your brain"
        })

    }
})

app.delete("/api/v1/delete", userMiddleware,async (req,res)=>{
    // on frontend we will confirm twice before hitting this route as if user goes to this all content from brain gets deleted
    //@ts-ignore
    const idUser = req.userId;
    const retObj =await ContentModel.deleteMany({userId: idUser})
    if(retObj.acknowledged){
        res.status(200).json({
            message:" Khopdi Udha Di Saale Teri"
        })
    }else{
         res.status(400).json({
            message:"Couldn't delete your thoughts at the very moment"
        })
    }   
})

//brain share maybe creates a "share link" for someone's brain yes this is a link creation on click of share 
app.post("/api/v1/brain/share", userMiddleware,async (req,res)=>{
 
   const share = req.body.share //if share true we will generate a link unique for each user
  if(share){
    try{
      const existingLink = await LinkModel.findOne({
        //@ts-ignore
        userId:req.userId 
      })
      console.log(existingLink)
      //@ts-ignore
      if(existingLink){
        res.status(200).json({
          //@ts-ignore
          message:"Hash already exsists",
          hash:"/brain/"+existingLink['hash'] 
        })
        return;
      }
      const hash = random(10)
      await LinkModel.create({
        //@ts-ignore
        userId:req.userId,
        //@ts-ignore
        hash:hash
      })
      res.status(200).json({
        hash:"/brain/"+hash
      })
      return
    }catch(e){
  res.json({
    message:"JWT isn't Provided Duplicacy"
  })
  }
}
  //agar share: false hua
    await LinkModel.deleteOne({
      //@ts-ignore
      userId: req.userId
    })
    res.status(200).json({
      message:"ShareLink Deleted"
    })
})
//brain/:sharelink now the shared link is seen by someone else so here chances that the person is gone/accessign someone else's publically shared content
app.get("/api/v1/brain/:shareLink", async (req,res)=>{
  const hash = req.params.shareLink
  const link = await LinkModel.findOne({
    //@ts-ignore
    hash: hash
  })
  if(!link){
    res.status(411).json({
      message:"Incorrect Brain id"
    })
    return;
  }
    const data = await UserModel.findOne({
      //@ts-ignore
      _id: link.userId.toString()
      // userId: link.userId
    })
    // console.log(data)
    if(data ===null){
      res.json({message: "User not found"})
      return
    }
     const PublicBrainData= await ContentModel.find({
        userId:data._id
      })
    res.status(200).json({
      data: PublicBrainData
    })
})
app.listen(PORT,()=>{ 
    console.log("Server connected at port 8080")
})