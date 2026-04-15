"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-brand">
            <img src="/logo.svg" alt="KICC" className="footer-logo" />
            <span className="footer-company">한국정보통신(주)</span>
          </div>

          <div className="footer-row">
            <p className="footer-text">서울 중구 세종대로 39 (남대문로 4가) 대한상공회의소 7층</p>

            <div className="footer-right">
              <Link href="https://api.easybanking.co.kr/html/terms.html">전자금융거래 기본약관</Link>
              <Link href="https://www.kicc.co.kr/kr/company/policy/personal_info.jsp">개인정보처리방침</Link>
            </div>
          </div>

          <p className="footer-text">대표자 임명수&nbsp;&nbsp;&nbsp;사업자등록번호 116-81-19948&nbsp;&nbsp;&nbsp;TEL 02-368-0723</p>
          <p className="footer-text">E-mail cmsdev@kicc.co.kr</p>

          <p className="footer-copy">Copyrights © 2026 KICC All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
