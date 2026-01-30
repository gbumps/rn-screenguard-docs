---
sidebar_position: 6
---

# `registerScreenShotEventListener`

:::danger v2.0.0에서 제거됨
이 API는 v2.0.0에서 **제거**되었습니다. 대신 [`useSGScreenShot`](./use-sg-screenshot.md) 훅을 사용하세요.
:::

---

**v1.x 문서 (참조용)**

스크린샷 감지기를 활성화하고, 스크린샷이 성공적으로 트리거된 후 스크린샷 정보(허용된 경우)와 함께 이벤트 콜백을 받습니다.

### 사용법 (v1.x)

```
ScreenGuardModule.registerScreenshotEventListener(true, (data) => {})
```

  `true`인 경우, 콜백은 이전 스크린샷 이미지 정보를 포함하는 데이터 객체를 반환합니다.

  `false`인 경우, 콜백은 null을 반환합니다.

### 예제 코드 (v1.x)

```js
import ScreenGuardModule from 'react-native-screenguard';

ScreenGuardModule.registerScreenshotEventListener(
  true,
	(data) => {
    if (data != null) {
      console.log('경로: ', data.path);
      console.log('이름: ', data.name);
      console.log('타입: ', data.type);
    }
    ....기타 코드
});
```

:::note Android 참고 사항
**Android**에서는 스크린샷 차단이 활성화된 동안 이 기능이 작동하지 않습니다. 이는 Android 플랫폼이 시스템 앱 및 버튼 조합(장치 제조업체에 따라 다르지만 주로 전원 버튼 + 볼륨 작게 버튼)을 포함한 모든 표준 스크린샷 시도를 원천적으로 차단하기 때문입니다.

그러나 사용자가 서드파티 스크린샷 또는 화면 녹화 앱(예: AZ Screen Recorder, XRecorder 등)을 사용하여 스크린샷을 찍는 경우에는 이벤트를 계속 받을 수 있습니다.
:::
