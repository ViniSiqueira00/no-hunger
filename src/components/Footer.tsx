import React from 'react';

import facebookIcon from '../images/social-facebook.svg';
import instagramIcon from '../images/social-instagram.svg';
import linkedinIcon from '../images/social-linkedin.svg';
import behanceIcon from '../images/social-behance.svg';

function Footer() {
     return (
          <footer id="footer">
               <div className="social-media">
                    <img src={facebookIcon} alt="facebook icon"/>
                    <img src={instagramIcon} alt="instagram icon"/>
                    <img src={linkedinIcon} alt="linkedin icon"/>
                    <img src={behanceIcon} alt="behance icon"/>
               </div>
               <p className="link">terms & conditions</p>
               <p className="copyright">© COPYRIGHT nunc a odio id magna pharetra lacinia 2020</p>
          </footer>
     );
}

export default Footer;