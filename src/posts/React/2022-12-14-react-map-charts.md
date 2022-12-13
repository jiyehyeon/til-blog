---
title: "리액트로 지도 데이터 시각화하기"
category: "React"
date: "2022-12-14"
tags: ["데이터시각화"]
thumbnail: "https://user-images.githubusercontent.com/66620948/207369220-cbb555df-9486-42b3-9612-88c34f0b88f2.png"
---

<img width="100%" alt="%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-12-13_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_11 00 06" src="https://user-images.githubusercontent.com/66620948/207369220-cbb555df-9486-42b3-9612-88c34f0b88f2.png">
<br><br>

## 1. React 시각화 라이브러리 탐색

파이썬에는 다양한 시각화 라이브러리가 있지만 React에서 사용할 수 있는 데이터 시각화 라이브러리는 Leaflet.js, D3.js, Recharts 등으로 손꼽히는 것 같다.
<br><br>
그 중 Recharts는 막대나 바같은 그래프 시각화가 잘되어있고, Leaflet과 D3이 지도 차트를 구현하기 위한 라이브러리이다.
<br><br>
나는 등산로 데이터(위도, 경도, 쓰레기량)를 지도 차트로 시각화 하기 위해

[D3.js](https://d3js.org/)로 지도 차트 생성을 도와주는 react-simple-maps 라이브러리를 사용했다.

[react-simple-maps](https://www.npmjs.com/package/react-simple-maps)는 d3-geo와 geojson데이터를 사용해서 svg 형태의 맵 차트를 생성해주는 라이브러리다.
<br><br>
![Untitled](https://user-images.githubusercontent.com/66620948/207369378-07d25fa3-d432-40f4-b75f-dc5f6ccfc62e.png)

단순히 마커랑 툴팁을 찍기 위해서는 사실 카카오맵이나 구글맵을 커스텀해도 되지만

굳이 이 조합을 선택한 이유는 UI적인 측면에서 커스터마이징이 자유로웠기 때문이다.

카카오맵 같은 경우는 배경 색상이나 내부 지도 색상을 변경할 수 있는 기능은 제공하고 있지 않다.
<br><br>
시각화를 하는 목적이 메인페이지에 인포그래픽처럼 인사이트를 나타내주려고 하는 것이기 때문에,

단순히 지도에 마커를 찍는 것 보다는 나름 비주얼을 신경쓴.. (?) 그림처럼 보여주고 싶었다.
<br><br>

## 2. 데이터 준비

대한민국 지도데이터는 구글링 혹은 공공데이터포털 등에서 쉽게 다운받을 수 있다.

geojson 형태는 구하기 힘든데, shp 형태로 다운받아 웹변환기로 geojson으로 변환할 수 있다.

등산로 데이터 또한 공공데이터포털에서 다운로드 받았고, 백엔드에서 저장해 axios로 위도와 경도 배열을 받았다.
<br><br>

## 3. 구현

### 3-1. 지도 생성

```jsx
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

export const GeographyStyled = styled(Geography)`
  fill: #e2e4e7;
  outline: none;
  stroke: #fff;
  strokewidth: 0.3;
`;

function MapChart() {
  return (
    <ComposableMap
      data-tip=""
      // 지도 투영 방법
      projection="geoAzimuthalEqualArea"
      // 크기, 회전 설정
      projectionConfig={{ scale: 6500, rotate: [-127.6, -36, -11] }}
      width={400}
      height={600}
      style={{
        margin: "50px 0",
        height: "820px",
      }}
    >
      <Geographies geography={"/korea-geojson.json"}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <GeographyStyled key={geo.rsmKey} geography={geo} />
            ))}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
}

export default MapChart;
```

### ComposableMap

react-simple-map의 `ComposableMap`은 기본 `width`, `height`값을 설정해주지 않으면 800x600 사이즈의 svg로 렌더링된다.

`projection` 속성은 어떤 형태로 지도를 투영할지를 나타내는데, 기본값은 둥근 지구 형태이고, `geoAzimuthalEqualArea`를 적용 시 평면 형태로 나타난다.

### GeoGraphies, GeoGraphy

그 안에 `GeoGraphies`를 통해 지도 파일을 렌더링시켜주고,

색상 적용 및 지역구별 unique key 할당을 위해 `GeoGraphy`를 사용한다.

`GeoGraphy`에서는 자동적으로 unique한 값인 `rsmKey`를 반환해준다.

또한, 속성에 `fill`, `stroke`, `strokeWidth` 값을 주어 스타일을 변경할 수 있다.

나는 styled-components를 사용해서 해당 속성을 적용했다.

svg에 스타일 먹일때랑 동일한 느낌으로 해주면 된다.
<br><br>

### 3-2. 지역 이름 표시

```jsx
import { geoCentroid } from "d3-geo";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

export const GeographyStyled = styled(Geography)`
  fill: #e2e4e7;
  outline: none;
  stroke: #fff;
  strokewidth: 0.3;
`;

function MapChart() {
  return (
    <ComposableMap
      data-tip=""
      projection="geoAzimuthalEqualArea"
      projectionConfig={{ scale: 6500, rotate: [-127.6, -36, -11] }}
      width={400}
      height={600}
      style={{
        margin: "50px 0",
        height: "820px",
      }}
    >
      <Geographies geography={"/korea-geojson.json"}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <GeographyStyled key={geo.rsmKey} geography={geo} />
            ))}
            {geographies.map((geo) => {
              let REGION_NAME = geo.properties.CTP_KOR_NM;
              if (REGION_NAME.includes("시")) {
                REGION_NAME = REGION_NAME.substr(0, 2);
              }
              const centroid = geoCentroid(geo);
              return (
                <g key={geo.rsmKey + "-name"}>
                  <Marker coordinates={centroid}>
                    <text
                      y={setPosition(REGION_NAME)}
                      style={{ fontSize: "9px", fill: "gray" }}
                      textAnchor="middle"
                    >
                      {REGION_NAME}
                    </text>
                  </Marker>
                </g>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
}

export default MapChart;
```

geoCentroid는 투영된 geo값의 중심위치를 반환해준다.

저 geo값은 geojson 파일에 있는 geometry 배열의 각 gemotrey값이다.

다운받은 파일에 properties로 이미 지역 이름 등이 정의되어 있기 때문에 이를 사용해 출력해준다.
<br><br>

### 3-3. 마커 구현

```jsx
import React, { useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Tooltip } from "antd";
import { geoCentroid } from "d3-geo";
import { scaleLinear } from "d3-scale";

export const GeographyStyled = styled(Geography)`
  fill: #e2e4e7;
  outline: none;
  stroke: #fff;
  strokewidth: 0.3;
`;

function MapChart({ data }) {
  const popScale = useMemo(() => scaleLinear().domain([15, 89]).range([8, 25]));
  const getColor = (trashVolume) => {
    if (trashVolume >= 60) return "#3b7b2d";
    else if (trashVolume >= 40) return "#67bd4a";
    else if (trashVolume >= 20) return "#a6dd81";
    else return "#e6f4cf";
  };

  return (
    <ComposableMap
      data-tip=""
      // 지도 투영 방법
      projection="geoAzimuthalEqualArea"
      // 크기, 회전 설정
      projectionConfig={{ scale: 6500, rotate: [-127.6, -36, -11] }}
      width={400}
      height={600}
      style={{
        margin: "50px 0",
        height: "820px",
      }}
    >
      <Geographies geography={"/korea-geojson.json"}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <GeographyStyled key={geo.rsmKey} geography={geo} />
            ))}
            {geographies.map((geo) => {
              let REGION_NAME = geo.properties.CTP_KOR_NM;
              if (REGION_NAME.includes("시")) {
                REGION_NAME = REGION_NAME.substr(0, 2);
              }
              const centroid = geoCentroid(geo);
              return (
                <g key={geo.rsmKey + "-name"}>
                  <Marker coordinates={centroid}>
                    <text
                      y={setPosition(REGION_NAME)}
                      style={{ fontSize: "9px", fill: "gray" }}
                      textAnchor="middle"
                    >
                      {REGION_NAME}
                    </text>
                  </Marker>
                </g>
              );
            })}
          </>
        )}
      </Geographies>
      {data.map((elem) => (
        <StyledMarker
          key={elem.id}
          coordinates={[elem.longitude, elem.latitude]}
          onClick={() => {
            setCurrent(elem.id);
          }}
          color={getColor(elem.trash)}
        >
          <Tooltip
            title={`${elem.name}, 
                ${elem.trash}톤`}
          >
            <circle r={popScale(elem.trash)} />
          </Tooltip>
        </StyledMarker>
      ))}
    </ComposableMap>
  );
}

export default MapChart;
```

쓰레기량 데이터를 사용한 마커도 지역 표시할 때와 똑같은 형식으로 구현할 수 있다.
<br><br>
쓰레기량에 따른 버블 크기는 `d3-scale`라이브러리를 사용해 선형 스케일링값을 계산해 주었다.

`domain`에 원본 값의 범위, `range`에 스케일링될 값의 범위를 넣어준다.
<br><br>
`getColor`함수도 생성하여 쓰레기량에 따라 다른 컬러의 버블을 출력하도록 구현했다.
