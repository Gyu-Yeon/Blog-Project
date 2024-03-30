import { connectDB } from "../../util/database";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    if (req.body.title == "") {
      return res.status(500).json("제목을 입력해 주세요");
    }
    const db = (await connectDB).db("blog");
    const result = db.collection("post").insertOne(req.body);
    console.log(req.body);
    await db.collection("post").insertOne(req.body);
    res.redirect(302, "/myNote");
  }
}
