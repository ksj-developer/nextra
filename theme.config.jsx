export default {
  logo: (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img src="/logo.svg" className="logo-img" />
      <span className="logo-text">CMS API Docs</span>
    </div>
  ),
  head: (
    <>
      <link rel="icon" href="/favicon.svg" />
    </>
  ),
  navbar: {
    extraContent: (
      <>
        <a href="/guide">API 공통 가이드</a>
        <a href="/inquiry-api">정보성 API</a>
        <a href="/withdraw-api">출금 API</a>
        <a href="/account-api">계좌 API</a>
        <a href="/deposit-api">입금 API</a>
        <a href="/refund-api">환불 API</a>
      </>
    ),
  },
  search: {
    placeholder: "검색...",
  },
  project: {},
  darkMode: false,
  footer: { text: "" },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  gitTimestamp: null,
  useNextSeoProps() {
    return {
      titleTemplate: "%s KICC CMS API Docs",
    };
  },
};
