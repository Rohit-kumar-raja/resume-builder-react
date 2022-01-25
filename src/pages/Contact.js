import React from 'react';

const Contact = () => {
    return (
       <>
                <div className="breadcumb-area clearfix dzsparallaxer auto-init mode-scroll animation-engine-js dzsprx-readyall">                
                {/* <!-- breadcumb content --> */}
                <div className="breadcumb-content">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                <nav aria-label="breadcrumb" className="breadcumb--con text-center">
                                    <h2 className="w-text title wow fadeInUp" data-wow-delay="0.2s" >Contact Us</h2>
                                    <ol className="breadcrumb justify-content-center wow fadeInUp" data-wow-delay="0.4s" >
                                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ##### Welcome Area End ##### --> */}
        
            {/* <!-- ##### Contact Area Start ##### --> */}
            <section className="section-padding-100 contact_us_area" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                {/* <!-- Dream Dots --> */}
                                <div className="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s" >
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                </div>
                                <h2 className="wow fadeInUp" data-wow-delay="0.3s" >Contact With Us</h2>
                                <p className="wow fadeInUp" data-wow-delay="0.4s" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            </div>
                        </div>
                    </div>
        
                    {/* <!-- Contact Form --> */}
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="contact_form">
                                <form action="#" method="post" id="main_contact_form" novalidate="">
                                    <div className="row">
                                        <div className="col-12">
                                            <div id="success_fail_info"></div>
                                        </div>
        
                                        <div className="col-12 col-md-6">
                                            <div className="group wow fadeInUp" data-wow-delay="0.2s" >
                                                <input type="text" name="name" id="name" required=""/>
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>Name</label>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="group wow fadeInUp" data-wow-delay="0.3s" >
                                                <input type="text" name="email" id="email" required=""/>
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="group wow fadeInUp" data-wow-delay="0.4s" >
                                                <input type="text" name="subject" id="subject" required=""/>
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="group wow fadeInUp" data-wow-delay="0.5s" >
                                                <textarea name="message" id="message" required=""></textarea>
                                                <span className="highlight"></span>
                                                <span className="bar"></span>
                                                <label>Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.6s" >
                                            <button type="submit" className="btn dream-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </>
    );
}

export default Contact;
