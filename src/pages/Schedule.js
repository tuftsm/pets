import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './styles.module.css';
import pic1 from './images/beach.jpg';
import pic2 from './images/mewalking.jpg';
import pic3 from './images/fronthall.jpg';
import pic4 from './images/night.JPG';

function Schedule() {
    return(
        <home>
            <div className={styles.about}>
                <div className={styles.photoGridContainer}>
                    <div className={styles.photoGrid}>
                        <img src={pic2} alt="bike" width="400"/>
                        <br/><br/> Matthew is currently accepting requests for all pet services.
                    <div className={styles.sbio}>
                        <strong><br/>How to Schedule a Service</strong><br/><br/>
                    </div>
                        <br/><br/><br/>
                        <div className="cpContainer">Email: tuftsmatthew@gmail.com <br/><br/> Cell: 801-243-3134 <br/></div>
                        <br/><br/>Reach out with the following information: <br/><br/>
                    
                        &emsp;&emsp;&emsp;1) Name (of human) <br/><br/>&emsp;&emsp;&emsp;2) Name (of dog) <br/><br/> &emsp;&emsp;&emsp;3) Breed <br/><br/> &emsp;&emsp;&emsp;4) Temperament <br/><br/> &emsp;&emsp;&emsp;5) Preferred day/time <br/><br/> &emsp;&emsp;&emsp;6) Desired services to be performed<br/><br/><br/><br/>
                    </div>
                </div>
                <div className={styles.home}>
                    ~<br/>"Here For All Your Four-Legged Friend's Needs"<br/>~
                </div>  
                <div className={styles.footer}>
                    Utilized with <em><a href="https://github.com/tuftsm/pets.git" target="_blank">Github Repo</a></em>&emsp;&emsp;&emsp;
                    All non-Matthew images licensed for use with <em>Creative Commons</em> licensing. The creator of this website does not claim to own any non-Matthew images.<br/>
                </div>   
            </div>
        </home>
    );
};


export default Schedule;