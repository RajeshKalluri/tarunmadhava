import React from "react";
import partnership from "../images/partnership_1.jpg";
import { useNavigate } from "react-router-dom";
import newp from "../images/10517251869823353405 2 (1).png";
function Partnership() {
  const navigate = useNavigate();
  const bulletPoints = [
    "No Major Investment",
    "No Franchise Fees",
    "No Loss of Job Security",
    "No Experience Required",
    "Start as Part Time/Full Time",
    "Revolutionary Compensation System",
    "Proven, Predictable and Profitable Business System",
    "Tremendous leadership team with an unparalleled track record of success",
    "Impressive business history, revolutionizing some of the largest industries in the world",
    "Innovative, consumer-oriented concepts of leading-edge product provider companies",
    "Cutting-edge technology to help build and run your business",
    "World-class recognition and reward system",
  ];

  return (
    <>
      <div className="bg-gray-50">
        <section className="flex flex-col md:flex-row  items-center justify-between max-w-screen-xl mx-auto  md:px-20 ">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h4 className="text-[#644e40] font-semibold uppercase text-sm mb-4">
              Aspiring for Partnership
            </h4>
            <h1 className="text-3xl md:text-3xl font-semibold text-gray-700 leading-tight">
              Mandava Financial Services<br />
              makes money management<br />
              simple, smart, and stress-free.
            </h1>
          </div>
          <div className="md:w-1/2 flex justify-center p-8">
            <img
              src={newp}
            
              alt="Business people working"
              className="rounded-lg shadow-lg max-w-full h-auto "
            />
          </div>
        </section>
      </div>

      {/* Personalized message with link */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-20 py-6 text-center">
        <p className="text-[#002E5B] text-lg mb-4">
          For a more personalized experience with <strong>Tarun Mandava</strong> and <strong>Experior Financial Services</strong>, click the link below:
        </p>
        <a
          href="https://umustsee.net/MIU7IP"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-900 text-white font-semibold rounded-md hover:bg-[#644e40] transition px-7 py-3 duration-300 ease-in-out text-center"
        >
          Click for More Details
        </a>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-20 py-6">
        <h1 className="text-3xl text-[#002E5B] text-extrabold pt-4 pb-4">
          WE OFFER A RISK-FREE BUSINESS OPPORTUNITY...
        </h1>
        <ul className="space-y-2 text-[#002E5B]">
          {bulletPoints.map((item, ind) => (
            <li key={ind}>&#9675; {item}</li>
          ))}
        </ul>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-20 py-6 text-center">
        <button
          className="bg-gray-900 text-white font-semibold rounded-md hover:bg-[#644e40] transition px-7 py-3 duration-300 ease-in-out"
          onClick={() => navigate('/BookAnAppointment')}
        >
          BOOK AN APPOINTMENT
        </button>
      </div>
    </>
  );
}

export default Partnership;
