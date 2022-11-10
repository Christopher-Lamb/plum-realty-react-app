import HOUSE from "../assets/plumLocation.png";

const HouseTag = ({ index, src = HOUSE, price, link, beds, baths, sqft, lot, address = "106 Melrose Ave,Haddon Township, NJ 08108", size }) => {
  const getAddress = () => {
    if (!address) return;
    const addressArr = address.split(",");
    return (
      <>
        <span className="text-14 lg:text-16">{addressArr[0]}</span>
        <span className="text-14 lg:text-16">
          {addressArr[1]},{addressArr[2]}
        </span>
      </>
    );
  };

  return (
    <a href={link}>
      <div className="relative cursor-pointer">
        <div style={{ height: `${size + 8}rem` }}>
          {/* <Image src={src} /> */}
          <img src={src} alt="house" style={{ objectFit: "cover", width: `${size}rem`, height: `${size}rem` }} />
          <div className="relative">
            <div className="absolute shadow-material w-full bg-white border -top-1.5 flex flex-col p-2">
              <span className="text-16 lg:text-20">{price}</span>
              <span className="text-14">
                {beds} bed | {baths} bath | {sqft}sqft | {lot} acre lot
              </span>
              {getAddress()}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default HouseTag;
