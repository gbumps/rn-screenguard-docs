---
sidebar_position: 10
---

# `getScreenGuardLogs` <span class="new-badge">새로움 ✨</span>

:::info 버전
**v2.0.0+부터 사용 가능**
:::

디버깅 및 모니터링을 위해 ScreenGuard 활동 로그를 가져옵니다.

### 매개변수

| 이름 | 필수 여부 | 타입 | 기본값 | 설명 |
|------|----------|------|---------|-------------|
| maxCount | 아니요 | number | `10` | 가져올 최대 로그 항목 수. 범위: 1 - 1,000,000 |

### 반환 타입

`Promise<Array<ScreenGuardLogEntry> | null>`를 반환합니다.

### ScreenGuardLogEntry

```ts
interface ScreenGuardLogEntry {
  timestamp: number;
  action: string;
  isProtected: boolean;
  method: string;
}
```

| 필드 | 타입 | 설명 |
|-------|------|-------------|
| `timestamp` | number | 로그가 기록된 시점의 Unix 타임스탬프 (밀리초) |
| `action` | string | 수행된 작업. 가능한 값: `'activate'`, `'deactivate'`, `'screenshot_detected'`, `'recording_started'`, `'recording_stopped'` |
| `isProtected` | boolean | 이 로그 항목 기록 시점에 화면이 보호되고 있었는지 여부 |
| `method` | string | 사용된 효과 방법. 가능한 값: `'blur'`, `'image'`, `'color'`, `'none'`, `''` (비활성화 시 빈 문자열) |

### 예제 코드

```js
import ScreenGuardModule from 'react-native-screenguard';

// 추적 기능을 활성화하여 초기화
await ScreenGuardModule.initSettings({
  trackingLog: true,
});

// ... ScreenGuard 작업 수행 ...

// 최근 20개의 로그 항목 가져오기
const logs = await ScreenGuardModule.getScreenGuardLogs(20);

if (logs) {
  logs.forEach((log) => {
    console.log(`[${new Date(log.timestamp).toISOString()}] ${log.action} - 보호됨: ${log.isProtected}`);
  });
}
```

:::warning 중요
- 로그를 제대로 수집하려면 `initSettings()`에서 `trackingLog: true` 설정이 필요합니다.
- `trackingLog`가 `false`인 경우 경고가 표시되고 로그가 비어 있을 수 있습니다.
- 이 함수를 사용하기 전에 반드시 `initSettings()`를 호출해야 합니다.
:::
