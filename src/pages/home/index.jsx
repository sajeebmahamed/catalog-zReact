import React from 'react';
import hero from '../../assets/img/hero.jpg';
// import img01big from '../../assets/img/img-01-big.jpg';
import img01 from '../../assets/img/img-01.jpg';
import img02 from '../../assets/img/img-02.jpg';
// import img03 from '../../assets/img/img-03.jpg';
import img04 from '../../assets/img/img-04.jpg';
import img05 from '../../assets/img/img-05.jpg';
// import img06 from '../../assets/img/img-06.jpg';
import img07 from '../../assets/img/img-07.jpg';
import img08 from '../../assets/img/img-08.jpg';
import img09 from '../../assets/img/img-09.jpg';
import img10 from '../../assets/img/img-10.jpg';
import img11 from '../../assets/img/img-11.jpg';
import img12 from '../../assets/img/img-12.jpg';
import img13 from '../../assets/img/img-13.jpg';
import img14 from '../../assets/img/img-14.jpg';
import img15 from '../../assets/img/img-15.jpg';
import img16 from '../../assets/img/img-16.jpg';
// import people1 from '../../assets/img/people-1.jpg';
// import people2 from '../../assets/img/people-2.jpg';
// import people3 from '../../assets/img/people-3.jpg';
// import people4 from '../../assets/img/people-4.jpg';
// import selectArrow from '../../assets/img/select-arrow.png';
// import video from '../../assets/video/hero.mp4'

const HomePage = () => (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href>
                    <i className="fas fa-film mr-2" />
                    Catalog-Z
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link nav-link-1 active"
                                aria-current="page"
                                href="index.html"
                            >
                                Photos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-2" href="videos.html">
                                Videos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-3" href="about.html">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-4" href="contact.html">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div
            className="tm-hero d-flex justify-content-center align-items-center"
            data-parallax="scroll"
            data-image-src={hero}
            style={{ background: '#3C4764' }}
        >
            <form className="d-flex tm-search-form">
                <input
                    className="form-control tm-search-input"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className="btn btn-outline-success tm-search-btn" type="submit">
                    <i className="fas fa-search" />
                </button>
            </form>
        </div>

        <div className="container-fluid tm-container-content tm-mt-60">
            <div className="row mb-4">
                <h2 className="col-6 tm-text-primary">Latest Photos</h2>
                <div className="col-6 d-flex justify-content-end align-items-center">
                    <form action="" className="tm-text-primary">
                        Page{' '}
                        <input
                            type="text"
                            value="1"
                            size="1"
                            className="tm-input-paging tm-text-primary"
                        />{' '}
                        of 200
                    </form>
                </div>
            </div>
            <div className="row tm-mb-90 tm-gallery">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img04} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Clocks</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">18 Oct 2020</span>
                        <span>9,906 views</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img01} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Plants</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">14 Oct 2020</span>
                        <span>16,100 views</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img05} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Morning</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">12 Oct 2020</span>
                        <span>12,460 views</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img07} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Pinky</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">10 Oct 2020</span>
                        <span>11,402 views</span>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img01} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Hangers</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">24 Sep 2020</span>
                        <span>16,008 views</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img02} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Perfumes</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">20 Sep 2020</span>
                        <span>12,860 views</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img07} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Bus</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">16 Sep 2020</span>
                        <span>10,900 views</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img08} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>New York</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">12 Sep 2020</span>
                        <span>11,300 views</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img09} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Abstract</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">10 Sep 2020</span>
                        <span>42,700 views</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img10} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Flowers</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">8 Sep 2020</span>
                        <span>11,402 views</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img11} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Rosy</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">4 Sep 2020</span>
                        <span>32,906 views</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img12} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Rocki</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">28 Aug 2020</span>
                        <span>50,700 views</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img13} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Purple</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">22 Aug 2020</span>
                        <span>107,510 views</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img14} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Sea</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">14 Aug 2020</span>
                        <span>118,006 views</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img15} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Turtle</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">9 Aug 2020</span>
                        <span>121,300 views</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                    <figure className="effect-ming tm-video-item">
                        <img src={img16} alt="name" className="img-fluid" />
                        <figcaption className="d-flex align-items-center justify-content-center">
                            <h2>Peace</h2>
                            <a href="photo-detail.html">View more</a>
                        </figcaption>
                    </figure>
                    <div className="d-flex justify-content-between tm-text-gray">
                        <span className="tm-text-gray-light">3 Aug 2020</span>
                        <span>21,204 views</span>
                    </div>
                </div>
            </div>
            <div className="row tm-mb-90">
                <div className="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                    <a href="/" className="btn btn-primary tm-btn-prev mb-2 disabled">
                        Previous
                    </a>
                    <div className="tm-paging d-flex">
                        <a href="/" className="active tm-paging-link">
                            1
                        </a>
                        <a href="/" className="tm-paging-link">
                            2
                        </a>
                        <a href="/" className="tm-paging-link">
                            3
                        </a>
                        <a href="/" className="tm-paging-link">
                            4
                        </a>
                    </div>
                    <a href="/" className="btn btn-primary tm-btn-next">
                        Next Page
                    </a>
                </div>
            </div>
        </div>

        <footer className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
            <div className="container-fluid tm-container-small">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12 px-5 mb-5">
                        <h3 className="tm-text-primary mb-4 tm-footer-title">About Catalog-Z</h3>
                        <p>
                            Catalog-Z is free{' '}
                            <a rel="sponsored" href="https://v5.getbootstrap.com/">
                                Bootstrap 5
                            </a>{' '}
                            Alpha 2 HTML Template for video and photo websites. You can freely use
                            this TemplateMo layout for a front-end integration with any kind of CMS
                            website.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                        <h3 className="tm-text-primary mb-4 tm-footer-title">Our Links</h3>
                        <ul className="tm-footer-links pl-0">
                            <li>
                                <a href>Advertise</a>
                            </li>
                            <li>
                                <a href>Support</a>
                            </li>
                            <li>
                                <a href>Our Company</a>
                            </li>
                            <li>
                                <a href>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                        <ul className="tm-social-links d-flex justify-content-end pl-0 mb-5">
                            <li className="mb-2">
                                <a href="https://facebook.com">
                                    <i className="fab fa-facebook" />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://twitter.com">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://instagram.com">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="https://pinterest.com">
                                    <i className="fab fa-pinterest" />
                                </a>
                            </li>
                        </ul>
                        <a href="/" className="tm-text-gray text-right d-block mb-2">
                            Terms of Use
                        </a>
                        <a href="/" className="tm-text-gray text-right d-block">
                            Privacy Policy
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-7 col-12 px-5 mb-3">
                        Copyright 2020 Catalog-Z Company. All rights reserved.
                    </div>
                    <div className="col-lg-4 col-md-5 col-12 px-5 text-right">
                        Designed by{' '}
                        <a
                            href="https://templatemo.com"
                            className="tm-text-gray"
                            rel="sponsored"
                            target="_parent"
                        >
                            TemplateMo
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
);

export default HomePage;
