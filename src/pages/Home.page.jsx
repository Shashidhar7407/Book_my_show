import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/Premier/Premier.component";
import Tempimage from "../config/TempPoster.config"
import PosterSlider from "../components/PosterSlider/PosterSlider.component";


const HomePage =()=>{

    return(
        <>
        <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-800 my-3">The best of Entertainment</h1>
        <EntertainmentCardSlider/>
        
        </div>
        <div className="bg-bms-800 py-12">
            
            <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden items-center justify-between md:flex">
                
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
            alt="premier" 
            className="w-full h-full"/>
            
        </div>
            <PosterSlider images={Tempimage} title="Premier" subtitle="Brand new Releases every Friday" isDark />     
            </div>
            

        </div>
        </div>

        <div className="mx-auto p-10">
            <PosterSlider
            images={Tempimage} title="Online Streaming Events" isDark={false}/>
        </div>
        <div className="mx-auto p-10">
            <PosterSlider
            images={Tempimage} title="Outdoor Events" isDark={false}/>
        </div>
        <div className="mx-auto p-10">
            <PosterSlider
            images={Tempimage} title="Laughter Therapy" isDark={false}/>
        </div>
        <div className="mx-auto p-10">
            <PosterSlider
            images={Tempimage} title="Popular Events" isDark={false}/>
        </div>
        <div className="mx-auto p-10">
            <PosterSlider
            images={Tempimage} title="The Latest Plays " isDark={false}/>
        </div>
        
        </>
    );
};


export default HomePage;