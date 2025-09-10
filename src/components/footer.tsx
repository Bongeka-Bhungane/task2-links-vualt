import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
   return (
     <div className="footer">
       <div className="footer-icons">
         <FaFacebook />
         <FaTwitter />
         <FaInstagram />
       </div>
       <p className="footer-text">@copy right 2025</p>
       <p className="footer-text">Bongeka Bhungane</p>
     </div>
   );
}
