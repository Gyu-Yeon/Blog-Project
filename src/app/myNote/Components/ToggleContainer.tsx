"use-client";

type Props = {
  toggle: boolean;
};

export default function ToggleContainer(props: Props) {
  const { toggle } = props;
  console.log(toggle);
  return (
    <div className={toggle ? "toggle-container-On" : "toggle-container-Off"}>
      <div className="toggle-item">Home</div>
      <div className="toggle-item">My Notes</div>
    </div>
  );
}
