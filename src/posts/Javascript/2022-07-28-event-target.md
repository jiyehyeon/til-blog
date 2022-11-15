---
title: "event에서 target과 currentTarget의 차이"
category: "Javascript"
date: "2022-07-28"
tags: ["eventHandler", "event"]
---

<aside>
💡 `currentTarget` **: 이벤트 리스너가 달린 요소**

</aside>

<aside>
💡 `target` **: 실제 이벤트가 발생한 요소 (클릭이벤트일 경우, 클릭된 대상 = 자식노드가 될 수 있음)**

</aside>

선택지 버튼 클릭시 숨겨진 input을 체크시키는 기능을 구현하는 도중 기능이 제대로 안되는 현상이 발생했다.

선택지 버튼에 event handler를 달아 자식노드인 input에 checked가 true로 설정되도록 구현했었다.

e.target이 무조건 내가 생각한 버튼일거라고 생각했던 것은 나의 착각이었다(!)

버튼 안에 input도 들어있고, label도 겹쳐있었기 때문에 e.target이 label이 되는 경우가 발생했다.

따라서 e.currentTarget으로 이벤트 핸들러를 달은 버튼을 정확히 지정해 주어야 문제를 해결할 수 있었다.

## 참고자료

---

[Event.currentTarget - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)
