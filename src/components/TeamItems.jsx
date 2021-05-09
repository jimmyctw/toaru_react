import React from 'react';
import { teamData } from '../data'


const TeamItems = () => {

    return ( 
        <div className="team">
            <h1>Team</h1>
            <div className="teamContainer">
                

            { teamData.map((teamItem)=>{
                const { id, name, title } = teamItem;
                return(
                    <article key={id} className="teamItem">
                        <div className="teamImgBox">
                            <img src={ process.env.PUBLIC_URL +  `/assets/team/team${id}.png` }  alt={title} loading="lazy"/>
                        </div>
                        <div className="teamTextBox">
                            <h2>{name.toUpperCase()}</h2>
                            <span>{title}</span>
                            <span>{(name.toLowerCase()).split(' ').join('')}@toaru.com</span>
                        </div>
                    </article>
                )
            })

            }
            </div>
        </div>
    );
}
export default TeamItems;