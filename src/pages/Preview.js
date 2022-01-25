import React from 'react';

const Preview = () => {
    return (
       <>



{/* <!-- ##### Welcome Area Start ##### --> */}
                <div className="breadcumb-area clearfix dzsparallaxer auto-init mode-scroll animation-engine-js dzsprx-readyall"
                    data-options="{direction: &quot;normal&quot;}">
                    <div className="divimage dzsparallaxer--target"
                        >
                    </div>
                    {/* <!-- breadcumb content --> */}
                    <div className="breadcumb-content">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <nav aria-label="breadcrumb" className="breadcumb--con text-center">
                                        <h2 className="w-text title wow fadeInUp" data-wow-delay="0.2s"
                                            >
                                            Template Preview</h2>
                                        <ol className="breadcrumb justify-content-center wow fadeInUp" data-wow-delay="0.4s"
                                            >
                                            <li className="breadcrumb-item"><a href="{{ route('index')}}">Home</a></li>
                                            <li className="breadcrumb-item"><a href="{{ route('templates')}}">Template Preview</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Template Preview</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ##### Welcome Area End ##### --> */}

                {/* <!-- ##### Blog Area Start ##### --> */}
                <section className="blog-area section-padding-100-0">
                    <div className="container">

                        <div className="row">
                            <div className="col-12 col-md-8">
                                <div>
                                    {/* <!-- Post Thumbnail --> */}
                                    <div className="blog_thumbnail">
                                        <img src="img/demos/demo-1.png" className="temp-img" alt=""/>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12 col-md-4">
                                <div className="sidebar-area">
                                    <div className="temp-summary">
                                        <p>Lorem ipsum dolor sit amet, elit, sed do eiusmod
                                            tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                                        <a className="btn dream-btn width-100" href="{{route('start')}}">Try This Template</a>
                                    </div>


                                    {/* <!-- Subsc/ribe Widget --> */}
                                    <div className="subscribe-widget mt-50">
                                        <div className="widget-title">
                                            <h5>subscribe</h5>
                                        </div>
                                        <div className="subscribe-form">
                                            <form action="#">
                                                <input type="email" name="email" id="subs_email" placeholder="Your Email"/>
                                                <button type="submit" className="btn">subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ##### Blog Area End ##### --> */}

       </>
    );
}

export default Preview;
