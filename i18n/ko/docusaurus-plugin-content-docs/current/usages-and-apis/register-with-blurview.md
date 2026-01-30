---
sidebar_position: 2
---

# `registerWithBlurView`

스크린샷/녹화가 감지된 후 블러(흐림) 효과 뷰로 ScreenGuard를 활성화합니다.

Android에서 Blurview는 [Blurry](https://github.com/wasabeef/Blurry)를 사용합니다.

:::warning v2.0.0+ 요구 사항
이 함수를 사용하기 전에 반드시 [`initSettings()`](./init-settings.md)를 호출해야 합니다.
:::

### 매개변수

다음 매개변수를 포함하는 JS 객체를 받습니다:

| 이름            | 필수 여부 | 타입     | 기본값    | 설명                              |
|-----------------|----------|----------|------------------|------------------------------------------|
| radius          | 예      | number   |                  | 블러 반경 값. 설정 가능한 범위는 `[15, 50]`입니다. 15보다 작거나 50보다 크면 경고가 표시되고, 1보다 작거나 NaN인 경우 예외가 발생합니다. |
| ~~timeAfterResume~~ | ~~아니요~~ | ~~number~~ | ~~1000~~ | ⚠️ **v2.0.0에서 제거됨** - 대신 [`initSettings()`](./init-settings.md)를 사용하세요. |

> **v2.0.0 마이그레이션:** v1.x에서는 `timeAfterResume`을 `registerWithBlurView()`에 직접 전달했습니다. v2.0.0부터는 [`initSettings()`](./init-settings.md)에서 설정하세요.

:::tip 블러 반경 권장 사항
블러 반경을 15보다 작게 설정하면 콘텐츠가 여전히 선명하게 보여 효과가 크지 않습니다. 50보다 크게 설정하면 콘텐츠가 너무 뭉개져 블러 처리가 무의미해질 수 있습니다. 따라서 **15에서 50 사이**의 값을 권장합니다.
:::

### 예제 코드

```js
import ScreenGuardModule from 'react-native-screenguard';

// 먼저 초기화 (v2.0.0+에서 필수)
await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
});

// 블러 효과와 함께 활성화
await ScreenGuardModule.registerWithBlurView({
  radius: 35,
});
```

:::info Android 참고 사항
Android에서 `initSettings()`의 `displayScreenguardOverlayAndroid`가 `false`로 설정된 경우, `registerWithBlurView()`를 호출하면 자동으로 `registerWithoutEffect()`로 전환되며 경고가 표시됩니다.
:::

## 데모 

<div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#007AFF', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>iOS</span>
    <br /><br />
    <video width="360" height="640" controls src="https://github-production-user-asset-6210df.s3.amazonaws.com/16846439/246678566-17429686-1bc4-4d5b-aa6c-82616ec8d1c5.mp4" />
  </div>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#3DDC84', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>Android</span>
    <br /><br />
   <video width="360" height="640" controls id="player" preload="auto" class="js-player" src="/react-native-screenguard/videos/andr_blur.mov"></video>
  
  </div>
</div>
