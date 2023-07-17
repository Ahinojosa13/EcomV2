import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../styles/Footer.css';

class Footer extends React.Component{
    render(){
    return (
        <div className="footer">
                <div className="footer-left">
                    <h3>About Us</h3>
                    <p>El Tigre is an online store that sells a wide range of health and fitness-related products. They offer everything you need to start your journey to a healthier lifestyle, including gym equipment, workout clothes, and supplements. Overall, El Tigre is a great resource for anyone looking to start or continue their fitness journey.</p>
                </div>
                <div className="footer-right">                   
                    <h3>Contact Us</h3>
                    <p>
                        704 Queen City<br/>
                        Charlotte, NC USA 28213<br/>
                        Phone: 980-704-3333<br/>
                        Email: info@example.com<br/>
                        &copy; 2023 El Tigre's Gear
                    </p>
                </div>
                <div className="footer-socials">
                    <SocialIcon network="twitter" bgColor="#ff5a01" url='https://twitter.com'/>
                    <SocialIcon network="instagram" bgColor="#ff5a01" url='https://instagram.com'/>
                    <SocialIcon network="facebook" bgColor="#ff5a01" url='https://facebook.com'/>
                </div>
            </div> 
        );
    }
}


export default Footer;