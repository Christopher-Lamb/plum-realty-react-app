import { useRef, useState } from "react";
import CSS from "./Navbar.module.css";
import LOGO from "../../assets/plumLogoSVG.svg";
import { navRoutes } from "../../config/routes";
// import { businessInfo } from "../config/businessInfo";
// import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const dropdownRef = useRef();
  const [dropDownState, setDropDownState] = useState(true);

  const toggleDropdown = () => {
    if (dropDownState) {
      dropdownRef.current.classList.add(CSS.open);
      dropdownRef.current.classList.remove(CSS.close);
    } else {
      dropdownRef.current.classList.remove(CSS.open);
      dropdownRef.current.classList.add(CSS.close);
    }

    setDropDownState((state) => !state);
  };

  return (
    <>
      <nav className={CSS.container}>
        <div className={CSS.leftSide}>
          <a href="/">
            <img src={LOGO} style={{ width: `${50 / 16}rem`, height: `${50 / 16}rem` }} /> The Plum Real Estate Group
          </a>
        </div>
        <div className={CSS.rightSide}>
          <div className={CSS.linkWrapper}>
            {navRoutes.map((page) => (
              <a key={page.href} href={page.href}>
                {page.name}
              </a>
            ))}
          </div>
        </div>
        <div className={CSS.navMobile}>
          <a onClick={() => toggleDropdown()} style={{ cursor: "pointer" }}>
            <GiHamburgerMenu size="2rem" />
          </a>
        </div>
      </nav>
      <div className={`${CSS.dropDownMenu}`} style={{ "--dropdown-height": `${navRoutes.length * 3}rem` }} ref={dropdownRef}>
        {navRoutes.map((page) => (
          <a key={page.href} href={page.href}>
            {page.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
