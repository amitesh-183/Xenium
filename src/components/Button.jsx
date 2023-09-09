import buttonCss from "../styles/button.module.css";

export default function Button({ message }) {
  return (
    <div>
      <button className={buttonCss.uiBtn}>
        <span>{message}</span>
      </button>
    </div>
  );
}
