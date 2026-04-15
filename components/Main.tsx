"use client";

export default function Main() {
  return (
    <section className="main-hero">
      <div className="main-hero__inner">
        <div className="main-hero__left">
          <div className="main-hero__badge fade-item delay-1">✨ AI 연동 지원</div>

          <p className="main-hero__eyebrow fade-item delay-1">KICC Developer Platform</p>

          <h1 className="main-hero__title fade-item delay-2">
            AI로 완성하는
            <br />
            차세대 결제 경험
          </h1>

          <p className="main-hero__desc fade-item delay-3">
            온라인 결제 서비스로 비즈니스 결제를 혁신하세요.
            <br />
            AI가 연동부터 최적화까지 모든 과정을 지원합니다.
          </p>

          <div className="fade-item delay-4">
            <a href="/guide" className="main-hero__button">
              개발자 가이드 시작하기
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
