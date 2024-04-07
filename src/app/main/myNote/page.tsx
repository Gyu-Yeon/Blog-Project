import IconLabelButtons from "../../Components/Button";
import Link from "next/link";
import List from "@/app/Components/List";

export default async function MyNote() {
  // console.log(result);
  return (
    <div style={{ width: "100vw" }}>
      <header
        style={{
          display: "flex",
          width: "100%",
          height: "150px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Link href="/main/write">
            <IconLabelButtons />
          </Link>
        </div>
      </header>
      <List />
    </div>
  );
}
