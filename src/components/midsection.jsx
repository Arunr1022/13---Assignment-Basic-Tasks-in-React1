import BGimage from '../images/Mainpageimages/wp10839428-ghost-of-tsushima-desktop-wallpapers.jpg';
import SpiderMan from '../images/Mainpageimages/wp8303664-spider-man-portrait-wallpapers.jpg';
import RedDeadRedem from '../images/Mainpageimages/wp3363181-red-dead-redemption-hd-wallpapers.jpg';
import DaysGone from '../images/Mainpageimages/wp2392872-days-gone-wallpapers.jpg';

function midsection() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={BGimage} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={SpiderMan} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={RedDeadRedem} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={DaysGone} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default midsection