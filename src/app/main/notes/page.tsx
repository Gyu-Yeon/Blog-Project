import { connectDB } from "../../../../util/database";

export default async function Notes() {
  let db = (await connectDB).db("blog");
  let result: any = await db.collection("post").find().toArray();
  console.log(result);
  // const data = [{ name: "Johnny" }, { name: "Jason" }, { name: "Paul" }];
  return (
    <div className="notes">
      <div className="notes-container m-auto d-flex">
        {result.map((item: any, i: number) => {
          return (
            <div className="notes-item" key={i}>
              <h2>{item.author}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
