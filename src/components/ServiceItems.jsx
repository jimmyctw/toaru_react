import React from 'react';
import { serviceData } from '../data'

export const ServiceItems = () => {
    return ( 
        <section className="service">
            <h1>Service</h1> 
            <div className="serviceContainer">
            { serviceData.map((serviceItem)=>{
                const { id, category, detail } = serviceItem;
                return(
                    <article key={id} className="serviceItem">
                        <div className="serviceTextBox">
                            <h2>{category}</h2>
                            <span>{detail}</span>
                        </div>
                        <div className="serviceImgBox">
                            <img src={ process.env.PUBLIC_URL +  `/assets/service/service${id}.png` } alt={category}/>
                        </div>

                    </article>
                )
            })}
            </div>
        </section>
    );
}