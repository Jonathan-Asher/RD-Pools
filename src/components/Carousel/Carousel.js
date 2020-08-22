import React from 'react';

function Carousel() {
  return <div id="carouselExampleIndicators" className="rtl carousel slide" data-ride="carousel">
    <ol className="rtl carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="rtl active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="rtl carousel-inner">
      <div className="rtl carousel-item active">
        <img src="photos/2.jpg" className="rtl d-block w-100" alt="..." />
      </div>
      <div className="rtl carousel-item">
        <img src="photos/3.jpg" className="rtl d-block w-100" alt="..." />
      </div>
      <div className="rtl carousel-item">
        <img src="photos/4.jpg" className="rtl d-block w-100" alt="..." />
      </div>
    </div>
    <a className="rtl carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="rtl carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="rtl sr-only">Previous</span>
    </a>
    <a className="rtl carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="rtl carousel-control-next-icon" aria-hidden="true"></span>
      <span className="rtl sr-only">Next</span>
    </a>
  </div>;
}

export default Carousel;