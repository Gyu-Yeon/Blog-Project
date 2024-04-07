"use client";

import { ChangeEvent, useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";

type DetailProps = {
  writing: any;
};

export default function Detail(props: DetailProps) {
  const { writing } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "93vh",
        backgroundColor: "skyblue",
      }}
    >
      <div
        style={{
          width: "80%",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
          }}
          className="mb-5"
        >
          <span style={{ marginRight: "30px" }}>제목</span>
          <div style={{ width: "85%" }}>{writing?.title}</div>
        </div>
        <div
          className="mb-6"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <div style={{ marginRight: "30px" }}>내용</div>
          <div style={{ width: "85%", height: "600px" }}>
            {writing?.content}
          </div>
        </div>
        <Link href={`/main/edit/${writing._id}`}>
          <div
            className="mb-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              style={{ width: "30%" }}
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              수정하기
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}
