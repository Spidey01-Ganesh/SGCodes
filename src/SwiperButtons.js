import React from 'react';
import { useSwiper } from 'swiper/react';


const SwiperButtons = () => {
    const swiper = useSwiper();

    return (
        <div className="flex items-center gap-4">
            <button type='button' onClick={() => swiper.slideNext()}>Next</button>
            <button type='button' onClick={() => swiper.slidePrev()}>Prev</button>
        </div>
    )
};


export default SwiperButtons;