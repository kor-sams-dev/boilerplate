# json-server 라이브러리

[공식 문서](https://github.com/typicode/json-server#routes)

## Good to know that

1. `POST`, `PUT`, `PATCH`, `DELETE` 요청은 `lowdb`라이브러리를 사용하여 편하게 할 수 있다.
2. body JSON은 object 형식이여야 한다.

   `ex: {"name": "Foobar"}`

3. `id`값은 변경할 수 없다. `PUT`, `PATCH` 요청의 `id`값은 무시된다. `POST` 요청에 설정된 값만 적용되지만 아직 사용되지 않은 경우에만 적용된다.
4. POST, PUT, PATCH 요청 시 header에 `Content-Type: application/json` <- 를 포함하여야 한다. 포함하지 않은 경우 2xx state 코드를 반환하지만 데이터는 변환되지 않는다.

---

## START

```
// 실행에 필요한 라이브러리 설치
yarn install

// json server 실행
yarn start:server-start

// json-server test script

// 1. 일반 GET Method
yarn test:start-get

// 2. filter GET Method
yarn test:start-filter

```

---

## Routes

기본적으로는 `db.json`파일을 따라 기본 경로를 설정되며, `--routes`를 사용하여 다른 경로를 추가 할 수 있다.

### Filter

- query params에 key=value형식으로 필터링이 가능함.
- 같은 키로 중복 필터가 가능함.
- `.`을 활용하여 깊은 요소에 대해 접근이 가능함 (확인 필요)
