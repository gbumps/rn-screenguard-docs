---
sidebar_position: 12
---

# `useSGScreenRecord` <span class="new-badge">새로움 ✨</span>

:::info 버전
**v2.0.0+부터 사용 가능**
:::

화면 녹화 이벤트를 감지하기 위한 React 훅입니다. v1.x의 `registerScreenRecordingEventListener`를 대체합니다.

**플랫폼 지원:**
- iOS 13+
- Android 15+ (API 35+)

### Core Function

```ts
function useSGScreenRecord(
  listener?: (event: ScreenGuardScreenRecordDataObject) => void
): {
  recordingData: ScreenGuardScreenRecordDataObject | null;
  activationStatus: ScreenGuardHookData | null;
}
```

### 매개변수

| 이름 | 필수 여부 | 타입 | 설명 |
|------|----------|------|-------------|
| listener | 아니요 | function | 녹화 상태가 변경될 때 호출될 선택적 콜백 함수 |

### 반환 값

| 이름 | 타입 | 설명 |
|------|------|-------------|
| recordingData | object \| null | 현재 녹화 상태에 대한 데이터 |
| activationStatus | object \| null | ScreenGuard의 현재 활성화 상태 |

---

#### `recordingData` 객체

```ts
interface ScreenGuardScreenRecordDataObject {
  isRecording?: boolean;
}
```

| 필드 | 타입 | 설명 |
|-------|------|-------------|
| `isRecording` | boolean \| undefined | 화면 녹화가 시작되면 `true`, 중단되면 `false`입니다. 스크린 녹화 이벤트가 발생하기 전까지는 `undefined`입니다. |

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

기본 사용 예제:

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import ScreenGuardModule, { useSGScreenRecord } from 'react-native-screenguard';

function App() {
  const { recordingData, activationStatus } = useSGScreenRecord();

  React.useEffect(() => {
    ScreenGuardModule.initSettings();
  }, []);

  return (
    <View>
      <Text>활성화 여부: {activationStatus?.isActivated ? '예' : '아니요'}</Text>
      <Text>
        녹화 상태: {recordingData?.isRecording ? '🔴 녹화 중...' : '⚪ 녹화 안 함'}
      </Text>
    </View>
  );
}
```

콜백 리스너와 함께 사용하는 예제:

```jsx
import React from 'react';
import { Alert } from 'react-native';
import ScreenGuardModule, { useSGScreenRecord } from 'react-native-screenguard';

function App() {
  useSGScreenRecord((event) => {
    if (event.isRecording) {
      Alert.alert('경고', '화면 녹화가 시작되었습니다!');
    } else {
      Alert.alert('정보', '화면 녹화가 중단되었습니다.');
    }
  });

  // ... 나머지 컴포넌트 코드
}
```

### 참고 사항

- 이 훅은 컴포넌트가 언마운트될 때 구독 해제(cleanup)를 자동으로 처리합니다.

:::note 플랫폼 지원
- **iOS**: iOS 13+에서 전체 지원
- **Android**: Android 15+ (API 35+)에서만 지원됩니다. 이전 Android 버전에서는 이 설정이 무시되며 화면 녹화 감지를 사용할 수 없습니다.
:::

## 데모

{/* TODO: 데모 비디오 추가 예정 */}
