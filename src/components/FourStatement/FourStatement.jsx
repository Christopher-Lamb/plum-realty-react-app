import CSS from "./FourStatement.module.css";
// import Image from "next/image";

const FourStatement = ({ src, alt, title, children }) => {
  return (
    <div className={CSS.container}>
      <div className={CSS.imgWrapper}>
        <img src={src} alt={alt} />
      </div>
      <div className={CSS.textWrapper}>
        <h1 className={CSS.title + " text-20"}>{title}</h1>
        {children}
      </div>
    </div>
  );
};

const FourItem = ({ title, children }) => {
  return (
    <div className={CSS.item}>
      <h2 className={CSS.itemTitle + " text-18"}>{title}</h2>
      <div className={CSS.spacer} />
      <p className={CSS.itemText}>{children}</p>
    </div>
  );
};

export default FourStatement;

export { FourItem };
