import Link from "next/link";
import IconLabelButtons from "../../Components/Button";

export default function MyNote() {
  const data = [
    { name: "choi", date: "today", content: "sdfklsjafkljsdklfjsdljfkjfsfd" },
    {
      name: "park",
      date: "yes",
      content:
        "sdfklsjafkljsdasdasdsadsjsdasdasdsadsjsdasdasdsadsjsdasdasdsadsadfsfd",
    },
    {
      name: "kim",
      date: "tomo",
      content: "sdfklsjafkljsdklfjsdljfsdljfsdljfsdljfsdljfkjfsfd",
    },
  ];
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
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
      <main className="d-flex m-auto" style={{ width: "75%", height: "100%" }}>
        <section style={{ overflow: "auto" }}>
          {data.map((item, i) => {
            return (
              <div
                className="m-auto mb-5 d-flex"
                style={{
                  width: "90%",
                  height: "150px",
                  backgroundColor: "blue",
                }}
                key={i}
              >
                <h2>{item.name}</h2>
                <h2>{item.date}</h2>
                <span>{item.content}</span>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
