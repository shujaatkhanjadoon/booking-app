import { Request, Response, Router} from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {

    try {
        let user = await User.findOne({
            email: req.body.email,
        });

        if(user){
            return res.status(400).json({message: "Email already exist, try with new email"});
        }
        user = new User(req.body);
        await user.save();

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY as string, { expiresIn: "1d"});

        res.cookie("auth-token", token, { 
            httpOnly: true, 
            secure: process.env.NODE === "production",
            maxAge: 86400000,
        });

        res.sendStatus(200);

    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Something went wrong!"});
    }
});

export default router;