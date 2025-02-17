import { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const skillLevels = {
    HTML: 60,
    CSS: 75,
    Javascript: 45,
    Typescript: 40,
    React: 65,
    TailwindCSS: 70,
  };

  const [progress, setProgress] = useState({
    HTML: 0,
    CSS: 0,
    Javascript: 0,
    Typescript: 0,
    React: 0,
    TailwindCSS: 0,
  });

  useEffect(() => {
    const intervalIds = Object.keys(skillLevels).map((skill) => {
      return setInterval(() => {
        setProgress((prev) => {
          const newValue = Math.min(prev[skill] + 1, skillLevels[skill]);
          return { ...prev, [skill]: newValue };
        });
      }, 20);
    });

    return () => intervalIds.forEach(clearInterval);
  }, []);

  const skills = Object.keys(progress).map((skill) => ({
    name: skill,
    percentage: progress[skill],
  }));

  return (
    <div>
      <div className="pt-36 px-16 h-screen w-full flex flex-col items-center">
        <div className="flex">
          <div className="flex mb-15">
            <div className="p-2 rounded-full bg-green-400"></div>
            <div className="flex flex-col w-220 px-5 py-2">
              <h1 className="text-3xl font-bold">
                MY <span className="text-green-400">SKILLS</span>
              </h1>
              <div className="mt-3 space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="items-center">
                    <p className="text-xl font-semibold">{skill.name}</p>
                    <div className="flex items-center">
                      <div className="w-full flex bg-gray-200 rounded-full h-5">
                        <div
                          className="bg-green-400 h-5 rounded-full transition-all duration-1000 ease-in-out"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                      <h1 className="ml-4">{skill.percentage}%</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex pb-36">
          <div className="p-2 rounded-full bg-green-400"></div>
          <div className="flex flex-col w-220 px-5 py-2">
            <h1 className="text-3xl font-bold">
              MY <span className="text-green-400">BACKGROUND</span>
            </h1>
            <p className="indent-4 mt-3 text-xl text-justify">
              Hello! My name is{" "}
              <span className="text-green-400">Marcel Wang</span>, and I’m from{" "}
              <span className="text-green-400">Tangerang, Indonesia</span>. I am
              the youngest of five siblings. I have always been passionate about
              technology and programming. I am highly enthusiastic about
              learning various programming languages and enjoy spending time
              practicing coding. To me, every line of code is not just syntax
              but a challenge and an opportunity to create something innovative.
              I am constantly learning and growing,{" "}
              <span className="text-green-400">
                hoping to contribute more to the world of technology.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
