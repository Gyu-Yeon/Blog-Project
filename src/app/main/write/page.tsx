"use-client";

export default function Write() {
  return (
    <div
      className="d-flex mt-6"
      style={{
        backgroundColor: "green",
        width: "90vw",
        height: "80vh",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <textarea
        style={{
          display: "flex",
          width: "80%",
          height: "90%",
          margin: "auto",
        }}
      />
    </div>
  );
}
