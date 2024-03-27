import { IconEducation, IconExperience, IconProject } from "../../../components/icons";

/* eslint-disable react/no-unescaped-entities */
const Resume = () => {
  return (
    <div className="rounded-xl shadow-2xl w-full h-[500px] bg-white py-10 px-8 gap-3 flex flex-col overflow-y-auto no-scrollbar">
      <div className="flex items-center gap-5 sticky -top-10 bg-white z-10">
        <h1 className="text-24 font-bold">Resume</h1>
        <div className="w-[200px] h-[2px] bg-pink-800"></div>
      </div>
      <div className="w-full mt-4">
        <div className="flex gap-1">
          <IconEducation color={"#DC4867"} />
          <h3 className="font-semibold text-16">Education</h3>
        </div>
        <div className="flex flex-col w-full gap-5 mt-2">
          <div className="w-full bg-blue-300 p-2 rounded-2xl">
            <div className="gap-2 flex">
              <div className="flex flex-col gap-1 px-2">
                <h5 className="font-medium text-12 text-grey-700">2016-2022</h5>
                <p className="text-14 font-medium text-grey-1000">
                  Hanoi University of Science and Technology.
                </p>
                <p className="font-medium text-12 text-grey-700">
                  Electronics and Telecommunication
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 w-full">
        <div className="flex gap-1">
          <IconExperience color={"#DC4867"} />
          <h3 className="font-semibold text-16">Experience</h3>
        </div>
        <div className="flex flex-col w-full gap-2 mt-2">
          <div className="w-full bg-pink-300 p-2 rounded-2xl">
            <div className="gap-2 flex">
              <div className="flex gap-5 px-2">
                <h5 className="font-medium text-12 text-grey-700">
                  May 2020 – Feb 2022
                </h5>
                <div>
                  <p className="text-14 font-medium text-grey-1000">
                    Mintpot Vina Co,. Ltd
                  </p>
                  <p className="font-medium text-12 text-grey-700">
                    Frontend Developer
                  </p>
                  <p className="font-medium text-12 text-grey-700">
                    I'm involved in web projects using the ReactJS framework.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-blue-300 p-2 rounded-2xl">
            <div className="gap-2 flex">
              <div className="flex gap-5 px-2">
                <h5 className="font-medium text-12 text-grey-700">
                  Feb 2022 – May 2023
                </h5>
                <div>
                  <p className="text-14 font-medium text-grey-1000">
                    CMC Global
                  </p>
                  <p className="font-medium text-12 text-grey-700">
                    Frontend Developer
                  </p>
                  <p className="font-medium text-12 text-grey-700">
                    Joining various projects that mainly focus on ReactJS.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-pink-300 p-2 rounded-2xl">
            <div className="gap-2 flex">
              <div className="flex gap-7 px-2">
                <h5 className="font-medium text-12 text-grey-700">
                  May 2023 – Present
                </h5>
                <div>
                  <p className="text-14 font-medium text-grey-1000">
                    Oraichain labs
                  </p>
                  <p className="font-medium text-12 text-grey-700">
                    Fullstack Developer
                  </p>
                  <p className="font-medium text-12 text-grey-700">
                    Participate blockchain, crypto projects with AI support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-5 flex-col w-full">
        <div className="flex gap-1">
          <IconProject color={"#DC4867"} />
          <h3 className="font-semibold text-16">Projects</h3>
        </div>
        <div className="mt-4 group">
          <a
            className="font-medium text-14 group-hover:underline group-hover:text-blue-800 "
            href="https://layer.orai.io/"
            target="_blank"
          >
            LLM Layer
          </a>
          <span className="font-normal text-12"> (Oct 2023 – Present)</span>

          <div className="w-full border border-grey-300 rounded-2xl">
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Description</h5>
              </div>
              <div className="flex flex-col p-2 w-full">
                <p className="font-normal text-14 text-grey-800">
                  - This is a crypto application including coins, pools, ICO/IDO
                  on the market. Use AI to create strategies for users.
                </p>
                <p className="font-normal text-14 text-grey-800">
                  - Use chat_bots to ask questions about the crypto market.
                </p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Team</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">Defi AI</p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Team size</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">7</p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">My position</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  Fullstack developer
                </p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">My responsibilities</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  - Transform design to interactive websites.
                </p>
                <p className="font-normal text-14 text-grey-800">
                  - Work independently with backend API.
                </p>
                <p className="font-normal text-14 text-grey-800">
                  - Deign frontend architecture on codebase and UI components
                  design.
                </p>
                <p className="font-normal text-14 text-grey-800">
                  - Improve web app performance.
                </p>
                <p className="font-normal text-14 text-grey-800">
                  - Deliver backend features, API… as required.
                </p>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Technologies used</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  - Front-end: ReactJs, Redux.
                </p>
                <p className="font-normal text-14 text-grey-800">
                  - Back-end: NestJs, MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 group">
          <a
            className="font-medium text-14 group-hover:underline group-hover:text-blue-800 "
            href="https://neststock.com/"
            target="_blank"
          >
            Nestock
          </a>
          <span className="font-normal text-12"> (May 2023 – Oct 2023)</span>

          <div className="w-full border border-grey-300 rounded-2xl">
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Description</h5>
              </div>
              <div className="flex flex-col p-2 w-full">
                <p className="font-normal text-14 text-grey-800">
                  -This is an AI chatbot that helps search for real estate
                  issues such as price, area, planning..
                </p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Team</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">Nestock</p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Team size</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">7</p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">My position</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  Fullstack developer
                </p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">My responsibilities</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  - Learn about real estate websites currently on the market.
                </p>
                <p className="font-normal text-14 text-grey-800">
                  - Provide design contributions and improve user experience.
                </p>
                <p className="font-normal text-14 text-grey-800">
                  - Together with the whole team, come up with measures to
                  improve website performance.
                </p>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Technologies used</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  - Front-end: ReactJs, Redux.
                </p>
                <p className="font-normal text-14 text-grey-800">
                  - Back-end: NestJs, MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-0.5">
            <h4 className="font-medium text-14">Knox Portal</h4>
            <span className="font-normal text-12">(Feb 2022 – May 2023)</span>
          </div>
          <div className="w-full border border-grey-300 rounded-2xl">
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Customer</h5>
              </div>
              <div className="flex flex-col p-2 w-full">
                <p className="font-normal text-14 text-grey-800">
                  Samsung SDS.
                </p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Description</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  - Project to manage chat, video call, email for Samsung
                  employees.
                </p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Project size</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">40</p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Team size</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">4</p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">My position</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  Front-end Developer
                </p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">My responsibilities</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  - Receive requests from customers and develop.
                </p>
                <p className="font-normal text-14 text-grey-800">
                  - Fix issues and enhance website performance.
                </p>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Technologies used</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  - Front-end: Reactjs, Redux, Redux Saga.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-0.5">
            <h4 className="font-medium text-14">Live Fortunes-tell</h4>
            <span className="font-normal text-12">(Oct 2020-Aug 2021)</span>
          </div>
          <div className="w-full border border-grey-300 rounded-2xl">
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Customer</h5>
              </div>
              <div className="flex flex-col p-2 w-full">
                <p className="font-normal text-14 text-grey-800">
                  Mint-pot Korea.
                </p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Description</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  - An application used for live fortunetelling services.
                </p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Team size</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">7</p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">My position</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  Front-end Developer
                </p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">My responsibilities</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  - Fix issues and enhance website performance.
                </p>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Technologies used</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  - Front-end: ReactJs, Material UI, Redux, Redux Toolkit.
                </p>
                <p className="font-normal text-14 text-grey-800">
                  - Back-end: MySQL, Spring Framework, Restful.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-0.5">
            <h4 className="font-medium text-14">Support U</h4>
            <span className="font-normal text-12">(Oct 2020-Aug 2021)</span>
          </div>
          <div className="w-full border border-grey-300 rounded-2xl">
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Customer</h5>
              </div>
              <div className="flex flex-col p-2 w-full">
                <p className="font-normal text-14 text-grey-800">
                  Mint-pot Korea.
                </p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Description</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  - Classroom management project, member's course (teacher,
                  student) for university.
                </p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Team size</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">7</p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">My position</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  Front-end Developer
                </p>
              </div>
            </div>
            <div className="flex w-full border-b border-b-grey-300">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">My responsibilities</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  - Create a profile management page for users, chat component
                  with Firebase, multiple language and system notifications.
                </p>
              </div>
            </div>
            <div className="flex w-full ">
              <div className="w-[170px] p-2 border-r border-r-grey-300">
                <h5 className="text-14 font-medium">Technologies used</h5>
              </div>
              <div className="flex flex-col p-2 items-start w-full">
                <p className="font-normal text-14 text-grey-800">
                  - Front-end: HTML5, CSS3, ReactJs-Class Component.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
