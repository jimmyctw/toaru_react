import React, { useState } from 'react';
import { ServiceItems } from './ServiceItems';
import { ValueItems } from './ValueItems';

const About = () => {
    return ( 
        <section className="about">
            < ValueItems />
            < ServiceItems />

        </section> 
    );
}
export default About;