import React, {useEffect, useState } from 'react';
import axios from 'axios';

import './testimonial.css';
import swiper, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


const Testimonial = () => {
    const [data, setData] = useState([]);
     
    useEffect(() => {
      axios.get("https://nervous-yak-school-uniform.cyclic.app/api/testimonial").then(response =>{
        const formattedData = response.data.data.map((item =>({
            id: item._id,
            avatar: item.avatar,
            title: item.name,
            review: item.review
        })));
        setData(formattedData)
    }).catch(error => {
        console.log("Error fetching portfolio data:",error);
    })
},[])
    return(
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper  className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{clickable: true}}>
             {
                data.map(({id,avatar,name,review}) => {
                    return(
                    <SwiperSlide key={id} className='testimonial'>
                    <div className='client__avatar'>
                        <img src={avatar} alt={name} />                   
                    </div>
                    <div>
                        <h5 className='client__name'>{name}</h5>
                        <small className='client__review'>{review}</small>
                    </div> 
                    </SwiperSlide>
                    )
                } )
               } 
                  </Swiper>
                  </section>
    )
}
export default Testimonial
