import { connectDB } from "../../util/database";

export default async function handler(req: any, res: any) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return req.status(500).json("제목써라");
    }
    try {
      const db = (await connectDB).db("blog");
      const insertItem = { ...req.body, date: Date() };
      const result = db.collection("post").insertOne(insertItem);
      res.redirect(302, "/main/myNote");
      console.log(insertItem);
    } catch (error) {
      console.log(error);
    }
  }
}
