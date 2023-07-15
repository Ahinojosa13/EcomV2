import React from 'react';
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Skele.css";

function Footer(){
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
                        Email: info@example.com
                    </p>
                </div>
                <div className="footer-socials">
                    {/* <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon /> */}
                </div>
                <p> &copy; 2023 El Tigre's Gear</p>
            </div> 
        );
}

export default Footer;