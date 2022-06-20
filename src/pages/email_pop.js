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
          <span>이메일무단수집거부</span>
        </div>
      </div>
      <div className="py-10  px-4 ">
        <h1 className="pb-5 font-semibold">이메일무단수집거부</h1>
        <h3 className="font-semibold pb-7 pt-4">제1조</h3>
        <span className="text-sm">
          제1조 본 약관은 티에이치대부중개(이하 "회사"라 함)가 대출
          고객(이하"고객"이라 함)에게 제공하는 휴대폰 알림서비스(이하 "SMS"라
          함)에 관한 내용을 명확하게 정함을 목적으로 합니다.
        </span>
        <h3 className="font-semibold pb-7 pt-4">제2조</h3>
        <span className="text-sm">
          ① "고객"이 본 약관을 승인함과 동시에 "회사"는 대출조건, 이자 또는
          원금의 납부일시, 방법 등 대출과 관련된 일체의 정보를 "고객"이 기재한
          휴대폰번호에 "SMS"를 보낼 수 있습니다.
        </span>
        <br />
        <span className="text-sm">
          ② "고객"은 전항의 휴대폰번호가 변경될 경우 즉시 "회사"에 통지하여야
          하며, 이를 게을리 하여 발생한 문제에 대한 일체의 책임은 "고객"에게
          있습니다.
        </span>
        <br />
        <span className="text-sm">
          ③"고객"은 회사가 발송한 "SMS"의 내용이 타인에게 유출되지 않도록 하여야
          하며, 이를 소홀히 함으로 인한 일체의 책임은 "고객"에게 있습니다.
        </span>
        <br />
        <span className="text-sm">
          ④"고객"은 "SMS"의 일환으로 발송되는 "회사"의 설문조사, 이벤트,
          상품설명 및 기타 광고관련 정보 등을 수령하는 것에 동의합니다.
        </span>
        <h3 className="font-semibold pb-7 pt-4">제3조</h3>
        <span className="text-sm">
          ①본 약관은 "고객"이 승인함과 동시에 효력을 발생합니다. ②"회사"는 사정
        </span>
        <br />
        <span className="text-sm">
          단, 동의 철회 후에는 위의 목적과 관련된 사고 조사, 분쟁해결, 민원처리,
          법령상 의무이행을 위해서만 보유ㆍ이용됩니다.
        </span>
        <br />
        <br />
        <br />
        <br />
        <span className="text-sm">직책 : 대표</span>
        <br />
        <span className="text-sm">성명 : 고태환</span>
        <br />
        <span className="text-sm">전화 : 010-4283-4569</span>
      </div>
      <LoanRequest />
    </Layout>
  )
}
