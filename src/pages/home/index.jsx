import React from 'react';
// import img03 from '../../assets/img/img-03.jpg';
import TopBanner from '../../components/banner';
import CardFrame from '../../components/cardFrame';
import Footer from '../../components/footer';
import NavBar from '../../components/nav';
import BottomPagination from '../../components/pagination/BottomPagination';
import TopPagination from '../../components/pagination/TopPagination';
import mainData from '../../data/mainData';
// import people1 from '../../assets/img/people-1.jpg';
// import people2 from '../../assets/img/people-2.jpg';
// import people3 from '../../assets/img/people-3.jpg';
// import people4 from '../../assets/img/people-4.jpg';
// import selectArrow from '../../assets/img/select-arrow.png';
// import video from '../../assets/video/hero.mp4'

function HomePage() {
    const data = mainData[0];
    return (
        <div>
            {/* nav bar */}
            <NavBar />
            {/* Top Banner */}
            <TopBanner />
            <div className="container-fluid tm-container-content tm-mt-60">
                {/* top pagination */}
                <TopPagination text="Latest Photos" />
                <div className="row tm-mb-90 tm-gallery">
                    {data.map((d) => (
                        <CardFrame key={d.img} info={d} />
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
        </div>
    );
}

export default HomePage;
