export default function Notes() {
  const data = [{ name: "Johnny" }, { name: "Jason" }, { name: "Paul" }];
  return (
    <div className="notes">
      <div className="notes-container mt-10 m-auto d-flex">
        {data.map((item, i) => {
          return (
            <div className="notes-item" key={i}>
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
