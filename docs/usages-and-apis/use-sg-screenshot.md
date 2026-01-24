---
sidebar_position: 11
---

# `useSGScreenShot` <span class="new-badge">NEW ✨</span>

:::info Version
**Available from v2.0.0+**
:::

A React hook for detecting screenshot events. Replaces `registerScreenshotEventListener` from v1.x.

### Signature

```ts
function useSGScreenShot(
  listener?: (event: ScreenGuardScreenShotPathDataObject) => void
): {
  screenshotData: ScreenGuardScreenShotPathDataObject | null;
  activationStatus: ScreenGuardHookData | null;
}
```

### Parameters

| Name | Required | Type | Description |
|------|----------|------|-------------|
| listener | No | function | Optional callback function triggered on each screenshot event |

### Return Values

| Name | Type | Description |
|------|------|-------------|
| screenshotData | object \| null | Data about the last screenshot captured |
| activationStatus | object \| null | Current activation status of ScreenGuard |

---

#### `screenshotData` Object

```ts
interface ScreenGuardScreenShotPathDataObject {
  path?: string;
  name?: string;
  type?: string;
}
```

| Field | Type | Description |
|-------|------|-------------|
| `path` | string \| undefined | Full file path to the captured screenshot (e.g., `/var/mobile/.../screenshot.png`). Only available if `getScreenshotPath: true` in `initSettings()` |
| `name` | string \| undefined | File name of the screenshot (e.g., `screenshot_2024.png`) |
| `type` | string \| undefined | File extension/type (e.g., `'png'`, `'jpg'`) |

---

#### `activationStatus` Object

```ts
interface ScreenGuardHookData {
  method: string;
  isActivated: boolean;
}
```

| Field | Type | Description |
|-------|------|-------------|
| `method` | string | The activation method currently active. Possible values: `'blur'`, `'image'`, `'color'`, `''` (empty when not activated) |
| `isActivated` | boolean | `true` if screenguard is currently activated, `false` otherwise |

### Example code

Basic usage with state:

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import ScreenGuardModule, { useSGScreenShot } from 'react-native-screenguard';

function App() {
  const { screenshotData, activationStatus } = useSGScreenShot();

  React.useEffect(() => {
    // Initialize ScreenGuard
    ScreenGuardModule.initSettings({
      getScreenshotPath: true,
    });
  }, []);

  return (
    <View>
      <Text>Activated: {activationStatus?.isActivated ? 'Yes' : 'No'}</Text>
      {screenshotData && (
        <Text>Last screenshot: {screenshotData.name}</Text>
      )}
    </View>
  );
}
```

With callback listener:

```jsx
import React from 'react';
import { Alert } from 'react-native';
import ScreenGuardModule, { useSGScreenShot } from 'react-native-screenguard';

function App() {
  const { screenshotData } = useSGScreenShot((event) => {
    // This callback fires on every screenshot
    Alert.alert('Screenshot detected!', `File: ${event.name}`);
  });

  // ... rest of component
}
```

### Notes

- The hook automatically handles subscription cleanup when the component unmounts.
- Callback listener will be triggered base on [`limitCaptureEvtCount`](./init-settings#limitcaptureevtcount) in [`initSettings()`](./init-settings.md).
  - `null`, `0`: Trigger every time (unlimited)
  - `> 0`: Only trigger for the first N screenshots

:::note Android Limitation
Screenshot events may not be received while screenguard is active due to `FLAG_SECURE` blocks standard screenshot attempts. However, events may still be received from third-party screenshot apps like (XRecorder, Screen Recorder, etc.)
:::

