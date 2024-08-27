import express, { NextFunction, Request, Response } from "express"

const accountRouter = express.Router();

accountRouter.post("/operation", (req: Request, res: Response, next) => {
    // account id, operation'
    res.status(200).json([{ id: "t1", amount: 5000 }, { id: "t2", amount: 6000 }, { id: "t77", amount: 1000000 }])
})
accountRouter.get("/history", (req: Request, res:Response, next:NextFunction)=>{
    res.status(200).json("great success")
    console.log("historyyyyyy")
})
export { accountRouter }