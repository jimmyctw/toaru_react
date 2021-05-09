import React from 'react';
import { questionData } from '../data'


export const QuestionItems = () => {

    return ( 
        <section className="question">
            <h1>Question</h1>
            <div className="questionContainer">
            { questionData.map((questionItem)=>{
                const { id, question, answer } = questionItem;
                return(
                    <article key={id} className="questionItem">
                        <button>{question}</button>
                        <p>{answer}</p>
                    </article>
                )
            })

            }
            </div>
        </section>
    );
}