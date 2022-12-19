import React from "react";
import ImgDiva from "../../images/diva.png";
import ImgJeff from "../../images/jeff-carwash.png";
import ImgMaster from "../../images/master-carwash.png";
import ImgCim from "../../images/cim.png";
import ImgCm from "../../images/cm.png";
import ImgGolf from "../../images/golf.jpg";

const AppFooter = () => {
    return (
        <div className="bg-[#20232A] py-14">
            <h1 className="text-center text-[20px] text-white">
                Companies Work
            </h1>
            <div className="flex flex-wrap gap-10 justify-center items-center mt-10">
                <span className="w-130- h-100">
                    <img src={ImgDiva} alt="diva" width={100} />
                </span>
                <span className="w-130- h-100">
                    <img src={ImgJeff} alt="jeff" width={100} />
                </span>
                <span className="w-130- h-100">
                    <img src={ImgMaster} alt="master" width={100} />
                </span>
                <span className="w-130- h-100">
                    <img src={ImgCim} alt="cim" width={150} />
                </span>
                <span className="w-130- h-100">
                    <img src={ImgCm} alt="cm" width={130} />
                </span>
                <span className="w-130- h-100">
                    <img src={ImgGolf} alt="cm" width={130} />
                </span>
            </div>
        </div>
    );
};

export default AppFooter;
