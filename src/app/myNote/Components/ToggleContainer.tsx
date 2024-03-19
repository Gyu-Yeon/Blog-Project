"use-client";

import { useEffect } from "react";

type Props = {
  toggle: boolean;
};

export default function ToggleContainer(props: Props) {
  const { toggle } = props;
  console.log(toggle);

  console.log(toggle, 1);

  return (
    <div className={toggle ? "hidden" : "toggle-container-On"}>
      <div className="toggle-item">Home</div>
      <div className="toggle-item">My Notes</div>
    </div>
  );
}
