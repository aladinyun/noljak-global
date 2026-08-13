# 번역 관련 의도적 예외 사항

## hero.headline (영어 유지)
- 위치: messages/vi.json (및 다른 로케일 파일들의 hero.headline)
- 상태: 의도적으로 영어 원문 유지, 번역하지 않음
- 이유: 헤드라인만 영어로 남겨 글로벌 브랜드 톤을 살리고, 
  나머지 설명 문구(quote, cta 등)는 현지어로 번역해 이해도를 확보하는 전략
- 결정일: 2026-08-12
- 주의: 이후 번역 검수나 QA 시 이 항목을 "번역 누락"으로 오인해 
  임의로 번역하지 말 것

## programs.crekicHeadline (원문과 다른 한국어 카피)
- 위치: messages/ko.json programs.crekicHeadline
- 영문 원문: "Where learning begins with the whole body."
- 국문: "감각 정서 언어 올인원 에듀퍼포먼스 프로그램"
- 상태: 직역이 아닌 별도 한국어 마케팅 카피로 의도적으로 작성됨
- 결정일: 2026-08-13
- 주의: 이후 번역 검수나 QA 시 이 항목을 "오역" 또는 "원문 불일치"로 
  오인해 임의로 영문에 맞춰 수정하지 말 것
