import { Router } from "express";

const blogRouter = Router();

const responseBody = {
    title: 'Title',
    details: 'Random'
}
blogRouter.get("/", async function (req, res) {
  res.status(200).send(responseBody);
});
export default blogRouter;
