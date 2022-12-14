# [Simple Component](https://storybook.js.org/tutorials/intro-to-storybook/react/ko/simple-component/)

- 컴포넌트 기반 개발(CDD)방법론에 따라 UI 만들기 진행.
  - 컴포넌트부터 시작하여 마지막 화면에 이르기까지 상향적(bottom-up)으로 UI를 개발하는 과정.
  - CDD는 UI를 구축할 때 직면하게 되는 규모의 복잡성을 해결하는데 도움이 됨.

<br />

## Task 컴포넌트

- 앱의 핵심 컴포넌트.
- task는 현재 어떤 상태에 있는지에 따라 다르게 나타남.
  - 선택된(또는 선택되지 않은) 체크 ㅂ가스
  - task에 대한 정보
  - task를 위아래로 움직일 수 있도록 도와주는 '핀'버튼
- 위 기능을 위해 2가지 prop이 필요함
  - title - task를 설명해주는 문자열
  - state = 현재 어떤 task가 목록에 있으며, 선택되어 있는지 여부.
- 작성 방향
  - task 컴포넌트를 만들기 위해 여러 유형의 task에 해당하는 테스트 상태를 작성
  - 모의 데이터를 사용하여 독립적 환경에서 컴포넌트를 구축하기 위해 스토리북을 사용
  - 각각의 상태에 따라 컴포넌트의 모습을 수동으로 테스트하며 진행

<br />

## 설정하기

> 먼저 task컴포넌트와 그에 해당하는 스토리 파일을 만들어 설정 진행

- 2개 파일 생성

  - `src/components/Task.js`
    - HTML을 기반으로 task에 대한 간단한 마크업을 렌더링
  - `src/components/Task.stories.js`
    - task의 3가지 테스트 상태를 스토리 파일에 작성

- 스토리북은 컴포넌트와 그 하위 스토리의 두 가지 기본 단계로 구성되어 있음.
  - 각 스토리는 해당 컴포넌트에 대응됨
  - 얼마든지 필요한 만큼의 스토리를 컴포넌트별로 작성 가능.
- 스토리북에게 문서화하고 있는 컴포넌트에 대해 알려주기 위해 아래 사항들을 포함하는 default export를 생성합니다
  - component: 해당 컴포넌트
  - title: 스토리북 앱의 사이드바에서 컴포넌트를 참조하는 방법
- 스토리를 정의하기 위해 각각의 테스트 상태에 해당하는 스토리를 생성하는 함수를 내보냄.
- 스토리는 주어진 상태안에서 렌더링된 요소를 반환하는 함수임.
  - 함수형 컴포넌트와 같음
- 컴포넌트의 순열이 여러 개이기 때문에 Template변수에 할당하는것이 편리함.
  - 이 패턴을 스토리에 도입함으로써 작성하고 유지해야 하는 코드의 양이 줄어듬.

> Template.bind({})는 함수의 복사본을 만드는 표준 Javascript의 한 기법.  
> 이 기법을 사용하여 각각의 스토리가 고유한 속성을 갖지만 동일한 결과물을 사용하도록 할 수 있음.

- 인수를 사용하여 스토리북을 다시 시작하지 않고도 Controls addon으로 컴포넌트를 실시간으로 수정할 수 있음.
  - 인수값이 변하면 컴포넌트도 함께 변함.
- 스토리를 만들 때 기본 task인수를 사용하여 컴포넌트가 예상하는 task의 형태를 구성함.
  - 일반적으로 실제 데이터를 모델로 하여 만듬.
  - 다시 강조하면 export하는 것은 차후 스토리에서 이를 재사용 할 수 있도록 해줌.

> 액션은 UI컴포넌트를 독립적으로 만들 때, 컴포넌트와의 상호작용을 확인하는 데 도움이 됨.  
> 종종, 앱의 컨텍스트에서 함수와 state에 접근하지 못할 수 있음.  
> 이런 경우 action()을 사용하여 끼워 넣으면 됨.

<br />

## 환경설정

최근에 생성한 스토리뿐 아니라 이전 get started에서 변경된 CSS 파일을 사용할 수 있도록 스토리북 환경설정을 몇가지 변경해보는 파트.

1. 📌 스토리북 환경설정 파일(.storybook/main.js)을 다음과 같이 변경

```
- stories: [
-   '../src/**/*.stories.mdx',
-   '../src/**/*.stories.@(js|jsx|ts|tsx)'
- ],
+ stories: ['../src/components/**/*.stories.js'],
```

2. preview.js에 css import 추가

```
+ import '../src/index.css';
```

- 매개변수는 일반적으로 스토리북의 기능과 애드온의 동작을 제어하기 위해 사용.
- 이를 사용하여 actions(mocked callbacks)이 처리되는 방식을 구현
- actions는 클릭이 되었을 때 스토리북 UI의 actions패널에 나타날 콜백을 생성할 수 있도록 해줌.

  - pin버튼을 만들 때, 버튼 클릭이 성공적이었는지 테스트 UI에서 확인 할 수 있을 것임.

- 위 작업까지 마무리한 뒤 스토리북 서버를 시작하면 세 가지 task 상태에 관한 테스트가 생성됨.

<br />

## 상태 구현하기

> 지금까지 스토리북 설정, 스타일 가져오기, 테스트 사례를 구성했음  
> 이제 디자인에 맞게 컴포넌트의 HTML을 구현하는 작업을 빠르게 시작 할 수 있음.

- 컴포넌트는 아직 기본만 갖춘 상태임.
- 디자인을 이룰 수 있는 코드를 적는것으로 시작하겠음.

### components/Task.js 수정

```javascript
import React from "react";

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}
          id={`archiveTask-${id}`}
          aria-label={`archiveTask-${id}`}
        />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span
              className={`icon-star`}
              id={`pinTask-${id}`}
              aria-label={`pinTask-${id}`}
            />
          </a>
        )}
      </div>
    </div>
  );
}
```

- 위의 추가 마크업과 가져온 CSS가 서로 결합되어 UI를 생성함.

<br />

## 데이터 요구 사항 명시하기

> 컴포넌트에 필요한 데이터 형태를 명시하려면 리엑트에서 propTypes를 사용하는 것이 가장 좋음.  
> 자체적 문서화일 뿐만 아니라, 문제를 조기에 발견하는 데 도움이 됨.

### components/Task.js 수정

```javascript
import React from 'react';
+ import PropTypes from 'prop-types';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  // ...
}

+ Task.propTypes = {
+  /** Composition of the task */
+  task: PropTypes.shape({
+    /** Id of the task */
+    id: PropTypes.string.isRequired,
+    /** Title of the task */
+    title: PropTypes.string.isRequired,
+    /** Current state of the task */
+    state: PropTypes.string.isRequired,
+  }),
+  /** Event to change the task to archived */
+  onArchiveTask: PropTypes.func,
+  /** Event to change the task to pinned */
+  onPinTask: PropTypes.func,
+ };
```

- 이제 Task 컴포넌트가 잘못 사용된다면 경고가 나타남.

> 동일한 목적을 달성하는 다른 방법으로는 Typescript같은 Javascript의 타입 시스템을 사용하여 컴포넌트의 속성에 대한 타입을 만드는 것.

## 완성!!

- 지금까지 우리는 서버나 프론트엔드 앱 전체를 실행하지 않고 성공적으로 컴포넌트를 만들었음.
- 다음 단계는 이와 유사한 방법으로 Taskbox 컴포넌트의 남은 부분을 하나씩 만드는 것.
- 독립적인 환경에서 컴포넌트를 제작하는 것은 쉽고 빠름.
- 가능한 모든 상태를 테스트할 수 있기 때문에 버그가 적은 양질의 UI를 제작할 수 있습니다.

## 자동화된 테스트

- 스토리북은 앱의 UI를 만드는 동안 수동으로 테스트할 수 있는 좋은 방법을 제공함.
- 'story'는 앱을 개발하는 동안 Task 컴포넌틍의 외관을 망가뜨리지는 않았는지 확인하는 것을 도와줌.
- 그러나 지금 단계는 완전히 수동적인 프로세스이기 때문에 누군가 각 테스트를 일일이 클릭하여 오류나 경고 없이 렌더링 되는지 살펴봐야 함.

### 📌 스냅샷 테스트

- 스냅샷 테스트는 주어진 입력에 대해 컴포넌트의 구분하기 좋은 출력값을 기록한 다음, 향후 출력값이 변할 때 마다 컴포넌트에 플래그를 지정하는 방식을 말함.
- 이는 새로운 버전의 컴포넌트를 보고 바뀐 부분을 빠르게 확인할 수 있기 때문에 storybook을 보완해 줄 수 있음.

> 스냅샷 테스트가 매번 실패하지 않도록 하려면, 컴포넌트에 전달되는 데이터는 매번 변경되지 않는 것으로 해야 함.  
> 특히 날짜나 무작위로 생성된 값 같은 것들에 주의해야 함.

- [Storyshots 애드온(addon)](https://github.com/storybookjs/storybook/tree/master/addons/storyshots)을 사용하면 각 스토리에 대한 스냅샷이 생성됨.

<br />

#### development dependencies를 추가

```
yarn add -D @storybook/addon-storyshots react-test-renderer
```

#### src/storybook.test.js 생성

```javascript
import initStoryshots from "@storybook/addon-storyshots";
initStoryshots();
```

#### 📌 yarn test 명령어를 실행하여 테스트를 실행

## 정리

Task 스토리를 위한 스냅샷 테스트를 만들어보았음.  
만약 Task의 구현을 변경하게 되면, 변경 사항을 확인하라는 메시지가 표시될 것임.
