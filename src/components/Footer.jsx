import React from 'react';
import { SnsItems } from './SnsItems'
import { FaRegCopyright } from "react-icons/fa";
import { GiClick } from "react-icons/gi";


const Footer = () => {
    function makeUpperCase(msg){
        return msg.toUpperCase()
    }
    const copyInfo = 'all right reserved'
    const companyInfo = '〒606-8393 Kyoto, Sakyo Ward, Higashitakeyacho, 50'

    return (
        <footer className="footer">
            
            <div className="footer_company">
                <SnsItems />
                <div className="footer_company_info">
                    <span> トアル株式会社 TOARU Inc.  <img src={ process.env.PUBLIC_URL + '/assets/logo.png' } /></span>
                    <address>
                        <strong><a href="https://goo.gl/maps/N1hncwgvdcSZM7tp9">{(companyInfo)}<GiClick/></a></strong>
                        {/* <p>最寄り駅：京阪電鉄神宮丸太町駅（丸太町通りを東に徒歩5分）<br />
                        最寄りバス停：熊野神社前（丸太町通りを西に徒歩2分）</p> */}
                    </address>
                </div>


            </div>  
            <div className="footer_copyright">
                <span>{makeUpperCase(copyInfo)} 2021 &nbsp;<FaRegCopyright /></span>
            </div>
                <span>This website is powered by React</span>
        </footer>
    );
}

export default Footer;