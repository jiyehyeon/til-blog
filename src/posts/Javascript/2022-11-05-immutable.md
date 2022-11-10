---
title: "자바스크립트 불변성"
date: "2022-11-05"
tags: ["Type"]
---

자바스크립트에는 `원시 타입`과 `참조 타입`이 있다.
참조 타입은 알다시피 `배열`과 `객체`처럼 재할당시 원본이 변경되는 타입이고,
나머지 `Number`나 `String` 등등 다른 변수들은 재할당을 하더라도
원본이 유지되는 <strong>"불변성"</strong>을 갖는다.

## 아니, let으로 선언한 변수에 재할당하면 값 바뀌던데?

원본이 바뀐 것이 아니라, 다른 메모리 영역에 새로 할당된 것이다.

<div style="display: flex; justify-content:center;">
<div style="width: 40%;">
<table style="background-color: #F7F7F7; text-align:center; border-radius: 1.2em;">
<thead>
<tr>
<th>Address</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>~</td>
<td>Number</td>
</tr>
<tr>
<td>~</td>
<td>String</td>
</tr>
<tr><td>~</td>
<td>Boolean</td>
</tr>
<tr><td>~</td>
<td>Address</td>
</tr>
</tbody>
</table>
</div>
<div style="width: 40%;">
<table style="background-color: #F7F7F7; text-align:center; border-radius: 1.2em;">
<thead>
<tr>
<th>Address</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>ABCDEFGH</td>
<td>Array</td>
</tr>
<tr>
<td>19ASDF39</td>
<td>Object</td>
</tr>
</tbody>
</table>
</div>
</div>

위처럼, 원시타입들은 콜스택에 저장되고 참조타입은 힙에 저장되는 대신 해당 주소만 콜스택에 저장된다.

## 참조 타입에서 값을 지키는 방법

원본 타입을 변경하지 않는 메소드: 전개연산자, `map`, `filter`, `splice`, `reduce`
원본 데이터를 변경하는 메소드: `splice`, `push`

원본 타입을 변경하지 않는 메소드를 사용하면 된다.