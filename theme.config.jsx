import Footer from "./components/Footer";

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
  footer: {
    component: <Footer />,
  },
  navbar: {
    extraContent: (
      <>
        <a href="/guide">API 공통 가이드</a>
        <a href="/develop-guide">개발 가이드</a>
      </>
    ),
  },
  search: {
    placeholder: "검색...",
  },
  project: {},
  darkMode: false,
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
