---
sidebar_position: 4
---

# `registerWithoutEffect`

:::caution v2.0.0에서 사용 중단(Deprecated)
이 함수는 사용이 중단되었습니다. 대신 `displayScreenguardOverlayAndroid: false`와 함께 [`initSettings()`](./init-settings.md)를 사용한 다음, 다른 등록 함수를 호출하세요.
:::

**(Android 전용)** Android에서 시각적 효과(블러, 이미지, 색상) 없이 ScreenGuard를 활성화합니다.

이 기능은 오버레이를 표시하지 않고 스크린샷 및 화면 녹화를 차단하기 위해 `FLAG_SECURE`를 사용합니다.

:::warning v2.0.0+ 요구 사항
이 함수를 사용하기 전에 반드시 [`initSettings()`](./init-settings.md)를 호출해야 합니다.
:::

### 사용법

```js
import ScreenGuardModule from 'react-native-screenguard';

// 먼저 초기화 (v2.0.0+에서 필수)
await ScreenGuardModule.initSettings();

// 시각적 효과 없이 활성화 (Android 전용)
await ScreenGuardModule.registerWithoutEffect();
```

:::info 플랫폼 참고 사항
- 이 함수는 Android에서만 작동합니다.
- iOS에서 이 함수를 호출하면 콘솔 경고가 표시되고 아무 일도 일어나지 않습니다.
- 사용자에게 시각적 오버레이를 표시하지 않고 스크린샷을 차단하고 싶을 때 유용합니다.
:::
