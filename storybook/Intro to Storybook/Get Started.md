# [Get Started](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/)

- 스토리북은 개발 모드에서 앱과 함께 실행됨.
- 비즈니스 로직과 맥락으로부터 분리된 UI 컴포넌트를 만들 수 있도록 도와줌.

## 리엑트 스토리북 설정

시작하는 단계에서는 degit을 사용하여 빌드 시스템을 설정.

```bash
# clone the template
npx degit chromaui/intro-storybook-react-template project-name

cd project-name

# install dependencies
yarn
```

해당 템블릿에는 튜토리얼 버전에 필요한 스타일, assets, 기본구성이 포함되어 있음

3가지 환경에서 올바르게 작동하는지 확인이 가능함

```bash
# Run the test runner (Jest) in a terminal
yarn test --watchAll

# Start the component explorer on port 6006
yarn storybook

# Run the frontend app proper on port 3000
yarn start
```
