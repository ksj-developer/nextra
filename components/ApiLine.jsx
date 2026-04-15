import { useRouter } from "next/router";

export default function ApiLine({ method = "GET", path = "", domainLink = "/guide/overview#api-도메인" }) {
  const router = useRouter();

  const getColor = () => {
    switch (method.toUpperCase()) {
      case "POST":
        return "#2563eb";
      case "GET":
        return "#16a34a";
      case "DELETE":
        return "#dc2626";
      case "PUT":
        return "#ea580c";
      default:
        return "#374151";
    }
  };

  return (
    <span>
      {/* METHOD */}
      <span
        style={{
          color: getColor(),
          fontWeight: 600,
          marginRight: "6px",
        }}
      >
        {method.toUpperCase()}
      </span>

      {/* 🔥 핵심: a 제거 + code 클릭 처리 */}
      <code onClick={() => router.push(domainLink)} style={{ cursor: "pointer" }}>
        <span style={{ color: "#2563eb" }}>{"{API 도메인}"}</span>
        {path}
      </code>
    </span>
  );
}
