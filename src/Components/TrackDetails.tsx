import {Check,Clock,GraduationCap,ChevronDown,SignalMedium,} from "lucide-react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
const TrackDetails = () => {
  return (
    <div className="max-auto mx-auto text-white py-16 bg-[#161B26] ">
    
      <h2 className="text-2xl font-semibold mb-6 ml-16">What you'll learn</h2>
      <h3 className="text-gray-300 mb-6 ml-16 text-xl">
        This career track will help you learn:{" "}
      </h3>

      <div className="flex justify-center items-center relative ">
        <div className="grid grid-cols-3 gap-10 ">
          {/* LEFT LIST */}
          <div className="space-y-6">
            {[
              "Understand blockchain architecture and components",
              "Comprehend consensus mechanisms and protocols",
              "Grasp smart contract fundamentals",
              "Navigate blockchain development tools",
              "Analyze blockchain security principles",
            ].map((item) => (
              <div className="flex items-center gap-3">
                <div className="bg-[#4ca30d] p-1 rounded-full">
                  <Check size={14} />
                </div>
                <p className="text-gray-300 ">{item}</p>
              </div>
            ))}
          </div>

          {/* RIGHT LIST */}
          <div className="space-y-6">
            {[
              "Master core cryptographic concepts",
              "Learn wallet creation and management",
              "Understand blockchain scalability solutions",
              "Identify Blockchain use cases and limitations",
              "Explore emerging blockchain technologies",
            ].map((item) => (
              <div className="flex items-center gap-3">
                <div className="bg-[#4ca30d] p-1 rounded-full">
                  <Check size={14} />
                </div>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>

          {/* AD CARD */}
          <div className="bg-[#0c1629]  w-[348px] h-[148px] absolute right-30 bottom-50">
            <img
              src="https://res.cloudinary.com/droqoz7lg/image/upload/v1754916933/Updraft%20Ads/GMX_Sidebar_IMG_5085_tid9vx.jpg"
              alt="GMX"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <hr className="w-[870px] border-gray-800 my-8 ml-17" />

      {/* INCLUDED COURSES */}

      <div className="flex flex-col items-start ml-16 -translate-y-15  ">
        <div className="space-y-4 mb-4">
          <h2 className="text-2xl font-semibold mt-16 mb-6 ">
            Included Courses
          </h2>
          {/* Course Card */}
          <div className="flex items-center justify-between bg-[#0c111d] p-6 rounded-xl w-[922px] h-[78px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10  rounded-md">
                <img
                  src="https://res.cloudinary.com/droqoz7lg/image/upload/f_auto/q_auto/v1748556702/assets/course_badge/blockchain.png"
                  alt="Blockchain Basics"
                />
              </div>

              <div className="flex gap-2 items-center">
                <h3 className="font-medium ">Blockchain Basics </h3>
                <div className="text-green-400 text-sm bg-green-900 px-2 rounded-full  flex items-center gap-1 ">
                  <SignalMedium size={20} className="mb-2" />
                  <span> Beginner</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Clock size={22} /> 6 hrs
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={22} /> 58 lessons
              </div>
              <div>
                <ChevronDown size={22} className="cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Second Course */}
          <div className="flex items-center justify-between bg-[#0c111d]  p-6 rounded-xl w-[922px] h-[78px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10  rounded-md">
                <img
                  src="https://res.cloudinary.com/droqoz7lg/image/upload/f_auto/q_auto/v1748556702/assets/course_badge/chainlink.png"
                  alt="Chainlink Fundamentals"
                />
              </div>

              <div className="flex gap-2 items-center">
                <h3 className="font-medium ">Chainlink Fundamentals </h3>
                <div className="text-green-400 text-sm bg-green-900 px-2 rounded-full  flex items-center gap-1 ">
                  <SignalMedium size={20} className="mb-2" />
                  <span> Beginner</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Clock size={22} /> 6 hrs
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={22} /> 66 lessons
              </div>
              <div>
                <ChevronDown size={22} className="cursor-pointer" />
              </div>
            </div>
          </div>
          <hr className="w-[870px] border-gray-800 my-8 " />
        </div>
      </div>

      {/* INSTRUCTOR */}

      <div className="flex flex-col items-start ml-16 -translate-y-15 gap-4 ">
        <h2 className="text-2xl font-semibold ">Meet your instructors</h2>

        <div className="flex items-center gap-6 ">
          <img
            src="https://res.cloudinary.com/droqoz7lg/image/upload/v1743090906/course-reviews/cde6aeb3-4605-43a3-b9ab-044a1606efaf.png"
            className="w-24 h-24 rounded-xl h-[120px] w-[120px] "
          />

          <div className="text-nowrap items-start -translate-y-2 ">
            <h3 className="text-lg font-semibold">Ciara Nightingale</h3>

            <p className="text-gray-400">Developer relations at Cyfrin</p>

            <div className="flex gap-4 mt-2 text-gray-400">
              <span>
                <FaXTwitter size={28} />
              </span>
              <span>
                <FaLinkedin size={28} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackDetails;
