import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () =>{

    return(
        <section id = 'services'>
            <h5>What i offer</h5>
            <h2>Services</h2>
            <div className="container services_container">
                <article className="service">
                    <div className="services_head">
                        <h3>UI/UX Design</h3>
                        <ul className='service_list'>
                            <li>
                                <BiCheck className='service_list-icon'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </BiCheck>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </BiCheck>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </BiCheck>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </BiCheck>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </BiCheck>
                            </li>
                            
                        </ul>
                    </div>
                </article>
                {/*End of UI/UX*/}
                <article className="service">
                    <div className="services_head">
                        <h3>Web Development</h3>
                        <ul className='service_list'>
                            <li>
                                <BiCheck className='service_list-icon'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </BiCheck>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </BiCheck>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </BiCheck>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </BiCheck>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </BiCheck>
                            </li>
                            
                        </ul>
                    </div>
                </article>
                {/*End of Web Development*/}
                <article className="service">
                    <div className="services_head">
                        <h3>Content Creation</h3>
                        <ul className='service_list'>
                            <li>
                                <BiCheck className='service_list-icon'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </BiCheck>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </BiCheck>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </BiCheck>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </BiCheck>
                            </li>
                            <li>
                                <BiCheck className='service_list-icon'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </BiCheck>
                            </li>
                            
                        </ul>
                    </div>
                </article>
                {/*End of Content Creation*/}
            </div>
        </section>
    )
}
function App(){
    return(
        <div className='App'>
            <Services/>
        </div>
    );
}
export default Services;
