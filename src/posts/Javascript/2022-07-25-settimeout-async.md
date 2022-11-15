---
title: "setTimeout 비동기 처리"
category: "Javascript"
date: "2022-07-25"
tags: ["async", "비동기", "sleep"]
---

`async/await` 키워드를 사용해서 `setTimeout`을 동기적으로 실행하려고 했는데,

적용이 되지 않았다.

`setTimeout`은 기본적으로 비동기 함수이기 때문에 원하는 시간동안 모든 진행이 중단되기를 바란다면

`Promise` 안에서 `setTimeout`을 사용해야 한다.

```jsx
let sing = function (lyrics, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(lyrics);
    }, ms);
  });
};

sing("All I want for", 0)
  .then((result) => {
    console.log(result);
    return sing("chritsmas", 500);
  })
  .then((result) => {
    console.log(result);
    return sing("is you", 300);
  })
  .then((result) => console.log(result));
```
