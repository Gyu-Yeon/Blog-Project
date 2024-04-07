import React from "react";
import Link from "next/link";
import { connectDB } from "../../../util/database";

export default async function List() {
  const db = (await connectDB).db("blog");
  const result = await db.collection("post").find().toArray();

  const filterDateParts = (dateString: string) => {
    const date = new Date(dateString);

    const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줍니다.
    const day = date.getDate();
    const year = date.getFullYear();

    const dateResult = { month, day, year };
    return `작성일자: ${dateResult.year}년 ${dateResult.month}월 ${dateResult.day}일 `;
  };

  return (
    <main className="d-flex m-auto" style={{ width: "75%", height: "100%" }}>
      <section style={{ overflow: "auto" }}>
        {result.map((item, i) => {
          return (
            <Link key={item.id} href={`/main/detail/${item._id}`}>
              <div
                className="m-auto mb-5 d-flex"
                style={{
                  width: "90%",
                  height: "150px",
                  backgroundColor: "skyblue",
                }}
                key={item.id}
              >
                <div className="p-5">
                  <h2>{item.title}</h2>
                  <h2>{filterDateParts(item.date)}</h2>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
