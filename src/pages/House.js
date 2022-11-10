import { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import LocalListingsJson from "../config/local-listings.json";
import { useRouter } from "next/router";
import Image from "next/image";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { Form, Input, Button, Textarea } from "../components/Form";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

export const getStaticPaths = async () => {
  const paths = await LocalListingsJson.map((house) => ({ params: { houseId: `${house.id}` } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const houseId = context.params.houseId;

  return { props: { houseId: `${houseId}` } };
};

const HousePage = ({ houseId }) => {
  const [state, setState] = useState({});

  const setInfo = () => {
    LocalListingsJson.forEach((house) => {
      // console.log(houseId, house.id);
      // console.log(router);
      if (`${house.id}` === houseId) {
        setState(house);
        // console.log("once");

        let formatting_options = {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
        };
        let dollarString = new Intl.NumberFormat("en-US", formatting_options);
        let finalPrice = dollarString.format(house.price);
        setState((prevState) => ({ ...prevState, price: finalPrice }));
      }
    });
  };
  useEffect(() => {
    setInfo();
  }, []);

  return (
    <>
      <Navbar />

      <>
        <header className="px-8 lg:w-4/5 xl:w-3/5 mt-16 mr-auto ml-auto">
          <h2 className="text-30">{state.address}</h2>
          <h1 className="text-42">{state.price}</h1>
        </header>
        <div id="image-section" className="mx-auto lg:w-700 xl:w-800 flex items-center">
          <div className="grid relative items-center  lg:w-700 xl:w-800 mx-auto justify-center overflow-hidden">
            {/* <img src={state.imageUrl} className="border" /> */}
            {state.imageUrl && (
              <Carousel
                canAutoPlay={false}
                images={[
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                  { src: state.imageUrl },
                ]}
                style={{ width: "700px", height: "500px" }}
              />
            )}
          </div>
          {/* <div className="absolute w-full left-0">
            <div className="flex justify-between items-center lg:w-700 xl:w-800 mx-auto h-600 xl:px-4">
              <HiOutlineChevronLeft className="cursor-pointer hover:text-gray-600 text-7xl lg:text-8xl" />
              <HiOutlineChevronRight className="cursor-pointer hover:text-gray-600 text-7xl lg:text-8xl" />
            </div>
          </div> */}
        </div>
        <section className="flex justify-center gap-1 flex-wrap mt-4 md:4">
          <div className="px-12 py-5 text-white bg-nav-color tracking-wide">Beds: {state.beds}</div>
          <div className="px-12 py-5 text-white bg-nav-color tracking-wide ">Baths: {state.baths}</div>
          <div className="px-12 py-5 text-white bg-nav-color tracking-wide ">Sq.Ft: {state.sqft}</div>
          <div className="px-12 py-5 text-white bg-nav-color tracking-wide ">Type: {state.type}</div>
        </section>
        <article className="px-8 lg:w-4/5 xl:w-3/5 mx-auto mt-8">
          SEIZE THIS RARE OPPORTUNITY! Own a new construction luxury home in Haddon Township. Act quickly to choose finishes and truly make this house your personal dream home. This 3,000 sq. ft. 4
          br, 2 1/2 bath premium home is underway and sited on a premium oversized lot close to everything.Stunning exterior elevation including columned front porch and an attached garage offers a
          great curb appeal.Enter the main entrance to a spacious foyer with adjacent office/study. Past the foyer are the powder room, staircase, and mudroom. The mudroom features built in storage
          cubbies, tile floor and an entrance to the garage. Continue to a large open concept kitchen, dining area and great room, with access to the back yard. The chef&apos;s kitchen features
          designer layout, 42 cabinets, spacious island with counter seating, high end appliances, quartz countertops, and a tile backsplash. The adjoining generous dining area will accommodate all
          gatherings graciously. The adjacent great room features a stunning fireplace and optional coffered ceiling.
        </article>
        <section className="px-8 md:w-4/5 xl:w-3/6 mx-auto my-12">
          <h1 className="text-30 mb-2">Interested in this property?</h1>
          <p className="text-16">Fill out this form and we will get back to you with as soon as possible with information about {state.address}.</p>
          <Form>
            <Input name="first" label="First Name" className="col-span-6 md:col-span-3" required></Input>
            <Input name="last" label="Last Name" className="col-span-6 md:col-span-3" required></Input>
            <Input name="email" label="Email" className="col-span-6 md:col-span-3" required></Input>
            <Input name="phone" label="Phone" className="col-span-6 md:col-span-3" required></Input>
            <Textarea name="message" label="Questions and Conerns" />
            <Input hidden={true} name="address-id" value={houseId} />
            <Button className="p-2.5 bg-black text-white tracking-wide col-span-6 md:col-span-2">Submit</Button>
          </Form>
        </section>
      </>

      <Footer />
    </>
  );
};

export default HousePage;
