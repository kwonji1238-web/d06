// iss-clock.api.js — ISS 궤도 시계 (wheretheiss.at): API 주소와 갱신·재시도 설정
// iss-clock.html이 메인 스크립트보다 먼저 불러온다. 여기 주소를 바꾸면 화면 내용이 바뀐다.
"use strict";

// 🔌 API 주소: 값을 바꾸면 화면 내용이 바뀐다
const API = {
  now: "https://api.wheretheiss.at/v1/satellites/25544",             // 🔌 ISS 지금 위치
  positions: "https://api.wheretheiss.at/v1/satellites/25544/positions", // 🔌 ISS 지난 위치(timestamps=…)
  intervalMs: 5000,        // 🔌 자동 갱신 간격
  maxBackoffMs: 60000,     // 🔌 실패가 이어질 때 재시도 간격 상한 (호출 제한 429 대비)
  timeoutMs: 8000,         // 🔌 응답 대기 한도
  historyStepSec: 300,     // 🔌 지난 궤적 점 간격(초)
  historyCount: 19,        // 🔌 지난 궤적 점 개수 (19점 × 5분 = 95분)
  perCall: 10,             // 🔌 한 번에 물을 수 있는 시각 개수(문서상 한도)
  historyRetryMs: 60000    // 🔌 지난 궤적 실패 후 다시 시도하기까지 기다리는 시간
};
