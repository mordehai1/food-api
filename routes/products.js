import express from "express";
const router = express.Router();

//POST
router.post('/addProduct', (req,res) => {
    const {prodName, prodPrice, prodImage, prodDesc} = req.body
    return res.status(200).json({message: `${prodName} ${prodPrice} ${prodImage} ${prodDesc}`})
})


export default router;