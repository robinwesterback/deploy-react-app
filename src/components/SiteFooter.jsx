import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faYoutubeSquare, faLinkedin, faVimeoSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

export default function SiteFooter() {

    return (
        <footer>
            <div>
                <h3>Megapixel Group
               <br></br>
                ROI Calculator</h3>
            </div>

            <div className="background-black">
                <h4>Stockholm, Sweden</h4>
                <h4>+46 8 189 880</h4>
                <br></br>
                <h4>Marbella, Spain</h4>
                <h4>info@megapixelab.se</h4>
            </div>

            <div>
                <h6>
                    Did you know that Megapixel is offering marketing services?
              <br></br>
                    <a href="https://www.megapixelab.se/" target="_blank">https://www.megapixelab.se/</a>
                </h6>
            </div>
            <nav>
                <FontAwesomeIcon icon={faLinkedin } />
                <FontAwesomeIcon icon={faFacebookSquare } />
                <FontAwesomeIcon icon={faYoutubeSquare } />
                <FontAwesomeIcon icon={faVimeoSquare } />
                <FontAwesomeIcon icon={faInstagramSquare } />
            </nav>
        </footer>
    );
}

