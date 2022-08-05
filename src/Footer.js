import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footnote pt-3">
        <a
          href="https://github.com/Joellez/my-weather-app"
          id="github-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          Open-source code{" "}
        </a>
        by{" "}
        <a
          href="https://www.linkedin.com/in/joellezane/"
          id="linkedin-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          Joelle Zane
        </a>
      </div>
    </div>
  );
}
