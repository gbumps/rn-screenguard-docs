---
sidebar_position: 0
---

# `initSettings` <span class="new-badge">새로움 ✨</span>

:::info 버전
**v2.0.0+부터 사용 가능**
:::

원하는 설정으로 ScreenGuard를 초기화합니다. 이 함수는 다른 ScreenGuard API를 사용하기 전에 **반드시 호출해야 합니다**.

### 매개변수

다음 매개변수를 포함하는 JS 객체를 받습니다:

| 이름 | 필수 여부 | 타입 | 기본값 |
|------|----------|------|---------|
| [enableCapture](#enablecapture) | 아니요 | boolean | `false` |
| [enableRecord](#enablerecord) | 아니요 | boolean | `false` |
| [enableContentMultitask](#enablecontentmultitask) | 아니요 | boolean | `false` |
| [displayScreenGuardOverlay](#displayscreenguardoverlay) | 아니요 | boolean | `false` |
| [displayScreenguardOverlayAndroid](#displayscreenguardoverlayandroid) | 아니요 | boolean | `true` |
| [timeAfterResume](#timeafterresume) | 아니요 | number | `1000` |
| [getScreenshotPath](#getscreenshotpath) | 아니요 | boolean | `false` |
| [limitCaptureEvtCount](#limitcaptureevtcount) | 아니요 | number | `null` |
| [trackingLog](#trackinglog) | 아니요 | boolean | `false` |

---

#### `enableCapture`

| | |
|---|---|
| **타입** | `boolean` |
| **기본값** | `false` |
| **플랫폼** | iOS, Android |

스크린샷 허용 여부를 설정합니다. 기본값은 `false`(비허용)입니다.

---

#### `enableRecord`

| | |
|---|---|
| **타입** | `boolean` |
| **기본값** | `false` |
| **플랫폼** | iOS 13+, Android 15+ (API 35+) |

화면 녹화 허용 여부를 설정합니다. 기본값은 `false`(비허용)입니다.

:::note Android 제한 사항
Android의 화면 녹화 감지는 **API 35+ (Android 15+)**에서만 지원됩니다. 이전 버전에서는 이 설정이 무시됩니다.
:::

---

#### `enableContentMultitask`

| | |
|---|---|
| **타입** | `boolean` |
| **기본값** | `false` |
| **플랫폼** | iOS 전용 |

`true`로 설정하면 앱 전환기(멀티태스킹 뷰)에서 앱 콘텐츠가 계속 표시됩니다. `false`인 경우 등록 유형(색상, 블러 또는 이미지)에 따라 숨겨지거나 블러 처리됩니다.

---

#### `displayScreenGuardOverlay`

| | | 
|---|---|
| **타입** | `boolean` |
| **기본값** | `false` |
| **플랫폼** | iOS 전용 |

`true`로 설정하면 사용자가 스크린샷을 찍거나 화면을 녹화할 때(녹화가 중단될 때까지) 오버레이를 표시하고, `timeAfterResume` 시간 후에 사라집니다. 오버레이는 등록된 유형(색상, 블러 또는 이미지)과 동일한 스타일을 사용합니다. Screenguard가 활성화된 경우에만 작동합니다.

**참고:** 앱의 기능에 영향을 주지 않는 경우에만 사용하시고, 사용에 따른 책임은 사용자에게 있습니다!

<video width="360" height="640" controls id="player" preload="auto" class="js-player" src="/react-native-screenguard/videos/ios_display_sg_overlay.mov"></video>
---

#### `displayScreenguardOverlayAndroid`

| | |
|---|---|
| **타입** | `boolean` |
| **기본값** | `true` |
| **플랫폼** | Android 전용 |

`true`로 설정하면 사용자가 백그라운드에서 앱으로 돌아올 때 오버레이를 표시합니다. 기본값은 `true`(사용)입니다. Screenguard가 활성화된 경우에만 작동합니다.

<video width="360" height="640" controls id="player" preload="auto" class="js-player" src="/react-native-screenguard/videos/andr_display_sg_overlay.mov"></video>

---

#### `timeAfterResume`

| | |
|---|---|
| **타입** | `number` (밀리초) |
| **기본값** | `1000` |
| **플랫폼** | iOS, Android |

캡처 후(iOS) 또는 백그라운드에서 복귀 후(Android) 오버레이를 표시하는 시간(밀리초)입니다. `displayScreenGuardOverlay` 또는 `displayScreenguardOverlayAndroid`가 `true`여야 합니다.

**예:** 2초 동안 오버레이를 표시하려면 `2000`으로 설정하세요.

---

#### `getScreenshotPath`

| | |
|---|---|
| **타입** | `boolean` |
| **기본값** | `false` |
| **플랫폼** | iOS, Android |

`true`로 설정하면 스크린샷 이벤트 데이터에 캡처된 스크린샷 파일의 경로가 포함됩니다. 이는 [`useSGScreenShot`](use-sg-screenshot.md) 훅의 `screenshotData.path` 속성을 통해 확인할 수 있습니다.

---

#### `limitCaptureEvtCount`

| | |
|---|---|
| **타입** | `number \| null` |
| **기본값** | `null` |
| **플랫폼** | iOS, Android* |

스크린샷 캡처 이벤트 발생 횟수를 제한합니다.
- `null` 또는 `0`: 매번 발생(제한 없음)
- `> 0`: 처음 N개의 스크린샷에 대해서만 발생

:::note Android 제한 사항
Android의 경우 Screenguard가 활성화된 동안(`FLAG_SECURE`가 표준 스크린샷 시도를 차단) 스크린샷 감지가 작동하지 않을 수 있습니다.
:::

`limitCaptureEvtCount` = `3` 테스트 데모:

<div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#007AFF', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>iOS</span>
    <br /><br />
    <video controls width="360" height="640" id="player" preload="auto" class="js-player"  src="/react-native-screenguard/videos/ios_limit_cap_evt_3.mov"></video>
  </div>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#3DDC84', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>Android</span>
    <br /><br />
    <video width="360" height="640" controls id="player" preload="auto" class="js-player" src="/react-native-screenguard/videos/andr_limit_cap_evt_3.mov"></video>
  </div>
</div>

---

#### `trackingLog`

| | |
|---|---|
| **타입** | `boolean` |
| **기본값** | `false` |
| **플랫폼** | iOS, Android |

디버깅을 위해 활동 로깅을 활성화합니다. 활성화하면 ScreenGuard가 모든 이벤트(활성화, 비활성화, 스크린샷 감지 등)를 기록하며, 이는 [`getScreenGuardLogs`](get-screen-guard-logs.md)를 통해 조회할 수 있습니다.

---

### 예제 코드

기본 초기화:

```js
import ScreenGuardModule from 'react-native-screenguard';

// 기본 설정으로 초기화
await ScreenGuardModule.initSettings();
```

사용자 지정 설정 사용:

```js
import ScreenGuardModule from 'react-native-screenguard';

await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
  getScreenshotPath: true,
  trackingLog: true,
});
```
