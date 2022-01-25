import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Testimonial = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
        >

            <div className="owl-item cloned">
                <div className="single-testimonial text-center">
                    <div className="icon_wrapper">
                        <i className="fa fa-quote-right"></i>
                    </div>
                    <div className="testimonial_image">
                        <img src="img/test-img/2.jpg" alt="" />
                    </div>
                    <div className="testimonial-description">
                        <div className="testimonial_text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                                nostrum adipisci porro quisquam. Rem, earum, tenetur? Architecto
                                et,
                                earum repudiandae.</p>
                        </div>

                        <div className="admin_text">
                            <h5>Ajoy Das</h5>
                            <p>One of our Clients</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="owl-item cloned">
                <div className="single-testimonial text-center">
                    <div className="icon_wrapper">
                        <i className="fa fa-quote-right"></i>
                    </div>
                    <div className="testimonial_image">
                        <img src="img/test-img/2.jpg" alt="" />
                    </div>
                    <div className="testimonial-description">
                        <div className="testimonial_text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                                nostrum adipisci porro quisquam. Rem, earum, tenetur? Architecto
                                et,
                                earum repudiandae.</p>
                        </div>

                        <div className="admin_text">
                            <h5>Ajoy Das</h5>
                            <p>One of our Clients</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="owl-item cloned">
                    <div className="single-testimonial text-center">
                        <div className="icon_wrapper">
                            <i className="fa fa-quote-right"></i>
                        </div>
                        <div className="testimonial_image">
                            <img src="img/test-img/2.jpg" alt="" />
                        </div>
                        <div className="testimonial-description">
                            <div className="testimonial_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                                    nostrum adipisci porro quisquam. Rem, earum, tenetur? Architecto
                                    et,
                                    earum repudiandae.</p>
                            </div>

                            <div className="admin_text">
                                <h5>Ajoy Das</h5>
                                <p>One of our Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>

    );
}

export default Testimonial;
