import fetch from "node-fetch";

// 전체르 다 가져오는 경우
fetch("http://localhost:3001/posts")
  .then((res) => res.json())
  .then(console.log);

// 알아서 id를 매핑하여 path param의 역할을 함
fetch("http://localhost:3001/posts/2")
  .then((res) => res.json())
  .then(console.log);
