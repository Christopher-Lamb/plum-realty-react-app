import { useEffect, useRef } from "react";
const Button = ({ children, className }) => {
  return (
    <div className="w-full col-span-6 grid grid-cols-6 mt-4">
      <button className={`w-full  active:translate-y-px ${className}`} onClick={(e) => e.preventDefault()}>
        {children}
      </button>
    </div>
  );
};

export default Button;
