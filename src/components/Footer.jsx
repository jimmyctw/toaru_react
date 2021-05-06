import React from 'react';


const Footer = () => {
    function makeUpperCase(msg){
        return msg.toUpperCase()
    }
    const footerInfo = 'all right reserved'
    return (
        <footer className="footer">
            <div className="footer_name">
                <span>トアル株式会社</span>
                <span>TOARU CORP</span>
                
            </div>  

            <div className="footer-info">
                <span>{makeUpperCase(footerInfo)}</span>
            </div>
        </footer>
    );
}

export default Footer;