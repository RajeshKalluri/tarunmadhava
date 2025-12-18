import React,{useState} from "react";
import consulting from "../images/mb_picture.jpeg";
import tarun from "../images/Tarun_mandava.jpg";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProfileSection = () => {
    const expertise= ["Personalized Approach","Innovative Thinking","Expertise in Market Trends","Comprehensive Services"]
     const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      data.append(key, val);
    });
    data.append("_captcha", "false");

    try {
      const response = await fetch(
        "https://formsubmit.co/tarunmandava.fin@gmail.com",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success("✅ Your message was sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          city: "",
          state: "",
          country: "",
        });
      } else {
        toast.error("❌ Failed to send. Please try again.");
      }
    } catch (err) {
      toast.error("⚠️ Network error. Please try again.");
    }
  }
  return (
    <>
      <div className="pb-5 max-w-screen-xl mx-auto px-6 sm:px-10 py-5">
        <h1 className="text-3xl font-bold text-">Tarun Kumar Mandava</h1>
        <p className="text-gray-500 mb-6 pt-2 text-lg">CEO/President</p>
      </div>

      <div className="flex max-w-screen-xl mx-auto px-6 sm:px-10 pt-4 pb-6">
        <div className="flex-shrink-0">
          <img
            src={tarun}
            alt="Consulting"
            className="w-[250px] h-[250px] rounded-lg shadow-lg border-b-2 border-transparent hover:border-b-green-500 transition duration-300"
          />
        </div>

        <div className="text-center md:text-left max-w-2xl pl-10 pt-10">
          <div className="mb-6">
            <h3 className="font-bold text-[#002E5B] mb-2 text-xl pb-2 pt-2">
              Areas Of Expertise
            </h3>
            <ul className="space-y-2">
              {expertise.map((item, ind) => (
                <li key={ind} className="text-sm text-[#002E5B]">
                  &#9675; {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="text-[#002E5B] text-sm  max-w-screen-xl mx-auto px-6 sm:px-10">
        Tarun Mandava is a financial educator, entrepreneur, and business leader dedicated to
helping families build secure financial futures. He is the founder of Munna LLC (Mandava
Financial Services), where the mission is simple yet powerful:
      </p>
      <p className="text-[#002E5B] text-lg py-3 max-w-screen-xl mx-auto px-6 sm:px-10">
        “Building Financial Foundations for Families to Empower Them Today, and Leave a Legacy for
Tomorrow.”
      </p>
      <p className="text-[#002E5B] text-sm  max-w-screen-xl mx-auto px-6 sm:px-10">
        Through personalized financial strategies, Tarun has guided families in retirement planning,
college funding, life insurance, and wealth transfer. As a Certified Tax & Business Advisor
(<strong>CTBA</strong>) , he brings advanced expertise in tax efficient planning, wealth transfer, and
business solutions helping families keep more of what they earn and pass on a stronger
legacy to the next generation.
      </p>

      <p className="text-[#002E5B] text-sm py-3 max-w-screen-xl mx-auto px-6 sm:px-10">
        In addition to his financial work, Tarun brings a rich career in Information Technology
(IT) spanning over 20 years. He holds advanced degrees including an MBA and MS in
Business Analytics. His analytical skills and commitment to precision perfectly complement
his passion for teaching financial literacy.
      </p>

      <p className="text-[#002E5B] text-sm  max-w-screen-xl mx-auto px-6 sm:px-10">
        As a mentor and leader, Tarun has trained and inspired professionals to pursue careers in
financial services empowering them to achieve both financial independence and personal
growth. Outside of work, he is deeply family-oriented and community-driven. He believes
true wealth is measured not only in dollars, but in the impact we leave behind for the next
generation.
      </p>

      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 pb-16 pt-8">
        <div className="bg-[#644e40] text-white py-10 px-6 md:px-20">
          <div className="grid md:grid-cols-3 gap-6 items-start pb-5">
            <div>
              <h2 className="text-lg font-bold mb-4">Contact Details</h2>
              <p className="flex items-center gap-2">
                <FaPhoneAlt /> +1 319-853-3385
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> tarunmandava.fin@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaWhatsapp /> +1 925-487-0584
              </p>
            </div>

            <div>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> 1984 Allerton Way, Spring Hill, TN 37174
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Social Profiles</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61563002765802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#002E5B] p-2 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.linkedin.com/company/munna-llc-mandava-financial-services/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#002E5B] p-2 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-10 px-6 md:px-20">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-xl font-bold text-[#002E5B] mb-4">
                Feedback Form
              </h2>
              <p className="text-gray-700">
                If you’d like a free consultation, please start by completing
                the form:
              </p>
            </div>

            <form
              className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={handleSubmit}
            >
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="p-3 bg-gray-300 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="First Name"
                required
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="p-3 bg-gray-300 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Last Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 bg-gray-300 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="E-mail"
                required
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 bg-gray-300 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Phone Number"
              />
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="p-3 bg-gray-300 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="City"
              />
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="p-3 bg-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select State (USA only)</option>
                <option value="NY">New York</option>
                <option value="CA">California</option>
                {/* add more states as needed */}
              </select>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="p-3 bg-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select Country</option>
                <option value="USA">United States</option>
                <option value="CAN">Canada</option>
                {/* add more countries as needed */}
              </select>
              <input
                type="submit"
                className="bg-[#002E5B] text-white rounded-2xl py-3 hover:bg-[#001d3d] transition duration-300 cursor-pointer"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
