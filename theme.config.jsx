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
        <a href="/guide">API 소개</a>
        <a href="/user-api">사용자 API</a>
        <a href="/payment-api">결제 API</a>
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
      titleTemplate: "%s – KICC CMS API Docs",
    };
  },
};
