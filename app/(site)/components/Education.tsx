// import React, { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";
 
// interface LiIconProps {
//   reference: React.RefObject<HTMLElement>;
// }

// const LiIcon: React.FC<LiIconProps> = ({ reference }) => {
//   return (
//     <figure className="absolute left-0 stroke-dark dark:stroke-light">
//       <svg
//         className="-rotate-90 md:w-[60px] xs:h-[40px] xs:w-[40px] md:h-[60px]"
//         width="75"
//         height="75"
//         viewBox="0 0 100 100"
//       >
//         <circle
//           cx="75"
//           cy="50"
//           r="20"
//           className="stroke-pink-200 dark:stroke-primaryDark stroke-1 fill-none"
//         />
//         <circle
//           cx="75"
//           cy="50"
//           r="10"
//           className="animate-pulse stroke-1 fill-pink-200 dark:fill-primaryDark"
//         />
//       </svg>
//     </figure>
//   );
// };

// interface DetailsProps {
//   type: string;
//   time: string;
//   place: string;
//   info: string;
// }

// const Details: React.FC<DetailsProps> = ({ type, time, place, info }) => {
//   const ref = useRef<HTMLLIElement>(null);
//   return (
//     <li
//       ref={ref}
//       className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
//     >
//       <LiIcon reference={ref} />
//       <motion.div
//         initial={{ y: 50, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, type: "spring" }}
//       >
//         <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
//           {type}
//         </h3>
//         <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
//           {time} | {place}
//         </span>
//         <p className="font-medium w-full md:text-sm">{info}</p>
//       </motion.div>
//     </li>
//   );
// };

// const Education: React.FC = () => {
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const container = containerRef.current;
//       const scrollTop = window.pageYOffset;
//       const elementTop = container.offsetTop;
//       const elementHeight = container.offsetHeight;
//       const viewportHeight = window.innerHeight;

//       // Calculate scroll progress
//       const progress = Math.max(
//         0,
//         Math.min(
//           1,
//           (scrollTop - elementTop + viewportHeight) / elementHeight
//         )
//       );

//       setScrollProgress(progress);
//     };

//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);
    
//     // Initial calculation
//     handleScroll();

//     // Cleanup
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="my-64">
//       <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
//         Education
//       </h2>
//       <div 
//         ref={containerRef} 
//         className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
//       >
//         {/* Scrolling Line */}
//         <div 
//           className="absolute left-9 top-0 w-[4px] h-full bg-gray-300 dark:bg-gray-700 origin-top"
//           style={{
//             transform: `scaleY(${scrollProgress})`,
//             transformOrigin: 'top',
//             transition: 'transform 0.2s ease-out'
//           }}
//         />
//         <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
//           <Details
//             type="Bachelor Of Science In Information Technology"
//             time="2020-2024"
//             place="G.L. Bajaj Institute of technology and management"
//             info="GL Bajaj Institute of Technology and Management is the 6th Institute established under the prestigious banner of Rajeev Memorial Academic Welfare Society (Registered Under Societies Registration Act 1860). The institute is approved by All India Council for Technical Education (AICTE), Ministry of HRD, Govt. of India and Affiliated to Dr. A.P.J. Abdul Kalam Technical University (Formerly UPTU Lucknow)."
//           />
//           <Details
//             type="Intermediate (XIIth)"
//             time="2019-2020"
//             place="New Delhi Convent Senior Secondary School"
//             info="Enter a realm of boundless possibilities at New Delhi Convent School, where traditional values meet modern innovation to nurture future leaders. Step into a future shaped by knowledge and potential."
//           />
//           <Details
//             type="HighSchool (Xth)"
//             time="2017-2018"
//             place="Kamal Public School"
//             info="The glorious history of Kamal Public Sr. Sec. School dates back to 1997. Affiliated to CBSE, it enjoys the prerogative of being one of the premier institutions of Delhi. With an array of world class facilities and highly qualified faculty complemented with an enriching curriculum, we elevate the teaching learning experience to unflinching standards."
//           />
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Education;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../styles/addition.css";
function CraftBrand() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <div className="craftBrand">
        <div className="container">
          <div
            className="title"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
           
          </div>
          <div className="appraoch_support_content">
            <ul>
              <li>
                <div
                  className="imgBlock"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                >
                  <img
                    src="/svgs/1.svg"
                    alt="craft"
                  />
                </div>
                <section
                  data-aos="fade-left"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                >
                  <h3>Create your AI chat</h3>
                  <h5 className="heading">Train on your data</h5>
                  <p>
                    Quickly upload files and websites to create a custom AI
                    chat. No coding required.
                  </p>
                </section>
              </li>
              <li>
                <div
                  className="imgBlock"
                  data-aos="fade-left"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                >
                  <img
                    src="/svgs/2.svg"
                    alt="craft"
                  />
                </div>
                <section
                  data-aos="fade-left"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                >
                  <h3>Customize your chat</h3>
                  <h5 className="heading">Personalize and configure</h5>
                  <p>
                    Add details to tailor your AI chat's personality and
                    functionality to your needs.
                  </p>
                </section>
              </li>
              <li>
                <div
                  className="imgBlock"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                >
                  <img
                    src="/svgs/3.svg"
                    alt="craft"
                  />
                </div>
                <section
                  data-aos="fade-left"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                >
                  <h3>Launch and share</h3>
                  <h5 className="heading">Deploy with one click</h5>
                  <p>
                    Easily share your AI chat with friends, embed it on your
                    website.
                  </p>
                </section>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CraftBrand;
