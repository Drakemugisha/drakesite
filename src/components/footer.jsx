import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex justify-between text-xl p-5 bg-gray-900">
      <p>mugisha drake </p>
      <ul className="flex gap-4">
        <li>
          {" "}
          <FaGithub />{" "}
        </li>
        <li>
          {" "}
          <FaInstagram />{" "}
        </li>
        <li>
          {" "}
          <FaLinkedin />{" "}
        </li>
        <li>
          {" "}
          <FaTwitter />{" "}
        </li>
      </ul>
    </div>
  );
}

export default Footer;
