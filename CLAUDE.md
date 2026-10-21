# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개요

"D6 무료 API로 나만의 서비스 만들기" 수업 자료 폴더다. 빌드·린트·테스트 도구가 없다. `d6-api/` 안의 HTML 파일을 더블클릭해서 브라우저로 열어 확인한다. (git 저장소가 아니다.)

- `D06_1021.html`: 수업 워크북(약 110KB). 수정 대상이 아니라 참고용이다.
- `d6-api/`: 학생이 만드는 API 화면들 (`weather.html`, `rate.html`, `city.html`, `morning.html`).
- `.claude/rules/api.md`: API 화면이 지켜야 할 규칙. 화면을 만들거나 고치기 전에 읽는다.
- `.claude/skills/api-check`: `/api-check <파일>`은 규칙 준수 여부를 표로 검사만 하고 파일은 고치지 않는다.

## d6-api 화면 구조 (모든 파일이 같은 틀)

각 화면은 외부 파일 없는 단일 HTML(CSS+JS 인라인)이며, 키가 필요 없는 공개 API만 `fetch`로 부른다.

- 스크립트 맨 위 `const API = {...}`에 주소를 모으고 각 줄에 `// 🔌`, `fetch` 줄에 `// 🔌 API 호출` 주석을 단다. 주소를 바꾸면 화면 내용이 바뀌는 것을 보여 주는 게 목적이다.
- 화면 맨 아래 "🔌 이 화면이 쓰는 API" 상자에 실제로 부른 주소와 원본 JSON 링크를 보여 준다.
- 카드마다 로딩 문구와 실패 화면이 있고, 카드별로 따로 호출해서 한 카드가 실패해도 나머지는 보인다 (`morning.html`이 4카드 종합본).
- 데이터 출처를 화면에 적는다. 환율은 "실시간"이라고 쓰지 않고 기준 날짜를 보여 준다 (Frankfurter는 유럽중앙은행이 하루 한 번 발표).
- 외부 API 응답 문자열은 `textContent`/`createElement`로만 넣는다 (innerHTML 사용 안 함).

## 화면 간에 중복된 로직 (한쪽을 고치면 다른 쪽도 확인)

- Open-Meteo 날씨 코드 → 말·이모지 표: `weather.html`, `morning.html`.
- 미세먼지 등급(환경부 기준, µg/m³): PM10 30/80/150, PM2.5 15/35/75 경계. `city.html`, `morning.html`.
- 도시 좌표는 `latitude`/`longitude` 쿼리값이고, 현재 `weather.html`과 `morning.html`은 서울(37.57, 126.98)이다. 화면 제목의 도시 이름은 좌표와 따로 하드코딩되어 있어 같이 고쳐야 한다.

## 작업 규칙

- 커밋·푸시는 하지 않고 커밋 메시지만 제안한다 (예: `"[직군] D6: B 환율 계산기"`).
- 키가 필요한 API는 만들지 말고 "이 API는 키가 필요해서 D8 방식이 필요해요"라고 알린다.
