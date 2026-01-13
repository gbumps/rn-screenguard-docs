---
sidebar_position: 0
---

# `initSettings`

:::info Version
**Available from v2.0.0+**
:::

Initialize ScreenGuard with your desired settings. This function **must be called before** using any other ScreenGuard API.

### Parameters

Accepted a JS object with following parameters:

| Name | Required | Type | Default | Description |
|------|----------|------|---------|-------------|
| enableCapture | No | boolean | `false` | Enable screenshot capture event detection |
| enableRecord | No | boolean | `false` | Enable screen recording detection. Supported: iOS 13+, Android 15+ (API 35+) |
| enableContentMultitask | No | boolean | `false` | (iOS only) Enable content visibility in App Switcher |
| displayScreenGuardOverlay | No | boolean | `false` | (iOS only) Display overlay when user captures screen |
| displayScreenguardOverlayAndroid | No | boolean | `true` | (Android only) Display overlay when user returns to app |
| timeAfterResume | No | number | `1000` | Duration (ms) to display overlay after capture/resume |
| getScreenshotPath | No | boolean | `false` | Get screenshot file path after capture |
| limitCaptureEvtCount | No | number | `null` | Limit number of capture events. `null` or `0` = unlimited |
| trackingLog | No | boolean | `false` | Enable activity logging for debugging |

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
  enableCapture: true,
  enableRecord: true,
  displayScreenGuardOverlay: true,
  timeAfterResume: 2000,
  getScreenshotPath: true,
  trackingLog: true,
});
```

:::warning Important
- You must call `initSettings()` before calling any `register*` function, otherwise an error will be thrown.
- On Android, `limitCaptureEvtCount` is not available while screenguard is active (FLAG_SECURE blocks screenshot detection).
- `enableRecord` on Android only works on API 35+ (Android 15+).
:::

## Demo

{/* TODO: Add demo video here */}
