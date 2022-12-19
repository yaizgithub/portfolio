import { Anchor, Button } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { MdOutlineMenu, MdOutlineMenuOpen } from "react-icons/md";
import { useDetectScroll } from "@smakss/react-scroll-direction";
import "./styleHeader.css";

const { Link } = Anchor;

const AppHeader = (props) => {
    const [showMenu, setshowMenu] = useState(true);
    const [scrollDir] = useDetectScroll({});

    const handleMenu = () => {
        setshowMenu(!showMenu);
    };

    return (
        <div>
            <div className="px-8 relative  ">
                {/* <h2 className="fixed">{`${scrollDir} ${
                scrollDir === "still" ? "↕️" : scrollDir === "up" ? "🔼" : "🔽"
            }`}</h2> */}
                <div
                    className={`mynavbar z-50 flex justify-end items-center md:py-5 py-3 top-0  right-0 md:w-[390px] md:rounded-bl-full
                     md:bg-primary md:bg-opacity-10 md:shadow-sm 
                    ${
                        scrollDir === "still"
                            ? "fixed opacity-100"
                            : scrollDir === "up"
                            ? "fixed  transition duration-700 ease-in-out opacity-100"
                            : "absolute opacity-0"
                    }
                    `}
                >
                    {/* <div className="pl-6 opacity-0 md:opacity-100"></div> */}
                    {/* BROWSER */}
                    {/* nav-browser -z-[9999] md:z-10 pr-5 */}
                    <nav className="pr-5 hidden md:flex">
                        <ul className="flex gap-5">
                            <li className="is-hover">
                                <a onClick={() => props.onClickContent("hero")}>
                                    Home
                                </a>
                            </li>
                            <li className="is-hover">
                                <a
                                    onClick={() =>
                                        props.onClickContent("about")
                                    }
                                >
                                    About
                                </a>
                            </li>
                            <li className="is-hover">
                                <a
                                    onClick={() =>
                                        props.onClickContent("skill")
                                    }
                                >
                                    Skill
                                </a>
                            </li>
                            <li className="is-hover">
                                <a
                                    onClick={() =>
                                        props.onClickContent("contact")
                                    }
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* END BROWSER */}

                    <div className="pr-6 md:hidden">
                        {/* MOBILE */}
                        <button
                            onClick={handleMenu}
                            className="active:transition active:rotate-180 "
                        >
                            {showMenu ? (
                                <MdOutlineMenu size={30} color="#172858" />
                            ) : (
                                <MdOutlineMenuOpen size={30} color="#172858" />
                            )}
                        </button>
                        {/* END MOBILE */}
                    </div>
                </div>
            </div>
            {/* MOBILE */}
            {showMenu ? (
                ""
            ) : (
                <div className="fixed right-14 w-[120px] top-3 md:hidden bg-white bg-opacity-80 text-primary z-50">
                    <ul
                        className=""
                        onClick={() => {
                            setshowMenu(!showMenu);
                        }}
                    >
                        <li className="my-3 pl-3 is-hover">
                            <a onClick={() => props.onClickContent("hero")}>
                                Home
                            </a>
                        </li>
                        <li className="my-3 pl-3 is-hover">
                            <a onClick={() => props.onClickContent("about")}>
                                About
                            </a>
                        </li>
                        <li className="my-3 pl-3 is-hover">
                            <a onClick={() => props.onClickContent("skill")}>
                                Skill
                            </a>
                        </li>
                        <li className="my-3 pl-3 is-hover">
                            <a onClick={() => props.onClickContent("contact")}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    {/* <Anchor
                            affix={false}
                            className=" bg-white "
                            onClick={() => {
                                setshowMenu(!showMenu);
                            }}
                        >
                            <Link href="#home" title="Home" />
                            <Link href="#about" title="About" />
                            <Link href="#skill" title="Skill" />
                            <Link href="#contact" title="Contact" />
                        </Anchor> */}
                </div>
            )}
            {/* END MOBILE */}
        </div>
    );
};

export default AppHeader;
