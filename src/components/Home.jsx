import React from 'react'

const Home = () => {
    return ( 
        <section className="home">
            <video muted loop autoPlay className="home_video" >
                <source src={ process.env.PUBLIC_URL + '/assets/homeVideo.mp4' }  type="video/mp4"/>
                Your browser does not support the video tag.
            </video>


        </section> 
    );
}
export default Home;