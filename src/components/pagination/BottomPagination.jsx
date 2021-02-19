import React, { Component } from 'react';

class BottomPagination extends Component {
    componentDidMount() {}

    render() {
        return (
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
        );
    }
}

export default BottomPagination;
