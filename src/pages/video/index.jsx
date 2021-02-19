import React from 'react';
import video from '../../assets/video/hero.mp4';
import CardFrame from '../../components/cardFrame';
import Footer from '../../components/footer';
import NavBar from '../../components/nav';
import BottomPagination from '../../components/pagination/BottomPagination';
import TopPagination from '../../components/pagination/TopPagination';
import mainData from '../../data/mainData';

function VideoPage() {
    const data = mainData[0];
    return (
        <>
            <NavBar />
            <div
                className="tm-hero d-flex justify-content-center align-items-center"
                id="tm-video-container"
            >
                <video autoPlay muted loop id="tm-video">
                    <source src={video} type="video/mp4" />
                </video>
                <i id="tm-video-control-button" className="fas fa-pause" />
                <form className="d-flex position-absolute tm-search-form">
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
                {/* top pagination */}
                <TopPagination text="Latest Videos" />
                <div className="row tm-mb-90 tm-gallery">
                    {data.map((d) => (
                        <CardFrame info={d} />
                    ))}
                </div>
                <div className="row tm-mb-90">
                    {/* bottom pagination  */}
                    <BottomPagination />
                </div>
            </div>

            <footer className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
                <Footer />
            </footer>
        </>
    );
}

export default VideoPage;
