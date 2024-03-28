import React, { useState } from "react";

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}


export function UncontrolledOnOff(props: PropsType) {

    console.log("OnOff rendered");

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false); // hook 

    console.log("on: " + on);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };

    const OffStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    };

    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    };


    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false);
        props.onChange(false)
    }

    return <div>
        <div style={onStyle} onClick={onClicked} >On</div>
        <div style={OffStyle} onClick={offClicked}  >Off</div>
        <div style={indicatorStyle}></div>
    </div>
}

