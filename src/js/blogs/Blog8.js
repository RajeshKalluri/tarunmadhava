import React from "react";
import blog8 from "../../images/Blog8.png";
import { Link } from "react-router-dom";

function Blog8() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="bg-[#f4f0ec]">
          <h1 className="text-[#002E5B] text-3xl font-black md:pl-36 py-12">
            Experior Financial Group & AOG Strategic Alliance
          </h1>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 py-10">
          
          <div className="flex justify-center mb-10">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/OxefXG_x6To"
              title="Experior & AOG Canada Sales Congress Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            
            <div className="flex-1">
              
              <div className="pt-2 pb-2">
                <p className="text-[#002E5B] pt-6 text-sm text-semibold">
                  Big News from Co-CEOs <strong>Monte Holm</strong> and <strong>Jamie Prickett</strong> at the Canada Sales Congress! Join them for an inside look at one of the most anticipated events in the insurance and financial services industry. They share how Experior Financial Group and AOG (Agency Ownership Group) are reshaping the future of the business for agents and agency owners across Canada and the U.S.
                </p>

                <h1 className="text-[#002E5B] md:text-2xl font-extrabold pt-8">
                  Key Highlights from the Video
                </h1>
                <ul className="list-disc list-inside text-[#644e40] text-sm space-y-3 pt-4">
                  <li>How AOG empowers agents through real equity ownership</li>
                  <li>Why Experior’s 12,000+ licensed agents are part of a greater vision</li>
                  <li>The truth about ownership, growth, and building IPO-ready organizations</li>
                  <li>How agency owners and RIAs can access the real value of their business through Experior and AOG</li>
                </ul>

                <h1 className="text-[#002E5B] md:text-2xl font-extrabold pt-8">
                  Strategic Alliance Between Experior and AOG
                </h1>
                <p className="text-[#002E5B] pt-6 text-sm text-semibold">
                  SALT LAKE CITY, Sept. 29, 2025 — Experior Financial Group Inc., one of North America’s fastest-growing Independent Marketing Organizations, announced a strategic alliance with Associate Owners Group Inc. (AOG) through a share swap agreement. This alliance officially brings AOG into Canada via Experior’s headquarters in Guelph, Ontario, and Cheektowaga, New York, creating a North American financial powerhouse with plans to pursue IPO readiness within three years.
                </p>
                <p className="text-[#002E5B] pt-6 text-sm text-semibold">
                  As part of the transaction, all Experior shareholders will hold ownership in AOG, aligning both organizations and creating unprecedented opportunities for agents, associates, and investors alike.
                </p>

                <h1 className="text-[#002E5B] md:text-2xl font-extrabold pt-8">
                  A Stronger Future for Agents, Investors, and Families
                </h1>
                <p className="text-[#002E5B] pt-6 text-sm text-semibold">
                  “This alliance represents the next evolution of our mission to build financial foundations for families,” said <strong>Jamie Prickett, Co-CEO of AOG</strong>. “By officially bringing AOG into Canada through Experior, we are empowering our agents with ownership opportunities, creating the potential for generational wealth for our shareholders, and positioning ourselves for IPO readiness within three years. Agents will have access to everything they need to succeed—from E&O insurance, Reinsurance, P&C insurance, CRM systems, and a host of technology and other companies under one umbrella.”
                </p>
                <p className="text-[#002E5B] pt-6 text-sm text-semibold">
                  <strong>Monte Holm, CEO of AOG</strong>, added: “Experior’s leadership and rapid growth are truly remarkable. With Jamie joining me as Co-CEO, and the combined strength of our organizations, we are poised to disrupt the industry, expand rapidly across North America, and deliver extraordinary value to both families and financial professionals.”
                </p>

                <h1 className="text-[#002E5B] md:text-2xl font-extrabold pt-8">
                  Why This Matters
                </h1>
                <p className="text-[#002E5B] pt-6 text-sm text-semibold">
                  This alliance empowers independent agents and agency owners by providing real equity, growth potential, and a clear path toward IPO readiness. With over 12,000 licensed agents, Experior and AOG are building a lasting legacy driven by leadership, innovation, and ownership-focused success.
                </p>

                <p className="text-[#002E5B] pt-6 text-sm text-semibold pb-8">
                  Discover how you can grow your business with Experior Financial Group and AOG: <a href="https://usa.experiorfinancial.com" className="text-blue-700 underline">https://usa.experiorfinancial.com</a>
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

export default Blog8;
