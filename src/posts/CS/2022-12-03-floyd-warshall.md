---
title: "플로이드 워셜 알고리즘"
category: "CS"
date: "2022-12-03"
tags: ["최단경로", "플로이드워셜", "알고리즘"]
thumbnail: "https://velog.velcdn.com/images/jqdjhy/post/df2162cd-ec47-4a4d-baee-fe15e2a2775b/image.png"
---

다익스트라 알고리즘이 특정 시작 노드에서 나머지 모든 노드에 대한 최단경로를 구하는 알고리즘이라면, 플로이드 워셜 알고리즘은 모든 지점에서부터 다른 모든 지점으로의 최단경로를 구하는 알고리즘이다.
<br><br>
또한 플로이드 워셜은, 다익스트라와는 달리 음의 가중치를 가진 간선도 사용할 수 있다.
<br><br>
플로이드 워셜의 동작 방식은,

어떤 지점 s에서 e로 가는 중간에 거칠 수 있는 노드 k가 있을 때, s에서 e로 직접 가는 것보다 k를 거쳐서 가는게 더 빠를 경우 최단거리값을 갱신해주는 방식이다.
<br><br>
모든 노드들이 중간노드(k)의 역할을 하도록 설정해주어야 하므로 시간복잡도는

반복문을 3번 중첩하여 O(V³)이 된다.
<br><br>

## 플로이드 워셜 알고리즘의 특징

- 모든 노드 쌍에 대한 최단거리를 구할 수 있다.

- 음의 가중치를 가지는 그래프에서도 사용할 수 있다.
  <br><br>

## 시간복잡도

O(V³)
<br><br>

## 구현 코드(Python)

반복문을 3번 중첩시키면 되기 때문에 구현 자체는 어렵지 않다.

단, for문에서 가운데 노드(거쳐가는 노드=여기선 k)가 맨 위에 있어야 한다.

```python
# n은 노드의 갯수, m은 간선의 갯수
def floydwarshall(n, m):
    INF = int(1e9)

    # 2차원 리스트를 만들고, 모든 값을 무한으로 초기화
    graph = [[INF] * (n+1) for _ in range(n+1)]

    # 자기 자신으로 가는 비용은 0으로 초기화
    for a in range(1, n+1):
        graph[a][a] = 0

    # 각 간선에 대한 정보를 입력받아, 그 값으로 초기화
    for _ in range(m):
        s, e, d = map(int, input().split())
        graph[s][e] = d

    # 점화식에 따라 플로이드 워셜 알고리즘을 수행
    for k in range(1, n+1):
        for s in range(1, n+1):
            for e in range(1, n+1):
                graph[s][e] = min(graph[s][e], graph[s][k] + graph[k][e])
```

<br>

> ### 관련 문제
>
> https://www.acmicpc.net/problem/11403

> ### 참고 자료
>
> - 이것이 취업을 위한 코딩테스트다 with 파이썬
> - https://namu.wiki/w/%ED%94%8C%EB%A1%9C%EC%9D%B4%EB%93%9C-%EC%9B%8C%EC%85%9C%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98
