import { ObjectId } from "mongodb";
import { connectDB } from "../../../../../util/database";
import Detail from "../../../Components/Detail";
import Edit from "@/app/Components/Edit";

type EditPageProps = {
  params: any;
};

export default async function EditPage(props: EditPageProps) {
  const db = (await connectDB).db("blog");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  console.log(2);

  return (
    <div style={{ backgroundColor: "skyblue" }}>
      <Edit writing={result} />
    </div>
  );
}
