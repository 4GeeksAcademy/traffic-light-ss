import React, { useState } from "react"


const TrafficLight = () => {
    //hook usestate//
    const [selected, setSelected] = useState("green")

    const changeColor = (color) => {
        console.log(color);
        setSelected(color);
    }
    return (
        <main>
            <div className="p-box"></div>
            <div className="box-light">
                <div className={`red ${selected == "red" ? "light-click" : ""}`}
                    onClick={() => changeColor("red")}
                ></div>
                <div className={`yellow ${selected == "yellow" ? "light-click" : ""}`}
                    onClick={() => changeColor("yellow")}
                ></div>
                <div className={`green ${selected == "green" ? "light-click" : ""}`}
                    onClick={() => changeColor("green")}
                ></div>
            </div>
        </main>
    )
}

export default TrafficLight