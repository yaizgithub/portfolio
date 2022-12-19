import React from "react";

const MyTitleHeader = (props) => {
    return (
        <div>
            <div className="text-center text-3xl font-semibold mb-3">
                {props.title}{" "}
                <span className="text-orange-500">{props.subtitle}</span>
            </div>
            <div>
                <div className="m-auto w-[50px] h-[5px] bg-primary rounded-full"></div>
            </div>
        </div>
    );
};

export default MyTitleHeader;
