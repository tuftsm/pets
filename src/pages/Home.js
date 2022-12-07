import React from 'react';
import { Image, View } from 'react';
import ReactDOM from 'react-dom/client';
import styles from './styles.module.css';
import background from './images/bwHome.jpg'

function Home() {
    return(
        <home>
        <div class="section">  
            <div className={styles.home}>
                <img 
                    style={{width:'100%'}}
                    src={background} alt="black and white dog walker"/>
            </div>
            <div className={styles.topRight}><em>Only the Best<br/>For Your Good Boy/Girl</em></div>
        </div>
        <div className={styles.homefooter}>
            &emsp;&emsp;&emsp;Utilized with <em><a href="https://github.com/tuftsm/journal.git" target="_blank">Github classroom</a></em>&emsp;&emsp;&emsp;
            All images licensed for use with <em>Creative Commons</em> licensing. The creator of this website does not claim to own any images.
        </div>
        </home>
    );
};


export default Home;