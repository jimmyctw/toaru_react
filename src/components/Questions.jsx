import React, { useState } from 'react';
import { QuestionItems } from './QuestionItems';
import { questionData } from '../data'

export const Questions = ({}) => {
    const [ questionsContent, setQuestionsContent ] = useState(questionData)
    return ( 
        <section className="question">
            <h1>Question</h1>
            <div className="questionContainer">
                { questionsContent.map((questionsContentItem)=> {
                    return <QuestionItems key={questionsContentItem.id} {...questionsContentItem} />
                }) }
                
            </div>
        </section>
    );
}