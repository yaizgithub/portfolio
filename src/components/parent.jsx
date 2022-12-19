import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
    const [getChild, setgetChild] = useState();

    const getFromChild = (value) => {
        setgetChild(value);
    };
    return (
        <div>
            <h1>Parent</h1>
            <h3>{getChild}</h3>
            <Child handleClick={getFromChild} />
        </div>
    );
};

export default Parent;
