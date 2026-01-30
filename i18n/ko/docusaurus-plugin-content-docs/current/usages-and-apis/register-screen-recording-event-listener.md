---
sidebar_position: 5
---

# `registerScreenRecordingEventListener`

:::danger v2.0.0에서 제거됨
이 API는 v2.0.0에서 **제거**되었습니다. 대신 [`useSGScreenRecord`](./use-sg-screen-record.md) 훅을 사용하세요.
:::

---

**v1.x 문서 (참조용)**

**(iOS 전용)** 화면 녹화 감지기를 활성화하고, 녹화가 완료된 후 이벤트 콜백을 받습니다.

### 사용법 (v1.x)

```
ScreenGuardModule.registerScreenRecordingEventListener(() => {})
```

### 예제 코드 (v1.x)

```js
import ScreenGuardModule from 'react-native-screenguard';

ScreenGuardModule.registerScreenRecordingEventListener(
	(_) => {
	.....화면 녹화 후 원하는 작업을 수행하세요
});
```
