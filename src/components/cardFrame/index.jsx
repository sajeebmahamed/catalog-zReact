import React, { Component } from 'react';

class CardFrame extends Component {
    componentDidMount() {}

    render() {
        const { info } = this.props;
        return (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src={info.img} alt="name" className="img-fluid" />
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Clocks</h2>
                        <a href="photo-detail.html">View more</a>
                    </figcaption>
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light"> {info.date} </span>
                    <span>{`${info.views} views`}</span>
                </div>
            </div>
        );
    }
}

export default CardFrame;
