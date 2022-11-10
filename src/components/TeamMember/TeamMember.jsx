import CSS from "./TeamMember.module.css";
import { useState, useEffect, useRef } from "react";
import GEORGEPLUM from "../../assets/plum-pics/george-plum.png";

const TeamMember = ({ index, getPosition = () => {}, dimensions = "", left, right, obj }) => {
  const backgroundRef = useRef();
  const imgRef = useRef();
  const subRef = useRef();

  const handleHover = (e) => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1023) {
      const X = imgRef.current.getBoundingClientRect().left;
      const difference = left - X;
      imgRef.current.style.transform = `translateX(${difference}px)`;
      backgroundRef.current.classList.remove("hidden");
      backgroundRef.current.style.zIndex = "9997";
      imgRef.current.style.zIndex = "9998";
      subRef.current.classList.add("invisible");
    }
  };

  const handleLeave = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1023) {
      imgRef.current.style.transform = `translateX(${0}px)`;
      backgroundRef.current.classList.add("hidden");
      backgroundRef.current.style.zIndex = "0";
      imgRef.current.style.zIndex = "0";
      if (index % 3 !== 0) {
        const timer = setTimeout(() => {
          if (subRef.current !== null) subRef.current.classList.remove("invisible");
        }, 1000);
        return () => clearTimeout(timer);
      } else subRef.current.classList.remove("invisible");
    }
  };

  const toggleInfo = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1024) {
      const arr = [...backgroundRef.current.classList];
      const isClosed = arr.includes("hidden");
      if (isClosed) {
        const X = imgRef.current.getBoundingClientRect().left;
        const difference = left - X;
        imgRef.current.style.transform = `translateX(${difference}px)`;
        backgroundRef.current.classList.remove("hidden");
        backgroundRef.current.style.zIndex = "9997";
        imgRef.current.style.zIndex = "9998";
        subRef.current.classList.add("invisible");
      } else if (!isClosed) {
        imgRef.current.style.transform = `translateX(${0}px)`;
        backgroundRef.current.classList.add("hidden");
        backgroundRef.current.style.zIndex = "0";
        imgRef.current.style.zIndex = "0";
        if (index % 3 !== 0) {
          const timer = setTimeout(() => {
            if (subRef.current !== null) subRef.current.classList.remove("invisible");
          }, 1000);
          return () => clearTimeout(timer);
        } else subRef.current.classList.remove("invisible");
      }
    }
  };

  useEffect(() => {
    getPosition(imgRef.current.getBoundingClientRect());

    // setBgWidth(width);
    // return window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="grid">
      <div
        ref={imgRef}
        className="relative z-10"
        style={{ width: `${dimensions.x}px`, height: `${dimensions.y}px`, transition: "1s" }}
        onClick={toggleInfo}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <img style={{ width: `${dimensions.x}`, height: `${dimensions.y}` }} src={`${obj.image}`} alt={obj.image} />

        <div ref={backgroundRef} className="absolute top-0 flex hidden">
          <div className="" style={{ width: `${dimensions.x}px`, height: `${dimensions.y}px` }}></div>

          <div className=" bg-white shadow-material p-8" style={{ width: `${right - left - dimensions.x}px`, minHeight: `${dimensions.y}px` }}>
            {obj && <MobileText name={obj.name} title={obj.title} bio={obj.text} phone={obj.phone} email={obj.email} />}
          </div>
        </div>
      </div>
      <div ref={subRef} className="flex flex-col justify-center items-center h-100 bg-zinc-100 shadow-material">
        <h1 className="md:text-20 lg:text-24">{obj.name}</h1>
        <h2 className="md:text-16 align-center lg:text-18">{obj.title[0]}</h2>
      </div>
    </div>
  );
};

const demo = {
  name: "George L. Plum",
  title: "Broker/Owner",
  bio: "George is a life-long south Jersey native, a graduate of Gloucester Catholic High School, Rutgers University, a proud husband and father of two children. George's entrepreneurial spirit started at a young age as he worked to develop a successful landscaping business by the age of twenty one years old, while simultaneously earning a Bachelor's Degree from Rutgers University. Shortly after graduation, George obtained his real estate license.  Fast forward eleven years, gaining tremendous experience working in some of the largest franchises in real estate, George founded The Plum Real Estate Group in November of 2020.  With a business built on integrity, ambition and unparalleled communication, George has earned an impeccable reputation amongst his clients and peers.  George's vision in founding the Plum Real Estate Group is rooted in the desire to pass on the same personalized approach, the knowledge, tools and practices to his agents, while fostering a cooperative, non-competitive environment within his office, translating into mirrored results for both his agents and their clients.",
  phone: "8565375464",
  email: "george.plum@live.com",
};

const MobileText = ({ name = demo.name, title = demo.title, bio = demo.bio, phone = demo.phone, email = demo.email }) => {
  return (
    <>
      <h1 className="text-20 tracking-wide">{name}</h1>
      <h2 className="text-18 tracking-wide">{title}</h2>
      <div className="spacer-no-m my-1"></div>
      <p className="mt-2">{bio}</p>
      <h3 className="mt-3 font-semibold tracking-wide">Contact {name.split(" ")[0]}</h3>
      <div className="spacer-no-m my-1" />
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </>
  );
};

const MobileTeamMember = ({ index, obj, dimensions }) => {
  const popUpRef = useRef();
  const overlayRef = useRef();

  const handlePopUp = () => {
    popUpRef.current.classList.remove("hidden");
  };

  const handleClose = () => {
    popUpRef.current.classList.add("hidden");
  };

  return (
    <div style={{ width: `${dimensions.x}px`, height: `${dimensions.y}px` }}>
      <div onClick={handlePopUp} className={"flex cursor-pointer items-end justify-start text-42 text-white "} style={{ width: `${dimensions.x}px`, height: `${dimensions.y}px` }}>
        <img src={obj.image} alt={obj.image} style={{ width: `${dimensions.x}`, height: `${dimensions.y}` }} />
        <div className="absolute h-100 mb-10 flex flex-col justify-center items-center" style={{ width: `${dimensions.x}px` }}>
          <div className=" absolute bg-black h-100 opacity-50" style={{ width: `${dimensions.x}px` }} />
          <h1 className="relative z-30 opacity-80 text-30 align-center">{obj.name}</h1>
          <h2 className="relative z-30 opacity-80 text-28">{obj.title[0]}</h2>
        </div>
      </div>
      <div ref={popUpRef} style={{ zIndex: "9998" }} className="absolute left-0 hidden">
        <span onClick={handleClose} className="bg-zinc-700 flex justify-center p-1 text-white tracking-wide cursor-pointer">
          Close
        </span>
        <div style={{ minHeight: "100px", width: "100vw" }} className={" p-4 pb-10 sm:px-8 flex flex-col bg-white shadow-mac"}>
          {obj && <MobileText name={obj.name} title={obj.title} bio={obj.text} phone={obj.phone} email={obj.email} />}
        </div>
      </div>
    </div>
  );
};

const people = [
  "bg-red-600",
  "bg-orange-600",
  "bg-blue-600",
  "bg-green-600",
  "bg-purple-600",
  "bg-zinc-600",
  "bg-lime-600",
  "bg-yellow-400",
  "bg-emerald-600",
  "bg-teal-500",
  "bg-cyan-600",
  "bg-sky-600",
  "bg-indigo-600",
  "bg-violet-600",
  "bg-fuchsia-600",
  "bg-pink-600",
  "bg-rose-600",
];

const gridDetails = { px: 5, gap: 20 };

const TeamContainer = ({ array = people }) => {
  const [items, setItems] = useState([...array]);
  const [isRendering, setIsRendering] = useState(false);
  const [dimensions, setDimensions] = useState({ x: 0, y: 0 });
  const [leftState, setLeftState] = useState();
  const [rightState, setRightState] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const gridRef = useRef();

  const handleLeftMost = (obj) => {
    setLeftState(obj.x);
  };
  const handleRightMost = (obj) => {
    setRightState(obj.right);
  };

  const reRender = async () => {
    await setIsRendering(false);
    await setIsRendering(true);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1279) {
        setDimensions({ x: 400, y: 550 });
        setIsMobile(false);
        reRender();
        if (gridRef.current !== null) gridRef.current.style.gridTemplateColumns = "repeat(auto-fit, 33%)";
      }
      if (screenWidth < 1280) {
        setDimensions({ x: 280, y: 385 });
        setIsMobile(false);
        reRender();
        if (gridRef.current !== null) gridRef.current.style.gridTemplateColumns = "repeat(auto-fit, 33%)";
      }
      if (screenWidth < 1024) {
        setDimensions({ x: 196, y: 269.5 });
        setIsMobile(false);
        reRender();
        if (gridRef.current !== null) gridRef.current.style.gridTemplateColumns = "repeat(auto-fit, 33%)";
      }
      if (screenWidth < 768) {
        setDimensions({ x: 400, y: 550 });
        setIsMobile(true);
        reRender();
        if (gridRef.current !== null) gridRef.current.style.gridTemplateColumns = "repeat(auto-fit, 100%)";
      }
      if (screenWidth < 640) {
        setDimensions({ x: 320, y: 440 });
        setIsMobile(true);
        reRender();
        if (gridRef.current !== null) gridRef.current.style.gridTemplateColumns = "repeat(auto-fit, 100%)";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <div ref={gridRef} style={{ gridTemplateColumns: `repeat(auto-fit, 33%)` }} className="grid relative ml-auto mr-auto pt-4 gap-y-4 justify-center justify-items-center overflow-hidden">
      {isRendering && (
        <>
          {!isMobile
            ? items.map((item, i) => {
                if (i === 0) return <TeamMember key={i} index={i} getPosition={handleLeftMost} left={leftState} right={rightState} dimensions={{ x: dimensions.x, y: dimensions.y }} obj={item} />;
                else if (i === 2)
                  return <TeamMember key={i} index={i} getPosition={handleRightMost} left={leftState} right={rightState} dimensions={{ x: dimensions.x, y: dimensions.y }} obj={item} />;
                else return <TeamMember key={i} index={i} left={leftState} right={rightState} obj={item} dimensions={{ x: dimensions.x, y: dimensions.y }} />;
              })
            : items.map((item, i) => {
                return <MobileTeamMember key={i} index={i} obj={item} dimensions={dimensions} />;
              })}
        </>
      )}
    </div>
  );
};

export { TeamContainer };
export default TeamMember;
