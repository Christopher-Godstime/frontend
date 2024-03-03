import React from "react";
import home2 from "../assets/home2.png";
import ScrollToTopOnMount from "../components/ScrollToTopOnMount";
import { FiArrowUp } from "react-icons/fi";

const About = () => {
  return (
    <div className="-mt-[70px] pt-[70px]">
      <ScrollToTopOnMount />
      <div className=" px-[4%] xl:px-[60px]  ">
        <h4 className="py-[48px] text-[40px] font-[700] lg:text-[60px] lg:font-[600] lg:leading-[72px] leading-[48px] lg:w-[726px] text-[#021732]">
          LEGACY IS GREATER THAN CURRENCY
        </h4>
        <div className="py-[48px]">
          <div className="md:pb-[80%] py-[75%]  pr-[24px] relative overflow-hidden md:w-[46%] mx-auto rounded-[24px] md:rounded-[0px]">
            <img
              className=" absolute top-0 left-0 w-[100%] h-[100%] object-cover "
              src={home2}
              alt="Background"
            />
          </div>
        </div>

        <div className="xl:flex gap-[20px] py-[48px]">
          <h4 className="text-[48px] font-[600] xl:w-[40%]">About Dr Bimbo</h4>
          <div className="xl:w-[60%] mt-[20px] xl:mt-[0px]">
            <h4 className="text-[24px] font-[500] leading-[32px] text-[#556476] text-justify xl:mb-[70px] mb-[50px]">
              I am Dr. Bimbo Mesele and I help leaders gain clarity about their
              lives' journey so that they can redefine their outcomes. As a
              seasoned clarity coach, I am passionate about helping individuals
              thrive in their respective sectors by providing insightful
              guidance and support
            </h4>
            <h4 className="text-[24px] font-[500] leading-[32px] text-[#556476] text-justify xl:mb-[70px] mb-[50px]">
              With a proven track record in leadership and excellence, I am a
              dynamic force in the fields of consulting, leadership development,
              purpose discovery, and transformation. I specialize in guiding
              people as they navigate their paths, empowering them to uncover
              clarity and achieve their goals
            </h4>
            <h4 className="text-[24px] font-[500] leading-[32px] text-[#556476] text-justify ">
              Through high-quality personal and group coaching sessions and
              workshops, I train leaders to develop the skills and mindset
              necessary for success in both their personal and professional
              lives. I am committed to evaluating and improving training plans
              to ensure maximum relevancy and impact for my clients."
            </h4>
          </div>
        </div>

        <div className="py-[48px]">
          <div className="lg:flex gap-[40px]">
            <div className="lg:w-[60%] bg-[#02152E] rounded-[24px] h-[416px] relative">
              <button className="w-[65px] h-[65px] rounded-full border-[1px] border-primary flex justify-center items-center bg-white absolute top-[48px] right-[24px] lg:right-[48px]">
                <FiArrowUp className="text-[30px] stroke-[1px] text-primary transform rotate-45" />
              </button>
              <h4 className="text-white text-[36px] lg:text-[48px] font-[600] leading-[44px] absolute bottom-[48px] left-[24px] lg:left-[48px]">
                Schedule a one on one{" "}
              </h4>
            </div>
            <div className="lg:w-[40%] bg-[#FEEFE6] rounded-[24px] h-[416px] relative mt-[40px] lg:mt-[0px]">
              <button className="w-[65px] h-[65px] rounded-full border-[1px] border-primary flex justify-center items-center bg-white absolute top-[48px] right-[24px] lg:right-[48px]">
                {" "}
                <FiArrowUp className="text-[30px] stroke-[1px] text-[#021732] transform rotate-45" />
              </button>
              <h4 className="text-[#040F16] text-[36px] lg:text-[48px] lg:leading-[60px] font-[600] leading-[44px] absolute bottom-[48px] left-[24px] lg:left-[48px]">
                Book Bimbo Mesele for an event
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
