import { ObjectId } from "mongodb";
import { connectDB } from "../../../../../util/database";

type DetailProps = {
  params: any;
};

export default async function Detail(props: DetailProps) {
  const db = (await connectDB).db("blog");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "500px",
        maxHeight: "800px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "80%",
          backgroundColor: "beige",
        }}
      >
        <div style={{ padding: "15px", textAlign: "center" }}>
          {result?.title}
        </div>
        <div style={{ padding: "15px" }}>{result?.content}</div>
      </div>
    </div>
  );
}
