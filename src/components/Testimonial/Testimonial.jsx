/* eslint-disable no-unused-vars */
import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/Avatar1.jpg'
import AVTR2 from '../../assets/ollo.png'
import AVTR3 from '../../assets/alla.png'
import AVTR4 from '../../assets/felle.png'
import AVTR5 from '../../assets/fello.png'
import AVTR6 from '../../assets/illi.png'


import swiper, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';




import 'swiper/css';
import 'swiper/css/pagination';




const data = [
    {
    avatar: AVTR1,
    name:'Charles Lima',
    review: 'I contacted @Modeiro Tegue to build me my first professional website and i was very satisfied by his result he is such a good developper.'
    },

    {
    avatar: AVTR2,
    name:'Kehbuma Lima',
    review: 'Nowadays to find a developper as @Modeiro is dificult, he was actually fully involevd in the backend of  my first software for the management of my school records.'
    },

    {
    avatar: AVTR3,
    name:'Elle Vanelle ',
    review: 'I will recommend to everybody wishing any service under Networking or software development to contact @Modeiro Tegue for Efficient services provision .'
    },

    {
    avatar: AVTR4,
    name:'Kehbuma Charles',
    review: 'other from Being my junior Brother, He is a Very hardworking and performant person especially in the Field of Development and conception/ Modeling of Your System..'
    },

    {
        avatar: AVTR5,
        name:'Charlie Charles',
        review: 'A very Amazing person and always trying to put his best in any thing he does.. the best i know concerning the Basics under Networking and still going more awesome with time and studies' 
        },

        {
            avatar: AVTR6,
            name:'Lima Charlie',
            review: 'I highly recommend him if you are interested in Building a responsive and easily Updatable Website based on Java programming for the backend together with the ReactJs technology.. Infact try once and stay forever'
            },

           
]

const Testimonial = () => {
    return(
        <section id='testimonials'>
            <h5>Encouraging Reviews</h5>
            <h2>Testimonials</h2>

            <Swiper  className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{clickable: true}}>

               {
                data.map(({avatar,name,review}, index) => {
                    return(
                    <SwiperSlide key={index} className='testimonial'>
                    <div className='client__avatar'>
                        <img src={avatar} alt='fdsfdf' />                   
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