import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
export default function Footer() {
  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="bg-[#F6F6F6] flex flex-col items-center justify-center w-full max-w-2xl">
      <a href="tel:+8210-4283-4569" className="w-full text-gray-800">
        <div className="flex flex-col w-full justify-center items-center py-4 sm:py-6 border-b-[1px] border-[#1d488d]">
          <div className="font-bold text-base sm:text-lg">
            <span>고객상담센터</span>
          </div>
          <div className="flex p-1 justify-center text-lg">
            <svg
              className="fill-blue-600 w-5 h-5 sm:w-6 sm:h-6 pt-1"
              viewBox="0 0 24 24"
            >
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
            <span className="text-[#001747] font-bold text-sm sm:text-base">
              010-4283-4569
            </span>
          </div>
          <div className="text-xs sm:text-sm">
            <span>상담가능시간 09:00~18:00</span>
          </div>
        </div>
      </a>

      <div className="flex flex-col w-full justify-center items-center">
        <div
          className="cursor-pointer"
          onClick={handleClick}
          onKeyPress={handleClick}
          role="button"
          tabIndex="0"
        >
          <StaticImage
            alt="go top"
            className="w-12 sm:w-14"
            src="../images/go_top_icon.png"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="p-4 flex justify-self-start w-full text-[11px] sm:text-[13px] space-x-2 divide-x-[1px] divide-gray-500">
          <Link to={`/privacy`} href="/privacy" className="text-red-600">
            <span>개인정보취급방침</span>
          </Link>
          <Link
            to={`/agreement`}
            href="/agreement"
            className="pl-2 text-gray-800"
          >
            <span>책임한계와법적고지</span>
          </Link>
          <Link
            to={`/email_pop`}
            href="/email_pop"
            className="pl-2 text-gray-800"
          >
            이메일무단수집거부
          </Link>
        </div>
        <div className="px-4 text-[8px] flex flex-col">
          <div className="space-x-[4px] divide-x-[1px] divide-gray-500">
            <span>사업자명: 티에이치대부중개</span>
            <span className="pl-1">대표: 고태환</span>
            <span className="pl-1">대표전화: 010-4283-4569</span>
          </div>
          <div className="space-x-[4px] divide-x-[1px] divide-gray-500">
            <span>사업자등록번호 : 471-36-00915</span>
            <span className="pl-1">
              대부중개등록번호 : 2020-서울강서-0032(대부중개업)
            </span>
          </div>
          <div>
            <span>
              주소 : 서울 강서구 공항대로213, 보타닉파크타워2차 302-37호
            </span>
          </div>
          <div>
            <span>Copyright(c) 티에이치대부중개. All rights reserved.</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-4 text-[11px] w-full py-3">
        <span>010-4283-4569, 대출금리 연24%이내(연체금리 연24%이내)</span>
        <span>취급수수료 등 기타 부대비용 없음</span>
        <span>
          (다만, 담보대출은 담보권 설정에 따른 비용이 발생 할 수 있습니다)
        </span>
      </div>

      <div className="flex flex-col w-full px-4 text-[11px] text-sky-900 pb-7">
        <span>중개수수료를 요구하거나 받는 것은 불법 /</span>
        <span>대출과 관련된 일체의 수수료를 받지 않습니다.</span>
        <span>과도한 빛은 당신에게 큰 불행을 안겨줄 수 있습니다.</span>
      </div>
    </div>
  )
}
