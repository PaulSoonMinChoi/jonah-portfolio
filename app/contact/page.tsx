import React from "react";
import "../../styles/contactpage.css";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="contact-main-container">
      <div className="moodboardpage-content-container">
        <div className="moodboardpage-header-container">
          {/* <span className="moodboardpage-header">JTPAMINTUAN</span> */}
          <Link className="header" href="/">
            <Image
              className="logo"
              src="/logo/logo.svg"
              alt="Ovoir logo"
              width={110}
              height={110}
            />
          </Link>
        </div>
      </div>
      <div className="contact-container">
        <span>jonah.pamintuan@gmail.com</span>
        <span>+1 714-606-0448</span>
        <span>
        instagram:{' '}
          <a style={{textDecoration: 'underline'}} href="https://www.instagram.com/jtpamintuan/?hl=en"> @jtpamintuan</a>
        </span>
      </div>

      <div className="rights-text">
        <div className="contact">
          {/* <Link href={"/contact"}>contact</Link> */}
        </div>
        <span>© JTPAMINTUAN. ALL RIGHTS RESERVERED</span>
      </div>
    </div>
  );
};

export default Contact;
