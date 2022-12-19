import { Button } from "antd";
import React from "react";
import MyButton from "../../pallete/button";
import MyTitleHeader from "../../pallete/title";
import "./styleAbout.css";

const data = [
    {
        title: "12",
        subtitle: "Years Experience",
    },
    {
        title: "11",
        subtitle: "Completed Project",
    },
    {
        title: "09",
        subtitle: "Companies Work",
    },
];

const AppAbout = () => {
    return (
        <div id="about" className="bg-[#E6E6E6] py-16">
            <MyTitleHeader title="About" subtitle="Me" />
            <p
                data-aos="fade-up"
                className="text-slate-800 text-justify mt-10 px-6 md:px-20"
            >
                {/* Saya seorang pengembang web yang berkualitas,
                        profesional dan berpengalaman dalam administrasi
                        database dan pembuatan aplikasi desktop, web maupun
                        aplikasi mobile. Keterampilan kreatif dan analitis yang
                        kuat. Bisa bekerja secara mandiri ataupun secara tim
                        dengan perhatian terhadap detail. */}
                I am a qualified web developer, professional and experienced in
                database administration and developing desktop, web and mobile
                applications. Strong creative and analytical skills. Able to
                work independently or in a team with attention to detail.
            </p>
            <div className="text-slate-300 m-10 flex gap-5 justify-around text-center">
                {data.map((e, i) => {
                    return (
                        <div data-aos="zoom-in" key={i} className="">
                            <span className="text-base text-[30px] text-primary font-semibold">
                                {e.title}
                            </span>
                            <span className="text-base text-[30px] text-blue-400 ">
                                +
                            </span>
                            <span className="block text-[12px] text-slate-600">
                                {e.subtitle}
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className="mx-7 md:mx-20">
                <MyButton caption="Download CV" />
            </div>
        </div>
    );
};

export default AppAbout;
