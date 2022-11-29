import fetch from "node-fetch";

const BASE_URL = "http://localhost:3001";

const getData = async (url) => {
  const response = await fetch(url).then((res) => res.json());
  return response;
};

console.log(
  "1: 하나의 키로 여러번 조회 가능 \n",
  await getData(`${BASE_URL}/posts?id=1&id=2`)
);

console.log(
  "2: 여러 키를 동시에 조회 가능 \n",
  await getData(`${BASE_URL}/posts?type=string&value=1`)
);

console.log(
  "3: '.'을 활용하여 깊은 속성에 대해 조회 가능 \n",
  await getData(`${BASE_URL}/comments?type.name=strin1g`)
);
