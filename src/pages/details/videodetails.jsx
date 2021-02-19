import React, { Component } from 'react';
import video from '../../assets/video/hero.mp4';
import TopBanner from '../../components/banner';
import CardFrame from '../../components/cardFrame';
import Footer from '../../components/footer';
import NavBar from '../../components/nav';
import mainData from '../../data/mainData';

class VideoDetails extends Component {
    componentDidMount() {}

    render() {
        const data = mainData[0];
        return (
            <>
                <NavBar />
                <TopBanner />
                <div className="container-fluid tm-container-content tm-mt-60">
                    <div className="row mb-4">
                        <h2 className="col-12 tm-text-primary">Video title goes here</h2>
                    </div>
                    <div className="row tm-mb-90">
                        <div className="row tm-mb-90">
                            <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                                <video autoPlay muted loop controls id="tm-video">
                                    <source src={video} type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                                <div className="tm-bg-gray tm-video-details">
                                    <p className="mb-4">
                                        Aliquam varius posuere nunc, nec imperdiet neque condimentum
                                        at. Orci varius natoque penatibus et magnis dis parturient
                                        montes, nascetur ridiculus mus. Please support us by
                                        contributing{' '}
                                        <a
                                            href="https://paypal.me/templatemo"
                                            target="_parent"
                                            rel="sponsored"
                                        >
                                            a small donation
                                        </a>{' '}
                                        via PayPal.
                                    </p>
                                    <div className="text-center mb-5">
                                        <a href="/" className="btn btn-primary tm-btn-big">
                                            Download
                                        </a>
                                    </div>
                                    <div className="mb-4 d-flex flex-wrap">
                                        <div className="mr-4 mb-2">
                                            <span className="tm-text-gray-dark">Resolution: </span>
                                            <span className="tm-text-primary">1920x1080</span>
                                        </div>
                                        <div className="mr-4 mb-2">
                                            <span className="tm-text-gray-dark">Format: </span>
                                            <span className="tm-text-primary">MP4</span>
                                        </div>
                                        <div>
                                            <span className="tm-text-gray-dark">Duration: </span>
                                            <span className="tm-text-primary">00:00:20</span>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <h3 className="tm-text-gray-dark mb-3">License</h3>
                                        <p>
                                            Free for both personal and commercial use. No need to
                                            pay anything. No need to make any attribution.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="tm-text-gray-dark mb-3">Tags</h3>
                                        <a
                                            href="/"
                                            className="tm-text-primary mr-4 mb-2 d-inline-block"
                                        >
                                            Cloud
                                        </a>
                                        <a
                                            href="/"
                                            className="tm-text-primary mr-4 mb-2 d-inline-block"
                                        >
                                            Bluesky
                                        </a>
                                        <a
                                            href="/"
                                            className="tm-text-primary mr-4 mb-2 d-inline-block"
                                        >
                                            Nature
                                        </a>
                                        <a
                                            href="/"
                                            className="tm-text-primary mr-4 mb-2 d-inline-block"
                                        >
                                            Background
                                        </a>
                                        <a
                                            href="/"
                                            className="tm-text-primary mr-4 mb-2 d-inline-block"
                                        >
                                            Timelapse
                                        </a>
                                        <a
                                            href="/"
                                            className="tm-text-primary mr-4 mb-2 d-inline-block"
                                        >
                                            Night
                                        </a>
                                        <a
                                            href="/"
                                            className="tm-text-primary mr-4 mb-2 d-inline-block"
                                        >
                                            Real Estate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <h2 className="col-12 tm-text-primary">Related Videos</h2>
                    </div>
                    <div className="row mb-3 tm-gallery">
                        {data.map((d) => (
                            <CardFrame key={d.id} extra info={d} />
                        ))}
                    </div>
                </div>
                <footer className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
                    <Footer />
                </footer>
            </>
        );
    }
}

export default VideoDetails;
