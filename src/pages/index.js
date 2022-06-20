import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import LoanRequest from "../components/loanRequest"
import RelatedLinks from "../components/relatedLinks"

const IndexPage = () => (
  <Layout>
    <div className="flex">
      <StaticImage className="flex-1" src="../images/m_con01.jpg" alt="con01" />
      <StaticImage className="flex-1" src="../images/m_con02.jpg" alt="con02" />
    </div>
    <div className="flex">
      <StaticImage className="flex-1" src="../images/m_con03.jpg" alt="con03" />
      <StaticImage className="flex-1" src="../images/m_con04.jpg" alt="con04" />
    </div>
    <div className="flex">
      <StaticImage className="flex-1" src="../images/m_con05.jpg" alt="con05" />
      <StaticImage className="flex-1" src="../images/m_con06.jpg" alt="con06" />
    </div>
    <div className="flex">
      <StaticImage className="flex-1" src="../images/m_con07.jpg" alt="con07" />
      <StaticImage className="flex-1" src="../images/m_con08.jpg" alt="con08" />
    </div>
    <div>
      <LoanRequest />
    </div>
    <div>
      <RelatedLinks />
    </div>
  </Layout>
)

export default IndexPage
