import { Router } from "express";
const fs = require('fs')
const productRouter = Router();

productRouter.get("/", async function (req, res) {
    const readMe = fs.readFileSync('src/utils.txt', 'utf-8')
    const data = readMe.split('\r\n').map(ele => {
        const arr = ele.split(',')
        return {
            title: arr[0],
            price: arr[1],
            currency: arr[2]
        }
    })
  res.status(200).send({ success: true, data });
});

productRouter.post("/", async function (req, res) {
    const {title, price, currency} = req.body;
    fs.appendFileSync("src/utils.txt", `\r\n${title},${price},${currency}`)
    res.status(200).send({ success: true });
  });

export default productRouter;
