---
sidebar_position: 6
---

# `registerScreenShotEventListener`

:::danger Removed in v2.0.0
This API has been **removed** in v2.0.0. Please use the [`useSGScreenShot`](./use-sg-screenshot.md) hook instead.
:::

---

**v1.x Documentation (for reference only)**

Activate a screenshot detector and receive an event callback with screenshot information (if allowed) after a screenshot has been triggered successfully.

### Usage (v1.x)

```
ScreenGuardModule.registerScreenshotEventListener(true, (data) => {})
```

  If `true`, callback will return a data object containing info of the previous image screenshot.

  If `false`, callback will return null.

### Example code (v1.x)

```js
import ScreenGuardModule from 'react-native-screenguard';

ScreenGuardModule.registerScreenshotEventListener(
  true,
	(data) => {
    if (data != null) {
      console.log('path: ', data.path);
      console.log('name: ', data.name);
      console.log('type: ', data.type);
    }
    ....other code
});
```

:::note Android Note
On **Android**, this will not work while screenshot blocking is activated. This is because the Android platform inherently blocks all standard screenshot attempts, including those from system apps and button combinations (based on device manufacturers, mostly Power button + volume up). 

However, the event might still be received if the user takes a screenshot using a third-party screenshot or screen recording app (such as AZ Screen Recorder, XRecorder, etc.).
:::
