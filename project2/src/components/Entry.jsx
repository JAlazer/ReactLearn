import LocationImage from "../assets/Mt-Fuji.png"
import Marker from "../assets/marker.png"

import "../journal-style.css"

export default function Entry() {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img src={LocationImage} className="main-image" />
            </div>

            <div className="location">
                <img src={Marker} alt="Location Marker"/>

                <span>JAPAN</span>

                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606583,138.7067637,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                   target="_blank">
                    View on Google Maps
                </a>

                <h2 className="location-title">Mount Fuji</h2>

                <p className="entry-dates">
                    <strong>12 Jan, 2023 - 24 Jan, 2023</strong>
                </p>

                <p className="entry-description">
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
                    Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </article>
    )
}