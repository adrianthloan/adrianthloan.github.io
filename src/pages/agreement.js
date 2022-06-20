import React from "react"
import Layout from "../components/layout"
import LoanRequest from "../components/loanRequest"

export default function Agreement() {
  return (
    <Layout>
      <div className="flex py-6 px-4 text-sm border-b-[1px] border-gray-300 w-full">
        <svg className="w-5 fill-gray-700 mr-3" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
          />
        </svg>

        <div>
          <span>홈</span>
          {">"}
          <span>정보</span>
          {">"}
          <span>책임한계와법적고지</span>
        </div>
      </div>
      <div className="py-10  px-4 ">
        <h1 className="pb-5 font-semibold">책임한계와법적고지</h1>
        <span className="font-semibold">
          * 본 사이트는 이용과 관련하여 필요사항을 규정합니다.
        </span>
      </div>
      <LoanRequest />
    </Layout>
  )
}
