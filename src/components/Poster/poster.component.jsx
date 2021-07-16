import React from 'react'

const Poster = (props) => {
    return (
        <>
        <div classname="flex flex-col items-start gap-2 px-3"> 
            <div className="h-80 px-4 ">
                <img src={props.src} alt={props.title} className="w-full h-full rounded-xl" />
            </div>
            <h3 className= {`text-lg px-4 font-bold ${props.isDark ? "text-white" : "text-gray-700" }`}>{props.title}</h3>
            <p className={`text-sm px-4 ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.subtitle}</p>
        </div>
            
        </>
    );
};
export default Poster;
