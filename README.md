# web boilerplate project

웹 관련 보일러 플레이트를 작성합니다.

공식문서에 작성되어있는 내용을 훑어보며 중요한 포인트에 대해 학습하고,

필요한 사항에 대해 보일러 플레이트를 작성해둡니다.

<br />

# Contents

- json-server
  - [x] 기본 사용법
  - [x] filter 사용 법
  - [ ] 커스텀 라우트 사용 법
- 디바운싱, 쓰로틀링
  - [x] 기본 개념
  - [x] lodash 라이브러리를 활용한 방식
  - [x] React를 활용한 디바운싱, 쓰로틀링 컴포넌트
  - [ ] 무한스크롤
    - [ ] 일반 무한스크롤
    - [ ] 디바운싱 무한스크롤
    - [ ] 스로틀링 무한스크롤
- 회원가입, 로그인
- OAuth
- 전역상태관리
  - [ ] redux
    - [ ] 함수형 컴포넌트
    - [ ] 클레스형 컴포넌트
  - [ ] recoil
  - [ ] mobx
- test code
  - [ ] jest
    - [ ] unit test
    - [ ] dom element test
- http client 관리
  - [ ] node fetch
  - [ ] axios
- typescript
  - [x] Get Started
- css-in-css, css-in-js
  - [ ] scss
  - [ ] postcss
  - [ ] styled-component
  - [ ] Tailwind
- docker
- redis
- Jenkins
- react
  - [ ] 커스텀 훅
  - [ ] MVC 패턴
  - [ ] MVVM 패턴
  - [ ] todo project
  - [ ] propTypes
- vue
  - [ ] todo project
- Loading element
  - [ ] HTML, CSS...
  - [ ] React
  - [ ] Vue
- skeleton element
  - [ ] HTML, CSS...
  - [ ] React
  - [ ] Vue
- open API
  - 네이버 지도
    - [ ] HTML, CSS, JS
    - [ ] React
    - [ ] Vue
- story book

# TIL

## 2022-11-30

1. 클레스형 컴포넌트에서는 리덕스 사용하는게 매우 어렵다... <br /> 그냥 쓰는거도 어려운데 클레스형 컴포넌트에 적용하느라 힘들었다.
2. react propTypes를 이용해서 타입 체크를 하는부분도 공부해야 할 것 같다. <br /> 타입스크립트를 공부하는게 더 빠를수도 있을거같긴 한데...

## 2022-11-29

1. node에서 fetch를 사용할때에는 node-fetch를 설치해야 한다.
2. ES Module을 사용하고 싶으면 package.json에 type: module을 명시한다.
3. cdn 사용 방법
   - head 테그 안에 script 테그를 이용하여 cdn link
   - body 테그 안에 script 테그를 이용하여 js 작성하며 link한 라이브러리 사용하면 됨.
   - 따로 import 할 필요 없음.
