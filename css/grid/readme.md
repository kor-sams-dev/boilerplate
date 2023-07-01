# CSS Display Grid

CSS의 Display Grid에 대해 공부합니다.

[CSS Layout Master과정 수강](https://nomadcoders.co/css-layout-masterclass)

## 챕터 소개

### 1. CSS Grid Basic Concepts

- Grid 사용의 기초 방법에 대해 소개합니다.
  - Grid Column과 Grid Row의 크기 선언 방식
  - gap을 이용한 간격 조절
  - 자동으로 늘어날 수 있는 Row

### 2. Grid Template Areas

- Grid Layout에 grid-template-areas를 이용하여 레이아웃을 구성하는 방법에 대해 소개합니다.
  - grid-template-areas를 이용하여 레이아웃을 구성하는 방법
  - grid-area를 이용하여 각 영역에 이름을 부여하는 방법
  - grid-template-columns와 grid-template-rows에 크기를 지정할 수 있는 여러 방법
    - auto를 사용하여 사용할 수 있는 최대 영역을 사용하는 방법
    - repeat을 사용하여 반복되는 영역을 지정하는 방법

### 3. Rows and Columns

- 기초 이론에 대해 학습
  - grid-(column or row)-start와 grid-(column or row)-end를 이용하여 영역을 지정하는 방법
    - 시작 지점과 끝 지점을 layout의 칸 기준이 아니라 grid의 line기준으로 지정함.
    - 해당 방식을 사용하면 grid area의 이름을 사용하지 않고도 영역을 지정할 수 있음.

### 4. Shortcuts

- grid-(column or row)-start와 grid-(column or row)-end를 단축해서 사용하는 방법
  - grid-(column or row)를 이용하여 시작과 끝을 한번에 지정하는 방법
    - grid-(column or row): start / end
- 끝 지점을 명시하는 방법
  - end를 마이너스 값으로 지정하면 끝 지점으로부터 역으로 카운트함.
- span을 사용하여 몇개의 칸을 차지하는지 지정하는 방법
  - grid-(column or row): span (칸 수)
  - 시작지점을 지정하지 않으면 자동으로 grid가 적절한 row를 시작지점으로 지정함.

### 5. Line Naming

- grid-template-columns와 grid-template-rows에 이름을 부여하는 방법
  - [column or row name] (column or row size)
    - ex: [header-start] 150px [header-end] 100px
  - repeat과도 함께 사용 가능.
    - ex: repeat(5, 100px [auto-row])

### 6. Grid Template

### 7. Place Items

### 8. Place Content

### 9. Auto Columns and Rows

### 10. minmax

### 11. auto-fit and auto-fill

### 12. min-content, max-content
