import React from "react"
import Layout from "../components/layout"
import LoanRequest from "../components/loanRequest"

export default function Privacy() {
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
          <span>개인정보 취급방침</span>
        </div>
      </div>
      <div className="py-10  px-4 ">
        <h1 className="pb-5 font-semibold">개인정보 취급방침</h1>
        <span className="font-semibold">
          * 본 사이트는 이용하시는 모든 이용자들의 개인정보를 소중히 여깁니다.
        </span>
      </div>
      <LoanRequest />
    </Layout>
  )
}
