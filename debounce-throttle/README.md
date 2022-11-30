# deboune, throttle

디바운스와 쓰로틀에 대해 실제로 사용방법을 숙지하는것이 목적.

## contents

### basic

- 실행방법
  - live server를 통해 index.html을 실행
- 기본 html에서 스크롤을 할 때 발생하는 이벤트를 제어하는 방법을 숙지함
- setTimeout을 이용하여 기능을 작성함

### lodash

- 실행방법
  - live server를 통해 index.html을 실행
- lodash 라이브러리를 사용하여 디바운스와 쓰로틀 효과를 확인함.

### react-event

- 실행방법

```
// 프로젝트 실행을 위한 기초 라이브러리 설정
yarn install

// 프로젝트 시작
yarn start
```

- react 에서 디바운스와 스로틀을 이해하기 위한 컴포넌트 생성
  - normal: 기본 스크롤 이벤트 시 카운트 증가
  - debounce
    - 스크롤이 끝나고 1회 이벤트 발생
    - setTimeout을 활용함
  - throttle
    - 스크롤이 발생하는 동안 주기적으로 이벤트 발생
    - setTimeout을 활용함
  - lodashDebounce, lodashThrottle
    - lodash 라이브러리를 활용한 컴포넌트 이벤트 작성
