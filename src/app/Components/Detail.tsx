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
    <div className="detailContainer">
      <div style={{ width: "80%", marginTop: "100px" }}>
        <div className="mb-5 detailInputContainer">
          <span style={{ marginRight: "30px" }}>제목</span>
          <div style={{ width: "85%", backgroundColor: "white" }}>
            {writing?.title}
          </div>
        </div>
        <div className="mb-6 detailInputContainer">
          <div style={{ marginRight: "30px" }}>내용</div>
          <div
            style={{ width: "85%", height: "600px", backgroundColor: "white" }}
          >
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
