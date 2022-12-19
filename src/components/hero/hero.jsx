import React from "react";
import ImgPerson from "../../images/me-bg2.png";
import ImgBg from "../../images/bg7.jpg";
import MyButton from "../../pallete/button";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "./styleHero.css";

const AppHero = (props) => {
    return (
        <div
            id="hero"
            style={{
                backgroundImage: `url(${ImgBg})`,
            }}
            className="bg-cover bg-fixed md:flex md:justify-evenly md:items-center py-14"
        >
            {/* IMG */}
            <div data-aos="fade-right">
                <img
                    src={ImgPerson}
                    alt="person"
                    width={370}
                    className="m-auto"
                />
            </div>
            {/* END IMG */}

            <div data-aos="fade-left">
                {/* HELLO */}
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-2 text-primary md:text-5xl">
                        Hello!
                    </h2>
                    <h3 className="text-[18px] font-semibold mb-1 tracking-wider md:text-[22px]">
                        My Name is Yaiz Jie
                    </h3>
                    <div className="text-slate-500 md:text-lg h-[27px] overflow-hidden">
                        <ul className="inner">
                            <li>Fullstack Developer</li>
                            <li>ReactJS Frontend</li>
                            <li>Flutter Frondend</li>
                            <li>Lumen Backend</li>
                            <li>ExpressJs Backend</li>
                            <li>Fullstack Developer</li>
                        </ul>
                    </div>
                </div>
                {/* END HELLO */}

                {/* CONTACT ME AND SOSMED*/}
                <div className="text-center mt-5">
                    <a onClick={() => props.onClickContent("contact")}>
                        <MyButton caption="Contact Me" />
                    </a>
                </div>
                <div className="flex justify-center mt-5 box text-slate-400">
                    <FaFacebook size={30} className="pr-3" />
                    <FaWhatsapp size={30} className="pr-3" />
                    <FaLinkedin size={30} className="pr-3" />
                </div>
                {/* END CONTACT ME AND SOSMED*/}
            </div>
        </div>
    );
};

export default AppHero;
