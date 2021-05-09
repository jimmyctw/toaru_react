import React from 'react';

export const Form = () => {
    return (  
        <form className="form">
            <h1>Contact</h1>
            <label for="fname">NAME</label>
            <input type="text" id="fname" name="firstname" placeholder="お名前は..."　/>
            <label for="fmail">E-mail</label>
            <input type="mail" id="fmail" name="email" placeholder="メール入力してください" />
            <label for="fmobile">Phone Number</label>
            <input type="text" id="fmobile" name="mobile" placeholder="携帯番号入力してください" />        
            <label for="fmessage">Message</label>
            <textarea type="text" id="fmessage" name="message" placeholder="あのね...." maxlength="350"/>
            <input id="submitBtn" type="button" value="Confirm" />
        </form> 
    );
}
