---
title: "React Strict Mode"
date: "2022-11-05"
tags: []
---

`create-react--app`으로 react 앱을 생성하고 나면 기본적으로 index.js에 `StrictMode`가 설정되어 있다.
드래그앤드롭 이벤트를 구현하는 도중 먹히질 않아서 찾아보니 이 `StrictMode` 때문에 그렇단다.🫢

그래서 찾아본...

> ## Strict 모드는 왜 있는걸까?

Strict 모드는 렌더링 단계에서 뭔가 불안정한 메서드로 컴포넌트가 동작한다거나,
렌더링 될 때 마다 값이 의도하지 않게 바뀐다거나 하는 현상이 나타나는걸 잡아준다.
우리가 useState나 useMemo, useReducer같은 React Hook을 사용할 때
콘솔에 두번 씩 렌더링되는게 찍히는걸 본적이 있을 것이다. (왜그런지 몰랐었음 🤷🏻‍♀️)
고게 Strict 모드가 하는 역할인데, 일부러 두 번씩 렌더링해서 연산 결과에 문제가 없는지 확인해주는 것!!
<img src="http://file3.instiz.net/data/cached_img/upload_thumb/2020/02/07/13/65ac008109af4a259fd19a494e167786.jpg"/>

더 알아보기: <a href="https://ko.reactjs.org/docs/strict-mode.html">https://ko.reactjs.org/docs/strict-mode.html</a>
