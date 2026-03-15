import { useState } from "react";
import { Search, ChevronDown, Grid3X3 } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <div className="h-18 border bg-[#0c111d] flex items-center justify-between px-8 py-4 sticky top-0 z-50">
      <div className="flex items-center gap-8 relative w-auto">
        <svg
          width="172"
          className="fill-gray-900"
          height="32"
          viewBox="0 0 172 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.6907 28.6796L30.8261 16.3204C30.9406 16.1222 30.9406 15.8779 30.8261 15.6796L23.6906 3.32044C23.5761 3.12216 23.3645 3 23.1356 3H8.86433C8.63537 3 8.4238 3.12216 8.30931 3.32044L1.17387 15.6796C1.05939 15.8779 1.05939 16.1222 1.17387 16.3204L8.30941 28.6796C8.42388 28.8778 8.63546 29 8.86443 29H23.1357C23.3646 29 23.5762 28.8778 23.6907 28.6796Z"
            fill="#66C61C"
          ></path>
        </svg>

        <h1 className="text-[#f4f4f5] absolute left-10 text-nowrap font-semibold text-xl">
          Cyrin Updraft
        </h1>

        <div className="flex items-center bg-gray-900 border border-[1f242f] px-3 py-2 rounded-md w-116">
          <Search className="text-gray-400 w-5 h-5 mr-2" />

          <input
            type="text"
            placeholder="Search Updraft..."
            className="outline-none text-white placeholder-gray-400 w-full bg-transparent p-1"
          />
        </div>
      </div>

      <div className="flex items-center px-8 text-gray-400 gap-6">
        {/* Left section */}
        <div className="flex items-center gap-8 font-medium">
          <p className="hover:text-white cursor-pointer">Dashboard</p>
          <p className="hover:text-white cursor-pointer">Career tracks</p>

          <div
            onMouseEnter={() => setCoursesOpen(true)}
            className="relative flex items-center gap-1 hover:text-white cursor-pointer"
          >
            <p>Courses</p>
            <ChevronDown size={16} />

            {coursesOpen && (
              <div
                onMouseLeave={() => setCoursesOpen(false)}
                className="absolute right-[-280px] top-10 w-[1200px] h-[550px] bg-[#0f172a] border border-gray-700 rounded-xl p-8 shadow-2xl flex gap-12 text-sm"
              >
                {/* Beginner */}

                <div className="flex flex-col gap-4 w-1/3 text-lg">
                  <h3 className="text-gray-400 font-semibold">Beginner</h3>

                  <div>
                    <p className="text-white font-medium">Blockchain Basics</p>
                    <p className="text-gray-400 text-xs">
                      Beginner friendly course to learn blockchain fundamentals.
                    </p>
                  </div>

                  <div>
                    <p className="text-white font-medium">Solana</p>
                    <p className="text-gray-400 text-xs">
                      Learn Solana smart contract development.
                    </p>
                  </div>

                  <div>
                    <p className="text-white font-medium">
                      Web3 Wallet Security
                    </p>
                    <p className="text-gray-400 text-xs">
                      Understand blockchain wallet security concepts.
                    </p>
                  </div>

                  <div>
                    <p className="text-white font-medium">
                      Introduction to Python & Vyper
                    </p>
                    <p className="text-gray-400 text-xs">
                      Begin your journey as a Python and Vyper smart contract
                      developer. Learn how to write, deploy, and interact with
                    </p>
                  </div>

                  <p className="text-gray-400 hover:text-white cursor-pointer">
                    View all Beginner courses →
                  </p>
                </div>

                {/* Intermediate */}
                <div className="flex flex-col gap-4 w-1/3 text-lg">
                  <h3 className="text-gray-400 font-semibold">Intermediate</h3>

                  <div>
                    <p className="text-white font-medium">
                      Full-Stack Web3 Development
                    </p>
                    <p className="text-gray-400 text-xs">
                      Build functional, blockchain-powered applications and
                      start your career in full-stack web3 development. Learn
                      how to
                    </p>
                  </div>

                  <div>
                    <p className="text-white font-medium">
                      Intermediate Python and Vyper
                    </p>
                    <p className="text-gray-400 text-xs">
                      Intermediate Python and Vyper will teach you how to test
                      your Python based Vyper smart contracts,
                    </p>
                  </div>

                  <div>
                    <p className="text-white font-medium">
                      Foundry Fundamentals
                    </p>
                    <p className="text-gray-400 text-xs">
                      Level up your Solidity development skills with Foundry.
                      The Foundry Fundamentals course teaches advanced web3
                    </p>
                  </div>

                  <p className="text-gray-400 hover:text-white cursor-pointer">
                    View all Intermediate courses →
                  </p>
                </div>

                {/* Advanced */}
                <div className="flex flex-col gap-4 w-1/3 text-lg">
                  <h3 className="text-gray-400 font-semibold">Advanced</h3>

                  <div>
                    <p className="text-white font-medium">Uniswap V3</p>
                    <p className="text-gray-400 text-xs">
                      Updraft’s Uniswap V3 course smart contract development
                      will teach you Uniswap V3 math, concentrated liquidity,
                      swapping
                    </p>
                  </div>

                  <div>
                    <p className="text-white font-medium">
                      Assembly & Formal Verification
                    </p>
                    <p className="text-gray-400 text-xs">
                      Take the next step in your Solidity development journey
                      and learn exactly how the Solidity compiler and opcodes
                      work. Write contracts using Assembly and Yul, then learn
                      how to write formal verification tests to guarantee your
                      invariants hold.
                    </p>
                  </div>

                  <div>
                    <p className="text-white font-medium">
                      Noir Programming & ZK Circuits
                    </p>
                    <p className="text-gray-400 text-xs">
                      Step into the world of Noir, a domain-specific programming
                      language for writing circuits, and learn to build
                      zero-knowledge
                    </p>
                  </div>

                  <div>
                    <p className="text-white font-medium">Uniswap v4</p>
                    <p className="text-gray-400 text-xs">
                      Take your first steps into writing secure Uniswap v4
                      contracts, dApps, and protocols. You’ll learn PoolManager,
                      hooks,
                    </p>
                  </div>

                  <p className="text-gray-400 hover:text-white cursor-pointer">
                    View all Advanced courses →
                  </p>
                </div>
              </div>
            )}
          </div>

          <p className="hover:text-white cursor-pointer">Certifications</p>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6">
          {/* Grid icon */}
          <Grid3X3 size={20} className="cursor-pointer" />

          {/* Profile */}
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 cursor-pointer relative"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-9 h-9 rounded-full"
            />

            <div className="flex flex-col text-sm">
              <span className="text-white font-semibold">hkm</span>
              <span className="text-gray-400">@hritikcoding</span>
            </div>

            <ChevronDown size={16} />

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 top-14 w-60 bg-[#0f172a] border border-gray-700 rounded-xl shadow-lg py-2 text-sm">
                <p className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                  Dashboard
                </p>
                <p className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                  My profile
                </p>
                <p className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                  Achievements
                </p>
                <p className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                  Certificates
                </p>

                <div className="border-t border-gray-700 my-2"></div>

                <p className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                  Redeem code
                </p>
                <p className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                  Light Mode
                </p>
                <p className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                  Docs
                </p>
                <p className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
                  Settings
                </p>

                <div className="border-t border-gray-700 my-2"></div>

                <p className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-red-400">
                  Log out
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
