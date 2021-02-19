import React from 'react';

const TopBanner = ({ notFoundPage }) => (
    <div
        className="tm-hero d-flex justify-content-center align-items-center"
        data-parallax="scroll"
        style={{ background: '#3C4764' }}
    >
        {notFoundPage ? (
            ''
        ) : (
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
        )}
    </div>
);

export default TopBanner;
