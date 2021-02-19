import React from 'react';
import TopBanner from '../../components/banner';
import Footer from '../../components/footer';
import NavBar from '../../components/nav';

const NotFound = () => (
    <>
        <NavBar />
        <TopBanner notFoundPage />
        <div className="container-fluid tm-mt-60">
            <div className="row mb-4">
                <h2 className="col-12 tm-text-primary text-center">Page Not Found</h2>
            </div>
        </div>
        <footer className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
            <Footer />
        </footer>
    </>
);

export default NotFound;
