---
title: "남의 회고 탐색하기 - 카카오 기술블로그"
category: "javascript"
date: "2022-11-22"
tags: ["debouncing", "throttle", "treeshaking"]
---

프론트엔드 관련 글들을 탐색하다가, 고개를 끄덕이게 되는 유익한 글을 발견했다.

기술적인 부분 어떤 것들을 신경써야 하는지, 성능 최적화를 위한 몇가지 통찰을 배울 수 있었다.
</br>

## 효율적인 DOM 탐색

\- 바닐라JS로 구현할 때 document로부터 시작하는 DOM탐색은 시간이 걸리므로 가능하면 특정 엘리먼트부터 시작하고, 반복되는 탐색은 생성자를 통해 캐싱할 것

## setInterval과 setTimeout의 차이

\- setInterval은 setTimeout과 달리 딜레이 시간에 콜백 실행시간도 포함된다는 것
</br></br>
그리고 솔직히 말해 처음보거나 정확히 설명하기 어려운 용어들도 있었다.
그래서 배울 겸 정리해본다.

## 디바운스(Debounce)

<img src="https://user-images.githubusercontent.com/66620948/203310918-43b2ff7a-0e00-4df0-9fa9-1442dae2381e.png" width="80%"/>

짧은 간격으로 연속해서 이벤트가 발생하면 서버가 과부하되기 때문에

이를 방지하기 위해 일정 시간 이벤트 핸들러 호출을 막는 기법이다.

```javascript
const debound = (callback, delay) => {
  let timerId;

  return (event) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, event);
  };
};
```

쉽게 말해서, 수강신청 같은걸 할때 여러 학생들이 무한번 다다닥 클릭하게 되면

서버가 터질 수 있기 때문에 콜백함수가 나중에 호출되도록 막는거다.

## 스로틀(Throttle)

<img src="https://user-images.githubusercontent.com/66620948/203308275-50144c02-7661-495e-9ec1-3018145b6c6d.png" width="80%"/>

스로틀은 디바운스를 쓰는 상황과 마찬가지로

연속적으로 이벤트가 발생될 때, 막는 것이 아니라 이벤트 핸들러 호출 간격을 조정하는 기법이다.

```javascript
const throttle = (callback, delay) => {
  let timerId;
  return (event) => {
    if (timerId) return;
    timerId = setTimeout(
      () => {
        callback(event);
        timerId = null;
      },
      delay,
      event
    );
  };
};
```

## 둘의 차이는?

![debounce](https://miro.medium.com/max/466/1*nCPqJNFmS_u4NNgeyMsHxg.gif)

디바운스같은 경우 사용자가 연속클릭한 순간에 setTimeout을 통해 콜백함수를

delay시키는거기 때문에 이미 사용자가 클릭을 다 끝낸 이후에 콜백함수가 호출될 수 있다.
<br><br>
![throttle](https://miro.medium.com/max/466/1*u-vpz-_beUBZ6OhjZKYUNw.gif)

반면 스로틀은 호출될 수 있는 간격을 정해놓고 그 간격 안에서 최대 1번만 호출하는거기 때문에

delay 시간이 지난 후 첫번째 클릭에서는 즉각적으로 반응을 하는거다.

~~가만 생각해봤는데 만약 수강신청 페이지에 디바운스가 적용되어 있다고 한다면~~</br>
~~맘급하게 많이누르면 누를수록 더 늦게 반응하는거자녀..? 😱 끔찍~~</br>
</br>

## 트리쉐이킹(Tree Shaking)

트리 쉐이킹은 사용하지 않는 코드를 제거하는 기법을 말한다.

예를 들어,

```
import arrayUtils from 'array-utils'
```

이렇게 한번에 모든 종속성을 가져올 수도 있지만,

```
import { unique, implode, explode } from 'array-utils'
```

이렇게 필요한 모듈들만 가져오는 방법도 있다.

이러한 방식은 빌드시에 번들 사이즈를 효과적으로 줄여준다고 한다.
<br><br>
다만, 트리쉐이킹을 적용할 수 있는 몇 가지 조건이 있다.

모듈 내에 서로 의존하고 있는 관계가 있는지, 즉 Side-Effect가 있는지 여부를 확인해야 하고,
<a href="https://ui.toast.com/weekly-pick/ko_20180716">
babel-preset-env를 사용할 경우 ES6이 CommonJS로 변환되지 않도록 Babelrc파일 설정을 해줘야 한다.
</a>
<br><br>
ES6은 export, import를 사용해서 모듈을 불러오고 내보내는 모듈 포맷이고,

CommonJS는 exports 및 require를 쓰는 포맷을 말한다.
<br><br>
왜 ES6 포맷이 CommonJS 포맷으로 변경되지 않게 해줘야 하냐,

웹팩4 이상에서 ES6 모듈은 트리쉐이킹이 기본적으로 이루어지지만,

CommonJS로 바뀌어버리면 동작하지 않기 때문이다.
</br></br>

### 왜 이름이 트리쉐이킹?

> <a href="https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking">Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.</a>

애플리케이션을 트리구조로 봤을때, 나무를 흔들어서 죽은 잎들을 떨궈낸다는 의미로 쓰였다고 한다 😃
</br>

> 참고 문서

🔗 [성장할 수밖에 없었던 2022 신입 공채 FE 크루들의 기술 온보딩 이야기](https://tech.kakao.com/2022/03/15/2022-newkrew-onboarding-fe/)

🔗 [Throttle vs Debounce in RxSwift](https://medium.com/fantageek/throttle-vs-debounce-in-rxswift-86f8b303d5d4)

🔗 [트리 쉐이킹으로 자바스크립트 페이로드 줄이기](https://ui.toast.com/weekly-pick/ko_20180716)
