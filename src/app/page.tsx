import Link from "next/link";

export default function Home() {
  return (
    <div className="main-container">
      <div data-cy="main" className="main-left">
        <Link href="/main/myNote">My Note</Link>
      </div>
      <div className="main-right">
        <Link href="/main/notes">Developers Notes</Link>
      </div>
    </div>
  );
}
