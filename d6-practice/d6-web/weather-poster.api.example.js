// 이 파일은 견본이다. 복사해서 weather-poster.api.js로 만들고 "여기에_"로 시작하는 값을 채운다. (weather-poster.api.js는 git 제외)
// weather-poster.html이 메인 스크립트보다 먼저 불러온다. 값을 채우지 않으면 화면에 "API 설정 파일이 없어요" 안내가 뜬다.
"use strict";

// 🔌 API 주소: 값을 바꾸면 화면 내용이 바뀐다 (지역 좌표는 아래 REGIONS)
const API = {
  base: "여기에_날씨_API_주소",          // 🔌 날씨 API 주소 (키가 필요 없는 공개 API만)
  current: "여기에_지금_값_필드",        // 🔌 지금 값: 기온(°C), 날씨 코드, 풍속(km/h), 낮/밤을 쉼표로
  daily: "여기에_일출_일몰_필드",        // 🔌 일출·일몰 (쉼표로)
  timezone: "여기에_시간대",             // 🔌 시각 기준 시간대 (예: 대한민국이면 서울 기준)
  timeoutMs: 10000                       // 응답 대기 한도
};

// 🔌 지역 목록: lat/lon 숫자를 바꾸면 다른 곳의 날씨가 나온다 (이름은 여기서만 정한다)
// 견본에는 한 곳만 적었다. 같은 모양으로 원하는 지역을 더 적는다.
const REGIONS = [
  { key: "seoul", name: "서울", lat: 0, lon: 0 } // 🔌 lat(위도), lon(경도)를 채운다
];
const DEFAULT_REGION = "seoul";
