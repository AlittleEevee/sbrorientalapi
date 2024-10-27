const { Router } = require("express");
const jwt = require("jsonwebtoken")
const router = Router();

const secretKey = process.env.SECRET_KEY || "secret";
router.post("/api/login", (req,res) =>{
    const { email,password } = req.body;

    const user = {
        id:1,
        name:"John",
        email:"john@gmail.com",
        password:"test"
    }
    if (email === user.email && password === user.password){
        jwt.sign({user: user},secretKey, (error,token)=>{
            res.json({ token });
        } );
    }else{
        res.json({message: "Email and passoword are invalid"});
    }
});

router.post("/api/users", (req,res) =>{
    res.json({message: "Email and passoword are invalid"});
});

function verifyToken(req,res,next){
    const header = req.headers["authorization"];

    if (header !== undefined){
        const token = header.split(" ")[1]
        req.token = token
        next();
    }else{
        res.sendStatus(403);
    }
};

module.exports = router;