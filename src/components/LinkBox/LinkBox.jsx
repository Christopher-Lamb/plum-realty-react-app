import CSS from "./LinkBox.module.css";

const LinkBox = ({
  title = "title",
  button = "button",
  children = "children",
  width = "30rem",
  minHeight = "20rem",
  link = "/",
}) => {
  return (
    <div className={CSS.container} style={{ width, minHeight }}>
      <div className={CSS.wrapper}>
        <h1 className={CSS.title}>{title}</h1>
        <p className={CSS.text}>{children}</p>
        <button onClick={() => (window.location = link)} className={CSS.button}>
          {button}
        </button>
      </div>
    </div>
  );
};

export default LinkBox;
