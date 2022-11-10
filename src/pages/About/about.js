import CSS from "./about.module.css";
import Navbar from "../../components/Navbar/Navbar";
// import LOGO from "../public/PLumLogoGradient.png";
import AboutHeader from "../../components/AboutHeader/AboutHeader";
import GEORGEPLUM from "../../assets/plum-pics/george-plum.png";
import Footer from "../../components/Footer/Footer";

const about = () => {
  return (
    <div className={CSS.container}>
      <Navbar />
      <header>
        <AboutHeader />
      </header>
      <section className=" m-4 w-full md:w-750 lg:w-850 ml-auto mr-auto mt-16 mb-24">
        <h1 className="text-30 mb-4 sm:mb-0 md:w-full text-center md:w-auto md:text-left ml-auto mr-auto">Our Leadership</h1>
        <div className="flex flex-col  gap-7 justify-center items-center md:flex-row">
          <div className="w-300 md:w-500 md:w-72">
            <img src={GEORGEPLUM} alt="George Plum" />
          </div>
          <div className="flex justify-center  flex-col md:w-full sm:w-500 p-4">
            <h3 className="mb-3 text-30 text-center md:text-left ">George L. Plum</h3>
            <h3 className="mb-5 text-2xl text-center md:text-left ">Broker/Owner</h3>
            <p className="mb-2 text-16 md:text-18">
              George is a life-long south Jersey native, a graduate of Gloucester Catholic High School, Rutgers University, a proud husband and father of two children. George&apos;s entrepreneurial
              spirit started at a young age as he worked to develop a successful landscaping business by the age of twenty one years old,
            </p>
            <p className="text-16 md:text-18">
              while simultaneously earning a Bachelor&apos;s Degree from Rutgers University. Shortly after graduation, George obtained his real estate license. Fast forward eleven years, gaining
              tremendous experience working in some of the largest franchises in real estate, George founded The Plum Real Estate Group in November of 2020.
            </p>
          </div>
        </div>
      </section>
      <div className="flex justify-center mb-32">
        <div className="w-fit-content">
          <h2 className="text-24 w-300 text-center">The Plum Real Estate Group Subscribe Form</h2>
          <form className="flex flex-col">
            <label className="hidden" htmlFor="email">
              Email
            </label>
            <input name="email" placeholder="Email" className="border-b border-zinc-400 focus:outline-black p-1 text-18 mt-4 mb-2"></input>
            <button className="p-1 bg-black text-white block" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;
