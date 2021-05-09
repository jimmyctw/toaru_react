import React from 'react';
import { valueData } from '../data'
import { FaThumbtack } from "react-icons/fa";


export const ValueItems = () => {
    return ( 
        <div className="value">
            <div className="valueImg">
                <img src={ process.env.PUBLIC_URL +  "/assets/story1.jpg" } alt="company img"/>
            </div>

            <ul className="valueContainer">
                <h1>Our Value</h1>
                { valueData.map((valueItem)=>{
                    const { id, text } = valueItem;
                    return(
                        <li key={id} className="valueItem">< FaThumbtack />{text}</li>
                    )
                })
            }
            </ul>
        </div>
    );
}
