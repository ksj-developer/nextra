"use client";

import { useEffect, useRef, useState } from "react";

const options = [
  {
    step: 1,
    category: "정보 제공 API",
    items: [
      {
        title: "수취인 성명 조회",
        desc: "출금 대상자의 수취인 성명을 사전에 조회합니다.",
        badge: "",
        icon: "",
        link: "/develop-guide/trade#step1",
      },
    ],
  },
  {
    step: 2,
    category: "출금 API",
    items: [
      {
        title: "ARS 출금동의",
        desc: "고객에게 ARS를 통해 출금 동의를 요청합니다.",
        badge: "필수",
        icon: "",
        link: "/develop-guide/trade#step2",
      },
    ],
  },
  {
    step: 3,
    category: "계좌 API",
    items: [
      {
        title: "출금계좌등록",
        desc: "ARS 동의 완료 후 출금 계좌 정보를 등록합니다.",
        badge: "필수",
        icon: "",
        link: "/develop-guide/trade#step3",
      },
    ],
  },
  {
    step: 4,
    category: "입금 API",
    items: [
      {
        title: "1원이체",
        desc: "1원 이체로 계좌 인증을 진행합니다.",
        badge: "",
        icon: "",
        link: "/develop-guide/trade#step4",
      },
    ],
  },
  {
    step: 5,
    category: "출금 API",
    items: [
      {
        title: "출금이체",
        desc: "인증된 계좌로 출금 요청합니다.",
        badge: "",
        icon: "",
        link: "/develop-guide/trade#step5",
      },
    ],
  },
  {
    step: 6,
    category: "환불 API",
    items: [
      {
        title: "부분환불",
        desc: "출금 금액 일부 환불 요청",
        icon: "",
        link: "/develop-guide/trade#step6",
      },
      {
        title: "전체환불",
        desc: "출금 금액 전체 환불 요청",
        icon: "",
        link: "/develop-guide/trade#step7",
      },
    ],
  },
  {
    step: 7,
    category: "출금 API",
    items: [
      {
        title: "출금계좌해지",
        desc: "등록된 계좌 해지 요청",
        icon: "",
        link: "/develop-guide/trade#step8",
      },
    ],
  },
];

export default function Flow() {
  const [activeStep, setActiveStep] = useState(1);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      let closestStep = 1;
      let minDistance = Infinity;

      refs.current.forEach((el, i) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const center = window.innerHeight / 2;
        const distance = Math.abs(rect.top - center);

        if (distance < minDistance) {
          minDistance = distance;
          closestStep = i + 1;
        }
      });

      setActiveStep(closestStep);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flow-wrap">
      {options.map((item, i) => (
        <div className={`flow-row ${activeStep >= item.step ? "active" : ""}`} key={i} ref={(el) => (refs.current[i] = el)}>
          <div className="flow-left">
            <div className={`flow-step ${activeStep === item.step ? "blue" : ""}`}>{item.step}</div>

            {/* 🔥 마지막도 포함해서 렌더 */}
            <div className={`flow-line ${i === options.length - 1 ? "last" : ""}`} />
          </div>

          <div className="flow-content">
            <h3>{item.category}</h3>

            <div className="card-grid">
              {item.items.map((card, idx) => (
                <a key={idx} href={card.link} className={`card large ${activeStep === item.step ? "active" : ""}`}>
                  <div className="card-icon">{card.icon}</div>
                  <strong>{card.title}</strong>
                  <p>{card.desc}</p>
                  {card.badge && <span className="badge">{card.badge}</span>}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
