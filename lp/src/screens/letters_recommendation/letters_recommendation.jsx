import React, { useState } from 'react';
import CarTitle from '../../components/car_title/car_title';
import Slider from "react-slick";
import './style.css';


import img1 from './images/rec_1.jpg';
import img2 from './images/rec_2.jpg';
import img3 from './images/rec_3.jpg';
import img4 from './images/rec_4.jpg';
import img5 from './images/rec_5.jpg';


export default function LettersRecommendation() {
    const [sliderRef, setSliderRef] = useState(null)

    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    const cards = [img1, img2, img4, img3, img5]

    return (
        <section id='LettersRecommendation' className='LettersRecommendation'>
            <div className='container'>
                <CarTitle title='Рекомендательные письма' />
                <Slider ref={setSliderRef} {...sliderSettings}>
                    {cards.map((card, index) => (
                        <div key={index} className='LettersRecommendation-card' >
                            <img src={card} className='LettersRecommendation-img' />
                        </div>
                    ))}
                </Slider>
                <div className='LettersRecommendation-controls'>
                    <button onClick={sliderRef?.slickPrev}>
                        <svg viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25 9.29904C0.250001 8.72169 0.25 7.27831 1.25 6.70096L11.75 0.638783C12.75 0.0614319 14 0.783119 14 1.93782L14 14.0622C14 15.2169 12.75 15.9386 11.75 15.3612L1.25 9.29904Z" fill="#AB0B0A" />
                        </svg>

                    </button>
                    <button onClick={sliderRef?.slickNext}>
                        <svg viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.75 9.29904C13.75 8.72169 13.75 7.27831 12.75 6.70096L2.25 0.638783C1.25 0.0614319 0 0.783119 0 1.93782L0 14.0622C0 15.2169 1.25 15.9386 2.25 15.3612L12.75 9.29904Z" fill="#AB0B0A" />
                        </svg>

                    </button>
                </div>
            </div>
        </section>
    )
}
