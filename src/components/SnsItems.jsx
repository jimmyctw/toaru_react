import React from 'react'
import { ImPointDown, ImYoutube, ImTwitter, ImFacebook2, ImLinkedin, ImInstagram } from "react-icons/im";



export const SnsItems = () => {
    return (
        <div className="sns">
            <span>Follow TOARU & Get Latest NEWS <ImPointDown/></span>
            <ul className="snsContainer">
                <li><a target="_blank" href="https://www.youtube.com/"><ImYoutube /></a></li>
                <li><a target="_blank" href="https://twitter.com/home"><ImTwitter /></a></li>
                <li><a target="_blank" href="https://www.facebook.com/"><ImFacebook2 /></a></li>
                <li><a target="_blank" href="https://www.instagram.com/"><ImInstagram /></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/"><ImLinkedin /></a></li>
            </ul>
        </div>
    );
}
 