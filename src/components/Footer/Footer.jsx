import CSS from "./Footer.module.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#2E2933] py-16">
      <div className="mx-auto w-11/12 lg:w-4/5 xl:w-3/5 grid grid-cols-4 gap-4">
        <div className="col-span-2">
          <h1 className="text-24 md:text-28 tracking-wide text-[#C87DCC]">About</h1>
          <p className="text-zinc-300 text-14 md:text-16">
            As the leading real estate brokerage in the area, we are dedicated to providing our clients with the finest customer service available. If you are looking to buy, sell or rent a property,
            you have come to the right place.
          </p>
        </div>
        <div className="col-span-1">
          <h1 className="text-24 md:text-28 tracking-wide text-[#C87DCC]">Contact</h1>
          <p className="text-zinc-300 text-14 md:text-16">901 Cooper St. Deptford, NJ 08096</p>
        </div>
        <div className="col-span-1">
          <h1 className="text-24 md:text-28 tracking-wide text-[#C87DCC]">Menu</h1>
          <p className="text-zinc-300 text-14 md:text-16">
            <a href="/contact">CONTACT</a> / <a href="/our-team">AGENTS</a> / <a href="/our-listings">HOMES</a>
          </p>
        </div>
        <div className="flex gap-4 col-span-4">
          <FaFacebook size="2rem" color="white" />
          <FaTwitter size="2rem" color="white" />
        </div>
        <div className="flex gap-4 col-span-4 text-12 text-zinc-300 ">© 2022 The PLum Real Estate Group. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
