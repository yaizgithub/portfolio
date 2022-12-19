import React from "react";

const Child = (props) => {
    return (
        <div>
            <h1>Child</h1>
            <button onClick={() => props.handleClick("from Child")}>
                Click Me
            </button>
        </div>
    );
};

export default Child;
