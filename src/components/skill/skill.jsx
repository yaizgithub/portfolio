import React from "react";
import {
    FaCss3Alt,
    FaHtml5,
    FaNodeJs,
    FaReact,
    FaMobileAlt,
} from "react-icons/fa";
import MyTitleHeader from "../../pallete/title";
import "./styleSkill.css";
import ImgBg from "../../images/bg7.jpg";

const data = [
    {
        avatar: <FaHtml5 size={40} />,
        subtitle: "Advance",
        nmclass: "circular-progress-html",
        delay: "0",
    },
    {
        avatar: <FaCss3Alt size={40} />,
        subtitle: "Expect",
        nmclass: "circular-progress-css",
        delay: "100",
    },

    {
        avatar: <FaNodeJs size={40} />,
        subtitle: "Beginner",
        nmclass: "circular-progress-nodejs",
        delay: "200",
    },
    {
        avatar: <FaReact size={40} />,
        subtitle: "Intermediate",
        nmclass: "circular-progress-react",
        delay: "300",
    },
    {
        avatar: <FaMobileAlt size={40} />,
        subtitle: "Intermediate",
        nmclass: "circular-progress-react",
        delay: "400",
    },
];

const AppSkill = () => {
    return (
        // bg-[#dddcdc]
        <div
            id="skill"
            style={{
                backgroundImage: `url(${ImgBg})`,
            }}
            className="bg-cover bg-fixed py-16 pb-32"
        >
            <MyTitleHeader title="My" subtitle="Skill" />
            <div className="md:flex md:justify-center md:gap-5 mt-5 flex flex-wrap justify-evenly md:px-1">
                {data.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className="border w-44 py-7 border-primary  rounded-lg mt-5 bg-background"
                        >
                            <div
                                data-aos="flip-left"
                                data-aos-delay={item.delay}
                                className="flex flex-col items-center justify-center relative"
                            >
                                <div className=" w-[100px] h-[100px] bg-[#17191B] rounded-full absolute scale-[87%]"></div>
                                <div className="absolute text-white">
                                    {item.avatar}
                                </div>
                                <div
                                    className={
                                        item.nmclass +
                                        " " +
                                        "w-[100px] h-[100px] bg-secondary rounded-full"
                                    }
                                ></div>
                            </div>
                            <div className="mt-2 text-sm text-slate-300 text-center m-auto">
                                {item.subtitle}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AppSkill;
