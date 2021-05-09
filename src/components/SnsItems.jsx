import React from 'react'
import { ImPointDown, ImYoutube, ImTwitter, ImFacebook2, ImLinkedin, ImInstagram } from "react-icons/im";



export const SnsItems = () => {
    return (
        <div className="sns">
            <span>Follow TOARU & Get Latest NEWS <ImPointDown/></span>
            <ul className="snsContainer">
                <li><a href="#"><ImYoutube /></a></li>
                <li><a href="#"><ImTwitter /></a></li>
                <li><a href="#"><ImFacebook2 /></a></li>
                <li><a href="#"><ImInstagram /></a></li>
                <li><a href="#"><ImLinkedin /></a></li>
            </ul>
        </div>
    );
}
 