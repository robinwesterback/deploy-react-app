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
                <a 
                  href="https://www.linkedin.com/company/megapixel-group-ab/" 
                  className="linkedin-blue"
                  target="_blank">
                  <FontAwesomeIcon icon={faLinkedin } />
                </a>

                <a 
                  href="https://www.facebook.com/megapixelgroup"
                  className="facebook-blue"
                  target="_blank">
                  <FontAwesomeIcon icon={faFacebookSquare } />
                </a>

                <a 
                  href="https://www.youtube.com/channel/UCfy9Kk5xGDswA-lprRQLsNA"
                  className="youtube-red"
                  target="_blank">
                  <FontAwesomeIcon icon={faYoutubeSquare } />
                </a>

                <a 
                  href="https://vimeo.com/megapixel"
                  className="vimeo-blue"
                  target="_blank">
                  <FontAwesomeIcon icon={faVimeoSquare } />
                </a>
                
                <a 
                  href="https://www.instagram.com/megapixelgroup/"
                  className="instagram-blue"
                  target="_blank">
                  <FontAwesomeIcon icon={faInstagramSquare } />
                </a>
            </nav>
        </footer>
    );
}

