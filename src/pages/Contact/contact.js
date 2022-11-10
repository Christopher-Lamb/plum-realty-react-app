import Navbar from "../../components/Navbar/Navbar";
// import CSS from "../styles/contact.module.css";
import LOCATION from "../../assets/plumLocation.png";
import Footer from "../../components/Footer/Footer";
import { Form, Input, Button, Textarea } from "../../components/Form";
import Header from "../../components/Header";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Header>Contact Us</Header>
      <section>
        <div className="w-full flex xl:mt-10 ">
          <div className=" w-full  md:w-1/2 flex p-4 flex-wrap justify-end xl:h-600">
            <header className="w-full lg:w-600 flex flex-col justify-end mb-4">
              <h1 className="text-30 md:text-36">Have a Question?</h1>
              <p className="text-16 text-black-800">Message us below and we will respond as soon as possible.</p>
            </header>
            <Form className="w-full lg:w-600">
              <Input name="first" label="First Name" className="col-span-6 md:col-span-3" required></Input>
              <Input name="last" label="Last Name" className="col-span-6 md:col-span-3" required></Input>
              <Input name="email" label="Email" className="col-span-6 md:col-span-3" required></Input>
              <Input name="phone" label="Phone" className="col-span-6 md:col-span-3" required></Input>
              <Textarea name="message" label="How can we Help?" />
              <Input hidden={true} name="page" value="contact" />
              <Button className="bg-black text-white p-2.5 col-span-6">Submit</Button>
            </Form>
          </div>
          <div className="md:w-1/2 flex justify-start items-center ">
            <div className="hidden md:block w-400 lg:w-500 2xl:w-600">
              <img alt="location" src={LOCATION} />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="md:hidden w-400 lg:w-500 2xl:w-600">
            <img alt="location" src={LOCATION} />
          </div>
        </div>
      </section>
      <div className="w-4/5 mr-auto ml-auto mb-32 mt-12">
        <h2 className="text-30 md:text-36">Contact Our Agents!</h2>
        <ul className="text-20">
          <li>Phone: (856)-537-5464</li>
          <li>Email: info@theplumrealestategroup.com</li>
          <li>Address: 901 Cooper St. Deptford, NJ 08096</li>
        </ul>
      </div>
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
    </>
  );
}
