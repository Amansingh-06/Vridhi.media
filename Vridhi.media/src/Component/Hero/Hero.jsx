import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
    return (
        <div className='Heromain'>
            <div className='animatedtext'>
                {/* Motion div for animated text */}
                <motion.div
                    className='homemsg'
                    initial={{ x: '-100vw', opacity: 0 }} // Start off-screen (to the left)
                    animate={{ x: 0, opacity: 1 }} // Animate to the center of the screen
                    transition={{ type: 'spring', stiffness: 20, duration: 1 }} // Smooth spring effect
                >
                    <h1>Do What's Best For Your Brand.</h1>
                    <button className='bookmeeting'>Book a Meeting</button>
                </motion.div>
            </div>
            <div className='Home_img'>
                <img
                    src="https://static.wixstatic.com/media/913019_a8362a4c886e427ab8fc6064673d7764~mv2.jpg/v1/fill/w_1020,h_789,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_a8362a4c886e427ab8fc6064673d7764~mv2.jpg"
                    alt=""
                    className="homeimg"
                />
            </div>
        </div>
    );
}

export default Hero;
