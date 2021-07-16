import React from 'react'
import Poster from '../Poster/poster.component';
import PosterCarouselsettings from "../../config/posterCarousel.config";
import Slider from 'react-slick';

const PosterSlider = (props) => {
    return (
        <>
        <div className="text-white flex flex-col items-start">
        <h3 className={`text-2xl font-bold my-4 ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
        <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>                 
    </div>
      <Slider {...PosterCarouselsettings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
            
        </>
    );
};

export default PosterSlider;

