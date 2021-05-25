import React, { useState } from 'react';
import { GiClick } from "react-icons/gi";
import { VscChevronDown } from "react-icons/vsc";


export const QuestionItems = ({question, answer}) => {
    const [ showInfo, setShowInfo ] = useState(false)
    return ( 
        <article  className="questionItem">                
            <div className="questionItem_content">                    
                <span className="questionItem_qu">{question}</span>                    
                <button className="questionItem_btn" onClick={()=>setShowInfo(!showInfo)}>
                    { showInfo ?   <VscChevronDown/> : <GiClick /> }
                </button>
            </div>
            { showInfo && <p>{answer}</p> }
        </article>
    );
}