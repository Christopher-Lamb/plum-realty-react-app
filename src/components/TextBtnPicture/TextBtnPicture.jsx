import CSS from "./TextBtnPicture.module.css";

const TextBtnPicture = ({ title, children, button, buttonBackground, link = "/", buttonColor, src, color, background, flexDirection }) => {
  return (
    <div className={CSS.container} style={{ color, flexDirection }}>
      <div className={CSS.textWrapper + " gap-2"} style={{ background }}>
        <h1 className={CSS.title + " text-20"}>{title}</h1>
        <p className={CSS.text}>{children}</p>

        <a href={link}>
          <button className={CSS.button} style={{ background: buttonBackground, color: buttonColor }} onClick={() => (window.location = link)}>
            {button}
          </button>
        </a>
      </div>
      <div className={CSS.imgWrapper}>
        <img src={src} alt="give" className={CSS.img} />
      </div>
    </div>
  );
};

export default TextBtnPicture;
