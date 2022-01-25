import React from "react";

const Dashboard = () => {
    return (
        <>
            <section className="blog-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="cv-prev">
                                {/* <!-- Post Thumbnail --> */}
                                <div className="blog_thumbnail">
                                    <img src="img/demos/demo-1.png" className="temp-img" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 ">
                            <div className="cv-download mt-5 my-3">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12">
                                        <p className="topnote">
                                            Fill all required fields and click create cv to download
                                            CV in both PDF and PNG formats
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-md-12 mt-s">
                                        <a href="/" className="btn btn-primary">
                                            Download as PDF
                                        </a>
                                        <a href="/" className="btn btn-soft-primary ms-2">
                                            Download as PNG
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* here to star the form */}
                            <div className="container">
                                <form method="post" action="#">
                                    <div className="mt-150">
                                        <h2>Personal Info</h2>
                                        <div className="block-container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-2 col-md-4">
                                                    <img src="img/test-img/1.jpg" className="d-block" alt="" />
                                                </div>
                                                <div className="col-lg-5 col-md-8 mt-s">
                                                    <h6 className="">Upload your picture</h6>
                                                    <p className="text-muted mb-0">
                                                        For best results, use image 300px by 300px in either
                                                        .jpg or .png
                                                    </p>
                                                </div>
                                                <div className="col-lg-5 col-md-12 mt-s">
                                                    <a href="/" className="btn btn-primary">
                                                        Upload
                                                    </a>
                                                    <a href="/" className="btn btn-soft-primary ms-2">
                                                        Remove
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="mt-30">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <label>Full Name:</label>
                                                        <input
                                                            type="text"
                                                            name="full-name"
                                                            className="form-control"
                                                            placeholder="enter your name"
                                                        />
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <label>Jop Title:</label>
                                                        <input
                                                            type="text"
                                                            name="jop-title"
                                                            className="form-control"
                                                            placeholder="Ex: Web Developer"
                                                        />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label>Your Address:</label>
                                                        <input
                                                            type="text"
                                                            name="address"
                                                            className="form-control"
                                                            placeholder="enter your address"
                                                        />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label>Your Email:</label>
                                                        <input
                                                            type="text"
                                                            name="email"
                                                            className="form-control"
                                                            placeholder="enter your name"
                                                        />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <label>Website Link:</label>
                                                        <input
                                                            type="text"
                                                            name="web-link"
                                                            className="form-control"
                                                            placeholder="enter your website link"
                                                        />
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <label>Phone No:</label>
                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            className="form-control"
                                                            placeholder="Ex: Web Developer"
                                                        />
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <label>Your Bio Here</label>
                                                        <textarea
                                                            name="comments"
                                                            id="comments"
                                                            rows="4"
                                                            className="form-control"
                                                            placeholder="About Me :"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group add-edu">
                                        <h2>Add Educations</h2>
                                        <div className="all-edus">
                                            <div className="new-edu">
                                                <label>Field of study:</label>
                                                <input
                                                    type="text"
                                                    name="edu[]"
                                                    className="form-control"
                                                    placeholder="Ex: Computer Science"
                                                />
                                                <label>Degree:</label>
                                                <input
                                                    type="text"
                                                    name="edu[]"
                                                    className="form-control"
                                                    placeholder="Ex: Bachelor's"
                                                />
                                                <label>School:</label>
                                                <input
                                                    type="text"
                                                    name="edu[]"
                                                    className="form-control"
                                                    placeholder="Ex: al-albayt university"
                                                />
                                                <div className="form-row">
                                                    <div className="col">
                                                        <label>From year:</label>
                                                        <input
                                                            type="month"
                                                            name="edu[]"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="col">
                                                        <label>To year (optional=present):</label>
                                                        <input
                                                            type="month"
                                                            name="edu[]"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="add-blk btn btn-info" id="add-edu">
                                            <i className="fa fa-plus"></i>
                                            <span>Add another education</span>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="form-group add-exp mt-s">
                                        <h2>Add Experiences</h2>
                                        <div className="all-exps">
                                            <div className="new-exp">
                                                <label>Title:</label>
                                                <input
                                                    type="text"
                                                    name="exp[]"
                                                    className="form-control"
                                                    placeholder="Ex: Web Developer"
                                                />
                                                <label>Company:</label>
                                                <input
                                                    type="text"
                                                    name="exp[]"
                                                    className="form-control"
                                                    placeholder="Ex: ProgressSoft"
                                                />
                                                <div className="form-row">
                                                    <div className="col">
                                                        <label>From year:</label>
                                                        <input
                                                            type="month"
                                                            name="exp[]"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                    <div className="col">
                                                        <label>To year (optional=present):</label>
                                                        <input
                                                            type="month"
                                                            name="exp[]"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <label>Description (optional):</label>
                                                <textarea name="exp[]" className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="add-blk btn btn-info" id="add-exp">
                                            <i className="fa fa-plus"></i>
                                            <span>Add another experience</span>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="form-group add-skill mt-s">
                                        <h2>Add Skills</h2>
                                        <div className="block-container">
                                            <div className="all-skills">
                                                <div className="new-skills">
                                                    <label>Skill</label>
                                                    <input
                                                        type="text"
                                                        name="skills[]"
                                                        className="form-control"
                                                    />
                                                    <label>Proficiency</label>
                                                    <input
                                                        type="text"
                                                        name="skills[]"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>

                                            <div className="add-blk add-skills btn btn-info mt-50">
                                                <i className="fa fa-plus"></i>
                                                <span>Add another Skill</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>

                                    <div className="form-group add-social mt-s">
                                        <h2>Add social Links</h2>
                                        <div className="block-container">
                                            <div className="all-socials">
                                                <div className="new-skills">
                                                    <label>Social Name</label>
                                                    <input
                                                        type="text"
                                                        name="socials[]"
                                                        className="form-control"
                                                    />
                                                    <label>Social Link</label>
                                                    <input
                                                        type="text"
                                                        name="socials[]"
                                                        className="form-control"
                                                    />
                                                    <label>Social icon image (16px*16px)</label>
                                                    <input
                                                        type="file"
                                                        name="socials[]"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>

                                            <div className="add-blk add-socials btn btn-info mt-50">
                                                <i className="fa fa-plus"></i>
                                                <span>Add another social</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="clearfix"></div>

                                    <div className="form-group add-social mt-s">
                                        <h2>Add Hoppies</h2>
                                        <div className="block-container">
                                            <div className="all-hoppies">
                                                <div className="new-skills">
                                                    <label>Hoppy icon image (32px*32px)</label>
                                                    <input
                                                        type="file"
                                                        name="hoppies[]"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>

                                            <div className="add-blk add-hoppies btn btn-info mt-50">
                                                <i className="fa fa-plus"></i>
                                                <span>Add another Hoppy</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-100" />
                                    <input
                                        type="submit"
                                        name="submit"
                                        value="Create Resume"
                                        className="btn-sub"
                                    />
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
