import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"

export default function LoanRequest() {
  const [form, setForm] = useState({
    name: "",
    phone01: "010",
    phone02: "",
    phone03: "",
    group: "",
    agree: false,
  })

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    if (!form.name) {
      alert("이름을 입력하세요")
      return
    }

    if (!form.phone01 || !form.phone02 || !form.phone03) {
      alert("연락처를 입력하세요")
      return
    }

    if (!form.group) {
      alert("직군을 선택하세요")
      return
    }

    if (!form.agree) {
      alert("개인정보 수집에 동의하셔야 합니다")
      return
    }

    alert("상담신청이 완료 되었습니다!")
  }

  return (
    <>
      <div
        className="flex flex-col p-3 text-gray-600"
        style={{
          background: "linear-gradient(-45deg, #0E3D85 50%, #204B8F 50%)",
        }}
      >
        <span className="font-bold text-3xl mb-3 text-[#7EC2F4]">
          대출상담신청
        </span>
        <div>
          <input
            className="w-full p-1 mb-1"
            placeholder="이름"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="flex space-x-1 w-full mb-1">
          <select
            className="p-1 flex-1 w-1/3"
            onChange={e => {
              setForm({ ...form, phone01: e.target.value })
            }}
          >
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
            <option value="019">019</option>
            <option value="02">02</option>
            <option value="031">031</option>
            <option value="032">032</option>
            <option value="033">033</option>
            <option value="041">041</option>
            <option value="042">042</option>
            <option value="043">043</option>
            <option value="051">051</option>
            <option value="052">052</option>
            <option value="053">053</option>
            <option value="054">054</option>
            <option value="055">055</option>
            <option value="061">061</option>
            <option value="062">062</option>
            <option value="063">063</option>
            <option value="064">064</option>
            <option value="070">070</option>
          </select>
          <input
            className="p-1 w-1/3"
            onChange={e => setForm({ ...form, phone02: e.target.value })}
          />
          <input
            className="p-1 w-1/3"
            onChange={e => setForm({ ...form, phone03: e.target.value })}
          />
        </div>
        <div className="flex w-full mb-1">
          <select
            className="w-full p-1"
            onChange={e => {
              setForm({ ...form, group: e.target.value })
            }}
          >
            <option value="">직군을 선택해주세요.</option>
            <option value="직장인">&nbsp;&nbsp;&nbsp;직장인</option>
            <option value="사업자">&nbsp;&nbsp;&nbsp;사업자</option>
            <option value="주부">&nbsp;&nbsp;&nbsp;주부</option>
            <option value="기타">&nbsp;&nbsp;&nbsp;기타</option>
          </select>
        </div>

        <div
          onClick={() => setOpen(true)}
          onKeyPress={() => setOpen(true)}
          role="button"
          tabIndex="0"
        >
          <StaticImage
            className="w-60% my-2"
            src="../images/btn_per01.png"
            alt="per01"
          />
        </div>

        <div className="flex space-x-2 items-center text-white">
          <label>
            <input
              type="checkbox"
              value="Y"
              className="mr-2"
              onChange={e => {
                console.log(e.currentTarget.checked)
                setForm({ ...form, agree: e.currentTarget.checked })
              }}
            />
            <span>동의함</span>
          </label>
          <label>
            <input type="checkbox" value="N" className="mr-2" />
            <span>동의안함</span>
          </label>
        </div>

        <div
          className="cursor-pointer"
          onClick={handleClick}
          onKeyPress={handleClick}
          role="button"
          tabIndex="0"
        >
          <StaticImage src="../images/go_btn.png" alt="go" />
        </div>
      </div>
      <div
        hidden={!open}
        tabIndex="-1"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-modal h-full bg-gray-500 bg-opacity-25"
        onClick={() => setOpen(false)}
        onKeyPress={() => setOpen(false)}
        role="button"
      >
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-gray-700 text-white p-7 rounded-lg shadow dark:bg-gray-700 flex flex-col text-sm h-full">
            <svg
              className="w-10 fill-white"
              viewBox="0 0 24 24"
              onClick={() => setOpen(false)}
              onKeyPress={() => setOpen(false)}
              role="button"
            >
              <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
            </svg>
            <div className="py-4 flex content-center justify-center">
              <h3> 티에이치대부중개 개인정보취급방침</h3>
            </div>
            <div className="space-y-4">
              <div>
                이 대출상담신청과 관련하여 귀사가 본인으로부터 취득한 개인정보를
                수집•이용하고자 하는 경우에는
              </div>
              <div>
                『개인정보보호법』 제15조 및 제22조, 정보통신망이용촉진 및
                정보보호등에 관한 법률』제 22조에 따라 본인의 동의를 얻어야
                합니다.
              </div>
              <div>
                이에 본인은 귀사가 본인의 개인정보를 아래와 같이 수집•이용하는
                것에 동의합니다.
              </div>
            </div>
            <div className="space-y-2 pt-10">
              <div>1. 개인정보의 필수적 수집•이용에 관한 사항</div>
              <div>① 개인정보의 수집•이용 목적•대출상담신청 등</div>
              <div>
                ② 수집•이용할 개인정보의 내용•개인식별정보(성명, 연락처,
                소득구분 등)
              </div>
              <div>
                ③ 개인정보의 보유 및 이용기간•수집•이용 동의일로부터 개인정보의
                수집•이용 목적을 달성할 때까지
              </div>
              <div>
                ※ 귀하는 동의를 거부할 권리가 있으나, 이에 대한 동의가 없을 경우
                대출상담신청 등이 불가능할 수 있음을 알려 드립니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
// linear-gradient(-45deg, #f3f5f0 50%, #dfe8eb 50%)
