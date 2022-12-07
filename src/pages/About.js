import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './styles.module.css';
import pic1 from './images/beach.jpg';
import pic2 from './images/mewalking.jpg';
import pic3 from './images/fronthall.jpg';
import pic4 from './images/night.JPG';

function About() {
    return(
        <home>
            <div className={styles.about}>
                <div className={styles.photoGridContainer}>
                    <div className={styles.photoGrid}>
                        <img src={pic1} alt="bike" width="400"/>
                    <div className={styles.bio}>
                        <strong><br/>About Matthew</strong>
                    </div>
                        <br/>Matthew's Pet Services is the direct product of one man's love of dogs. <br/><br/> Since he was a young child, Matthew Tufts has always had a special love for dogs. Unfortunately, as a child Matthew never had the opportunity to take care of a dog of his own. Instead, he found ways to interact with dogs through friends, neighbors, and extended family. <br/><br/>  
                        <img src={pic3} alt="bike" width="400"/>
                        <br/> His life changed one day when his family welcomed a baby maltipoo into their home and into their hearts. <br/><br/>Upon learning what it takes to raise a dog, Matthew developed a sympathy for fellow dog owners. What has he done about it? That's where Matthew's Pet Services comes into the picture.<br/><br/>   
                        <img src={pic4} alt="bike" width="400"/>
                        <br/>Each week, Matthew sets aside time to help out fellow dog owners. Whether this means taking them on walks, playing in the backyard, or simply watching over the pooch--Matthew loves it all. <br/><br/> All services offered are done free of charge. Log in to view fellow dog owner's experiences with Matthew's Pet Services, get in contact with Matthew to set up a service, or leave a review of your own. <br/><br/>
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


export default About;