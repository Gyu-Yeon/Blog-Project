import { ObjectId } from "mongodb";
import { connectDB } from "../../../../../util/database";
import Detail from "../../../Components/Detail";

type DetailPageProps = {
  params: any;
};

export default async function DetailPage(props: DetailPageProps) {
  const db = (await connectDB).db("blog");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return result ? (
    <div style={{ backgroundColor: "skyblue" }}>
      <Detail writing={result} />
    </div>
  ) : null;
}
