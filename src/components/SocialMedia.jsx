/* eslint-disable */
import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub,faLinkedin } from "@fortawesome/free-brands-svg-icons"

const SocialMedia = () => {
  return (<div className="app__social">
    <div >
    <a href="https://github.com/i-am-anagha-dhumkekar"><FontAwesomeIcon icon={faGithub} /></a>
    </div>
    <div>
    <a href="https://www.linkedin.com/in/anagha-dhumkekar-72087a211/"><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
    <div>
    <a href=""><BsInstagram /></a>
    </div>
  </div>);
}

export default SocialMedia;
