import { Clock, Code, GraduationCap, Languages, Share2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className="w-auto h-[431px] bg-[#0c111d] text-white flex items-center gap-12 font-inter  ">
      <div className="w-[40%]  ">
        <img
          src="https://res.cloudinary.com/droqoz7lg/image/upload/f_auto/q_auto/v1748556702/assets/updraft-career-track-blockchain-foundations.png"
          alt="Blockchain Foundations"
          className="rounded-lg h-[276px] w-[512px] object-cover ml-[72px]"
        />
      </div>

      <div className="w-1/2 flex flex-col gap-4 ">
        <p className="text-gray-400 text-sm"> 
          Career Tracks <span className="mx-2">›</span>{" "}
          <b className="text-white">Blockchain Foundations</b>
        </p>

        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-semibold">Blockchain Foundations</h1>
          <Share2 size={22} className="text-gray-400 cursor-pointer" />
        </div>

        <p className="text-gray-300 text-[18px] font-normal leading-relaxed max-w-[752px]  ">
          New to blockchain or curious about its role in broader systems? This
          track is your launchpad. Master the fundamentals of blockchains, smart
          contracts, wallets, and consensus mechanisms. The Blockchain
          Foundations career track gives you the knowledge to effectively
          collaborate with technical teams and confidently pursue advanced paths
          in DeFi, auditing, and web3 development.
        </p>

        <div className="flex items-center gap-6 text-gray-300 text-sm">
          <div className="flex items-center gap-2 text-xl">
            <Clock className="text-gray-500" size={24} /> 12hrs
          </div>
          <div className="flex items-center gap-2 text-xl">
            <GraduationCap className="text-gray-500" size={24} /> 2 Courses
          </div>
          <div className="flex items-center gap-2 text-xl">
            <Code className="text-gray-500" size={24} /> 11 projects
          </div>
          <div className="flex items-center gap-2 text-xl">
            <Languages className="text-gray-500" size={24} />
            20+ Languages
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 mt-2 cursor-pointer">
          <button className="bg-[#4ca30d] hover:bg-[rgb(59,124,15)] px-5 py-3 rounded-[8px] font-semibold ">
            Enroll in career track
          </button>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <img
              src="https://i.pravatar.cc/32?img=1"
              className="w-7 h-7 rounded-full"
            />
            <img
              src="https://i.pravatar.cc/32?img=2"
              className="w-7 h-7 rounded-full -ml-4"
            />
            <img
              src="https://i.pravatar.cc/32?img=3"
              className="w-7 h-7 rounded-full -ml-"
            />
            <span className="ml-2">250+ students enrolled</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero