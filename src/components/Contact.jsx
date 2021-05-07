import React from 'react'

const Contact = () => {
    const companyInfo = '〒606-8393 Kyoto, Sakyo Ward, Higashitakeyacho, 50'

    return ( 
        <section>
            <h1>Contact</h1>
            <div>
                <h2>よくある質問</h2>
            </div>
            <form>
                <label for="fname">NAME</label>
                <input type="text" id="fname" name="firstname" placeholder="お名前は..."　/>
                <label for="fmail">E-mail</label>
                <input type="mail" id="fmail" name="email" placeholder="メール入力してください" />
                <label for="fmobile">Phone Number</label>
                <input type="text" id="fmobile" name="mobile" placeholder="携帯番号入力してください" />        
                <label for="fmessage">Message</label>
                <textarea type="text" id="fmessage" name="message" placeholder="あのね...." />
                <input id="submitBtn" type="button" value="Confirm" />
            </form>
            <div>
                <h2>会社</h2>

                <strong><a href="https://goo.gl/maps/N1hncwgvdcSZM7tp9">{(companyInfo)}</a></strong>
                <p>最寄り駅：京阪電鉄神宮丸太町駅（丸太町通りを東に徒歩5分）<br />
                    最寄りバス停：熊野神社前（丸太町通りを西に徒歩2分）</p>

            </div>
        </section> 
    );
}
export default Contact;