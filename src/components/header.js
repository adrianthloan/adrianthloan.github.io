import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

function Header() {
  return (
    <div className="flex flex-wrap items-center justify-between p-2 sm:p-4 border-b-[3px] border-[#1d488d] w-full max-w-2xl">
      <Link
        to={`/`}
        href="#responsive-header"
        className="flex flex-col text-xs text-black lg:mt-0"
      >
        <div>
          <span className="">티에이치대부중개</span>
        </div>
        <div>
          <span>2020-서울강서-0032(대부중개업)</span>
        </div>
      </Link>
      <a href="tel:+8210-4283-4569">
        <div className="text-[#001747] flex text-xs sm:text-sm">
          <svg
            className="fill-blue-600 w-4 h-4 pt-1 sm:w-6 sm:h-6"
            viewBox="0 0 24 24"
          >
            <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
          </svg>
          <div className="text-[#001747] font-bold">
            <span>상담</span> | <span>010-4283-4569</span>
          </div>
        </div>
      </a>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
