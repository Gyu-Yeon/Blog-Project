"use client";

import { ChangeEvent, useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function Write() {
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const onchangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "title") {
      setTitleInput(e.target.value);
    } else if (e.target.name === "content") {
      setContentInput(e.target.value);
    }
  };

  return (
    <form action="/api/write" method="POST">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "93vh",
        }}
      >
        <div
          style={{
            width: "80%",
            marginTop: "100px",
          }}
        >
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="mb-5"
          >
            <span style={{ marginRight: "30px" }}>제목</span>
            <input
              style={{ width: "85%" }}
              type="text"
              value={titleInput}
              name="title"
              onChange={onchangeInput}
            />
          </div>
          <div
            className="mb-6"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ marginRight: "30px" }}>내용</div>
            <textarea
              style={{ width: "85%", height: "600px", resize: "none" }}
              value={contentInput}
              name="content"
              onChange={onchangeInput}
            />
          </div>
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
              발행하기
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
