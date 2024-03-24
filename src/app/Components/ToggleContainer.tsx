"use-client";

import Link from "next/link";
import { useEffect } from "react";

type Props = {
  toggle: boolean;
  setToggle(toggle: boolean): void;
};

export default function ToggleContainer(props: Props) {
  const { toggle, setToggle } = props;

  useEffect(() => {
    setToggle(false);
  }, []);

  return (
    <div className={toggle ? "hidden" : "toggle-container-On"}>
      <Link href="/">
        <div className="toggle-item">Home</div>
      </Link>
      <Link href="/main/myNote">
        <div className="toggle-item">My Notes</div>
      </Link>
    </div>
  );
}
