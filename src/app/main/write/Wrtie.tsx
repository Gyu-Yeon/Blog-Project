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
    <div className="d-flex mt-6 write-container">
      <span className="write-title">제목</span>
      <input
        className="write-input"
        type="text"
        value={titleInput}
        name="title"
        onChange={(e) => {
          onchangeInput(e);
        }}
      />
      <span className="write-content">내용</span>
      <textarea
        className="write-textArea"
        value={contentInput}
        name="content"
        onChange={(e) => {
          onchangeInput(e);
        }}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          top: "92.5%",
          left: "92%",
        }}
      >
        <Button variant="contained" endIcon={<SendIcon />}>
          발행하기
        </Button>
      </div>
    </div>
  );
}
