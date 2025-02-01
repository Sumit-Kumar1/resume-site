export default function AboutMe() {
    return (
        <section id="about bg-white">
            <div className="container">
                <h2 className="section-title wow fadeInUp">About Me</h2>
                <div className="divider"></div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center text-md-left">
                            <img src="https://jthemes.net/themes/html/bolby/demo/images/avatar-2.svg" alt="sumit" />
                        </div>
                        <div className="divider"></div>
                    </div>

                    <div className="col-md-9 triangle-left-md triangle-top-sm">
                        <div className="rounded shadow-dark padding-30">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>I am Sumit Kumar, backend developer from Rajasthan, India. I have rich experience in backend development with golang and postgres SQL</p>
                                    <div className="mt-3">
                                        <a href="#" className="btn btn-default">Download CV</a>
                                    </div>
                                    <div className="spacer d-md-none d-lg-none h-[30px]"></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="skill-item">
                                        <div className="skill-info clearfix">
                                            <h4 className="float-left mb-3 mt-0">Development</h4>
                                            <span className="float-right">85%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar data-background" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="85" data-color="#FFD15C" >
                                            </div>
                                        </div>
                                        <div className="spacer h-[20px]"></div>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-info clearfix">
                                            <h4 className="float-left mb-3 mt-0">UI/UX design</h4>
                                            <span className="float-right">95%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar data-background" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="95" data-color="#FF4C60">
                                            </div>
                                        </div>
                                        <div className="spacer h-20px"></div>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-info clearfix">
                                            <h4 className="float-left mb-3 mt-0">Photography</h4>
                                            <span className="float-right">70%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar data-background" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70" data-color="#6C6CE5">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="spacer h-70px"></div>

                <div className="row">

                    <div className="col-md-3 col-sm-6">
                        <div className="fact-item">
                            <span className="icon icon-fire"></span>
                            <div className="details">
                                <h3 className="mb-0 mt-0 number"><em className="count">198</em></h3>
                                <p className="mb-0">Projects completed</p>
                            </div>
                        </div>
                        <div className="spacer d-md-none d-lg-none h-30px"></div>
                    </div>

                    <div className="col-md-3 col-sm-6">

                        <div className="fact-item">
                            <span className="icon icon-cup"></span>
                            <div className="details">
                                <h3 className="mb-0 mt-0 number">5670</h3>
                                <p className="mb-0">Cup of coffee</p>
                            </div>
                        </div>
                        <div className="spacer d-md-none d-lg-none h-30px"></div>
                    </div>

                    <div className="col-md-3 col-sm-6">

                        <div className="fact-item">
                            <span className="icon icon-people"></span>
                            <div className="details">
                                <h3 className="mb-0 mt-0 number">427</h3>
                                <p className="mb-0">Satisfied clients</p>
                            </div>
                        </div>
                        <div className="spacer d-md-none d-lg-none h-[30px]"></div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="fact-item">
                            <span className="icon icon-badge"></span>
                            <div className="details">
                                <h3 className="mb-0 mt-0 number">35</h3>
                                <p className="mb-0">Nominees winner</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}