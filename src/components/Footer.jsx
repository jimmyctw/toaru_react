import React from 'react';
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
    function makeUpperCase(msg){
        return msg.toUpperCase()
    }
    const copyInfo = 'all right reserved'
    return (
        <footer className="footer">
            <div className="footer_name">
                <span>トアル株式会社  </span>
                <span>TOARU CORP.</span>
                
            </div>  

            <div className="footer-info">
                <span>{makeUpperCase(copyInfo)} 2021 &nbsp;<FaRegCopyright /></span>
            </div>
        </footer>
    );
}

export default Footer;