import React from "react";
import { useState } from "react";
import faq_image from "../../images/faq_image.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Faq = () =>
{
  const [formData, setFormData] = useState({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
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
        const response = await fetch("https://formsubmit.co/tarunmandava.fin@gmail.com", {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        });
  
        if (response.ok) {
          toast.success("✅ Your message was sent successfully!");
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            message: "",
          });
        } else {
          toast.error("❌ Failed to send. Please try again.");
        }
      } catch (err) {
        toast.error("⚠️ Network error. Please try again.");
      }
    };
    
    const faqs = [
        {
          question: 'Why Mandava Financial Services?',
          answer:
            'We are a fastest growing full-fledged independent financial services marketing company offering Investments, Real Estate, Retirement, Insurance, and Estate Planning from reputable companies (Fortune 100) from Wallstreet. We are like one stop shop.',
        },
        { question: 'What is a Financial Planning?' ,
            answer:
            'Financial planning is a step-by-step approach to meet one’s life goals. A financial plan acts as a guide as you go through life’s journey. Essentially, it helps you be in control of your income, expenses, investments, taxes, protection, wealth building and preserving wealth such that you can manage your money and achieve your goals.'       },
        { question: 'Why you should work with a Financial Professional?',
            answer:'Financial Professionals provide a broad range of financial services and offer and educate clients on a variety of money topics from life insurance to the various diversified wealth building strategies and solutions. They recommend products and services, and may assist with opening or managing accounts.'
         },
        { question: 'What is Estate Planning?',
            answer:'That is estate planning – planning in advance, naming the people or organizations you want to receive the things you own after you die, and taking steps now to make carrying out your plan as easy as possible later. However, good estate planning is much more than that. It should also do the following:'
         },
        { question: 'Why Estate Planning so important?',
          answer: 'Besides making sure your assets get to the people you choose, planning can help minimize income, gift and estate taxes, too. Without an estate plan, and specifically a will, the laws in your state will determine what happens to your possessions, and the courts will decide who gets custody of your children.If You Do Not Have a Plan, Your State Has One For You. But You Might Not Like It. If you are looking for bracelet. There’s something to suit every look, from body-hugging to structured, from cuffs to chain chain bracelet and cuffs.'
        },
        { question: 'What is a Last Will & Testament?' ,
          answer:'A Will or Testament is a legal document that expresses a person’s (testator) wishes as to how their property (estate) is to be distributed after their death and as to which person (executor) is to manage the property until its final distribution'
        },
        { question: 'Why is a Living Trust?' ,
          answer:'A living trust is an alternative to probate. This document places all of the assets that you own during your lifetime into a revocable trust. A living trust can be changed, amended or terminated in whole or in part by the individual at any time, provided he or she is of sound mind. Under a living trust, you can be named as your own trustee for your own property. Upon your disability during your lifetime, you can name a successor trustee to manage your assets and pay your debts. Upon your death, you can name a successor trustee to ensure that your assets are distributed as you so designate in your living trust.'
        },
        { question: 'What are the 6 steps in the estate planning process?', 
          answer: 'Take Inventory of Your Estate. First, narrow down what belongs to you.'  
        },
        { question: 'What is Protection Planning?', 
          answer: 'Protection planning typically involves utilizing various forms of insurance to help safeguard your family and the assets you’ve worked so hard to accumulate. Without these plans in place, an untimely accident, illness or death could have a significant impact on your financial and family future.'
        },
      ];
      const [activeIndex, setActiveIndex] = useState();

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
    return(
        <>
        <div>
  <img src={faq_image} alt="FAQ Header" className="w-full h-auto" />

  <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-4xl font-bold text-blue-900 mb-6">Inquire And Discover:</h1>
    <div className="bg-gray-100 rounded-md overflow-hidden">
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-6 py-4 bg-gray-300 border-b border-gray-200 text-left focus:outline-none"
          >
            <span className="font-semibold text-blue-900">{faq.question}</span>
            <span className="text-[#002E5B] font-bold text-xl">
              {activeIndex === index ? '-' : '+'}
            </span>
          </button>
          {activeIndex === index && faq.answer && (
            <div className="px-6 py-4 text-blue-900 bg-gray-100">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>

  
</div>

        </>
    );
}
export default Faq;