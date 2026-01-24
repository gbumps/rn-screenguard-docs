---
sidebar_position: 0
---

# `initSettings` <span class="new-badge">NEW ✨</span>

:::info Version
**Available from v2.0.0+**
:::

Initialize ScreenGuard with your desired settings. This function **must be called before** using any other ScreenGuard API.

### Parameters

Accepted a JS object with following parameters:

| Name | Required | Type | Default |
|------|----------|------|---------|
| [enableCapture](#enablecapture) | No | boolean | `false` |
| [enableRecord](#enablerecord) | No | boolean | `false` |
| [enableContentMultitask](#enablecontentmultitask) | No | boolean | `false` |
| [displayScreenGuardOverlay](#displayscreenguardoverlay) | No | boolean | `false` |
| [displayScreenguardOverlayAndroid](#displayscreenguardoverlayandroid) | No | boolean | `true` |
| [timeAfterResume](#timeafterresume) | No | number | `1000` |
| [getScreenshotPath](#getscreenshotpath) | No | boolean | `false` |
| [limitCaptureEvtCount](#limitcaptureevtcount) | No | number | `null` |
| [trackingLog](#trackinglog) | No | boolean | `false` |

---

#### `enableCapture`

| | |
|---|---|
| **Type** | `boolean` |
| **Default** | `false` |
| **Platform** | iOS, Android |

Enable to allow screenshot or disable it. Default is `false` (disabled).

---

#### `enableRecord`

| | |
|---|---|
| **Type** | `boolean` |
| **Default** | `false` |
| **Platform** | iOS 13+, Android 15+ (API 35+) |

Enable to allow screen recording or disable it. Default is `false` (disabled).

:::note Android limitation
Screen recording detection on Android is only available on **API 35+ (Android 15+)**. On older versions, this setting is ignored.
:::

---

#### `enableContentMultitask`

| | |
|---|---|
| **Type** | `boolean` |
| **Default** | `false` |
| **Platform** | iOS only |

When set to `true`, your app content will remain visible in the App Switcher (multitasking view), and hidden/blurred based on the register type (color, blur, or image) when `false`.

---

#### `displayScreenGuardOverlay`

| | | 
|---|---|
| **Type** | `boolean` |
| **Default** | `false` |
| **Platform** | iOS only |

When set to `true`, displays an overlay when user screenshot or screen record (show until user stop recording) and disapears after a duration of `timeAfterResume`. The overlay uses the same style as your registered (color, blur, or image). Only works when Screenguard is active.

**Note:** Use if is not affecting your app's functionality, and use at your own risk!

<video width="360" height="640" controls id="player" preload="auto" class="js-player" poster="https://cdn.jumpshare.com/preview/0zrtYizxZDQH444cpZRYPA6lEBrRdMWM7oC82h-xQ-t-dByliuK6qz4u9SWe4-8_XclBON8lcktbCo6nbddhTr2rlJGLHQA-Ab4EKoVOOcc" src="https://cdn.jumpshare.com/preview/0zrtYizxZDQH444cpZRYPA6lEBrRdMWM7oC82h-xQ-vbFQL-Vc8uvf9JPngOQjXjf5jqyer5k45p_av2XaQunsZ17lneJT6TiOmdE_GS0QE"></video>
---

#### `displayScreenguardOverlayAndroid`

| | |
|---|---|
| **Type** | `boolean` |
| **Default** | `true` |
| **Platform** | Android only |

When set to `true`, displays an overlay when user returns to the app from background. Default is `true` (enabled). Only works when Screenguard is active.

<video width="360" height="640" controls id="player" preload="auto" class="js-player" poster="https://cdn.jumpshare.com/preview/1ByrrspdiZXumB76Vpmfk093c6MHHbCqRqZgf3PUBmTmSPSRs_GcaI7ElflUSwr8XclBON8lcktbCo6nbddhTk103C5Zg2ber4mOrZftlhs" src="https://cdn.jumpshare.com/preview/1ByrrspdiZXumB76Vpmfk093c6MHHbCqRqZgf3PUBmSijwkJVLHjOyBh5HMlJ8G-5sfTP66r56r0rITsUkISV7kMw8G-JIzP9J4Ed_uoc4E"></video>

---

#### `timeAfterResume`

| | |
|---|---|
| **Type** | `number` (milliseconds) |
| **Default** | `1000` |
| **Platform** | iOS, Android |

Duration in milliseconds to display the overlay after capture (iOS) or after returning from background (Android). Required `displayScreenGuardOverlay` or `displayScreenguardOverlayAndroid` to be `true`.

**Example:** Set to `2000` for a 2-second overlay display.

---

#### `getScreenshotPath`

| | |
|---|---|
| **Type** | `boolean` |
| **Default** | `false` |
| **Platform** | iOS, Android |

When set to `true`, the screenshot event data will include the file path to the captured screenshot file, can be retrieved from [`useSGScreenShot`](./use-sg-screenshot.md) hook's `screenshotData.path` property.

---

#### `limitCaptureEvtCount`

| | |
|---|---|
| **Type** | `number \| null` |
| **Default** | `null` |
| **Platform** | iOS, Android* |

Limit the number of screenshot capture events triggered.
- `null` or `0`: Trigger every time (unlimited)
- `> 0`: Only trigger for the first N screenshots

:::note Android limitation
On Android, screenshot detection may not work while screenguard is active (`FLAG_SECURE` blocks standard screenshot attempts).
:::

Demo testing with `limitCaptureEvtCount` = `3`:

<div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#007AFF', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>iOS</span>
    <br /><br />
    <video controls width="360" height="640" id="player" preload="auto" class="js-player" poster="https://cdn.jumpshare.com/preview/Gi3kzqByN5mQaw26NCqA53D5RDDqzmaK5lPLQJ04l-XuddpLFjIMCcmMJVHNYEP2XclBON8lcktbCo6nbddhTts8ipSTHh3ISxMG0i0Z02I" src="https://cdn.jumpshare.com/preview/Gi3kzqByN5mQaw26NCqA53D5RDDqzmaK5lPLQJ04l-VmOulyhaDsJ2fJsdmg3Y1F_bS1sW5PC4IYfQebwM8KttjaTy4xkZGjsNkGpeazdj4"></video>
  </div>
  <div style={{textAlign: 'center'}}>
    <span style={{backgroundColor: '#3DDC84', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold'}}>Android</span>
    <br /><br />
    <video width="360" height="640" controls id="player" preload="auto" class="js-player" poster="https://cdn.jumpshare.com/preview/Nn3nWIY-PUU3Y8T1EDYfnynir1LK_x6HWUIoMjKduZnU4tCLwwJH9EuVsz4_Qe1GXclBON8lcktbCo6nbddhThJ8_HpSLaNYqCQX33lEXkQ" src="https://cdn.jumpshare.com/preview/Nn3nWIY-PUU3Y8T1EDYfnynir1LK_x6HWUIoMjKduZmv7VIxuG6y23hKO4cx1cZNOTE4q7e8427gAZcUPjPnBxM5xNqrhAiOXXj9K3-MbT8"></video>
  </div>
</div>



---

#### `trackingLog`

| | |
|---|---|
| **Type** | `boolean` |
| **Default** | `false` |
| **Platform** | iOS, Android |

Enable activity logging for debugging purposes. When enabled, ScreenGuard will record all events (activate, deactivate, screenshot detected, etc.), can be retrieved from [`getScreenGuardLogs`](./get-screen-guard-logs.md).

---

### Example code

Basic initialization:

```js
import ScreenGuardModule from 'react-native-screenguard';

// Initialize with default settings
await ScreenGuardModule.initSettings();
```

With custom settings:

```js
import ScreenGuardModule from 'react-native-screenguard';

await ScreenGuardModule.initSettings({
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
  getScreenshotPath: true,
  trackingLog: true,
});
```