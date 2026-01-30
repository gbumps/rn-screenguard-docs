---
sidebar_position: 5
---

# `unregister`

모든 스크린샷 방지 기능을 비활성화합니다.

:::warning v2.0.0+ 요구 사항
이 함수를 사용하기 전에 반드시 [`initSettings()`](./init-settings.md)를 호출해야 합니다.
:::

## 예제 코드

```js
import ScreenGuardModule from 'react-native-screenguard';

await ScreenGuardModule.unregister();
```

### v2.0.0 변경 사항

v2.0.0+부터는 더 이상 이벤트 리스너를 수동으로 제거할 필요가 없습니다:
- `useSGScreenShot` 훅은 컴포넌트가 언마운트될 때 자동으로 정리됩니다.
- `useSGScreenRecord` 훅은 컴포넌트가 언마운트될 때 자동으로 정리됩니다.

기존의 `removeScreenshotEventListener()` 및 `removeRecordingEventListener()` 함수는 제거되었습니다.
