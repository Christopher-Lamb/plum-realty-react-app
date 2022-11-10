import CSS from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HOUSES from "../../assets/houses.jpg";
import TextBtnPicture from "../../components/TextBtnPicture/TextBtnPicture";
import HOUSESOVER from "../../assets/housesOverview.png";
import PEOPLESHAKE from "../../assets/peopleHandshake.png";
import IPADGUY from "../../assets/ipadGuy.png";
import FourStatement, { FourItem } from "../../components/FourStatement/FourStatement";
import Footer from "../../components/Footer/Footer";
import { Form, Input, Button, Textarea } from "../../components/Form";

export default function Home() {
  return (
    <div className={CSS.container}>
      <Navbar />
      <div className="grid gap-16 sm:gap-32">
        <HomeHeader src={HOUSES} alt="houses">
          A Personalized Approach to Real Estate
        </HomeHeader>
        <div className="w-100 h-100 bg-black">Hey</div>
        <div>
          <TextBtnPicture title="Our Houses" button="View Our Homes" link="/our-listings" src={HOUSESOVER} buttonBackground="var(--accent-color)" buttonColor="white">
            We promote our home listings across all of the major real estate platforms, from the MLS to Zillow, Trulia and Realtor.com. Here are a few of our current and past listings.
          </TextBtnPicture>
          <TextBtnPicture
            title="Our Agents"
            button="Meet Our Agents"
            color="white"
            background="var(--accent-color)"
            src={PEOPLESHAKE}
            link="/our-team"
            flexDirection="row-reverse"
            buttonBackground="white"
            buttonColor="var(--accent-color)"
          >
            Our in-house team of agents work together to offer an unmatched level of service and knowledge to exceed your home buying and selling needs. Every Houwzer Agent is is a full-time,
            experienced professional. No part-time weekend warriors here.
          </TextBtnPicture>
        </div>
        <FourStatement title="Our Mission" src={IPADGUY} alt="Guy on Ipad">
          <FourItem title="Save Money">The demand from buyers interested in a purchase in Camden County is high, which makes it a strong time for sellers to get top value for their homes.</FourItem>
          <FourItem title="Customer Service">
            The demand from buyers interested in a purchase in Camden County is high, which makes it a strong time for sellers to get top value for their homes.
          </FourItem>
          <FourItem title="Comfort">The demand from buyers interested in a purchase in Camden County is high, which makes it a strong time for sellers to get top value for their homes.</FourItem>
          <FourItem title="Easy to Find">The demand from buyers interested in a purchase in Camden County is high, which makes it a strong time for sellers to get top value for their homes.</FourItem>
        </FourStatement>
        <div className="bg-secondary-color">
          <section className={`px-4 text-white w-full md:w-9/12 xl:w-7/12 2xl:w-5/12 mx-auto my-8`}>
            <h1 className="text-30 md:text-42 ">Contact Us</h1>
            <p className="">Please fill out this form, and one of our representatives will contact you as soon as possible. </p>
            <Form>
              <Input name="first" label="First" className="col-span-6 md:col-span-3 "></Input>
              <Input name="last" label="Last" className="col-span-6 md:col-span-3 "></Input>
              <Input name="email" label="Email" className="col-span-6 md:col-span-6 xl:col-span-3 "></Input>
              <Input name="phone" label="Phone" className="col-span-6 md:col-span-3 "></Input>
              <Textarea name="message" label="How can we help?" />
              <Button className="p-2.5 col-span-6 md:col-span-2 bg-black  tracking-wide ">Submit</Button>
            </Form>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}
