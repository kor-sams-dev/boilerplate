# web boilerplate project

웹 관련 보일러 플레이트를 작성합니다.

공식문서에 작성되어있는 내용을 훑어보며 중요한 포인트에 대해 학습하고,

필요한 사항에 대해 보일러 플레이트를 작성해둡니다.

<br />

# TO-DO

- json-server
  - 기본 사용법
  - filter 사용 법
- 디바운싱, 쓰로틀링
  - 기본 개념
  - lodash 라이브러리를 활용한 방식
  - React를 활용한 디바운싱, 쓰로틀링 컴포넌트
- 커스텀 훅
- 회원가입, 로그인
- OAuth
- 전역상태관리
- test code
- http client 관리
- typescript
- css-in-css, css-in-js
- docker

# TIL

## 2022-11-29

1. node에서 fetch를 사용할때에는 node-fetch를 설치해야 한다.
2. ES Module을 사용하고 싶으면 package.json에 type: module을 명시한다.
3. cdn 사용 방법
   - head 테그 안에 script 테그를 이용하여 cdn link
   - body 테그 안에 script 테그를 이용하여 js 작성하며 link한 라이브러리 사용하면 됨.
   - 따로 import 할 필요 없음.
