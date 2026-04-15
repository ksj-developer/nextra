"use client";

export default function Main() {
  return (
    <section className="main-hero">
      <div className="main-hero__inner">
        <div className="main-hero__left">
          <div className="main-hero__badge fade-item delay-1">Easy API</div>

          <p className="main-hero__eyebrow fade-item delay-2">CMS API Developer Platform</p>

          <h1 className="main-hero__title fade-item delay-3">
            CMS API 하나로
            <br />
            수납 · 지급을 구현하세요
          </h1>

          <p className="main-hero__desc fade-item delay-4">
            기존에는 은행 심사와 복잡한 연동이 필요했다면
            <br />
            이제는 CMS API 로 간단하게 연결할 수 있습니다.
          </p>

          <div className="fade-item delay-5">
            <a href="/guide" className="main-hero__button">
              개발 가이드 시작하기
            </a>
          </div>
        </div>

        <div className="main-hero__right fade-item delay-5">
          <img src="/main.svg" alt="메인 비주얼" className="main-hero__image" />
        </div>
      </div>
    </section>
  );
}
