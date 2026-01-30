---
sidebar_position: 3
---

# `registerWithImage`

사용자 정의 이미지 뷰와 배경색으로 ScreenGuard를 활성화합니다.

이미지 로딩 및 캐싱 속도를 높이기 위해 **iOS**에서는 [SDWebImage](https://github.com/SDWebImage/SDWebImage)를, **Android**에서는 [Glide](https://github.com/bumptech/glide)를 사용합니다.

:::warning v2.0.0+ 요구 사항
이 함수를 사용하기 전에 반드시 [`initSettings()`](./init-settings.md)를 호출해야 합니다.
:::

### 매개변수

다음 매개변수를 포함하는 JS 객체를 받습니다:

| 이름 | 필수 여부 | 타입 | 기본값 | 설명 |
|------|----------|------|---------|-------------|
| **source** | **필수** | Object | | 이미지 소스. 네트워크 URI 또는 로컬 에셋이 가능합니다. 지원 형식: jpg, jpeg, png, gif, bmp, webp, svg. 사용법: `source: { uri: 'https://...' }` 또는 `source: require('./image.png')` |
| **width** | **필수** | number | | 이미지 너비 |
| **height** | **필수** | number | | 이미지 높이 |
| defaultSource | 아니요 | Object | | `source` 로딩 실패 시 표시할 대체 이미지. 사용법: `defaultSource: require('./fallback.png')` |
| backgroundColor | 아니요 | string | '#000000' | 이미지 뒤의 배경색 |
| alignment | 아니요 | number | 4 (center) | 이미지 위치 (0-8). [정렬 값](#alignment) 참고 |
| top | 아니요 | number | | 사용자 정의 위쪽 위치 |
| left | 아니요 | number | | 사용자 정의 왼쪽 위치 |
| bottom | 아니요 | number | | 사용자 정의 아래쪽 위치 |
| right | 아니요 | number | | 사용자 정의 오른쪽 위치 |
| ~~timeAfterResume~~ | ~~아니요~~ | ~~number~~ | ~~1000~~ | ⚠️ **v2.0.0에서 제거됨** - 대신 [`initSettings()`](./init-settings.md)를 사용하세요. |

> **v2.0.0 마이그레이션:** v1.x에서는 `timeAfterResume`을 `registerWithImage()`에 직접 전달했습니다. v2.0.0부터는 [`initSettings()`](./init-settings.md)에서 설정하세요.

### `alignment`

| 값 | 위치 |
|-------|----------|
| 0 | topLeft |
| 1 | topCenter |
| 2 | topRight |
| 3 | centerLeft |
| 4 | center (기본값) |
| 5 | centerRight |
| 6 | bottomLeft |
| 7 | bottomCenter |
| 8 | bottomRight |

:::note 참고
- alignment 값이 0-8 범위를 벗어나거나 NaN인 경우 예외가 발생합니다.
- alignment와 위치 매개변수(top, left, bottom, right)를 동시에 사용할 수 없습니다. alignment가 먼저 확인됩니다.
- 사용자 정의 위치 매개변수를 사용하려면 alignment를 null로 설정하세요.
:::

### 예제 코드

네트워크 이미지 사용:

```js
import ScreenGuardModule from 'react-native-screenguard';

// 먼저 초기화 (v2.0.0+에서 필수)
await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
});

// 네트워크 이미지 및 대체 이미지 사용
await ScreenGuardModule.registerWithImage({
  height: 150,
  width: 200,
  source: {
    uri: 'https://example.com/image.gif',
  },
  defaultSource: require('./images/fallback.png'),
  backgroundColor: '#1a1a2e',
  alignment: 4, // center
});
```

로컬 이미지 사용:

```js
await ScreenGuardModule.registerWithImage({
  height: 150,
  width: 200,
  source: require('./images/logo.png'),
  backgroundColor: '#1a1a2e',
});
```

사용자 정의 위치 사용:

```js
await ScreenGuardModule.registerWithImage({
  height: 150,
  width: 200,
  source: require('./images/logo.png'),
  backgroundColor: '#1a1a2e',
  alignment: null, // 사용자 정의 위치를 사용하려면 반드시 null로 설정
  top: 50,
  left: 50,
});
```

:::info Android 참고 사항
Android에서 `initSettings()`의 `displayScreenguardOverlayAndroid`가 `false`로 설정된 경우, `registerWithImage()`를 호출하면 자동으로 `registerWithoutEffect()`로 전환됩니다.
:::

## 데모

<div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#007AFF', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>iOS</span>
    <br /><br />
    <iframe width="360" height="640" src="https://player.vimeo.com/video/953622185" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="iOS demo" />
  </div>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#3DDC84', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>Android</span>
    <br /><br />
    <video width="360" height="640" controls src="https://github-production-user-asset-6210df.s3.amazonaws.com/16846439/264429607-dd2d8191-555f-4f84-abf5-6cbcf67dc84b.mp4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
  </div>
</div>
