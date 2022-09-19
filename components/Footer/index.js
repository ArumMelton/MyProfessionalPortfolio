import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import ContactForm from "../ContactMe/index";



const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <ContactForm></ContactForm>
            <a href="https://github.com/ArumMelton/melts-portfolio/raw/main/assets/Resume1.pdf" download="Melt Resume" target='_blank'>
<button type="button" class="btn btn-success btn-lg btn-block">Download Resume</button>
</a>
            
            <div className="mt-10">
              <Socials />
             
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Developed by{" Arum Melton"}
       
      </h1>
    </>
  );
};

export default Footer;
