import React from "react";
import blog7 from "../../images/Blog7.png";
import { Link } from "react-router-dom";

function Blog7() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="bg-[#f4f0ec]">
          <h1 className="text-[#002E5B] text-3xl font-black md:pl-36 py-12">
            Experior Factor 2025: Celebrating Milestones, Motivation, and Momentum
          </h1>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 py-10">
         
          <div className="flex justify-center mb-10">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/vLeF4N6sWgU"
              title="Experior Factor 2025 Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard‑write; encrypted‑media; gyroscope; picture‑in‑picture"
              allowFullScreen
            ></iframe>
          </div>
  
          <div className="flex flex-col lg:flex-row gap-10">
            
            <div className="flex-1">
              
              <div className="pt-2 pb-2">
                <p className="text-[#002E5B] pt-6 text-sm text-semibold">
                  From May 19–21, 2025, Dallas, Texas, became the epicenter of inspiration, achievement, and celebration as Experior Financial Group hosted <strong>eXperior Factor 2025</strong>, the largest and boldest convention in the company’s history. Agents from across the United States, Puerto Rico, and Canada came together for three unforgettable days filled with recognition, motivation, and momentum.
                </p>

                <h1 className="text-[#002E5B] md:text-2xl font-extrabold pt-8">
                  Electrifying Moments That Defined the Event
                </h1>
                <p className="text-[#002E5B] pt-6 text-sm text-semibold">
                  Attendees experienced electrifying stage energy, powerful speeches from top leaders, and inspirational messages on resilience, legacy, and growth. The convention also featured moving performances of the national anthems — “O Canada” by Lilac Cana and “The Star‑Spangled Banner” by Labarron Edwards — reinforcing unity and pride.
                </p>

                <h1 className="text-[#002E5B] md:text-2xl font-extrabold pt-8">
                  Historic Milestones and Record‑Breaking Growth
                </h1>
                <p className="text-[#002E5B] pt-6 text-sm text-semibold">
                  On Day 3, CEO and Co‑Founder <strong>Jamie Prickett</strong> announced that Experior had officially surpassed <strong>10,000 licensed agents</strong> — a leap from 3,500 in just over 13 months. The audience erupted in celebration as Jamie was lifted on the shoulders of leaders, a symbolic representation of the collective achievement and shared vision.
                </p>

                <h1 className="text-[#002E5B] md:text-2xl font-extrabold pt-8">
                  Recognizing Extraordinary Success
                </h1>
                <p className="text-[#002E5B] pt-6 text-sm text-semibold">
                  The event honored four outstanding agents — <strong>Frank De Lio, Mauro Arturi, Darren Golka, and Juan Jaime</strong> — for achieving $1 million in income within 12 months, a rare industry feat. Over 90 dynamic sessions provided actionable insights to help agents elevate their businesses and embrace innovation.
                </p>

                <h1 className="text-[#002E5B] md:text-2xl font-extrabold pt-8">
                  A Commitment to Community
                </h1>
                <p className="text-[#002E5B] pt-6 text-sm text-semibold">
                  Experior showcased its philanthropic mission with a <strong>$125,000 donation to Ronald McDonald House Charities®</strong>, including $50,000 for the Dallas chapter. The company also launched a <strong>U.S.‑based Charitable Giving Committee</strong> to expand its impact across North America.
                </p>

                <h1 className="text-[#002E5B] md:text-2xl font-extrabold pt-8">
                  Heartwarming Moments and Experior Family Spirit
                </h1>
                <p className="text-[#002E5B] pt-6 text-sm text-semibold">
                  The convention was also filled with heartfelt moments, like when <strong>Angel Contreras proposed to Yohana Fernández on stage</strong>, highlighting the strong sense of community and family that defines Experior.
                </p>

                <h1 className="text-[#002E5B] md:text-2xl font-extrabold pt-8">
                  Looking Ahead: The Future of Experior
                </h1>
                <p className="text-[#002E5B] pt-6 text-sm text-semibold">
                  Founded in 2014 by Jamie and Lee‑Ann Prickett, Experior Financial Group has redefined financial services through its <strong>Tri‑Brid Model</strong>. With mentorship, innovation, and integrity at its core, Experior continues to be one of North America’s fastest‑growing financial services organizations, now with over 10,000 licensed agents.
                </p>

                <h1 className="text-[#002E5B] md:text-2xl font-extrabold pt-8">
                  Final Thoughts
                </h1>
                <p className="text-[#002E5B] pt-6 text-sm text-semibold pb-8">
                  Experior Factor 2025 proved that when passion meets purpose, extraordinary things happen. From record‑breaking milestones to philanthropic impact, this event celebrated achievements, community, and the bright future ahead for Experior agents and families alike.
                </p>
              </div>
            </div>

           
            <aside className="lg:col-span-1">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-[#002E5B] mb-2 pb-5">Recent Posts</h2>
                <ul className="space-y-2 text-blue-700 text-sm">
                    <li><Link to='/blog1'>Tarun Kumar Mandava, Silver Legacy Owner!</Link></li>
                  <li><Link to='/blog2'>The Best Ways for Agents to Get Life Insurance Leads</Link></li>
                                        <li><Link to='/blog8'>Experior Financial Group & AOG Strategic Alliance</Link></li>
                                          <li><Link to="/blog3">How To Start Your Own Independent Insurance Agency</Link></li>
                                          <li><Link to="/blog4">Crafting an Effective Bio for Insurance Agents: Tips and Examples</Link></li>
                                          <li><Link to="/blog5">How to Increase Insurance Sales</Link></li>
                                          <li><Link to='/blog6'>Building Financial Foundations for Tomorrow.</Link></li>
                                          <li><Link to='/blog7'>eXperior Factor 2025 | Experior Financial Group</Link></li>
                                            </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog7;
