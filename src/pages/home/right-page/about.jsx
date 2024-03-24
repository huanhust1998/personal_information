import { IconBackend, IconFrontend } from "../../../components/icons";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div className="rounded-xl shadow-2xl w-full h-[500px] bg-white py-10 px-8 gap-3 flex flex-col overflow-y-auto no-scrollbar relative">
      <div className="flex items-center gap-5 sticky -top-10 bg-white z-10">
        <h1 className="text-24 font-bold">About</h1>
        <div className="w-[200px] h-[2px] bg-pink-800"></div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-14 text-grey-700">
          I'm a front-end software engineer with a passion for creating engaging
          user experiences. I specialize in HTML, CSS, and JavaScript, and I
          have experience working with modern frameworks like React.
        </p>
        <p className="text-14 text-grey-700">
          I've worked on various projects, from small websites to large-scale
          applications, collaborating with designers and back-end developers to
          deliver seamless solutions.
        </p>
        <p className="text-14 text-grey-700">
          Effective communication and teamwork are important to me, and I look
          forward to contributing my skills and expertise to your team.
        </p>
      </div>

      <div className="w-full">
        <h3 className="font-semibold text-18">What I Do !</h3>
        <div className="flex flex-col w-full gap-5 mt-2">
          <div className="w-full bg-blue-300 p-2 rounded-2xl">
            <div className="gap-2 flex">
              <div>
                <IconFrontend />
              </div>
              <div className="flex flex-col gap-1">
                <h5 className="font-medium text-14">Frontend Development</h5>
                <p className="text-14 font-normal text-grey-800">
                  As a frontend developer, I create websites and applications
                  using HTML, CSS, and JavaScript. It combines design and
                  programming to deliver user-friendly online experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-pink-300 p-2 rounded-2xl">
            <div className="gap-2 flex">
              <div>
                <IconBackend color={"#4070a0"} />
              </div>
              <div className="flex flex-col gap-1">
                <h5 className="font-medium text-14">Backend Development</h5>
                <p className="text-14 font-normal text-grey-800">
                  As a backend developer, I use Node.js (NestJS Framework) to
                  build scalable web applications. I handle APIs, databases,
                  authentication, and ensure smooth communication with the
                  frontend for a seamless user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
