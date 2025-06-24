import { useState } from "react";
import { Link } from "react-router-dom";

function ContactPage() {
  const [submit, setSubmit] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div className="flex justify-center orange w-[80rem] rounded-[20px] max-w-full">
          <div className="flex flex-col w-[30rem] max-w-full gap-5">
            <h1 className="text-left text-6xl text-white jost400 mt-45">
              Contact Us
            </h1>
            <p className="text-left text-white text-lg">
              Ready to take it to the next level? Let's talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that's relatable to
              your users, drop us a line.
            </p>
          </div>
          <div className="flex justify-end gap-20">
            <form onSubmit = {() => {setSubmit(true)} } className="flex flex-col text-white p-20 w-[40rem] gap-10">
              <label> Name: </label>

              <input
                className="border-b border-white outline-none text-xl"
                type="name"
                required
                for="firstName"
                placeholder="John Doe"
              ></input>
              <label> Email Address: </label>

              <input
                className="border-b border-white outline-none text-xl"
                type="email"
                required
                for="firstName"
                placeholder="example@gmail.com"
              ></input>
              <label>Phone</label>
              <select>
                <option className="text-black">South Africa</option>
                <option className="text-black">Canada</option>
                <option className="text-black">United States</option>
                <option className="text-black">United Kingdom</option>
                <option className="text-black">Australia</option>
                <option className="text-black">Mexico</option>
                <option className="text-black">Japan</option>
              </select>
              <input
                className="border-b border-white outline-none text-xl"
                type="tel"
                placeholder="+123 456 789"
              ></input>

              <label>Message:</label>
              <input
                className="border-b border-white outline-none text-xl h-20"
                type="text"
                placeholder="How can we help you?"
              ></input>
              <button
                type="submit"
                className="px-5 py-5 bg-white w-35 text-black text-2xl rounded-[10px] cursor-pointer hover:bg-red-300 transition hover:text-white"
              >
                Submit
              </button>

              {submit && (
                <div
                  onClick={() => setSubmit(false)}
                  className="fixed inset-0 flex justify-center items-center bg-black/30 backdrop-blur-sm"
                >
                  <div className="inset-0 bg-green-400 flex items-center justify-center flex-col rounded-[15px] w-[30rem] h-[10rem]">
                    <h1 className="">All Good!</h1>
                    <p>Thank you for your message! We will be in touch soon</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20 mb-20">
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-20">
          <div className="flex flex-col justify-center items-center gap-10">
            <img src="src/assets/location icons/1.svg"></img>
            <h1 className="text-4xl md:text-2xl">CANADA</h1>
            <button className="py-4 px-8 orangeHover rounded-[10px] text-white text-xl cursor-pointer transition-colors duration-300">
              <Link to={"/locations"}>See Location</Link>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            <img src="src/assets/location icons/2.svg"></img>
            <h1 className="text-4xl md:text-2xl">AUSTRALIA</h1>
            <button className="py-4 px-8 orangeHover rounded-[10px] text-white text-xl cursor-pointer transition-colors duration-300">
              <Link to={"/locations"}>See Location</Link>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            <img src="src/assets/location icons/3.svg"></img>
            <h1 className="text-4xl md:text-2xl">UNITED KINGDOM</h1>
            <button className="py-4 px-8 orangeHover rounded-[10px] text-white text-xl cursor-pointer transition-colors duration-300">
              <Link to={"/locations"}>See Location</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
