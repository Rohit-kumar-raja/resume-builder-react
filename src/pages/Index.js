import React from 'react';
import Testimonial from '../components/Testimonial';

const Index = () => {
    return (
        <>
            <section className="welcome_area demo2 flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 col-md-12">
                            <div className="welcome-content v2">
                                <div className="promo-section">
                                    <div className="integration-link light">
                                        <span className="integration-icon">
                                            <img src="img/img-dollar.svg" width="24" height="24" alt="" />
                                        </span>
                                        <span className="integration-text">Discover The Easiest ways to Build Your CV!</span>
                                    </div>
                                </div>
                                <h1 className="wow fadeInUp owl-wow1" data-wow-delay="0.2s">Online CV
                                    Builder With Creative Templates.</h1>
                                <p className="wow fadeInUp owl-wow1" data-wow-delay="0.3s"
                                >Our
                                    Perfect
                                    resume builder takes the hassle out of resume writing. Choose from several templates and
                                    follow easy prompts to create the perfect job-ready resume.</p>
                                <div className="dream-btn-group wow fadeInUp owl-wow3" data-wow-delay="0.4s"
                                >
                                    <a href="{{ route('templates')}}" className="btn dream-btn green-btn mr-3">Choose Template</a>
                                    <a href="{{ route('contact')}}" className="btn dream-btn green-btn"> contact us</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-12">
                            <div className="banner-box">
                                <img src="img/banner2.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div className="clearfix"></div>

            <section className="demo-video feat section-padding-100 bub-left">
                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="services-block-four">
                                <div className="inner-box">
                                    <div className="icon-img-box">
                                        <img src="img/icons/d1.png" alt="" />
                                    </div>
                                    <h3><a href="/">Easy Online Resume Builder</a></h3>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Laudantium modi assumenda.</div>

                                </div>
                            </div>
                            <div className="services-block-four">
                                <div className="inner-box">
                                    <div className="icon-img-box">
                                        <img src="img/icons/d2.png" alt="" />
                                    </div>
                                    <h3><a href="/">Step by Step Expert Tips</a></h3>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                        skaj
                                        gjska consectetur adipisicing elit.</div>

                                </div>
                            </div>
                            <div className="services-block-four" >
                                <div className="inner-box">
                                    <div className="icon-img-box">
                                        <img src="img/icons/d3.png" alt="" />
                                    </div>
                                    <h3><a href="#">Recruiter Approved Phrases</a></h3>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Laudantium modi.</div>

                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="who-we-contant mt-s">
                                <div className="dream-dots">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                </div>
                                <h4>Why Choose Our Platform?</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non
                                    suscipit
                                    arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere,
                                    natus
                                    reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore
                                    possimus laboriosam qui nam. Fugit!</p>
                                <a className="btn dream-btn mt-30" href="{{ route('templates')}}">lets build your cv</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-us-area section-padding-100 clearfix">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-12 col-lg-6">
                            <div className="who-we-contant">
                                <div className="dream-dots">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                </div>
                                <h4 className="bold">We Deliver The Best</h4>
                                <div className="list-wrap align-items-center">
                                    <div className="row">

                                        <div className="col-md-12">
                                            <div className="side-feature-list-item">
                                                <img src="img/icons/check.png" className="check-mark-icon" alt="" />
                                                <div className="foot-c-info">Proven CV Templates to increase Hiring Chance
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="side-feature-list-item">
                                                <img src="img/icons/check.png" className="check-mark-icon" alt="" />
                                                <div className="foot-c-info">Creative and Clean Templates Design</div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="side-feature-list-item">
                                                <img src="img/icons/check.png" className="check-mark-icon" alt="" />
                                                <div className="foot-c-info">Easy and Intuitive Online CV Builder</div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="side-feature-list-item">
                                                <img src="img/icons/check.png" className="check-mark-icon" alt="" />
                                                <div className="foot-c-info">Free to use. Developed by hiring professionals.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="side-feature-list-item">
                                                <img src="img/icons/check.png" className="check-mark-icon" alt="" />
                                                <div className="foot-c-info">Fast Easy CV and Resume Formatting</div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="side-feature-list-item">
                                                <img src="img/icons/check.png" className="check-mark-icon" alt="" />
                                                <div className="foot-c-info">Recruiter Approved Phrases.</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="welcome-meter wow fadeInUp mt-s owl-wow4" data-wow-delay="0.3s"
                            >
                                <img src="img/cv.png" className="center-block" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="clearfix"></div>

            <section className="container section-padding-0-100">
                <div className="subscribe">
                    <div className="row align-items-center relative">
                        <img src="img/custom.png" alt="" className="custom" />
                        <div className="col-lg-5 col-lg-offset-3 col-md-9 col-xs-12">
                            <h2 className="bold mb-0">Do you Need a Complete Custom CV Template?</h2>
                        </div>
                        <div className="col-lg-3 col-lg-offset-1 col-md-3 col-sm-12 text-center">
                            <a href="{{ route('contact')}}" className="button mt-s">Send a Request</a>
                        </div>

                    </div>
                </div>
            </section>

            <section className="pricing section-padding-0-70">

                <div className="container">

                    <div className="row">
                        {/* <!-- Single Table --> */}
                        <div className="col-lg-4 col-md-6">
                            <div className="who-we-contant mt-s">
                                <div className="dream-dots">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                </div>
                                <h4>Our Pricing</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non
                                    suscipit
                                    arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.</p>

                                <div className="free-7">
                                    <span>Lets Build CV</span>
                                    <p> with 7days of Free Trial</p>
                                </div>
                                <div className="terms mt-30">
                                    <a href="#">Terms &amp; Conditions </a>
                                    <p>subject to change with perior notice</p>
                                </div>

                            </div>
                        </div>
                        {/* <!-- Single Table --> */}
                        <div className="col-lg-4 col-md-6">
                            <div className="single_price_table_content wow fadeInUp" data-wow-delay="0.2s"
                            >
                                <div className="price_table_text">
                                    <h1>$9.99</h1>
                                    <h5 className="gradient-text cyan">/ month</h5>
                                </div>
                                <div className="table_text_details">
                                    <h3>Monthly Pack</h3>
                                    <p>You will be billed per month, and get unlimited access to all resume Templates and
                                        new
                                        added ones</p>

                                    <a href="{{ route('contact')}}" className="button mt-s">Get Started</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Table --> */}
                        <div className="col-lg-4 col-md-6">
                            <div className="single_price_table_content wow fadeInUp" data-wow-delay="0.3s"
                            >
                                <div className="price_table_text">
                                    <h1>$7.99</h1>
                                    <h5 className="gradient-text cyan">/ month</h5>
                                </div>
                                <div className="table_text_details">
                                    <h3>Yearly Pack <span> save 20%</span></h3>
                                    <p>You will be billed per Year, and get unlimited access to all resume Templates and new
                                        added ones</p>

                                    <a href="{{ route('contact')}}" className="button mt-s">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="demo section-padding-100 ring-bg">
                <div className="container">
                    <div className="section-heading text-center">
                        <div className="dream-dots justify-content-center">
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <h2 className="bold">Our Creative Templates</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua</p>
                    </div>
                    <div className="row">

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="demo-item">
                                <a href="{{ route('preview')}}"><img src="img/demos/demo-1.png" alt="demo"
                                    className="img-responsive" /></a>
                                <div className="preview-btn-wrapper text-center">
                                    <a href="{{ route('preview')}}" className="preview-demo">See template <i
                                        className="fa fa-long-arrow-right"></i></a>
                                    <a href="{{ route('start')}}" className="preview-demo v2">Use template <i
                                        className="fa fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="demo-item">
                                <a href="{{ route('templates')}}"><img src="img/demos/demo-2.png" alt="demo"
                                    className="img-responsive" /></a>
                                <div className="preview-btn-wrapper text-center">
                                    <a href="{{ route('templates')}}" className="preview-demo">See template <i
                                        className="fa fa-long-arrow-right"></i></a>
                                    <a href="{{ route('preview')}}" className="preview-demo v2">Use template <i
                                        className="fa fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="demo-item">
                                <a href="{{ route('preview')}}"><img src="img/demos/demo-3.png" alt="demo"
                                    className="img-responsive" /></a>
                                <div className="preview-btn-wrapper text-center">
                                    <a href="{{ route('preview')}}" className="preview-demo">See template <i
                                        className="fa fa-long-arrow-right"></i></a>
                                    <a href="{{ route('start')}}" className="preview-demo v2">Use template <i
                                        className="fa fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="our_services_area section-padding-100-70" id="services">
                <div className="container">

                    <div className="section-heading text-center">
                        {/* <!-- Dream Dots --> */}
                        <div className="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s"
                        >
                            <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <h2 className="wow fadeInUp    " data-wow-delay="0.3s"
                        >Our Main Features</h2>
                        <p className="wow fadeInUp" data-wow-delay="0.4s"
                        >Lorem ipsum dolor sit
                            amet,
                            consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                        </p>
                    </div>


                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4">
                            {/* <!-- Content --> */}
                            <div className="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.2s"
                            >
                                {/* <!-- Icon --> */}
                                <div className="service_icon">
                                    <img src="img/icons/f1.png" alt="" />
                                </div>
                                <h6>Proven CV Templates to increase Hiring Chance</h6>
                                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut
                                    accumsan
                                    ut, posuere sit Lorem ipsum adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            {/* <!-- Content --> */}
                            <div className="service_single_content text-center mb-100 wow wow fadeInUp" data-wow-delay="0.3s"
                            >
                                {/* <!-- Icon --> */}
                                <div className="service_icon">
                                    <img src="img/icons/f2.png" alt="" />
                                </div>
                                <h6>Creative, Modern and Clean Templates Design</h6>
                                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut
                                    accumsan
                                    ut, posuere sit Lorem ipsum adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.4s"
                            >
                                <div className="service_icon">
                                    <img src="img/icons/f3.png" alt="" />
                                </div>
                                <h6>Easy and Intuitive Online CV and Resume Builder </h6>
                                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut
                                    accumsan
                                    ut, posuere sit Lorem ipsum adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.5s"
                            >
                                <div className="service_icon">
                                    <img src="img/icons/f4.png" alt="" />
                                </div>
                                <h6>Free to use. Developed by hiring professionals.</h6>
                                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut
                                    accumsan
                                    ut, posuere sit Lorem ipsum adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.6s"
                            >
                                <div className="service_icon">
                                    <img src="img/icons/f5.png" alt="" />
                                </div>
                                <h6>Recruiter Approved Phrases with Module Notification</h6>
                                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut
                                    accumsan
                                    ut, posuere sit Lorem ipsum adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="service_single_content text-center mb-100 wow fadeInUp" data-wow-delay="0.7s"
                            >
                                <div className="service_icon">
                                    <img src="img/icons/f6.png" alt="" />
                                </div>
                                <h6>Fast Easy CV and Resume Formatting</h6>
                                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla neque quam, maxim us ut
                                    accumsan
                                    ut, posuere sit Lorem ipsum adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                <div className="dream-dots justify-content-center">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                </div>
                                <h2>Your Success, Our Inspiration</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut
                                    felis
                                    congue nisl hendrerit commodo. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Testimonial/>
            </section>
       
         
        </>

    );
}

export default Index;
