export default {
  logo: <span style={{ fontWeight: "bold" }}>KICC CMS API Docs</span>,

  navbar: {
    extraContent: (
      <>
        <a href="/guide">가이드</a>
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
