import React from "react";
import WorldMap from "react-svg-worldmap";


export default function VisitedMap() {
    const data = [
        { country: "FR", value: "" }, // France
        { country: "ES", value: "" }, // Spain
        { country: "IT", value: "" }, // Italy
        { country: "MA", value: "" }, // Morocco
        { country: "DE", value: "" }, // Germany
        { country: "NL", value: "" }, // Netherlands
        { country: "CH", value: "" }, // Switzerland
        { country: "NO", value: "" }, // Norway
    ];
    return (
        <div className="flex justify-center items-center ">
            <WorldMap
                size="xl"
                color="#34D399"
                backgroundColor="#ffffff"
                data={data}
                styleFunction={(context) => {
                    const { countryCode } = context;
                    const europeCountries = ["FR", "ES", "IT", "DE", "MA", "NL", "CH", "NO"];
                    return {
                        fill: europeCountries.includes(countryCode) ? "#60A5FA" : "#F3F4F6",
                        stroke: "#000000",
                        strokeWidth: europeCountries.includes(countryCode) ? 1 : 0.5,
                    };
                }}

            />
            <div className="absolute top-4 left-4 bg-white bg-opacity-80 backdrop-blur-md rounded px-3 py-2 shadow text-xs text-gray-800">

                <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-sm inline-block" style={{ backgroundColor: "#60A5FA" }}></span>
                    <span>Visited</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                    <span className="w-3 h-3 rounded-sm inline-block" style={{ backgroundColor: "#F3F4F6" }}></span>
                    <span>Not visited</span>
                </div>
            </div>

        </div>
    );
}