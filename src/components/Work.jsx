import React from "react";
import Project from "./Project";
import partyPlanner from '../assets/partyplanner.png';
import dnsImage from '../assets/dns.png';
import hellohiker from '../assets/hellohiker'


const Work = () => {
  return (
    <div>
      <div
        name="work"
        className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#a66baf]">
              Work
            </p>
            <p className="py-6">Check out some of my recent work: </p>
          </div>
          {/* container: */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4" >
            {/* grid item: */}

            {/* hover effects */}
            <Project
              title="Full-stack Application"
              bgImage={partyPlanner}
              deployLink="https://party-planner.herokuapp.com/login"
              codeLink="https://github.com/Nickmason01/Party-Planner"
            />
            <Project
              title="Server-side API Application"
              bgImage={dnsImage}
              deployLink="https://shahidhashmi1.github.io/DNS-Live/"
              codeLink="https://github.com/ShahidHashmi1/DNS-Live"
            />
              <Project
              title="Full-stack Application"
              bgImage={hellohiker}
              deployLink="https://hellohiker.herokuapp.com/"
              codeLink="https://github.com/ShahidHashmi1/HelloHiker"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
