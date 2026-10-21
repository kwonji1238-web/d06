// weather-poster.api.js — 날씨 무드 포스터 (Open-Meteo): API 주소와 지역 목록(위도·경도)
// weather-poster.html이 메인 스크립트보다 먼저 불러온다. 여기 주소를 바꾸면 화면 내용이 바뀐다.
"use strict";

// 🔌 API 주소: 값을 바꾸면 화면 내용이 바뀐다 (지역 좌표는 아래 REGIONS)
const API = {
  base: "https://api.open-meteo.com/v1/forecast",                      // 🔌 날씨 API 주소
  current: "temperature_2m,weather_code,wind_speed_10m,is_day",        // 🔌 지금 값 (기온 °C, 날씨 코드, 풍속 km/h, 낮/밤)
  daily: "sunrise,sunset",                                              // 🔌 일출·일몰
  timezone: "Asia/Seoul",                                               // 🔌 시각 기준 시간대
  timeoutMs: 10000                                                      // 응답 대기 한도
};

// 🔌 지역 목록: latitude/longitude 숫자를 바꾸면 다른 곳의 날씨가 나온다 (이름은 여기서만 정한다)
const REGIONS = [
  { key: "seoul",   name: "서울",   lat: 37.57, lon: 126.98 }, // 🔌
  { key: "incheon", name: "인천",   lat: 37.46, lon: 126.71 }, // 🔌
  { key: "suwon",   name: "수원",   lat: 37.26, lon: 127.03 }, // 🔌
  { key: "chuncheon", name: "춘천", lat: 37.88, lon: 127.73 }, // 🔌
  { key: "gangneung", name: "강릉", lat: 37.75, lon: 128.88 }, // 🔌
  { key: "daejeon", name: "대전",   lat: 36.35, lon: 127.38 }, // 🔌
  { key: "sejong",  name: "세종",   lat: 36.48, lon: 127.29 }, // 🔌
  { key: "cheongju", name: "청주",  lat: 36.64, lon: 127.49 }, // 🔌
  { key: "jeonju",  name: "전주",   lat: 35.82, lon: 127.15 }, // 🔌
  { key: "gwangju", name: "광주",   lat: 35.16, lon: 126.85 }, // 🔌
  { key: "mokpo",   name: "목포",   lat: 34.81, lon: 126.39 }, // 🔌
  { key: "yeosu",   name: "여수",   lat: 34.76, lon: 127.66 }, // 🔌
  { key: "daegu",   name: "대구",   lat: 35.87, lon: 128.60 }, // 🔌
  { key: "andong",  name: "안동",   lat: 36.57, lon: 128.73 }, // 🔌
  { key: "ulsan",   name: "울산",   lat: 35.54, lon: 129.31 }, // 🔌
  { key: "busan",   name: "부산",   lat: 35.18, lon: 129.08 }, // 🔌
  { key: "changwon", name: "창원",  lat: 35.23, lon: 128.68 }, // 🔌
  { key: "jeju",    name: "제주",   lat: 33.50, lon: 126.53 }  // 🔌
];
const DEFAULT_REGION = "seoul";
