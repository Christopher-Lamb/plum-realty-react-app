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
        <div>
          <TextBtnPicture title="Our Houses" button="View Our Homes" link="/our-listings" src={HOUSESOVER} buttonBackground="var(--accent-color)" buttonColor="white">
            From the Multiple Listing Service (MLS) to Zillow, Trulia, and Realtor.com, we advertise our house listings on all of the leading real estate websites. Here are some of our most recent and
            previous listings.
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
            To meet and surpass your demands for home buying and selling, our internal team of agents collaborates to provide an unequaled level of care and expertise. Each agent works full-time as a
            qualified professional. No weekend warriors working part-time here.
          </TextBtnPicture>
        </div>
        <FourStatement title="Our Mission" src={IPADGUY} alt="Guy on Ipad">
          <FourItem title="Save Money">High demand from prospective buyers in Camden County makes it a good time for sellers to earn top dollar for their properties.</FourItem>
          <FourItem title="Customer Service">
            With a top-notch team committed to giving our clients the best customer service, The Plum Real Estate Group is the area's premier real estate agency.
          </FourItem>
          <FourItem title="Comfort">Our highly skilled professionals genuinely care about your desires and needs.</FourItem>
          <FourItem title="Easy to Find">In order to serve the real estate needs of our neighborhood, our office is ideally situated in the heart of Woodbury.</FourItem>
        </FourStatement>
        <div className="bg-secondary-color">
          <section className={`px-4 text-white w-full md:w-9/12 xl:w-7/12 2xl:w-5/12 mx-auto my-8`}>
            <h1 className="text-30 md:text-42 ">Contact Us</h1>
            <p className="">Please fill out this form, and one of our representatives will contact you as soon as possible.</p>
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
