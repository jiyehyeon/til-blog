---
title: "위상정렬 알고리즘"
category: "CS"
date: "2022-11-12"
tags: ["정렬"]
---

## 위상정렬이란?

<b>사이클이 없는 방향그래프</b>를 나열하는 것
=> <b>순서가 정해져 있는 작업</b>을 차례로 수행할 때
ex. 선수과목 나열 등

## 진입차수와 진출차수

팬인-팬아웃 처럼, 어떤 노드에 들어오는 간선의 갯수와 나가는 간선의 갯수를 말한다.
말 그대로 진입하는 갯수, 진출하는 갯수

## 구현 방법

큐를 이용해서 구현한다.

1. 진입차수가 0인 정점을 큐에 삽입
2. 큐에서 노드를 꺼내고 해당 노드와 연결된 모든 간선을 그래프 리스트에서 제거
3. 간선 제거 후 새롭게 진입차수가 0이 된 정점을 큐에 삽입
4. 큐에서 꺼낸 순서가 위상 정렬의 결과가 됨

```python
from collections import deque

def topology_sort(graph):
    result = []
    q = deque()

    # 진입차수 배열 초기화
    in_degree = [0] * (len(graph))

    # 진입차수 배열 계산
    for e_list in graph:
        for e in e_list:
            in_degree[e] += 1

    for index, value in in_degree.items():
        if value is 0:
            q.append(index)

    while q:
        node = q.popleft()
        result.append(node)

        # 해당 원소와 연결된 노드의 진입차수에서 1 감소
        for next_node in graph[node]:
            in_degree[next_node] -= 1
            if in_degree[next_node] is 0:
                q.append(next_node)

    return result

graph = []
result = topology_sort(graph)
```

만약 작동 중, 모든 원소를 방문하기 전에 큐가 빈다면 <b>사이클이 있는<b> 그래프이다.

## 위상 정렬의 특징

1. 위상 정렬에는 답이 여러개 존재할 수 있다.
   동일하게 진입차수가 0이 되는 노드가 생길 수 있기 때문인데
   보통 문제에서 사전 순이라던지 다른 조건을 주는 경우가 많다.

2. 시작점이 존재해야 한다.
   사이클이 존재할 경우, 위상 정렬을 수행할 수 없으므로 루트 정점이 반드시 존재해야 한다.

## 시간복잡도

위상 정렬의 시간복잡도는
V = 노드의 갯수, E = 간선의 갯수라고 할 때 O(V+E)이다.

참고 자료: https://velog.io/@kimdukbae/%EC%9C%84%EC%83%81-%EC%A0%95%EB%A0%AC-Topological-Sorting,
https://www.youtube.com/watch?v=qzfeVeajuyc
