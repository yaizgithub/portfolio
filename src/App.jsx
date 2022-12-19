import { FloatButton } from "antd";
import AppAbout from "./components/about/about";
import AppContact from "./components/contact/contact";
import AppFooter from "./components/footer/footer";
import AppHeader from "./components/header/header";
import AppHero from "./components/hero/hero";
import AppSkill from "./components/skill/skill";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const getClickContent = (value) => {
        // console.log(`from child ${value}`);
        const element = document.getElementById(`${value}`);
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <FloatButton.BackTop />
            <AppHeader onClickContent={getClickContent} />
            <AppHero onClickContent={getClickContent} />
            <AppAbout />
            <AppSkill />
            <AppContact />
            <AppFooter />
        </div>
    );
}

export default App;
