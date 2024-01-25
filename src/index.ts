import express from 'express';
import blogRouter from './routes/blogs.router';
import productRouter from './routes/products.router';
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.json())

app.use((req, res, next) => {
    const {url, method} = req
    const {statusCode} = res
    console.log(`${url}---${method}---${statusCode}`);
    next();
})
app.use('/blogs', blogRouter)
app.use('/products', productRouter)

app.listen(9001, () => {
    console.log(`Listening to post 9001`)
})