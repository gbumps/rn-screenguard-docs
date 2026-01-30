---
sidebar_position: 11
---

# `useSGScreenShot` <span class="new-badge">새로움 ✨</span>

:::info 버전
**v2.0.0+부터 사용 가능**
:::

스크린샷 이벤트를 감지하기 위한 React 훅입니다. v1.x의 `registerScreenshotEventListener`를 대체합니다.

### Core Function

```ts
function useSGScreenShot(
  listener?: (event: ScreenGuardScreenShotPathDataObject) => void
): {
  screenshotData: ScreenGuardScreenShotPathDataObject | null;
  activationStatus: ScreenGuardHookData | null;
}
```

### 매개변수

| 이름 | 필수 여부 | 타입 | 설명 |
|------|----------|------|-------------|
| listener | 아니요 | function | 각 스크린샷 이벤트 발생 시 호출될 선택적 콜백 함수 |

### 반환 값

| 이름 | 타입 | 설명 |
|------|------|-------------|
| screenshotData | object \| null | 마지막으로 캡처된 스크린샷에 대한 데이터 |
| activationStatus | object \| null | ScreenGuard의 현재 활성화 상태 |

---

#### `screenshotData` 객체

```ts
interface ScreenGuardScreenShotPathDataObject {
  path?: string;
  name?: string;
  type?: string;
}
```

| 필드 | 타입 | 설명 |
|-------|------|-------------|
| `path` | string \| undefined | 캡처된 스크린샷의 전체 파일 경로 (예: `/var/mobile/.../screenshot.png`). `initSettings()`에서 `getScreenshotPath: true`로 설정된 경우에만 사용 가능 |
| `name` | string \| undefined | 스크린샷 파일 이름 (예: `screenshot_2024.png`) |
| `type` | string \| undefined | 파일 확장자/타입 (예: `'png'`, `'jpg'`) |

---

#### `activationStatus` 객체

```ts
interface ScreenGuardHookData {
  method: string;
  isActivated: boolean;
}
```

| 필드 | 타입 | 설명 |
|-------|------|-------------|
| `method` | string | 현재 활성화된 방지 방법. 가능한 값: `'blur'`, `'image'`, `'color'`, `''` (비활성화 시 빈 문자열) |
| `isActivated` | boolean | ScreenGuard가 현재 활성화되어 있으면 `true`, 아니면 `false` |

### 예제 코드

상태(state)와 함께 사용하는 기본 예제:

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import ScreenGuardModule, { useSGScreenShot } from 'react-native-screenguard';

function App() {
  const { screenshotData, activationStatus } = useSGScreenShot();

  React.useEffect(() => {
    // ScreenGuard 초기화
    ScreenGuardModule.initSettings({
      getScreenshotPath: true,
    });
  }, []);

  return (
    <View>
      <Text>활성화 여부: {activationStatus?.isActivated ? '예' : '아니요'}</Text>
      {screenshotData && (
        <Text>마지막 스크린샷: {screenshotData.name}</Text>
      )}
    </View>
  );
}
```

콜백 리스너와 함께 사용하는 예제:

```jsx
import React from 'react';
import { Alert } from 'react-native';
import ScreenGuardModule, { useSGScreenShot } from 'react-native-screenguard';

function App() {
  const { screenshotData } = useSGScreenShot((event) => {
    // 스크린샷이 찍힐 때마다 이 콜백이 실행됩니다.
    Alert.alert('스크린샷 감지!', `파일: ${event.name}`);
  });

  // ... 나머지 컴포넌트 코드
}
```

### 참고 사항

- 이 훅은 컴포넌트가 언마운트될 때 구독 해제(cleanup)를 자동으로 처리합니다.
- 콜백 리스너는 [`initSettings()`](./init-settings.md)의 [`limitCaptureEvtCount`](./init-settings#limitcaptureevtcount) 설정에 따라 트리거됩니다.
  - `null`, `0`: 매번 트리거(제한 없음)
  - `> 0`: 처음 N개의 스크린샷에 대해서만 트리거

:::note Android 제한 사항
Screenguard가 활성화된 동안에는 `FLAG_SECURE`가 표준 스크린샷 시도를 차단하기 때문에 스크린샷 이벤트를 수신하지 못할 수 있습니다. 하지만 서드파티 스크린샷 앱(XRecorder, Screen Recorder 등)의 이벤트는 수신할 수 있습니다.
:::
