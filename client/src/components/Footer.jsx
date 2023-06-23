import React from "react"
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../style/Footer.css"

const footer = () => {
    return (
        <>
       
        <div className="footer">

            <div className="socialMedia">
                <a target="_blank" href="http://instagram.com/roy.gebrayel">
                    <InstagramIcon/>
                    </a>
                <TwitterIcon/>
                <GitHubIcon/>
                <LinkedInIcon></LinkedInIcon>
            </div>
            <p> &copy; 2023 roygebrayel.com</p>
        </div>
        
        
         </>
    )

}
export default footer