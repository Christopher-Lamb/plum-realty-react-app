import Navbar from "../components/Navbar/Navbar";
import HouseTag from "../components/HouseTag";
import LocalFilter from "../components/LocalFilter";
import HousesJson from "../config/local-listings.json";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function LocalListings() {
  const [houseSize, setHouseSize] = useState();
  const [housesArr, setHousesArr] = useState(HousesJson);
  const [noHouses, setNoHouses] = useState(false);

  //Price
  useEffect(() => {
    handleResize();
    function handleResize() {
      const windowWidth = window.innerWidth;
      if (windowWidth < 1025) {
        setHouseSize(250);
      } else if (windowWidth > 1024) {
        setHouseSize(350);
      }
    }

    window.addEventListener("resize", handleResize);
  }, []);

  const handleFilter = (arr) => {
    if (arr.length === 0) {
      setNoHouses(true);
    } else {
      setNoHouses(false);
    }
    setHousesArr(arr);
  };

  return (
    <>
      <Navbar />
      <Header>Local Listings</Header>
      <LocalFilter handleSearch={handleFilter} housesArray={HousesJson} />
      <div className="grid gap-5 lg:gap-7 sm:px-5 mt-6 w-250 ml-auto mr-auto xs:w-full" style={{ gridTemplateColumns: `repeat(auto-fit, ${houseSize / 16}rem)` }}>
        {housesArr.map((house, i) => {
          let formatting_options = {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          };
          let dollarString = new Intl.NumberFormat("en-US", formatting_options);
          let finalString = dollarString.format(house.price);
          return (
            <HouseTag
              key={i}
              link={"/local-listings/" + house.id}
              index={i}
              src={house.imageUrl}
              price={finalString}
              baths={house.baths}
              beds={house.beds}
              sqft={house.sqft}
              address={house.address}
              size={houseSize / 16}
            />
          );
        })}
      </div>
      {noHouses && (
        <div className="w-full flex flex-col">
          <h1 className=" w-fit-content text-gray-800 text-30 text-center">No Houses Found. . .</h1>
          <p className=" w-fit-content text-gray-700 text-14 text-center">No houses fit the search you have selected please try again.</p>
        </div>
      )}
    </>
  );
}
