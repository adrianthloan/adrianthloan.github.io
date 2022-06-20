import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function RelatedLinks() {
  return (
    <div className="w-full flex flex-col  divide-y">
      <div className="flex divide-x">
        <Link to={`/`} href="#" className="w-1/3">
          <StaticImage src="../images/s_logo01.jpg" alt="logo01" />
        </Link>
        <a
          href="https://www.gov.kr/portal/main"
          target="_blank"
          rel="noreferrer"
          className="w-1/3"
        >
          <StaticImage src="../images/s_logo02.jpg" alt="logo02" />
        </a>
        <a
          href="https://www.nhis.or.kr/nhis/index.do"
          target="_blank"
          rel="noreferrer"
          className="w-1/3"
        >
          <StaticImage src="../images/s_logo03.jpg" alt="logo03" />
        </a>
      </div>
      <div className="flex divide-x">
        <a
          href="https://www.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index.xml"
          target="_blank"
          rel="noreferrer"
          className="w-1/3"
        >
          <StaticImage src="../images/s_logo04.jpg" alt="logo04" />
        </a>
        <a
          href="http://www.clfa.or.kr/"
          target="_blank"
          rel="noreferrer"
          className="w-1/3"
        >
          <StaticImage src="../images/s_logo05.jpg" alt="logo05" />
        </a>
        <a
          href="http://www.clfa.or.kr/page/popup_fcsc.asp"
          target="_blank"
          rel="noreferrer"
          className="w-1/3"
        >
          <StaticImage src="../images/s_logo06.jpg" alt="logo06" />
        </a>
      </div>
    </div>
  )
}
