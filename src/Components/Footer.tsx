import { FaXTwitter, FaDiscord, FaGithub } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-[#0c111d] text-gray-400 py-16">
      <div className=" mx-auto grid grid-cols-6 gap-12">
        {/* Logo + Social */}
        <div className="space-y-6 flex flex-col  ">
          <div className="flex items-center gap-2 text-white text-lg font-semibold self-center">
            <svg
              width="250"
              className="fill-gray-900 relative "
              height="32"
              viewBox="0 0 172 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.6907 28.6796L30.8261 16.3204C30.9406 16.1222 30.9406 15.8779 30.8261 15.6796L23.6906 3.32044C23.5761 3.12216 23.3645 3 23.1356 3H8.86433C8.63537 3 8.4238 3.12216 8.30931 3.32044L1.17387 15.6796C1.05939 15.8779 1.05939 16.1222 1.17387 16.3204L8.30941 28.6796C8.42388 28.8778 8.63546 29 8.86443 29H23.1357C23.3646 29 23.5762 28.8778 23.6907 28.6796ZM12.7828 24.9198C12.3207 25.7203 11.297 25.9946 10.4964 25.5323C9.69589 25.0702 9.42172 24.0466 9.8839 23.2461L10.9409 21.4154C11.4031 20.6148 12.4266 20.3404 13.2274 20.8027C14.0279 21.2649 14.3021 22.2884 13.8398 23.0891L12.7828 24.9198ZM19.3619 24.6244C19.824 25.425 20.8476 25.6992 21.6483 25.2371C22.4489 24.775 22.7231 23.7513 22.2609 22.9508L18.5958 16.6024C17.685 15.0251 16.002 14.0533 14.1803 14.0533L6.85008 14.0533C5.92571 14.0533 5.17646 14.8027 5.17644 15.727C5.17641 16.6514 5.92589 17.4007 6.85012 17.4007L14.1802 17.4008C14.8059 17.4006 15.3841 17.7345 15.6969 18.2762L19.3619 24.6244Z"
                fill="#66C61C"
              ></path>
            </svg>
            <span className="absolute left-15">Cyfrin Updraft</span>
          </div>

          <div className="flex gap-4 ml-6">
            <FaXTwitter size={28} className=" cursor-pointer hover:text-white" />
            <FaGithub size={28} className=" cursor-pointer hover:text-white" />
            <FaDiscord size={28} className="cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Cyfrin */}
        <div className="space-y-3">
          <h4 className="hover:text-white ">Cyfrin</h4>
          <p>Private Audits</p>
          <p>Public Reports</p>
          <p>Pricing</p>
          <p>Aderyn</p>
        </div>

        {/* Updraft */}
        <div className="space-y-3">
          <h4 className="hover:text-white font-medium">Updraft</h4>
          <p>Blockchain Basics</p>
          <p>Solidity 101</p>
          <p>Foundry 101</p>
          <p>All courses</p>
        </div>

        {/* CodeHawks */}
        <div className="space-y-3">
          <h4 className="hover:text-white font-medium">CodeHawks</h4>
          <p>Competitions</p>
          <p>First Flights</p>
          <p>Leaderboard</p>
        </div>

        {/* Solodit */}
        <div className="space-y-3">
          <h4 className="hover:text-white font-medium">Solodit</h4>
          <p>Docs</p>
          <p>Findings</p>
          <p>Audits</p>
          <p>Checklist</p>
        </div>

        {/* Resources */}
        <div className="space-y-3">
          <h4 className="hover:text-white font-medium">Resources</h4>
          <p>Blog</p>
          <p>Case Studies</p>
          <p>Success Stories</p>
          <p>Glossary</p>
          <p>Support</p>
        </div>
      </div>

      {/* Bottom badge */}
      <div className="flex justify-center mt-12">
        <div className="bg-gray-600 text-gray-300 px-4 py-1 rounded-full text-sm">
          Powered by Cyfrin
        </div>
      </div>
    </footer>
  );
};

export default Footer;
